import React, { useState } from "react";

const HomeSection = () => {
    // State to track the selected article
    const [selectedArticle, setSelectedArticle] = useState({
        title: "Ja Morant apologizes to the media",
        image: "https://media.bleacherreport.com/image/upload/w_800,h_533,c_fill/v1675793349/pb4pec77khlkhkxrkp2y.jpg",
        description: "Ja Morant's recent decisions stir up controversy in the NBA..."
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
            image: "https://a.espncdn.com/photo/2024/0603/r1341252_1296x729_16-9.jpg",
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
            title: "Butler shares frustrations on the Heat",
            image: "https://images2.minutemediacdn.com/image/upload/c_crop,w_3496,h_1966,x_0,y_298/c_fill,w_912,ar_16:9,f_auto,q_auto,g_auto/images/ImagnImages/mmsport/si/01jerm62fnm0bm43webb.jpg",
            description: "Butler frustrated with the Heat's general manager Pat Riley..."
        }
    ];

    return (
        <div className="flex flex-col max-w-7xl">
            {/* Section Title */}
            <h2 className="text-6xl font-bold mb-4">Around the NBA</h2>
            <hr className="mb-8" />
            {/* Content Section */}
            <div className="flex flex-row flex-grow">
                {/* Main Article Image */}
                <div className="flex-grow">
                    <div className="relative bg-black rounded-lg overflow-hidden">
                        <img
                            src={selectedArticle.image}
                            alt="Main news"
                            className="w-full h-[550px] object-cover rounded-lg"
                        />
                        {/* Overlay Text */}
                        <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 p-4 rounded-lg">
                            <h3 className="text-2xl font-bold">{selectedArticle.title}</h3>
                            <p className="text-sm mt-2 text-gray-300">{selectedArticle.description}</p>
                        </div>
                    </div>
                </div>

                {/* Sidebar News List */}
                <aside className="w-1/3 h-[550px] bg-gray-900 rounded-lg shadow-lg flex flex-col">
                    <ul className="flex flex-col flex-1 space-y-1 p-2">
                        {articles.map((article, index) => (
                            <li
                                key={index}
                                onClick={() => setSelectedArticle(article)}
                                className={`w-full flex flex-col justify-between h-full cursor-pointer transition-all duration-300 ${selectedArticle.title === article.title
                                    ? "bg-gray-600 text-white"
                                    : "bg-gray-800 hover:bg-gray-700"
                                    }`}
                            >
                                {/* Article Title */}
                                <span className="text-white text-xl font-semibold">{article.title}</span>

                                {/* Time Indicator */}
                                <span className="text-yellow-400 text-xs">{index + 1} days ago</span>
                            </li>
                        ))}
                    </ul>
                </aside>
            </div>
        </div>
    );
};

export default HomeSection;
