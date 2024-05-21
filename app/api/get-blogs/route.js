import connectDB from "@/database";
import Blog from "@/models/blog";
import { NextResponse } from "next/server";


export async function GET(){
    try{
        await connectDB();
        const getAllBlogsFromDatabase = await Blog.find({});

        if(getAllBlogsFromDatabase){
            return NextResponse.json({
                success: true,
                data: getAllBlogsFromDatabase
            })
        }

    }catch(error){
        return NextResponse({
            success: false,
            message: 'Something went worong..😢'
        })
    }
}