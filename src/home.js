import React, { Component } from "react";
import Box from '@mui/material/Box';

import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';



 
class Home extends Component {
    
  render() {
    return (
      <div>
        <h2>HELLO</h2>
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} id="filled-basic" label="Letter Count" margin="normal" variant="outlined"/>
    
        <TextField id="filled-basic" label="Existing Letters" variant="outlined"/>
        <TextField id="filled-basic" label="Not Existing Letters" variant="outlined"/>
        <TextField id="filled-basic" label="Letter Count" variant="outlined"/>
        <Button variant="outlined">Submit</Button>

        
      </div>
     
    </Box>


       
      </div>
      
      
    );
    
  }
  
}
 
export default Home;