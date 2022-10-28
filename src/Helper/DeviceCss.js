export const MobileCss = ` .gjs-editor {
    width: 100%
    font-family: Helvetica, sans-serif;
    font-size: .75rem;
    position: relative;
    background-color: transparent;
    left: 0;
    right: 0;
    top: 0;
    box-sizing: border-box;
    height: 100%;
}

.gjs-cv-canvas {
    width: 35%;
    height: 100%;
    border-style: none !important;
    border: none !important;
    box-shadow: none;
    left: 30%;
    box-sizing: initial !important;
    overflow: hidden;
    top: 0px;
    background-image: url(https://raw.githubusercontent.com/RakulAgn/grapejs-tutor/CustomDeviceManager-and-UI/src/Assets/Svg/Mobile.svg);
    background-repeat: no-repeat;
    background-color: transparent;
}

.gjs-frame-wrapper {
    left: 9px !important;
    top: 77px !important;
    width: 376px !important;
    height: 85.6% !important;
    right: 0;
    margin: auto;
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
    height: 100%;
    width: 100%;
    background-color: grey;
    border: none;
    border-radius: 44.54px !important;
    display: block;
    transition: width .35s ease, height .35s ease;
    position: absolute;
    top: 6px;
    bottom: 0;
    left: 2px;
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

.gjs-frame-wrapper {
    position: absolute !important;
    width: 100% !important;
    height: 100% !important;
    left: 0 !important;
    top: 0 !important;
    right: 0 !important;
    margin: auto;
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

export const TabletCss = `.gjs-editor {
    width: 100%
    font-family: Helvetica, sans-serif;
    font-size: .75rem;
    position: relative;
    background-color: transparent;
    left: 0;
    right: 0;
    top: 0;
    box-sizing: border-box;
    height: 100%;
}

.gjs-cv-canvas {
    width: 35%;
    height: 100%;
    border-style: none !important;
    border: none !important;
    box-shadow: none;
    left: 30%;
    box-sizing: initial !important;
    overflow: hidden;
    top: 0px;
    background-image: url(https://raw.githubusercontent.com/RakulAgn/grapejs-tutor/b8831efad22bf56992d8ef3f092364fa9f7a7958/src/Assets/Svg/Tablet.svg);
    background-repeat: no-repeat;
    background-color: transparent;
}

.gjs-frame-wrapper {
    left: 9px !important;
    top: 77px !important;
    width: 376px !important;
    height: 85.6% !important;
    right: 0;
    margin: auto;
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
    height: 100%;
    width: 100%;
    background-color: grey;
    border: none;
    border-radius: 44.54px !important;
    display: block;
    transition: width .35s ease, height .35s ease;
    position: absolute;
    top: 6px;
    bottom: 0;
    left: 2px;
    right: 0;
}
`;
