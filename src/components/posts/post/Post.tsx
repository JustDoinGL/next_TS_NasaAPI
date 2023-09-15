import { PostProps } from "./Post.type";
import styles from "./Post.module.css";

const Post = ({ post }: PostProps) => {
  return (
  <div className={styles.body}>
      <div className={styles.post}>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    </div>
  );
};

export default Post;
