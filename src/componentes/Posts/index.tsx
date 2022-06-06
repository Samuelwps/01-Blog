interface PostItemsProps {
    Usuarios: {
        title: string;
        description: string;
        author: string;

        children: string;

        date: string;
    }
}

const Post = (props :PostItemsProps) => {
    return(
        <div className="post">
            <div className="img-post"></div>
            <h5>{props.Usuarios.description}</h5>
            <h3>{props.Usuarios.title}</h3>
            <p className="mt-1">
                {props.Usuarios.children}
            </p>
            <div className="flex pt-2">
                <div className="img-profile"></div>
                <div className="desc-profile ml-2">
                    <h6 className="color-blue">{props.Usuarios.author}</h6>
                    <p>{props.Usuarios.date}</p> 
                </div>
            </div>
        </div>
    );
}

export default Post 