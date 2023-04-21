import { useEffect, useState } from "react";
import { Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const useEscape = (onEscape) => {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) onEscape();
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);
};

const Pdf = ({
  title,
  url,
  handleReadNow,
  setOpenPdfReader,
  openPdfReader,
}) => {
  const [state, setState] = useState({
    windowHeight: window.innerHeight,
    windowWidth: window.innerWidth,
  });

  window.addEventListener("resize", async () => {
    await setState({
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth,
    });
  });

  useEscape(() => {
    if (openPdfReader === true) setOpenPdfReader(false);
  });

  useEffect(() => {
    console.log(state);
  }, [state]);

  const TransformToolbarSlot = (ToolbarSlot) => ({
    ...ToolbarSlot,
    Download: () => <></>,
    DownloadMenuItem: () => <></>,
    EnterFullScreen: () => <></>,
    EnterFullScreenMenuItem: () => <></>,
    Print: () => <></>,
    Open: () => <></>,
    Search: () => <></>,
    SwitchViewMode: () => <></>,
    SwitchViewModeMenuItem: () => <></>,
    SwitchSelectionModeMenuItem: () => <></>,
    SwitchSelectionMode: () => <></>,
    ShowProperties: () => <></>,
    ShowPropertiesMenuItem: () => <></>,
  });

  const renderToolbar = (Toolbar) => (
    <Toolbar>{renderDefaultToolbar(TransformToolbarSlot)}</Toolbar>
  );

  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    renderToolbar,
    sidebarTabs: (defaultTabs) => [],
  });
  const { renderDefaultToolbar } =
    defaultLayoutPluginInstance.toolbarPluginInstance;

  return (
    <div className="cursor-pointer z-10 bg-gray-900 bg-opacity-95 w-full absolute block top-[70px]">
      <div className="w-full flex justify-between">
        <div className="w-fit mx-auto py-1 text-[20px] text-white">{title}</div>
        <div
          className="rounded-md bg-gray-500 shadow-sm shadow-white text-white w-fit mx-auto py-2 px-4 my-1"
          onClick={handleReadNow}
        >
          Close
        </div>
      </div>
      <div
        className="flex mx-auto"
        style={{
          height: state.windowHeight - 130,
          width: state.windowWidth * 0.9,
          left: state.windowWidth * 0.05,
          top: state.windowHeight * 0.1,
          zIndex: 20,
        }}
      >
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.5.141/build/pdf.worker.min.js">
          <Viewer
            fileUrl={url}
            plugins={[defaultLayoutPluginInstance]}
            theme="dark"
            onContextMenu={(e) => {
              e.preventDefault();
            }}
            style={{ zIndex: 22 }}
          />
        </Worker>
      </div>
    </div>
  );
};

export default Pdf;
