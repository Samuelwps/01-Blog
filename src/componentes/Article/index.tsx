import Post from "../Posts"
import api from '../../Services/api';
import {useState, useEffect} from 'react';


// fazer as requisições pela api
interface Usuarios {
    title: string;
    description: string;
    author: string;

    children: string;

    date: string;
}   

const Article =() => {
   const [post, setPost] = useState<Usuarios[]>([])

    useEffect(() => {
        api.get('/posts')
        .then((response) => {
            setPost(response.data)
        })
    }, [])



    return(
        <>
        <section className="container">
            <h2 className="mt-5">Home page</h2>
            <h3></h3>
        </section>

        <div className="mt-5 container flex">
            <ul>
                {post.map(repository => {
                    return <Post Usuarios={repository}/>
                })}
            </ul>
        </div>
        </>
    )
}


export default Article;