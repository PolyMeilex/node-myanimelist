import * as gulp from "gulp";
import { emptydir } from "fs-nextra";
import * as ts from "gulp-typescript";
import * as sourcemaps from "gulp-sourcemaps";
import * as merge from "merge2";

const project = ts.createProject("tsconfig.json");

async function build() {
  const result = project.src().pipe(sourcemaps.init()).pipe(project());

  return merge([
    result.dts.pipe(gulp.dest("typings")),
    result.js
      .pipe(sourcemaps.write(".", { sourceRoot: "../src" }))
      .pipe(gulp.dest("dist")),
  ]);
}

gulp.task("build", async () => {
  console.log("\x1b[33m %s \x1b[0m", "Building...");
  await Promise.all([emptydir("dist"), emptydir("typings")]);
  await build();
  console.log("\x1b[32m %s \x1b[0m", "Build done!");
});

gulp.task("dev", async () => {
  console.log("\x1b[33m %s \x1b[0m", "Building...");
  await Promise.all([emptydir("dist"), emptydir("typings")]);
  await build();
  console.log("\x1b[32m %s \x1b[0m", "Build done!");

  await gulp.watch(["src/**/*.ts"], async (cb) => {
    console.log("\x1b[33m %s \x1b[0m", "Building...");

    try {
      await build();
      console.log("\x1b[32m %s \x1b[0m", "Build done!");
    } catch (e) {
      console.error(e);
    }

    cb();
  });
});
