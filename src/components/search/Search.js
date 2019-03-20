import React, { Component } from 'react';
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import axios from 'axios';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      amount: 15,
      apiUrl: 'https://pixabay.com/api/',
      apiKey: '1691336-be24ff7fc7a7550fd55b7cf62',
      images: []
    }
    this.onTextChange = this.onTextChange.bind(this);
  }

  onTextChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    },
    () => {
      axios.get(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safesearch=true`)
        .then(res => this.setState({
          images: res.data.hits
        }))
        .catch(err => console.log(err))
    }
    );
  }

  render() {
    return(
      <div>
        <TextField 
          name="searchText"
          value={this.state.searchText}
          onChange={this.onTextChange}
          floatingLabelText="Search For Images"
          fullWidth={true}
        />
        <br/>
        <SelectField
          name="amount"
          floatingLabelText="Amount"
          value={this.state.amount}
          onChange={this.onAmountChange}
        >
          <MenuItem value={5} primaryText="5" />
          <MenuItem value={10} primaryText="10" />
          <MenuItem value={15} primaryText="15" />
          <MenuItem value={30} primaryText="30" />
          <MenuItem value={50} primaryText="50" />
        </SelectField>
        <br/>
      </div>
    );
  }
}

export default Search;