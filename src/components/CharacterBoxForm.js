import React from "react";

const CharacterBoxForm = (props) => {
  console.log("CharacterBoxForm mounted");
  return (
    <form action="">
      Name: <input name="char-name" type="text" id="char-name"/>
      <div className="Race">
        <div className="tooltip">Race:
          <span className="tooltiptext">Tooltip text</span>
        </div>
        <select name="race" id="race">
          <option value="dwarf">Dwarf</option>
          <option value="elf">Elf</option>
          <option value="gnome">Gnome</option>
          <option value="half-elf">Half-Elf</option>
          <option value="half-orc">Half-Orc</option>
          <option value="human">Human</option>
        </select>
      </div>

      <div className="character-class">
        Class: <select name="char-class" id="character-class">
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
      </div>

      <div className="char-level">
        Level: <input type="number" defaultValue="1" max="20" id="level"/>
      </div>

      <div className="attributes">
        Attributes:

        <div className="" id="str">Strength <input type="number" defaultValue="10" min="0"/></div>

        <div className="" id="dex">Dexterity <input type="number" defaultValue="10" min="0"/></div>

        <div className="" id="con">Constitution <input type="number" defaultValue="10" min="0"/></div>

        <div className="" id="int">Intelligence <input type="number" defaultValue="10" min="0"/></div>

        <div className="" id="wis">Wisdom <input type="number" defaultValue="10" min="0"/></div>

        <div className="" id="cha">Charisma <input type="number" defaultValue="10" min="0"/></div>

      </div>

      <div className="char-alignment">
        Alignment: <select name="alignment" id="alignment">
          <option value="lg">Lawful Good</option>
          <option value="ng">Neutral Good</option>
          <option value="cg">Chaotic Good</option>
          <option value="ln">Lawful Neutral</option>
          <option value="tn">True Neutral</option>
          <option value="cn">Chaotic Neutral</option>
          <option value="le">Lawful Evil</option>
          <option value="ne">Neutral Evil</option>
          <option value="ce">Chaotic Evil</option>
        </select>
      </div>
      {/* <button onClick={this.props.handleSubmit} type="submit">Submit</button> */}
    </form>

  )
}

export default CharacterBoxForm;
