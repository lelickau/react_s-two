import React from 'react';
import './PostStatusFilter.css';
import { Button } from 'reactstrap';

const PostStatusFilter = () => {
  return (
    <div className="btn-group">
            <Button color="info">Все</Button>
            <Button color="info" outline >Понравилось</Button>
    </div>
  );
}

export default PostStatusFilter;