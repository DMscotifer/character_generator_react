import React from "react";
import CharacterBoxForm from "../components/CharacterBoxForm";

class CharacterBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      name: null
    }
    // this.handleCountrySelect = this.handleCountrySelect.bind(this);
  }
  componentDidMount() {
    console.log("CharacterBox mounted");
  }

  handleSubmitClick(event) {
    // const countryIndex = event.target.value;
    // const country = this.state.countries[countryIndex];
    const characterName = document.querySelector('#char-name')
    console.log("Submit Clicked", event, characterName.value);
    // this.setState({selectedCountry: country})
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
