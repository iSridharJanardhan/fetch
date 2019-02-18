import React, { Component } from 'react'
import Tracks from '../tracks/tracks.component'
import {Consumer} from '../../context'
import Spinner from './spinner'
import Track from './Track'
import Search from './search'
export default class index extends Component {
  
  render() {
    return (
      <Consumer >
          {value => {
              const {track_list,heading} = value
              if(track_list === undefined || track_list === 0 ){
                  return <Spinner />
              }
              else{
                  return (
                      <React.Fragment>
                        <Search/>
                          <h3 className="text-center b-4" >{heading}</h3>
                      <div className="row">
                        {track_list.map(item => (
                            <Track key={item.track.track_id} track={item.track}/>
                        ))}
                      </div>
                      </React.Fragment>
                  )
              }
          }}
      </Consumer>
    )
  }
}
