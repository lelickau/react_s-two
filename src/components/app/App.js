import React from 'react';
import './App.css';
import AppHeader from '../app-header/AppHeader';
import SearchPannel from '../search-panel/SearchPannel';
import PostStatusFilter from '../post-status-filter/PostStatusFilter';
import PostList from '../post-list/PostList';
import PostAddForm from '../post-add-form/PostAddForm';

const App = () => {
  return (
    <div className="app">
      <AppHeader/>
      <div className="search-pannel d-flex">
        <SearchPannel/>
        <PostStatusFilter/>
      </div>
      <PostList/>
      <PostAddForm/>
    </div>
  );
}

export default App;
