import {useState} from 'react';
import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
import classes from './PostsList.module.css';

function PostsList(){
  const[modalIsVisible, setModalIsVisible] = useState(true);
  const[ enteredBody, setEnteredBody ] = useState('');
  const[ enteredAuthor, setEnteredAuthor ] = useState('');

  function hideModalHandler(){
    setModalIsVisible(false);
  }

  function bodyChangeHandler(event){
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event){
    setEnteredAuthor(event.target.value);
  }

    return(
      <>
      {modalIsVisible ? (<Modal onCLose={hideModalHandler}>
      <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler}/>
      </Modal>) : false}
      
      <ul className={classes.posts}>
        <Post author = {enteredAuthor} body = {enteredBody} />
        <Post author = "Harsh" body = "React js is the second best framework" />
      </ul>
      </>
    );
}

export default PostsList;