import React from 'react';
import Chip from "../../Chip/Chip";
import {Link} from "react-router-dom";
import './BlogItems.css';

const BlogItems = ({blog:{
    id,
    description,
    title,
    category,
    cover
}
}) => {
    return (
        <div className={"blogItems-wrap"}>
            <img className={'blogItems-cover'} src={cover} alt={'test'}  />
            <Chip label={category} />
            <h3>{title}</h3>
            <p className={'blogItems-desc'}>{description}</p>
            <footer className={'blogItems'}>
                <Link className={'blogItems-link'} to={`/blog/${id}`}>Перейти ➝</Link>
            </footer>
        </div>
    );
};

export default BlogItems;