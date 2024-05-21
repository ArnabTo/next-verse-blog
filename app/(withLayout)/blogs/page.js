import AllBlogs from "@/components/blogs/AllBlogs";

async function fetchAllBlogs() {
    try {
        const apiResponse = await fetch('http://localhost:3000/api/get-blogs', {
            method: "GET",
            cache: "no-cache"
        })
        const res = await apiResponse.json();
        return res.data;
    } catch (e) {
        throw new Error(e)
    }
}

export default async function Blogs() {
    const allBlogs = await fetchAllBlogs();
    return <AllBlogs allBlogs={allBlogs}/>;
};

