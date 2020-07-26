import axios from "axios";

export default async function () {
  const res = await axios.get<string>("https://myanimelist.net/about.php");

  const csrf_token = (() => {
    const m = res.data.match(
      /<meta name=('|")csrf_token('|") content=('|")[\S]*('|")>/
    );

    if (m != null) {
      if (m.length > 0) {
        const meta = m[0].trim().replace(/ /g, "").replace(/'/g, `"`);

        if (meta.includes("csrf_token") && meta.includes(`content="`)) {
          const split1 = meta.split(`content="`);

          if (split1.length == 2) {
            const split2 = split1[1].split(`"`);
            if (split2.length == 2) {
              return split2[0];
            }
          }
        }
      }
    }

    return null;
  })();

  const { MALSESSIONID, MALHLOGSESSID } = (() => {
    const cookiesHeader: string[] | null = res.headers["set-cookie"];

    if (cookiesHeader) {
      const cookies = cookiesHeader.map((cookie) =>
        cookie.split(";")[0].split("=")
      );

      const MALSESSION = cookies.find((cookie) => cookie[0] == "MALSESSIONID");
      const MALHLOGSESS = cookies.find(
        (cookie) => cookie[0] == "MALHLOGSESSID"
      );

      return {
        MALSESSIONID: MALSESSION ? MALSESSION[1] : null,
        MALHLOGSESSID: MALHLOGSESS ? MALHLOGSESS[1] : null,
      };
    } else {
      return {
        MALSESSIONID: null,
        MALHLOGSESSID: null,
      };
    }
  })();

  return {
    csrf_token,
    MALSESSIONID,
    MALHLOGSESSID,
  };
}
