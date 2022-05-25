import React from "react";
import BlogItems from "./BlogItems/BlogItems";
import './bloglist.css';

const BlogList = ({blogs}) => (

    <div className={"blogList-wrap"}>
        {blogs?.map((blog)=> (
            <BlogItems blog={blog} key={blog.id}/>
        ))}
    </div>

);

export default BlogList;