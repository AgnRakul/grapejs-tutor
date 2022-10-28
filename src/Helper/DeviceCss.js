export const MobileCss = ` .gjs-editor {
    width: 19%;
    font-family: Helvetica, sans-serif;
    font-size: .75rem;
    position: relative;
    background-color: transparent;
    left: 38%;
    right: 30% !important;
    top: 4%;
    box-sizing: border-box;
    height: 74%;
}

.gjs-cv-canvas {
    width: 100%;
    padding: 10;
    height: 98%;
    border-style: none !important;
    border: none !important;
    box-shadow: none;
    box-sizing: initial !important;
    overflow: hidden;
    top: 6px;
    background-image: url(https://github.com/RakulAgn/grapejs-tutor/blob/CustomDeviceManager-and-UI/src/Assets/Svg/Mobile.svg);
    background-repeat: no-repeat;
    background-color: transparent;
}

.gjs-cv-canvas__frames {
    background-color: transparent;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.gjs-frames {
    background-color: #f5f5f500;
}

.gjs-frame {
    outline: medium none;
    height: 93%;
    width: 105%;
    background-color: grey;
    border: none;
    border-radius: 10px;
    display: block;
    transition: width .35s ease, height .35s ease;
    position: absolute;
    top: -3px;
    bottom: 0;
    left: -10px;
    right: 0;
}

`;

export const DesktopCss = ` .gjs-editor {
    font-family: Helvetica, sans-serif;
    font-size: .75rem;
    position: relative;
    background-color: transparent;
    left: 0;
    width: 100%;
    right: 0;
    top: 0;
    box-sizing: border-box;
    height: 100%;
}

.gjs-cv-canvas {
    width: 100%;
    height: 100%;
    border-style: none !important;
    border: none !important;
    box-shadow: 0px 3px 2px rgb(0 0 0 / 20%);
    box-sizing: initial !important;
    overflow: hidden;
    top: 0;
    background-image: none;
    background-repeat: none;
    background-color: none;
    z-index: 1;
    position: absolute;
    left: 0;
}

.gjs-cv-canvas__frames {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.gjs-frames {
    background-color: #f5f5f500;
}

.gjs-frame {
    outline: medium none;
    height: 100%;
    width: 100%;
    border-radius: 0px !important;
    border: none;
    margin: auto;
    display: block;
    transition: width .35s ease, height .35s ease;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}

`;

export const TabletCss = ``;
