import React, { useState } from "react";

function HomeHighlights() {
    return (
        <div className="flex flex-col items-center space-y-8 w-full">
            {/* Main Video */}
            <iframe
                width="870"
                height="490"
                src="https://www.youtube.com/embed/b2qLVRV-vY8?autoplay=1&mute=1"
                title="NBA Highlights"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg shadow-lg"
            ></iframe>

            {/* Video Carousel */}
            <div className="w-full max-w-6xl relative">
                <div id="carousel" className="flex gap-6 pb-4 justify-center">
                    {/* Video Items */}
                    <iframe
                        width="300"
                        height="170"
                        src="https://www.youtube.com/embed/0wGcHhPesWA"
                        title="NBA Highlight 1"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="rounded-lg shadow-lg"
                    ></iframe>

                    <iframe
                        width="300"
                        height="170"
                        src="https://www.youtube.com/embed/5RJ2HBDxDSQ"
                        title="NBA Highlight 2"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="rounded-lg shadow-lg"
                    ></iframe>

                    <iframe
                        width="300"
                        height="170"
                        src="https://www.youtube.com/embed/0UHvMtCsuaA"
                        title="NBA Highlight 3"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="rounded-lg shadow-lg"
                    ></iframe>

                    <iframe
                        width="300"
                        height="170"
                        src="https://www.youtube.com/embed/FevAhScI1rg"
                        title="NBA Highlight 4"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="rounded-lg shadow-lg"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

export default HomeHighlights;