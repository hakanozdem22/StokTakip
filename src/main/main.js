const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true
    }
  });

  // In production, load the built index.html
  // In development, load the Vite dev server
  // In production, load the built index.html
  // In development, load the Vite dev server
  if (!app.isPackaged) {
    win.loadURL('http://localhost:3000');
    win.webContents.openDevTools();
  } else {
    // In production, the renderer files are in the dist folder
    // The main.js is in src/main, but in the built app it might be different.
    // However, usually with electron-builder, the resources/app folder structure mimics the project.
    // If main.js is at resources/app/src/main/main.js and dist is at resources/app/dist/index.html
    // Then the relative path from main.js to index.html is ../../dist/index.html
    win.loadFile(path.join(__dirname, '../../dist/index.html'));
  }
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
