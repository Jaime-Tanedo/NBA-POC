export default function Home() {
    return (
        <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory">

            <section id="home" className="h-screen flex justify-center items-center bg-gray-800 text-white snap-start">
                <h1 className="text-4xl">Home - News & Articles</h1>
            </section>

            <section
                id="highlights"
                className="h-screen flex flex-col justify-center items-center bg-gray-900 text-white snap-start pt-12"
            >
                <div className="flex justify-center">
                    <iframe
                        width="900"
                        height="500"
                        src="https://www.youtube.com/embed/b2qLVRV-vY8?autoplay=1&mute=1"
                        title="NBA Highlights"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="rounded-lg shadow-lg"
                    ></iframe>
                </div>

                {/* Add margin-top to the carousel to create space between the main video and the carousel */}
                <div className="mt-8"></div>

                {/* Video Carousel */}
                <div className="w-full max-w-6xl relative">
                    {/* Carousel Container with ID for Scrolling */}
                    <div id="carousel" className="flex gap-4 overflow-x-auto pb-4">
                        {/* Video 1 */}
                        <iframe
                            width="300"
                            height="180"
                            src="https://www.youtube.com/embed/XqZsoesa55w"
                            title="NBA Highlight 1"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="rounded-lg shadow-lg"
                        ></iframe>

                        {/* Video 2 */}
                        <iframe
                            width="300"
                            height="180"
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                            title="NBA Highlight 2"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="rounded-lg shadow-lg"
                        ></iframe>

                        {/* Video 3 */}
                        <iframe
                            width="300"
                            height="180"
                            src="https://www.youtube.com/embed/3JZ_D3ELwOQ"
                            title="NBA Highlight 3"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="rounded-lg shadow-lg"
                        ></iframe>

                        {/* Video 4 */}
                        <iframe
                            width="300"
                            height="180"
                            src="https://www.youtube.com/embed/9bZkp7q19f0"
                            title="NBA Highlight 4"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="rounded-lg shadow-lg"
                        ></iframe>
                    </div>
                </div>
            </section>




            <section id="rumors" className="h-screen flex justify-center items-center bg-gray-800 text-white snap-start">
                <h1 className="text-4xl">Rumors - Articles</h1>
            </section>
        </div>
    );
}
