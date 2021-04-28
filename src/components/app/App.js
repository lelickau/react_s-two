import React, { Component } from 'react';
import AppHeader from '../app-header/AppHeader';
import SearchPannel from '../search-panel/SearchPannel';
import PostStatusFilter from '../post-status-filter/PostStatusFilter';
import PostList from '../post-list/PostList';
import PostAddForm from '../post-add-form/PostAddForm';
import styled from 'styled-components';

const AppBlock = styled.div`
    padding-top: 50px;
    margin: 0 auto;
    max-width: 800px;
    padding-bottom: 50px;
`;
const SearchPannelBlock = styled.div`
    margin-top: 15px;
    margin-bottom: 15px;
    display: flex;
`;
export default class App extends Component {

  state = {
      data: [
      {label: 'Теория - это хорошо, но без практики результата не будет.', important: true, id: 0, like: false},
      {label: 'JS - это язык интерактивности на веб-страницах.', important: false, id: 1, like: false},
      {label: 'Используя различные фрэймворки, JavaScript заполоняет интернет: серверная сторона (Node.js), мобильные приложения (React Native, Ionic), виртуальная реальность (React VR) и так далее.', important: false, id: 2, like: true},
    ],
    term: '',
    filter: 'all',
  } 

  filterPosts = (items, filter) => {
    if (filter === 'like') {
      return items.filter( item => item.like);
    } else {
      return items
    }
  }

  onFilterSelect = (filter) => {
    this.setState({filter})
  }

  onToggle = (id, toggle) => {
    this.setState(({data}) => {
      const index = data.findIndex((elem) => elem.id === id);
      const old = data[index];
      const newItem = {...old, [toggle]: !old[toggle]};
      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
      return {
        data: newArr
      }
    })
  }
  onToggleImportant = (id) => {
      this.onToggle(id, "important");
  }

  onToggleLiked = (id) => {
    this.onToggle(id, "like");
  }

  
  deleteItem = (id) => {
    this.setState(({data}) => {
      const index = data.findIndex((elem) => elem.id === id);
      // const before = data.slice(0, index);
      // const after = data.slice(index + 1);
      // const newArr = {...before, ...after};
      const newArr = [...data.slice(0, index), ...data.slice(index + 1)];
      return {
        data: newArr
      }
    })
  }

  addItem = (body) => {
    //console.log(body);
    let indexId = this.state.data.length;
    const newPost = {
      label: body,
      important: false,
      id: indexId
    }
    //console.log(this.state.data.length);
    this.setState(({data}) => {
      const newArr = [...data, newPost];
      return {
        data: newArr
      }
    })
  }

  searchPost = (items, term) => {
    if(term.length === 0) {
      return items
    }

    return items.filter((item) => {
      return item.label.indexOf(term) > -1
    })
  }

  onUpdateSearch = (term) => {
    this.setState({term})
  }

  render() {
    const {data, term, filter} = this.state;
    const liked = data.filter(item => item.like).length;
    const allPosts = data.length;

    const visiblePosts = this.filterPosts(this.searchPost(data, term), filter);
      return (
      <AppBlock>
        <AppHeader 
          liked={liked}
          allPosts={allPosts}
        />
        <SearchPannelBlock>
          <SearchPannel
            onUpdateSearch={this.onUpdateSearch}
          />
          <PostStatusFilter
            filter={filter}
            onFilterSelect={this.onFilterSelect}
          />
        </SearchPannelBlock>
        <PostList 
          posts={visiblePosts} 
          onDelete={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleLiked={this.onToggleLiked} />
        <PostAddForm 
          addPost={this.addItem} />
      </AppBlock>
    );
  }
  
}

