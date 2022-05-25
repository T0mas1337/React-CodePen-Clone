import React, {useContext, useEffect, useState} from 'react';
import { useParams } from 'react-router';
import { blogList } from '../../../config/data';
import Chip from '../../Chip/Chip';
import EmptyList from '../../NotFound/NotFound';
import { Link } from 'react-router-dom';
import "./blog.css";
import {useCollectionData} from "react-firebase-hooks/firestore";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {useAuthState} from "react-firebase-hooks/auth";
import {Context} from "../../../index";

const Blog = () => {
    const {auth, firestore} = useContext(Context)
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [theory] = useCollectionData(
        firestore.collection('theory').orderBy('createdAt')
    )

    useEffect(() => {
        let blog = blogList.find((blog) => blog.id === parseInt(id));
        if (blog) {
            setBlog(blog);
        }
    }, []);

    return (
        <>
            <Link className='blog-goBack' to='/'>
                <span> &#8592;</span> <span>Вернуться</span>
            </Link>
            {blog ? (
                <div className='blog-wrap'>
                    <header>
                        <h1>{blog?.title}</h1>
                        <div className='blog-subCategory'>
                            {blog?.subCategory.map((category, i) => (
                                <div key={i}>
                                    <Chip label={category} />
                                </div>
                            ))}
                        </div>
                    </header>
                    <img src={blog?.cover} alt='cover' />
                    <p className='blog-desc'>{blog?.description}</p>
                    <div className={'blog-theory'}>
                        <p className='blog-theory'>{blog?.theory1}</p>
                        <p className='blog-example'>{blog?.example1}</p>
                        <p className='blog-theory'>{blog?.theory2}</p>
                        <p className='blog-example'>{blog?.example2}</p>
                        <p className='blog-theory'>{blog?.theory3}</p>
                        <p className='blog-task'>{blog?.task}</p>
                    </div>
                </div>
            ) : (
                <EmptyList />
            )}
        </>
    );
};

export default Blog;

