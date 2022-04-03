import React, { Component } from "react";

import ('./index.css')
const data = ["ahmet", "mehmet", "aslı","ahmet", "mehmet", "aslı","ahmet", "mehmet", "aslı","ahmet", "mehmet", "aslı","ahmet", "mehmet", "aslı"]
const result = data.join(', ')

class Home extends Component {
    
  render() {
        return (
            <div className="grid-containerA">
                <div className="grid-item item1A"><label>LETTER COUNT<input type="text"  name="Letter Count"/></label></div>
                <div className="grid-item item2A"><label>EXISTING LETTERS<input type="text"  name="Existing Letters"/></label></div>
                <div className="grid-item item3A"><label>NOT EXISTING LETTERS<input type="text"  name="Not Existing Letters"/></label></div>  
                <div className="grid-item item4A"><label>LETTER AND PLACE<input type="text"  name="Letter and Place"/></label></div>
                <h1>RESULTS</h1>
                <textarea disabled={true} defaultValue={result}></textarea>
                <button type="submit">SEARCH</button>
            </div>

        );
  }
}

export default Home;