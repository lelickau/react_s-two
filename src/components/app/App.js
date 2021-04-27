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
      {label: 'Теория - это хорошо, но без практики результата не будет.', important: true, id: 0, },
      {label: 'JS - это язык интерактивности на веб-страницах.', important: false, id: 1, },
      {label: 'Используя различные фрэймворки, JavaScript заполоняет интернет: серверная сторона (Node.js), мобильные приложения (React Native, Ionic), виртуальная реальность (React VR) и так далее.', important: false, id: 2, },
    ],
  } 

  maxId = 5;
  
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

  render() {
      return (
      <AppBlock>
        <AppHeader/>
        <SearchPannelBlock>
          <SearchPannel/>
          <PostStatusFilter/>
        </SearchPannelBlock>
        <PostList posts={this.state.data} onDelete={this.deleteItem} />
        <PostAddForm addPost={this.addItem}/>
      </AppBlock>
    );
  }
  
}

