const autotrace = require("autotrace");

autotrace(
  "./assets/baboon.jpg",
  {
    outputFile: "./tmp/out.svg",
  },
  function(err, buffer) {
    console.log(err);
    if (!err) console.log("done");
  }
);
