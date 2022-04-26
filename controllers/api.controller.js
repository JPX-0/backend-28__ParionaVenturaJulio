// import { fork } from 'child_process';
// import path from "path";
// import { fileURLToPath } from 'url';

// const __dirname = path.dirname(fileURLToPath(import.meta.url))

// const getRandom = (res, cant) => {
//   // const count = fork(path.resolve(__dirname, "../subprocess/random.js"));
//   const server = fork("./controllers/random.js");
//   server.send("start");
//   // server.stdout.on("data", (data) => {
//   //   console.log("stdout: ", data);
//   // });
//   // server.stderr.on("data", (data) => {
//   //   console.log("stderr: ", data);
//   // });
//   server.on("error", (data) => {
//     console.log("error: ", data);
//   });
//   server.on("message", (data) => {
//     console.log("message: ", data);
//     res.send("ok");
//   });
// }

// export { getRandom };