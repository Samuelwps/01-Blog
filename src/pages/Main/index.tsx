import Post from "../../componentes/Posts"
import api from '../../Services/api';
import {useState, useEffect} from 'react';


// fazer as requisições pela api
interface Usuarios {
    id: string;
    title: string;
    category: string;
    author: string;

    description: string;

    date: string;
}   

const Main =() => {
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

            {post.map(repository => {
                return <Post Usuarios={repository}/>
            })}
        </div>
        </>
    )
}

export default Main
