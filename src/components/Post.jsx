function Post(){
    return(
        <ul>
            <li className={classes.posts}>
                <p className={classes.author}>{props.author}</p>
                <p className={classes.text}>{props.body}</p>
            </li>
        </ul>
    );
}

export default Post;