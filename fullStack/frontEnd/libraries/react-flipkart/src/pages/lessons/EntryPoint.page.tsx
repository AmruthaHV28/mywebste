import { AccountCircle } from "@mui/icons-material";
import { Box, Button, Grid, InputAdornment, Paper, TextField, Toolbar } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export let EntryPoint:React.FC<{}> = ()=>{
    return<>
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <Toolbar/>
    <Paper elevation={3} >
   <Grid></Grid>
    <Grid
  container
  direction="column"
  justifyContent="space-evenly"
  alignItems="center"
>

       
    <TextField
        id="input-with-icon-textfield"
        label="Name"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />  

      <br />

      <div className="vspace2em"></div>
      <TextField
          id="filled-textarea"
          type="email"
          label="Email ID"
          placeholder="email id"
          variant="filled"
        />
      <br />   <div></div>
      <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />

<Button variant="contained">Login</Button>
<br />
           <Link to='/lessons/lesssons'>
        <Button variant="contained">lessons</Button>
        </Link>  
          

        </Grid>
        </Paper>
    </Box>
    </>
}