import React from "react";
import CharacterBoxForm from "../components/CharacterBoxForm";
import HeroesGallery from '../components/HeroesGallery';


class CharacterBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      name: null,
      charRace: null,
      charClass: null,
      charAlignment: null
    }
    this.handleSubmitClick = this.handleSubmitClick.bind(this);
  }
  componentDidMount() {
    console.log("CharacterBox mounted");
  }

  handleSubmitClick(event) {
    const characterName = document.querySelector('#char-name')
    const characterRace = document.querySelector('#race')
    const characterClass = document.querySelector('#character-class')
    const characterAlignment = document.querySelector('#alignment')
    console.log(characterName.value);
    console.log(characterRace.value);
    console.log(characterClass.value);
    console.log(characterAlignment.value);
    this.setState({
      name: characterName.value,
      charRace: characterRace.value,
      charClass: characterClass.value,
      charAlignment: characterAlignment.value,
    })
  }

  render() {
    return (
      <div className="character-input">
        <CharacterBoxForm handleSubmit={this.handleSubmitClick}/>
        <button onClick={this.handleSubmitClick}>Submit</button>
        <HeroesGallery
          charName={this.state.name}
          characterClass={this.state.charClass}/>
        </div>
      )
    }
  }

  export default CharacterBox;
