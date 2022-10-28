import { MobileCss, DesktopCss, TabletCss } from "./DeviceCss";

export const DeviceLayout = ({ editor, setFindDevice }) => {
  editor.on("device:select", (e) => {
    setFindDevice(e.id);
    let styleTag = document.createElement("style");

    switch (e.id) {
      case "desktop": {
        styleTag.innerHTML = DesktopCss;
        break;
      }

      case "mobilePortrait": {
        styleTag.innerHTML = MobileCss;
        break;
      }

      case "tablet": {
        styleTag.innerHTML = TabletCss;
        break;
      }

      default: {
        styleTag.innerHTML = DesktopCss;
        break;
      }
    }
    document.getElementById("root").append(styleTag);
  });
};
