import React, { useState } from "react";

const HomeSection = () => {
    // State to track the selected article
    const [selectedArticle, setSelectedArticle] = useState({
        title: "Gradey Dick and Anthony Black Trade Jerseys",
        image: "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2024/03/18/17107984825531.jpg",
        description: "Gradey Dick and Anthony Black showcase sportsmanship by exchanging jerseys..."
    });

    // List of articles
    const articles = [
        {
            title: "Ja Morant apologizes to the media",
            image: "https://media.bleacherreport.com/image/upload/w_800,h_533,c_fill/v1675793349/pb4pec77khlkhkxrkp2y.jpg",
            description: "Ja Morant's recent decisions stir up controversy in the NBA..."
        },
        {
            title: "Mavs Address Refund Report",
            image: "https://phantom-marca.unidadeditorial.es/d13fce4fc06167bb758576d07765118b/resize/828/f/jpg/assets/multimedia/imagenes/2025/02/08/17390517427046.jpg",
            description: "Dallas Mavericks respond to fan refund issues..."
        },
        {
            title: "Dunk Contest Participants Set",
            image: "https://cdn.nba.com/manage/2025/02/AS25-Dunk-Contest-Group-Announcement16x9-YTThumbnail-2-1.png",
            description: "Excitement builds as the NBA announces the dunk contest lineup..."
        },
        {
            title: "Gradey Dick and Anthony Black Trade Jerseys",
            image: "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2024/03/18/17107984825531.jpg",
            description: "Gradey Dick and Anthony Black showcase sportsmanship by exchanging jerseys..."
        },
        {
            title: "Butler shares frustrations on the Heat organization",
            image: "https://images2.minutemediacdn.com/image/upload/c_crop,w_3496,h_1966,x_0,y_298/c_fill,w_912,ar_16:9,f_auto,q_auto,g_auto/images/ImagnImages/mmsport/si/01jerm62fnm0bm43webb.jpg",
            description: "Butler frustrated with the Heat's general manager Pat Riley..."
        }
    ];

    return (
        <section id="home" className="h-screen flex justify-center items-center bg-gray-800 text-white snap-start">
            <div className="flex flex-grow w-full max-w-7xl relative">
                {/* Main News Section */}
                <div className="flex-grow flex flex-col">
                    <h2 className="text-5xl font-bold my-4">Around the NBA</h2>
                    <div className="relative bg-black rounded-lg overflow-hidden">
                        <img
                            src={selectedArticle.image}
                            alt="Main news"
                            className="w-full h-[550px] object-cover rounded-lg" // Larger image with 550px height
                        />
                        {/* Overlay Text */}
                        <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 p-4 rounded-lg">
                            <h3 className="text-2xl font-bold">{selectedArticle.title}</h3>
                            <p className="text-sm mt-2 text-gray-300">{selectedArticle.description}</p>
                        </div>
                    </div>
                </div>

                {/* Sidebar News List */}
                <aside className="w-1/3 ml-6 h-[550px] bg-gray-800 rounded-lg shadow-lg flex flex-col">
                    <ul className="space-y-4 overflow-y-auto p-4">
                        {articles.map((article, index) => (
                            <li
                                key={index}
                                onClick={() => setSelectedArticle(article)}
                                className={`flex items-center justify-between p-4 rounded-lg shadow cursor-pointer ${selectedArticle.title === article.title
                                    ? "bg-gray-700 font-bold"
                                    : "bg-gray-800"
                                    }`}
                            >
                                <span className="text-white">{article.title}</span>
                                <span className="text-gray-400 text-sm">{index + 1}d ago</span>
                            </li>
                        ))}
                    </ul>
                </aside>
            </div>
        </section>
    );
};

export default HomeSection;
