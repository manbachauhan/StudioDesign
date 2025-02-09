import React from 'react';
import Header from './Component/Header';
import Section1 from './Component/Section1';
import { CssBaseline,Box } from '@mui/material';
import Section2 from './Component/Section2';
import Section3 from './Component/Section3';
import Section5 from './Component/Section5';
import Section7 from './Component/Section7';
import Section8 from './Component/Section8';
import Section4 from './Component/Section4';
import Section6 from './Component/Section6';
import Footer from './Component/Footer';

const App = () => {
  return (
    <Box >
      <CssBaseline />
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4/>
      <Section5 />
      <Section6/>
      <Section7/>
      <Section8/>
      <Footer/>
    </Box>
  );
}

export default App;
