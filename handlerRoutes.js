const fs = require("fs");
const { readFileSync } = require("fs");

//mengambil file index.html
const homePage = readFileSync("./index.html");

function handleHomePage(req, res) {
  //menentukan tipe response body
  res.setHeader("Content-Type", "text/html");

  //memberikan status code pada response
  res.writeHead(200);

  //memberikan data pada response body dan mengakhiri response
  res.end(homePage);
}

function handleUsers(req, res) {
  const users = require("./dataUsers.js");

  //menentukan tipe response body
  res.setHeader("Content-Type", "application/json");

  //memberikan status code pada response
  res.writeHead(200);

  //memberikan data pada response body dan mengakhiri response
  res.end(JSON.stringify(users));
}

function handleNotFound(req, res) {
  const error = {
    status: "Not Found!!!",
    message: "Resource Not Found",
  };
  //menentukan tipe response body
  res.setHeader("Content-Type", "application/json");

  //memberikan status code pada response
  res.writeHead(404);

  //memberikan data pada response body dan mengakhiri response
  res.end(JSON.stringify(error));
}

function handleMethodNotAllowed(req, res) {
  const error = {
    status: "Tidak Diizinkan!!!",
    message: "Metode HTTP tidak diizinkan.",
  };
  //menentukan tipe response body
  res.setHeader("Content-Type", "application/json");

  //memberikan status code pada response
  res.writeHead(405);

  //memberikan data pada response body dan mengakhiri response
  res.end(JSON.stringify(error));
}

function handleError(req, res) {
  const error = {
    status: "server error!!!",
    message: "Terjadi kesalahan dalam server.",
  };
  //menentukan tipe response body
  res.setHeader("Content-Type", "application/json");

  //memberikan status code pada response
  res.writeHead(500);

  //memberikan data pada response body dan mengakhiri response
  res.end(JSON.stringify(error));
}

module.exports = {
  handleHomePage,
  handleUsers,
  handleNotFound,
  handleMethodNotAllowed,
  handleError,
};
