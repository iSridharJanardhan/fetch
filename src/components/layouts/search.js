import React, { Component } from "react";
import axios from "axios";
import { Consumer } from "../../context";
import './search.css'

class search extends Component {
  state = {
    trackTitle: ""
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  findTrack = (dispatch, e) => {
    e.preventDefault();
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${
          this.state.trackTitle
        }&apikey=${process.env.REACT_APP_MM_KEY}`
      )
      .then(res => {
        dispatch({
          type: "SEARCH_TRACKS",
          payload: res.data.message.body.track_list
        });

        this.setState({ trackTitle: "" });
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="car car-body mb-4 p-4">
              <h1 className="text-center">Search for a Song</h1>
              <p className="text-center">Get the Lyrics in return</p>
              <form onSubmit={this.findTrack.bind(this,dispatch)}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control from-control-lg"
                    placeholder="enter track song"
                    name="trackTitle"
                    value={this.state.trackTitle}
                    onChange={this.onChange.bind(this)}
                  />
                  <button
                    className="btn btn-main btn-lg btn-primary btn-block mb-5 mt-2"
                    type="submit"
                  >
                    Get Used
                  </button>
                </div>
              </form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default search;
