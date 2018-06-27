import React from "react";
import CharacterBoxForm from "../components/CharacterBoxForm";

class CharacterBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      name: null
    }
    this.handleSubmitClick = this.handleSubmitClick.bind(this);
    // this.handleCountrySelect = this.handleCountrySelect.bind(this);
  }
  componentDidMount() {
    console.log("CharacterBox mounted");
  }

  handleSubmitClick(event) {
    // const countryIndex = event.target.value;
    // const country = this.state.countries[countryIndex];
    const characterName = document.querySelector('#char-name')
    const characterRace = document.querySelector('#race')
    const characterClass = document.querySelector('#character-class')
    const characterAlignment = document.querySelector('#alignment')
    console.log(characterName.value);
    console.log(characterRace.value);
    console.log(characterClass.value);
    console.log(characterAlignment.value);
    // this.setState({selectedCountry: country})
    this.setState({name: characterName.value})
  }

  render() {
    return (
      <div className="character-input">
        <CharacterBoxForm handleSubmit={this.handleSubmitClick}/>
        <button onClick={this.handleSubmitClick}>Submit</button>
        {/* <CharacterDetails details={characters}/> */}
      </div>
    )
  }
}

export default CharacterBox;
