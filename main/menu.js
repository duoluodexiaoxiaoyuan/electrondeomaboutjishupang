const { Menu, BrowserWindow } = require("electron");
let template = [
  {
    label: "女明星大舞台",
    submenu: [
      {
        label: "唱歌",
        accelerator: "CTRL+N",
        click: () => {
          let win = new BrowserWindow({
            width: 500,
            height: 500,
            webPreferences: { nodeIntegration: true },
          });
          win.loadFile("yellow.html");
          win.on("closed", () => {
            win = null;
          });
        },
      },
      { label: "跳舞" },
    ],
  },
  {
    label: "男明星大舞台",
    submenu: [{ label: "跳高" }, { label: "击剑" }],
  },
];

let m = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(m);
