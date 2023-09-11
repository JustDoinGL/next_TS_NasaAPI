import { IPost, TPost } from "@/interface/Posts"

const getPosts = async (page: number): Promise<TPost> => {
    const limit = 10
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`)

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

const getPost = async (id: number | string): Promise<IPost> => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

const fetchPosts = { getPost, getPosts }

export default fetchPosts