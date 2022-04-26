import express from 'express';
// import { getRandom } from '../../../controllers/api.controller.js';
import { fork } from 'child_process';

const randomRoutes = express.Router();

randomRoutes.get('/', (req, res) => {
  const { cant } = req.query;
  const server = fork("./controllers/random.js");
  server.send("start");
  server.on("error", (data) => {
    console.log("error: ", data);
  });
  server.on("data", (data) => {
    console.log("message: ", data);
    res.send("ok");
  });
  // getRandom(res, cant);
});

export default randomRoutes;