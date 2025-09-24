import React from 'react';
import Landingpage from './pages/landingpage';

function App() {
  return (
    <>
      <style>{`
        html {
          scroll-behavior: smooth;
          font-family: 'Inter', sans-serif;
        }
        body {
          margin: 0;
          font-family: 'Inter', sans-serif;
        }
      `}</style>

      <Landingpage />
    </>
  );
}

export default App;
