let fs = require("fs");
window.onload = function () {
  let btn = document.querySelector("#btn");
  let mybaby = document.querySelector("#mybaby");
  btn.onclick = function () {
    fs.readFile("xiaojiejie.txt", (err, data) => {
      mybaby.innerHTML = data;
    });
  };
};
