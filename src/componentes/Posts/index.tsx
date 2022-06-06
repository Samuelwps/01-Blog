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

const Post = (props :PostItemsProps) => {
    return(
        <a href={props.Usuarios.id}className="post mx-2">
            <div className="img-post"></div>
            <h5>{props.Usuarios.category}</h5>
            <h3>{props.Usuarios.title}</h3>
            <p className="mt-1">
                {props.Usuarios.description}
            </p>
            <div className="flex pt-2">
                <div className="img-profile"></div>
                <div className="desc-profile ml-2">
                    <h6 className="color-blue">{props.Usuarios.author}</h6>
                    <p>{props.Usuarios.date}</p> 
                </div>
            </div>
        </a>
    );
}

export default Post 