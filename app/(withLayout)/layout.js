import Nav from "@/components/navbar/Nav";

const layout = ({children}) => {
    return (
        <div>
            <Nav/>
            {children}
        </div>
    );
};

export default layout;