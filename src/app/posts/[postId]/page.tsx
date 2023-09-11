import { Footer, Header, Navbar, Post } from "@/components";
import styles from "./page.module.css";
import { Metadata, ResolvingMetadata } from "next";
import fetchPosts from "@/actions/fetchTodo";

const data = [{ url: "/posts", text: "Back" }];

type Props = {
  params: { postId: string };
};

const { getPost } = fetchPosts;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.postId;

  const product = await getPost(id);

  return {
    title: product.title,
  };
}

export default async function Home({ params }: Props) {
  const id = params.postId;

  const post = await getPost(id)
  return (
    <>
      <Header>
        <div className={styles.header}>
          <Navbar el={data} />
        </div>
      </Header>
      <main className={styles.main}>
        <Post post={post} />
      </main>
      <Footer>
        <div className={styles.footer}>
          <a
            className={styles.footer__link}
            href="https://github.com/JustDoinGL"
          >
            Github repository
          </a>
        </div>
      </Footer>
    </>
  );
}
