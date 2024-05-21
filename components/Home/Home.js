import AdsSection from "../ads-section/AdsSection";
import LadingSection from "../landing-section/LadingSection";
import Nav from "../navbar/Nav";
import TopBlogs from "../top-blog-section/TopBlogs";

const Home = () => {
    return (
        <div>
            <Nav />
            <LadingSection/>
            <TopBlogs/>
            <AdsSection/>
        </div>
    );
};

export default Home;