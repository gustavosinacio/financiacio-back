import * as http from "http";

const server = http.createServer((req, res) => {
  console.log("Incoming request");
  console.log(req);

  let body = "";

  req.on("data", (chunk) => {
    body += chunk;
  });

  req.on("end", () => {
    res.end(body);
  });
});

server.listen(3333);
