import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'


 class lyrics extends Component {
     state={
         tracks:{},
         lyrics:{}
     }
     componentDidMount(){
      axios.get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this.props.match.params.id}&apikey=${
          process.env.REACT_APP_MM_KEY
        }`
      )
      .then(res => {
          console.log(res.data.message.body.lyrics.lyrics_body);
          this.setState({
            lyrics:res.data.message.body.lyrics
        })
        return axios.get(
          `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=${this.props.match.params.id}&apikey=${
            process.env.REACT_APP_MM_KEY
          }`
      )})
      .then(res =>this.setState({
        tracks:res.data.message.body.track
    }))    
    }

      
  render() {
    const{tracks, lyrics} = this.state
    console.log(tracks)

    return (
      <React.Fragment>
        <Link to="/" className="btn btn-dark btn-sm mb-4">Back</Link>
        <div className="card">
          <h5 className="card-header">
            {tracks.album_name} by <span className="text-secondary">{tracks.artist_name}</span >
          </h5>
          <div className="card-body">
            <p>{lyrics.lyrics_body}</p>
          </div>
        </div>
        <ul className="list-group mt-3">
          <li className="list-group-item">
            <strong>Album ID</strong>: {tracks.album_id}
          </li>
          <li className="list-group-item">
            <strong>Explicit words</strong>: {tracks.explicit === 0 ?'No':'yes'}
          </li>
          <li className="list-group-item">
            <strong>Rating </strong>: {tracks.track_rating}
          </li>
          
        </ul>
      </React.Fragment>
    )
  }
}

export default lyrics