import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const App = (props) => {

  // let postsData = [
  //   { id: 1, message: 'Hey, what are you doing?', like: 10 },
  //   { id: 2, message: 'Hello World!', like: 20 },
  // ];

  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Navbar />
        <main className="main">
          <Route path='/profile' render={ () => <Profile data={props.data} />}/>
          <Route path='/dialogs' component={Dialogs}/>
          <Route path='/news' component={News}/>
          <Route path='/music' component={Music}/>
          <Route path='/settings' component={Settings}/>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
