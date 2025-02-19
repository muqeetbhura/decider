import type { NextPage } from 'next'
import { Box, Button, Icon, TextField, Typography } from '@mui/material'
import CasinoIcon from '@mui/icons-material/Casino';
import React from 'react';

const Home: NextPage = () => {
  const [value, setValue] = React.useState<any>("");
  const [showOutput, setShowOutput] = React.useState<Boolean>(false);
  const [output, setOutput] = React.useState<String>("");
  const [splitValues, setSplitValues] = React.useState<Array<any>>([]);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const splitInput = () => {
    let temp = "";
    for (let i = 0; i <= value?.length; i++) {
      if (value[i] == ",") {
        splitValues.push(temp);
        temp = "";
      }
      else if (value[i] == " ") {
        continue;
      }
      else if (i == value?.length) {
        splitValues.push(temp);
      }
      else {
        temp += value[i];
      }
    }
  }
  const handleSubmit = () => {
    splitInput();
    setOutput(splitValues[Math.floor(Math.random() * splitValues?.length)]);
    setShowOutput(true);
  }
  return (
    <Box style={{
      borderRadius: '10px',
      boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
      margin: 'auto',
      backgroundColor: '#212226',
      marginBottom: '50px'
    }}
      sx={{
        width: { sm: '400px', md: '900px' }
      }}
    >
      <Box id="Header" style={{ textAlign: 'center', marginTop: '50px' }}>
        <br />
        <br />
        <Typography
          style={{
            fontWeight: '700',
            fontSize: '72px',
            fontFamily: 'Ubuntu, sans-serif',
            color: '#F0EAC3',
            borderRadius: '10px',
            width: '80%',
            margin: '0 auto'
          }}
        >
          <CasinoIcon fontSize="inherit" style={{ position: 'relative', top: '12px', color: '#FF5335' }} />
          Decider
        </Typography>
      </Box>
      <Box id="Description" sx={{ paddingLeft: { sm: '10px', md: '100px' }, paddingRight: { sm: '10px', md: '100px' } }} style={{ textAlign: 'center', backgroundColor: '#FF5335', width: '80%', margin: '0 auto', borderRadius: '10px' }}>
        <Typography style={{ fontSize: '18px', color: 'white', marginTop: '15px', padding: '15px' }}>
          Trying to make a decision but you can&apos;t make up your mind? Look no further! Enter however many options you have, seperated by a comma, and Decider will pick one for you!
        </Typography>
      </Box>
      <br />
      <br />
      <Box id="Prompt" sx={{ paddingLeft: { sm: '10px', md: '100px' }, paddingRight: { sm: '10px', md: '100px' } }} style={{ textAlign: 'center', backgroundColor: '#FF5335', width: '80%', margin: '0 auto', borderRadius: '10px' }}>
        <br />
        <br />
        <TextField
          id="outlined-multiline-static"
          label="Prompt"
          multiline
          variant="outlined"
          value={value}
          onChange={handleChange}
          rows={4}
          inputProps={{ style: { color: "white" } }}
          sx={{
            width: '90%',
            '& label.Mui-focused': {
              color: 'white',
            },
            '& label': {
              color: 'white',
            },
            '& .MuiInput-underline:after': {
              borderBottomColor: 'white',
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'white',
              },
              '&:hover fieldset': {
                borderColor: 'white',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'white',
              },
            },
          }}
        />
        <br />
        <br />
        <br />
      </Box>
      <br />
      <br />
      <Box id="Submit" style={{ textAlign: 'center', paddingLeft: '100px', paddingRight: '100px', backgroundColor: '#FF5335', width: '80%', margin: '0 auto', borderRadius: '10px' }}>
        <br />
        <br />
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#212226',
            width: '100%',
            height: '60px',
            borderRadius: '10px',
            fontSize: '18px',
            fontFamily: "Ubuntu, sans-serif",
            color: '#F0EAC3',
            '&:hover': {
              backgroundColor: 'black'
            },
          }}
          onClick={handleSubmit}
        >
          Submit
        </Button>
        <br />
        <br />
        <br />
      </Box>
      {showOutput && (
        <>
          <br />
          <br />
          <Box id="Output" style={{ textAlign: 'center', paddingLeft: '100px', paddingRight: '100px', backgroundColor: '#FF5335', width: '80%', margin: '0 auto', borderRadius: '10px' }}>
            <br />
            <br />
            <Typography style={{ fontFamily: 'Ubuntu, sans-serif', fontSize: '24px', color: 'white' }}>
              {output}
            </Typography>
            <br />
            <br />
          </Box>
        </>
      )}
      <br />
      <br />
      <br />
      <br />
      <br />
    </Box >
  )
}

export default Home
