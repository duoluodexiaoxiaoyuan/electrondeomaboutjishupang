let btn = document.querySelector("#btn");
const { BrowserWindowm, Menu, getCurrentWindow } = require("@electron/remote");
// const BrowserWindow = require("electron").remote.BrowserWindow;
let newWin = null;
window.onload = function () {
  btn.onclick = () => {
    newWin = new BrowserWindow({
      width: 500,
      height: 500,
    });
    newWin.loadFile("yellow.html");
    newWin.on("closed", () => {
      newWin = null;
    });
  };
};

// 右键的菜单模板
let rightTemplate = [
  {
    label: "粘贴",
    accelerator: "CTRL+C",
  },
  {
    label: "复制",
    accelerator: "CTRL+V",
  },
];

let m = Menu.buildFromTemplate(rightTemplate);

// 右键事件
// Menu是主进程使用的，渲染进程中使用要引入remote
window.addEventListener("contextmenu", function (e) {
  e.preventDefault();
  m.popup({ window: getCurrentWindow() });
});
