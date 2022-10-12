import grapesjs from "grapesjs";

export const Editor = () => grapesjs.init({
    container: "#grapesjs-container",
    height: '100%',
    storageManager: false,
    noticeOnUnload: false,
})