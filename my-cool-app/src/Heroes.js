import React, { Component } from 'react';
import axios from 'axios';
import md5 from 'md5';


class Heroes extends Component {

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
          src = { heroes.length > 0 ? heroes[0].thumbnail.path+'.'+heroes[0].thumbnail.extension : 'https://media.giphy.com/media/3oriOiizS4Pmofj46A/giphy.gif'}
          width="20%"
          height="20%"
          >
        </img>
        <p>
          <button onClick={() => this.handleClick()}>
            refresh
          </button>
        </p>
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
        if(res.data.data.results[0].thumbnail.path !== "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available" && "http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708"){

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

  handleClick() {
    // this.componentDidMount();
    document.location.reload()();

  }


}

export default Heroes;