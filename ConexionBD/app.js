const express = require("express");
const app = express();
const router = require("./Routes/routes");

app.use("/", router);

app.listen(3200);
