const fs = require("fs");
const moment = require("moment");

fs.writeFileSync(
  "./pages/index.html",
  `<li><a href="https://github.com/${process.env.GITHUB_REPOSITORY}/blob/gh-pages/${process.env.FOLDER_NAME}/wiki-article.md">${moment().format("DD-MM-YYYY")}</a></li>`,
  { flag: "a" }
);
