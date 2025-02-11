const HomeRumors = ({ articles }) => {
    return (
        <section className=" p-8 shadow-lg max-w-7xl">
            {/* Section Title */}
            <h2 className="text-6xl font-bold mb-4">Rumors</h2>
            <hr className="mb-8 inline-block w-full border-t-2 border-white" />

            {/* Content Section */}
            <div className="grid grid-cols-5 gap-6">
                {/* Main Article (Left Side, 40%) */}
                <div className="col-span-2 h-[450px] relative rounded-lg overflow-hidden bg-gray-700 hover:shadow-xl transition-all duration-300">
                    <img
                        src={articles[0].image}
                        alt={articles[0].title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gray-900 bg-opacity-80 p-5">
                        <p className="text-white text-xl font-bold">{articles[0].title}</p>
                    </div>
                </div>

                {/* Smaller Articles (Right Side, 60%) */}
                <div className="grid grid-cols-2 gap-4 col-span-3">
                    {articles.slice(1, 5).map((article, index) => (
                        <div
                            key={index}
                            className="h-[200px] relative rounded-lg overflow-hidden bg-gray-700 hover:shadow-lg transition-all duration-300"
                        >
                            <img
                                src={article.image}
                                alt={article.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gray-900 bg-opacity-80 p-3">
                                <p className="text-white text-md font-semibold">{article.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    );
};

// Sample Data (Replace with API response)
const articles = [
    { title: "Luka to Lakers: Trade Rumors Heating Up", image: "https://images2.minutemediacdn.com/image/upload/c_crop,w_3380,h_1901,x_1072,y_194/c_fill,w_912,ar_16:9,f_auto,q_auto,g_auto/images/ImagnImages/mmsport/si/01jk2hhf59kfp49w2wss.jpg" },
    { title: "Zion’s weight reaching 300lbs", image: "https://images2.minutemediacdn.com/image/upload/c_crop,w_3983,h_2240,x_0,y_0/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/images/ImagnImages/mmsport/si/01jjwnyq54xa0f8jazs7.jpg" },
    { title: "Zach Lavine trade rumors", image: "https://cdn.nba.com/teams/uploads/sites/1610612741/2024/11/241115_SamSmith_ZachLaVine_Iso_16x9.jpg" },
    { title: "Jalen Brunson: King of New York", image: "https://media.cnn.com/api/v1/images/stellar/prod/usatsi-23174159.jpg?c=original" },
    { title: "Ja Morant violates Wemby", image: "https://spurswire.usatoday.com/wp-content/uploads/sites/117/2024/01/USATSI_22212336-e1704321525312.jpg?w=1024&h=576&crop=1" }
];

export default function App() {
    return <HomeRumors articles={articles} />;
}
