import AdsSection from "../ads-section/AdsSection";
import LadingSection from "../landing-section/LadingSection";
import LatestBlogs from "../latest-blog-section/LatestBlogs";
import Nav from "../navbar/Nav";
import TopBlogs from "../top-blog-section/TopBlogs";

const Home = () => {
    return (
        <div>
            <Nav />
            <LadingSection/>
            <TopBlogs/>
            <AdsSection/>
            <LatestBlogs/>
        </div>
    );
};

export default Home;