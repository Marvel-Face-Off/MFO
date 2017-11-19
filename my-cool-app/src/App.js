import React, { Component } from 'react';
import axios from 'axios';
import md5 from 'md5';

class App extends Component {

  constructor() {
    super();

    // initial default state
    this.state = {
      searchText: '',
      response: []
    };

  }

  render() {

    const heroes = this.state.response;
    console.log(heroes);


    return (
      <div>
        <input
          placeholder='search'
          onChange={(event) => this.handleChange(event)}
        />
        <button onClick={() => this.handleClick()}>
          go
        </button>
        <h3>
          {this.state.searchText}
        </h3>
        <p>
          hero: { heroes.length > 0 ? heroes[0].name : ""}
        </p>
        <p>
          bio: { heroes.length > 0 ? heroes[0].description : ""}
        </p>

        <img
          src = { heroes.length > 0 ? heroes[0].thumbnail.path+'.'+heroes[0].thumbnail.extension : ""}
          width="50%"
          height="50%"
          >
        </img>

      </div>
    );
  }

  componentDidMount() {
    let date = new Date();
    let ts = date.getTime().toString();
    let publickey = "3ebfa70440b616a86216298f97fa42ed";
    let privatekey = "6ce518b1fc2eab73750129ec04048158fb930961";
    let hash = md5(ts+privatekey+publickey);
    // console.log(hash);
    // console.log(ts);

    let configuration = {
      params: {
        offset: 300,
        // name:'hulk',
        ts: ts,
        apikey: publickey,
        hash: hash
      }
    }

    axios

      .get('https://gateway.marvel.com:443/v1/public/characters',configuration)

      // .get('http://www.omdbapi.com/', configuration)
      .then((res) => {
        console.log(res.data.data.results);
        this.setState({
          response: res.data.data.results
        });
      });

  }

  handleChange(event) {
    this.setState({
      searchText: event.target.value
    });
  }

  handleClick() {

    const configuration = {
      params: {
        apiKey: '6d994fb3',
        t: this.state.searchText
      }
    }

    axios
      .get('http://www.omdbapi.com/', configuration)
      .then(res => {
        console.log(res);
        this.setState({
          response: res.data
        });
      })
      .catch(error => console.log(error))

  }
}

export default App;
