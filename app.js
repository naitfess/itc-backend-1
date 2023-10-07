const http = require("http");
const url = require("url");
const fs = require("fs");
const {
  handleHomePage,
  handleUsers,
  handleNotFound,
  handleMethodNotAllowed,
  handleError,
} = require("./handlerRoutes.js");

//let homePage;
const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    //mengekstrak url dari request
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;

    if (pathname === "/") {
      try {
        handleHomePage(req, res);
      } catch (err) {
        console.log(err.message);
        handleError(req, res);
      }
    } else if (pathname === "/users") {
      try {
        handleUsers(req, res);
      } catch (err) {
        handleError(req, res);
      }
    } else {
      try {
        handleNotFound(req, res);
      } catch (err) {
        handleError(req, res);
      }
    }
  } else {
    handleMethodNotAllowed(req, res);
  }
});

const port = 3000;

server.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});
