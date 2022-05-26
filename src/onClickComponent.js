import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@mui/material/Box";
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));
const onAddBtnClick = event => {
  var inval = document.getElementById("outlined-basic").value;
  console.log(`Value of ${inval} clicked`) 
  alert(`${inval}Value of max in y clicked` );
  return inval;
  
};
export default function CenteredGrid() {
  const classes = useStyles();

  return (
   
  
   <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
        <Box
    component="form"
    sx={{
      '& > :not(style)': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
    >
    <Grid item xs={4}>
    <TextField id="outlined-basic" label="Set Y Axix Maximum" variant="outlined" />
          <Paper
            className={classes.paper}
            onClick={() => {onAddBtnClick();
            }}
          >
            SET
          </Paper>
        </Grid>

    </Box>
   
    </Grid>  
    </Grid>
    </div>
  );
}