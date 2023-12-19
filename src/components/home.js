import Navbar from "./navbar";
import Carousel from "./carousel";
import Cards from "./tarif";
import Footer from "./footer";
import Main from "./main";

export default function Home() {
    return (
        <div className="all-main">
            <Navbar />
            <Main />
            <Carousel />
            <Cards />
            <Footer />
        </div>
    )
}


