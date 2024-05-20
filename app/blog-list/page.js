import BlogList from "@/components/blogs/BlogList";

async function fetchAllBlogs(){
    try{
        const apiResponse = await fetch('https://dummyjson.com/products')
        const data = await apiResponse.json();
         return data;
    }catch(e){
        throw new Error(e)
    }
}

export default async function Blogs(){
    return <BlogList/>;
};

