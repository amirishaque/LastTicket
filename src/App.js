import './App.css';
import Loader from './components/pageloader/loader';
import CreateRoutes from './components/routes/Routes';
import React, { useState, useEffect } from 'react';

const App = () => { 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data with a timeout
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <Loader />;
  }
  

  return(
    <>
      <div id="wrapper">
        {/* <main id="main"> */}
          <CreateRoutes />
        {/* </main> */}
      </div>
    </>
  )
}
export default App



