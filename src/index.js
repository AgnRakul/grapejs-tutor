import grapesjs from "grapesjs"
import "./main.scss"

const Editor =  grapesjs.init({
  container: '#root',
  storageManager: false,
  height: '100%',

  // noticeOnUnload: false,
  blockManager: {
    appendTo: '#blocks',
  },
  styleManager: {
    appendTo: '#styles-container',
  },
  layerManager: {
    appendTo: '#layers-container',
  },
  traitManager: {
    appendTo: '#trait-container',
  },
  selectorManager: {
    appendTo: '#styles-container',
  },
  deviceManager: {},
  plugins: [],
  pluginsOpts: {},
});