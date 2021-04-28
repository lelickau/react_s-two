import React from 'react';
import PostListItem from '../post-list-item/PostListItem';
import './PostList.css';
import {ListGroup} from 'reactstrap';

const PostList = ({posts, onDelete, onToggleImportant, onToggleLiked}) => {
  
  let postItem = posts.map( post => {
    const {id, ...postProps} = post;
    //console.log(id);
    return (<PostListItem 
                key={id} 
                {...postProps} 
                onDelete={() => onDelete(id)} 
                onToggleImportant={() => onToggleImportant(id)}
                onToggleLiked={() => onToggleLiked(id)}
                />)
  });
  

  return (
    <ListGroup className = "app-list">
            {postItem}
    </ListGroup>
  );
}

export default PostList;