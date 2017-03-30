import {app, BrowserWindow, Menu} from 'electron'

export default class Main{
    static mainWindow: BrowserWindow;
    static application: app;
    static BrowserWindow;

    private static onWindowAllClosed(){
        if (process.platform !== 'darwin'){
            Main.application.quit();
        }
    }

    private static onClose(){
        Main.mainWindow = null;
    }

    private static initMenu(){
        const template = [];
        const menu = Menu.buildFromTemplate(template);
        Menu.setApplicationMenu(menu);
    }

    private static onReady(){
        Main.mainWindow = new Main.BrowserWindow({width: 800, height: 600});
        Main.mainWindow.loadURL('http://localhost:4200');
        
        //To be removed for distribution
        Main.mainWindow.webContents.openDevTools();
        Main.mainWindow.on('closed', Main.onClose);
        Main.initMenu()
    }

    static main(my_app: app, browserWindow: typeof BrowserWindow ){
        Main.BrowserWindow = browserWindow;
        Main.application =my_app;
        Main.application.on('window-all-closed', Main.onWindowAllClosed)
        Main.application.on('ready', Main.onReady)
    }
}