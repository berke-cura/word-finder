import { useState } from "react";
import axios from "axios";

import('./index.css')

const Home = () => {
  const [letterCount, setLetterCount] = useState()
  const [existingLetter, setExistingLetter] = useState([])
  const [notExistingLetter, setNotExistingLetter] = useState([])
  const [letterAndPlace, setLetterAndPlace] = useState([])
  const [words, setWords] = useState()

  const click = () =>  {
    const params = {
      letterCount : letterCount,
      existingLetter: existingLetter,
      notExistingLetter: notExistingLetter,
      letterPlace: letterAndPlace
  }
  const headers = {'Access-Control-Allow-Origin': '*'}

  axios.post("https://word-finder-backend-app.herokuapp.com/", params, headers)
      .then((response) => {
        setWords(response.data.words)
      })
      .catch((err) => {
          console.log(err)
      });
  }

  return (
    <div className="grid-containerA">
        <div className="grid-item item1A"><label>LETTER COUNT<input type="text"  name="Letter Count"  onChange={(e) => setLetterCount(e.target.value)}/></label></div>
        <div className="grid-item item2A"><label>EXISTING LETTERS<input type="text"  name="Existing Letters"  onChange={(e) => setExistingLetter(e.target.value.split(","))}/></label></div>
        <div className="grid-item item3A"><label>NOT EXISTING LETTERS<input type="text"  name="Not Existing Letters"  onChange={(e) => setNotExistingLetter(e.target.value.split(","))}/></label></div>  
        <div className="grid-item item4A"><label>LETTER AND PLACE<input type="text"  name="Letter and Place"  onChange={(e) => setLetterAndPlace([{letter : e.target.value.split(",")[0], place : e.target.value.split(",")[1]}])}/></label></div>
        <h1>RESULTS</h1>
        <textarea disabled={true} defaultValue={words} ></textarea>
        <button type="submit" onClick={click} >SEARCH</button>
    </div>

);
}

export default Home;