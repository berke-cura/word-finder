import React, { Component } from "react";
import axios from "axios"

import ('./index.css')

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            letterCount: 0,
            existingLetter : [],
            notExistingLetter: [], 
            letterPlace: [],
            words: '',
            isLoading: false,
    };
    this.click = this.click.bind(this);
    }
    click() {
        this.setState({ isLoading: true });
            const params = {
                letterCount : this.state.letterCount,
                existingLetter: this.state.existingLetter,
                notExistingLetter: this.state.notExistingLetter,
                letterPlace: this.state.letterPlace
            }
        const headers = {'Access-Control-Allow-Origin': '*'}
        
        axios.post("https://word-finder-backend-app.herokuapp.com/", params, headers)
            .then((response) => {
                this.setState({ words: response.data.words })
            })
            .catch((err) => {
                console.log(err)
            });
    }
    render() {
        return (
        <form onSubmit={this.handleSubmit}>
            <div class="grid-containerA">
                <div class="grid-item item1A"><label>LETTER COUNT<input type="text"  name="Letter Count" onChange={(e) => this.setState({ letterCount: e.target.value })} /></label></div>
                <div class="grid-item item2A"><label>EXISTING LETTERS<input type="text"  name="Existing Letters" onChange={(e) => this.setState({ existingLetter: e.target.value.split(',') })}/></label></div>
                <div class="grid-item item3A"><label>NOT EXISTING LETTERS<input type="text"  name="Not Existing Letters" onChange={(e) => this.setState({ notExistingLetter:  e.target.value.split(',') })}/></label></div>  
                <div class="grid-item item4A"><label>LETTER AND PLACE<input type="text"  name="Letter and Place" onChange={(e) => this.setState({ letterPlace: [{ letter: e.target.value.split(',')[0], place: e.target.value.split(',')[1]} ] })}/></label></div>
                <div class="grid-item item5A"><label>RESULTS<input defaultValue={JSON.stringify(this.state.words)} type="text"  name="Results" /></label></div>
                <button type="submit" onClick={this.click}>SEARCH</button>
               {/*  <label class='responseWords'>{JSON.stringify(this.state.words)}</label> */}
            </div>
      </form>

    );
  }
}

export default Home;