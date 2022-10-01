import { Routes,Route, useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Game from './components/Game/Game';
import Rule from './components/Rules/Rule';
import './App.css'
import React from 'react'
import Modal from './components/Modal/Modal';
import HandProvider from './components/HandProvider';
import { AnimatePresence } from 'framer-motion';



function App() {
  const location = useLocation()
  console.log(location)
  const [showModal,setShowModal] = React.useState(false)
  console.log(showModal)
  return (
    <div className='container'>
      <Modal setShowModal={setShowModal} showModal={showModal}/>
      <HandProvider>
        <Header />
       <AnimatePresence exitBeforeEnter >
          <Routes location={location} key={location.key} >
            <Route path="/" element={<Home />}/>
            <Route path="game" element={<Game />}/>
          </Routes>
       </AnimatePresence>
      </HandProvider>
      <Rule  showModal={showModal} setShowModal={setShowModal}/>
    </div>
  );
}

export default App;
