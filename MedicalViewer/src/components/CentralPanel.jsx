import { useState } from "react";

export default function CentralPanel({ boundingBox}) {
    const [zoomLevel, setZoomLevel] = useState(1);
    const imageWidth = 200;
    const imageHeight = 200;
    const scaleX = imageWidth / 1076;
    const scaleY=imageHeight/535;

    const handleZoomIn = () => {
        setZoomLevel((prevZoom) => Math.min(prevZoom + 0.2, 3));
    };

    const handleZoomOut = () => {
        setZoomLevel((prevZoom) => Math.max(prevZoom - 0.2, 1));
    };

    return (
        <div className="flex flex-col items-center mt-18 custom-central-panel">
            <div className="relative overflow-hidden flex justify-center items-center"
                style={{ width: `${imageWidth}px`, height: `${imageHeight}px` }}>

                <div className="relative inline-block"
                    style={{ transform: `scale(${zoomLevel})`, transformOrigin: "top left" }}>
                    <img
                        src="./cell.png"
                        alt="Cell Image"
                        className="w-[50%] h-auto block"
                        style={{ width: `${imageWidth}px`, height: `${imageHeight}px` }}
                    />

                    {/* Bounding Boxes */}
                    {boundingBox.map((box, index) => {
                        const [x, y, w, h] = box;
                        return (
                            <div
                                key={index}
                                style={{
                                    position: "absolute",
                                    left: (x * scaleX) * zoomLevel,
                                    top: (y * scaleY) * zoomLevel,
                                    width: "7px",
                                    height: "7px",
                                    border: "2px solid blue",
                                    boxSizing: "border-box",
                                }}
                            />
                        );
                    })}
                </div>
            </div>

            {/* Zoom Controls */}
            <div className="mt-4 flex space-x-4">
                <button
                    onClick={handleZoomIn}
                    className="px-2 py-1 bg-blue-500 text-white rounded shadow hover:bg-blue-600 custom-zoom-button"
                >
                    🔍 Zoom In
                </button>

                <button
                    onClick={handleZoomOut}
                    className="px-2 py-1 bg-gray-500 text-white rounded shadow hover:bg-gray-600 custom-zoom-button"
                >
                    🔍 Zoom Out
                </button>
            </div>
        </div>
    );
}
