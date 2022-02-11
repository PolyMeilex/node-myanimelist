import json from "./api-docs.json";
const schemas = json.components.schemas;

type Node =
  | {
      type: "allOf";
      nodes: Node[];
    }
  | {
      type: "anyOf";
      nodes: Node[];
    }
  | {
      type: "object";
      properties: { [key: string]: Node };
    }
  | {
      type: "array";
      items: Node;
    }
  | {
      type: "ref";
      ref: string;
    }
  | { type: "string" }
  | { type: "integer" }
  | { type: "boolean" };

class Schema {
  name: string;
  node: Node;

  constructor(key: string, node: Node) {
    this.name = toUpperCamelCase(key);
    this.node = node;
  }
}

class Generator {
  map: { [ref: string]: Schema } = {};
}

const generator = new Generator();

function toUpperCamelCase(name: string): string {
  const text = name.replace(/[-_\s.]+(.)?/g, (_, c) =>
    c ? c.toUpperCase() : ""
  );
  return text.substring(0, 1).toUpperCase() + text.substring(1);
}

function refToName(ref: string): string {
  const split = ref.split("/");
  return toUpperCamelCase(split[split.length - 1]);
}

function readNode(root: string, elm: any): Node {
  let allOf: any[] = elm["allOf"];
  let anyOf: any[] = elm["anyOf"];
  let ref: string | undefined = elm["$ref"];

  if (ref) {
    return {
      type: "ref",
      ref,
    };
  } else if (allOf) {
    const nodes: Node[] = allOf.map((elm) => readNode(root, elm));
    return {
      type: "allOf",
      nodes,
    };
  } else if (anyOf) {
    const nodes: Node[] = anyOf.map((elm) => readNode(root, elm));
    return {
      type: "anyOf",
      nodes,
    };
  } else {
    let type = elm["type"];

    if (type) {
      if (type === "object") {
        const properties: { [key: string]: Node } = {};

        let elm_props = elm.properties ? elm.properties : {};
        Object.entries(elm_props).forEach(([key, elm]) => {
          properties[key] = readNode(root + "/" + key, elm);
        });

        return {
          type: "object",
          properties,
        };
      } else if (type === "array") {
        return {
          type: "array",
          items: readNode(root, elm.items),
        };
      } else if (type === "string" || type === "String") {
        return {
          type: "string",
        };
      } else if (type === "integer" || type === "number") {
        return {
          type: "integer",
        };
      } else if (type === "boolean") {
        return {
          type: "boolean",
        };
      }
    }
  }

  throw Error(root);
}

Object.entries(schemas).forEach(([key, elm]: any) => {
  const schema = new Schema(key, readNode(key, elm));

  generator.map[key] = schema;
});

function nodeToTs(root: string, node: Node): string {
  if (node == null) {
    console.log(root, node);
  }
  switch (node.type) {
    case "allOf":
      return node.nodes.map((node) => nodeToTs(root, node)).join("&");
    case "anyOf":
      return node.nodes.map((node) => nodeToTs(root, node)).join("|");
    case "object":
      let array_mode: string | null = null;

      let props = Object.entries(node.properties).map(([key, node]) => {
        // Definition is broken look at clubs relations for example
        if (key.length == 0) {
          array_mode = nodeToTs(root + "/" + key, node);
        }

        let optional =
          node.type !== "object" &&
          node.type !== "array" &&
          node.type !== "ref" &&
          key !== "score";
        return `${key}${optional ? "?" : ""}: ${nodeToTs(
          root + "/" + key,
          node
        )},`;
      });

      if (array_mode) {
        return array_mode;
      } else {
        return `{${props.join("\n")}}`;
      }
    case "array":
      return `(${nodeToTs(root, node.items)})[]`;
    case "ref":
      return refToName(node.ref);
    case "string":
      return "string";
    case "integer":
      return "number";
    case "boolean":
      return "boolean";
    default:
      throw Error("Unknown node");
      break;
  }
}

function generate() {
  let map = generator.map;

  Object.entries(map).forEach(([key, schema]) => {
    const typeAlias = `
    export type ${schema.name} = ${nodeToTs(schema.name, schema.node)};
    `;
    console.log(typeAlias);
  });
}

generate();
