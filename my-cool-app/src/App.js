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
    // console.log(heroes);

    return (
      <div>
        <h3>
          {this.state.searchText}
        </h3>
        <p>
          hero: { heroes.length > 0 ? heroes[0].name : ""}
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
    let min = 0;
    let max = 1490;
    let random = Math.floor(Math.random() * (max - min + 1)) + min;
    let configuration = {
      params: {
        offset: random,
        limit: 1,
        ts: ts,
        apikey: publickey,
        hash: hash
      }
    }

    axios

      .get('https://gateway.marvel.com:443/v1/public/characters',configuration)
      .then((res) => {
        // console.log(res.data.data.results);
        // console.log(res.data.data.results[0].thumbnail);
        if(res.data.data.results[0].thumbnail.path !== "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"){

          this.setState({
            response: res.data.data.results

          });
      }

      else{
        console.log('worked');
        this.componentDidMount();
      }
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
