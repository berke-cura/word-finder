import React, { Component }  from "react";


class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="create">
        
          <form onSubmit={this.handleSubmit}>
      <fieldset className="berfin">
         <label>LETTER COUNT<input type="text"  name="Letter Count" /></label>
         <label>EXISTING LETTERS<input type="text"  name="Existing Letters" /></label>
         <label>NOT EXISTING LETTERS<input type="text"  name="Not Existing Letters" /></label>
         <label>LETTER AND PLACE<input type="text"  name="Letter and Place" /></label>
       </fieldset>
       <button type="submit">SEARCH</button>
      </form>
      </div>
    );
  }
}
 
export default Home;