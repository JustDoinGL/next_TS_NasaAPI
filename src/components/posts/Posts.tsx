"use client";

import fetchPosts from "@/actions/fetchTodo";
import { TPost } from "@/interface/Posts";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import styles from "./Posts.module.css";
import Loader from "../UI/loader/Loader";
import Link from "next/link";

const Posts = () => {
  const [posts, setPosts] = useState<TPost>([]);
  const [page, setPage] = useState(1);

  const { getPosts } = fetchPosts;

  const { ref, inView } = useInView();

  useEffect(() => {
    const fetchNewPosts = async () => {
      const newPosts = await getPosts(page);
      setPosts((prevPosts) => [...prevPosts, ...newPosts]);
      setPage((prevPage) => prevPage + 1);
    };

    if (inView) {
      fetchNewPosts();
    }
  }, [inView]);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} className={styles.post}>
          <Link href={`/posts/${post.id}`}>
            <h1 className={styles.post__title}>{post.title}</h1>
            <p className={styles.post__body}>{post.body}</p>
          </Link>
        </div>
      ))}
      {page === 12 ? (
        <div className={styles.post__end}>End</div>
      ) : (
        <div ref={ref}>
          <Loader />
        </div>
      )}
    </div>
  );
};

export default Posts;
