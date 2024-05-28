import Footer from "@/components/Footer/Footer";
import Nav from "@/components/navbar/Nav";

const layout = ({children}) => {
    return (
        <div>
            <Nav/>
            {children}
            <Footer/>
        </div>
    );
};

export default layout;