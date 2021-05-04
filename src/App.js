import React from 'react'
import './App.css';
import Header from './Components/Header';
import Recomended from './Components/Recomended';
import Sidebar from './Components/Sidebar';
function App() {
  return (
    <div>
      {/* header component */}
        <Header/>
      {/* sidebar  component*/}
      <div className="main__area">
          <Sidebar className="main__area_sidebar"/>
        {/* Recomended component */}
          <Recomended />
      </div>
        
    </div>
  );
}

export default App;
