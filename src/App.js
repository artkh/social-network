import React, { Suspense } from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import HeaderContainer from './components/Header/HeaderContainer';
import { initializeAppThunk } from './redux/app-reducer';
import { connect } from 'react-redux';
import Preloader from './components/elements/Preloader';

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer')); //ленивая загрузка для компонент
const FriendsContainer = React.lazy(() => import('./components/Friends/FriendsContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const Login = React.lazy(() => import('./components/Login/Login'));

class App extends React.Component {

  componentDidMount() {
    this.props.initializeAppThunk();
  }

  render() {
  if(!this.props.initialized) { //пока инициализация не закончена, показывается прелоадер
      return <Preloader />
    }
    return (
      <div className="wrapper">
        <HeaderContainer />
        <Navbar />
        <main className="main">
          <Route path='/profile/:userId?' render={ () => {
            return <Suspense fallback={<Preloader />}> {/*при задержке показывается прелоадер*/}
              <ProfileContainer /> {/*когда компонента загрузилась, она отрисовывается*/}
            </Suspense>
          } }/>
          <Route path='/dialogs' render={ () => {
            return <Suspense fallback={<Preloader />}>
              <DialogsContainer />
            </Suspense>
          } }/>
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
          <Route path='/friends' render={ () => {
            return <Suspense fallback={<Preloader />}>
              <FriendsContainer />
            </Suspense>
          } } />
          <Route path='/login' render={ () => {
            return <Suspense fallback={<Preloader />}>
              <Login />
            </Suspense>
          } } />
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized
  }
}

export default connect(mapStateToProps, { initializeAppThunk })(App);
