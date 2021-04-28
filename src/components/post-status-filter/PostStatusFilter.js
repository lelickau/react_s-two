import React, { Component } from 'react';
import './PostStatusFilter.css';
import { Button } from 'reactstrap';

export default class PostStatusFilter extends Component {
  button = [
    {name: 'all', label: 'Все', color: 'info'},
    {name: 'like', label: 'Понравилось', color: 'info'},
  ]

  render() {
    const buttons = this.button.map(({name, label, color}) => {
      const {filter, onFilterSelect} = this.props;
      const active = filter === name;
      const outlineBtn = active ? false : true;
      return (
        <Button 
          key={name} 
          outline={outlineBtn} 
          color={color}
          onClick={() => onFilterSelect(name)}
          >{label}</Button>
      )
    })
    return (
      <div className="btn-group">
        {buttons}
      </div>
    )
  }
  
}
