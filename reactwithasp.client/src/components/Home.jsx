import HomeSection from "../components/HomeSection";
import HomeHighlights from "../components/HomeHighlights";
import HomeRumors from "../components/HomeRumors";

export default function Home() {
    return (

        <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory">
            <section id="home" className="h-screen flex justify-center items-center bg-gray-800 text-white snap-start">
                <HomeSection />
            </section>
            <section
                id="highlights"
                className="h-screen flex flex-col justify-center items-center bg-gray-900 text-white snap-start"
            >
                <HomeHighlights />
            </section>
            <section id="rumors" className="h-screen flex justify-center items-center bg-gray-800 text-white snap-start">
                <HomeRumors />
            </section>
        </div>
    );
}
