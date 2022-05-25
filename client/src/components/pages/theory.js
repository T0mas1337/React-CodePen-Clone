import React, {useState} from 'react';
import SearchBar from "../searchbar/searchbar";
import BlogList from "../BlogList/bloglist";
import {blogList} from "../../config/data";
import NotFound from "../NotFound/NotFound";

const Blog = () => {
    const [blogs, setBlogs] = useState(blogList);
    const [searchKey, setSearchKey] = useState('');

    const handleSearchBar = (e) => {
        e.preventDefault();
        handleSearchResults();
    };

    const handleSearchResults = () => {
        const allBlogs = blogList;
        const filteredBlogs = allBlogs.filter((blog) =>
            blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
        );
        setBlogs(filteredBlogs);
    };

    const handleClearSearch = () => {
        setBlogs(blogList);
        setSearchKey('');
    };

    return(
        <div>
            <SearchBar
                value={searchKey}
                clearSearch={handleClearSearch}
                formSubmit={handleSearchBar}
                handleSearchKey={(e) => setSearchKey(e.target.value)}
            />
            {!blogs.length ? <NotFound/> : <BlogList blogs={blogs} />}
        </div>
    );

};
export default Blog;