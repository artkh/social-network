import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import FriendsContainer from './components/Friends/FriendsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';

const App = (props) => {

  return (
      <div className="wrapper">
        <Header />
        <Navbar /> 
        <main className="main">
          <Route path='/profile' render={ () => <ProfileContainer /> }/>
          <Route path='/dialogs' render={ () => <DialogsContainer /> }/>
          <Route path='/news' component={News}/>
          <Route path='/music' component={Music}/>
          <Route path='/settings' component={Settings}/>
          <Route path='/friends' render={ () => <FriendsContainer /> } />
        </main>
      </div>
  );
}

export default App;
