const fs = require("fs");
const moment = require("moment");
const [owner, repo] = process.env.GITHUB_REPOSITORY.split("/")

fs.writeFileSync(
  "./pages/index.md",
  `\n* [${moment().format("DD-MM-YYYY")}](https://${owner}.github.io/${repo}/${process.env.FOLDER_NAME}/ManifestPlus.html)`,
  { flag: "a" }
);
