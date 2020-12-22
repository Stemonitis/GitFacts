const express = require("express");
const server = express();
const volleyball = require("volleyball");

server.use(volleyball);

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`now listening on port ${port}`);
});
