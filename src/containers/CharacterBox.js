import React from "react";

class CharacterBox extends React.Component {


  componentDidMount() {
    console.log("CharacterBox mounted");
  }

  render() {
    return (
      <div className="character-input">
        <form action="">
          Name: <input name="char-name" type="text"/>
          Race: <select name="race" id="">
            <option value="dwarf">Dwarf</option>
            <option value="elf">Elf</option>
            <option value="gnome">Gnome</option>
            <option value="half-elf">Half-Elf</option>
            <option value="half-orc">Half-Orc</option>
            <option value="human">Human</option>
          </select>
          Class: <select name="char-class" id="">
            <option value="assassin">Assassin</option>
            <option value="cleric">Cleric</option>
            <option value="druid">Druid</option>
            <option value="fighter">Fighter</option>
            <option value="illusionist">Illusionist</option>
            <option value="magic-user">Magic User</option>
            <option value="paladin">Paladin</option>
            <option value="ranger">Ranger</option>
            <option value="thief">Thief</option>
          </select>
          Attributes:
            Strength <input type="number" defaultValue="10"/>
            Dexterity <input type="number" defaultValue="10"/>
            Constitution <input type="number" defaultValue="10"/>
            Intelligence <input type="number" defaultValue="10"/>
            Wisdom <input type="number" defaultValue="10"/>
            Charisma <input type="number" defaultValue="10"/>
        </form>
      </div>
    )
  }
}

export default CharacterBox;
