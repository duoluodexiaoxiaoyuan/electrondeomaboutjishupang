// 有些api我们不可以直接在渲染进程中使用所以我们会用到remote,有些是可以直接使用的。
let { shell, ipcRenderer } = require("electron");
let aHref = document.querySelector("#aHref");

aHref.onclick = function (e) {
  e.preventDefault();
  let href = this.getAttribute("href");
  shell.openExternal(href);
};

let mybtn = document.querySelector("#mybtn");
mybtn.onclick = function (e) {
  window.open("./popub_page.html");
};
let mytext = document.querySelector("#mytext");

window.addEventListener("message", (msg) => {
  console.log(msg);
  mytext.innerHTML = msg.data;
});

let mybtn2 = document.querySelector("#mybtn2");
mybtn2.onclick = function (e) {
  // 这个参数不是必传的，可以不传
  ipcRenderer.send("openNewWindow", "我命令你主进程开个窗口");
};

ipcRenderer.on("qiuou", (event, arg) => {
  console.log(event);
  console.log(arg);
});

// 主动发送消息
ipcRenderer.send("jieshouaiqing", "我喜欢你，你可以和我结婚嘛2");
ipcRenderer.on("manMessage", (event, arg) => {
  console.log(event);
  console.log(arg);
});
