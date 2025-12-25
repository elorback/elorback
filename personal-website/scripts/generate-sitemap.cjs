const { SitemapStream, streamToPromise } = require("sitemap");
const { createWriteStream } = require("fs");
const path = require("path");

const sitemap = new SitemapStream({ hostname: "https://elorback.pages.dev" });

const routes = ["/", "/about", "/contact"];

routes.forEach((url) => sitemap.write({ url }));

sitemap.end();

streamToPromise(sitemap).then((sm) =>
  createWriteStream(path.join(__dirname, "../public/sitemap.xml")).write(sm)
);
