import React from 'react';
import AppRouter from "./app/providers/AppRouter";
import Header from "./components/header/Header";

function App() {
  return (
    <div className='app'>
        <Header/>
        <AppRouter/>
    </div>
  );
}

export default App;
