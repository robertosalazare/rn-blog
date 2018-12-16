let express = require("express");
let app = express();
let path = __dirname + '/views';

app.use(express.static(__dirname + '/public'));

app.use((req,res,next) => {
  console.log("/" + req.method);
  next();
});

app.get("/",(req,res) => {
  res.sendFile(path + "/index.html");
});

app.get("/age-gender",(req,res) => {
  res.sendFile(path + "/age-gender.html");
});

app.get("/cards-generation",(req,res) => {
  res.sendFile(path + "/cards-generation.html");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Live at Port " + (process.env.PORT ? process.env.PORT : 3000));
});