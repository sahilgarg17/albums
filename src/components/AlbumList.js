import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = { albums: []};
  UNSAFE_componentWillMount() {
    axios
      .get('http://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({albums: response.data}));
  }
  renderAlbums() {
    return this.state.albums.map(fun => <AlbumDetail key={fun.title} propName={fun} />);
  } 
  //fun is a federar function
  render() {
    console.log(this.state);
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;