import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends';

const App = (props) => {
  return (
      <div className="wrapper">
        <Header />
        <Navbar friendsData={props.state.friendsPage.friendsData} />
        <main className="main">
          <Route path='/profile' render={ () => <Profile postsData={props.state.profilePage.postsData} 
            dispatch={props.dispatch}
            newPostText={props.state.profilePage.newPostText}  /> }/>
          <Route path='/dialogs' render={ () => <Dialogs dialogsData={props.state.dialogsPage.dialogsData} 
            messagesData={props.state.dialogsPage.messagesData}
            dispatch={props.dispatch}
            newMessageText={props.state.dialogsPage.newMessageText} /> }/>
          <Route path='/news' component={News}/>
          <Route path='/music' component={Music}/>
          <Route path='/settings' component={Settings}/>
          <Route path='/friends' render={ () => <Friends friendsData={props.state.friendsPage.friendsData} /> } />
        </main>
      </div>
  );
}

export default App;
