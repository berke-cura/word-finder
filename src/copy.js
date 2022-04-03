import React, { Component } from "react";

import ('./index.css')

class Home extends Component {
    
    render() {
        return (
        <form onSubmit={this.handleSubmit}>
            <div className="grid-containerA">
                <div className="grid-item item1A"><label>LETTER COUNT<input type="text"  name="Letter Count"/></label></div>
                <div className="grid-item item2A"><label>EXISTING LETTERS<input type="text"  name="Existing Letters"/></label></div>
                <div className="grid-item item3A"><label>NOT EXISTING LETTERS<input type="text"  name="Not Existing Letters"/></label></div>  
                <div className="grid-item item4A"><label>LETTER AND PLACE<input type="text"  name="Letter and Place"/></label></div>
                <div className="grid-item item5A"><label>RESULTS<input type="text"  name="Results" /></label></div>
                <button type="submit">SEARCH</button>
            </div>
      </form>

    );
  }
}

export default Home;