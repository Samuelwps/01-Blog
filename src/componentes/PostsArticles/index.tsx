
interface PostItemsProps {
    Usuarios: {
        id: string;
        title: string;
        category: string;
        author: string;

        description: string;

        date: string;
    }
}



const PostsArticles = (props : PostItemsProps) => {
    return(
        <>
        <h1>{props.Usuarios.category}</h1>
        <h2>{props.Usuarios.title}</h2>
        <p>{props.Usuarios.description}</p>

        <div className="desc-profile ml-2">
            <h6 className="color-blue">{props.Usuarios.author}</h6>
            <p>{props.Usuarios.date}</p> 
        </div>
        </>
    );  
}

export default PostsArticles