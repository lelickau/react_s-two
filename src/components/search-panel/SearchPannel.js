import React, {Component} from 'react';
import './SearchPannel.css';

export default class SearchPannel extends Component {

  state = {
    term: '',
  }

  onUpdateSearch = (e) => {
    const term = e.target.value;
    this.setState({term});
    this.props.onUpdateSearch(term); //!!не рекурсия
  }

  render() {
    return (
    <input
            className="form-control search-input"
            type="text"
            placeholder="Поиск по записям"
            onChange={this.onUpdateSearch}
        />
    )
  }
}

