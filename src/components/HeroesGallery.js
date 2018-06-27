import React from 'react';

class HeroesGallery extends React.Component {
  render() {
    return (
      <div>
        <h1>Heroes Gallery</h1>
        <h2>{this.props.charName} the {this.props.characterClass}</h2>
      </div>
    )
  }
}

export default HeroesGallery;
