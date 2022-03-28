const { app, BrowserWindow, BrowserView, ipcMain } = require("electron");

// 监听
ipcMain.on("jieshouaiqing", (event, arg) => {
  event.reply("manMessage", "发张照片我看看3");
  console.log(arg);
});

ipcMain.on("openNewWindow", (event, arg) => {
  let mainWindow = new BrowserWindow({
    width: 1400,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    },
  });
  mainWindow.loadFile("yellow.html");
});
// electron报错
// https://blog.csdn.net/weixin_46205984/article/details/120065725
// 这里定义的mainWindow是主窗口不是主进程这里要区分一下app才是主进程
let mainWindow = null;
// app就是主进程
app.on("ready", () => {
  mainWindow = new BrowserWindow({
    width: 1400,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    },
  });

  // 主动的发消息给渲染进程
  mainWindow.webContents.send("qiuou", "你好你是单身嘛1");
  // const view = new BrowserView();
  // mainWindow.setBrowserView(view);
  // view.setBounds({ x: 0, y: 120, width: 1000, height: 680 });
  // view.webContents.loadURL("https://electronjs.org");
  // 默认打开调试控制台
  mainWindow.webContents.openDevTools();
  require("@electron/remote/main").initialize();
  require("@electron/remote/main").enable(mainWindow.webContents);
  require("./main/menu.js");
  mainWindow.loadFile("demo3.html");
  mainWindow.on("closed", () => {
    mainWindow = null;
  });
});
