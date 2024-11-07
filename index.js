const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({
    name: "Sanjoy Roy",
    phone: "01511223344",
  });
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server is running http://localhost:${port}`);
});
