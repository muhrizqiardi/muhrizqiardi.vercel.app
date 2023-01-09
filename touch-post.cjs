const fs = require("fs");
const path = require("node:path");

const slug = process.argv.slice(-2)[0];
let directory = path.join(process.argv.slice(-1)[0]);

function errorMsgGenerator(fileName) {
  return `Error: file under the name of 

  ${fileName}    

already exists`;
}

const fileContentTemplate = (title = "", slug = "") =>
  `---
title: "${title}"
date: ${new Date().toISOString()}
author: ""
excerpt: ""
coverImageSrc: ""
slug: "${slug}"
---
`;

function touchPost(title = "", directory = ".") {
  try {
    const year = new Date().getFullYear();
    const month = (new Date().getMonth() + 1).toString().padStart(2, "0");
    const date = new Date().getDate().toString().padStart(2, "0");
    const hour = new Date().getHours().toString().padStart(2, "0");
    const minute = new Date().getMinutes().toString().padStart(2, "0");
    const slug = title.replace(/[^A-Za-z0-9]+/g, "-").toLowerCase();

    const fileName = `${year}-${month}-${date}-${hour}-${minute}-${slug}.md`;

    if (fs.existsSync(fileName)) console.error(errorMsgGenerator(fileName));

    const openedFile = fs.openSync(path.join(directory, fileName), "w");

    fs.writeFileSync(
      path.join(directory, fileName),
      fileContentTemplate(title, slug)
    );

    fs.closeSync(openedFile);
  } catch (error) {
    console.error(error);
  }
}

touchPost(slug, directory);
