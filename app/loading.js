'use client'
import { ThreeDots } from "react-loader-spinner";

const Loading = () => {

    return (
     <div className="loader">
           <ThreeDots
            visible={true}
            height="80"
            width="80"
            color="black"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
        />
     </div>
    );
};

export default Loading;