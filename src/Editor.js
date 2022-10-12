import grapesjs from "grapesjs";

export const Editor = () => grapesjs.init({
    container: "#grapesjs-container",
    height: "100vh",
    blockManager: {
        appendTo: "#block-container"
    }
})

