import React from 'react';
import './PostListItem.scss';

const PostListItem = ({label, onDelete, onToggleLiked, onToggleImportant, important, like}) => {

    let classNames = 'app-list-item d-flex justify-content-between';

    if (important) {
        classNames+= ' important';
        
    }

    if (like) {
        classNames+= ' like';
        
    }

    return (
        <li className={classNames}>
            <span 
                className="app-list-item-label"
                onClick={onToggleLiked}>
                {label}
            </span>
            <div className="d-flex justify-content-center align-items-center">
                <button 
                    className="btn-star btn-sm"
                    onClick={onToggleImportant}>
                    <i className="fa fa-star"></i>
                </button>
                <button
                    onClick={onDelete} 
                    className="btn-trash btn-sm">
                    <i className="fa fa-trash-o"></i>
                </button>
                <i className="fa fa-heart"></i>
            </div>
        </li>
    );
}

export default PostListItem;
