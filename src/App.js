import React from 'react';
import './App.css';
import './bootstrap.min.css';
import NavBar from './components/NavBar';
import Contacts from './components/Contacts';
import { Container } from 'react-bootstrap';
// import "bootstrap/dist/js/bootstrap.bundle.js";

function App() {
  return (
    <div className="App">
      <NavBar />
<Container>
<Contacts/>
</Container>      
    </div>
  );
}

export default App;
