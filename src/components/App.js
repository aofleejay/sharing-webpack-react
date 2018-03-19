import React from 'react'
import { connect } from 'react-redux'
import { randomUser } from '../redux/user'
import logo from '../assets/images/logo.png'
// import './App.css' // CSS version
import './App.scss'

const App = ({ user, randomUser }) => (
  <div className="app">
    <img className="logo" src={logo} />
    <img className="profile-image" src={user.image} />
    <h1 className="name">{user.name}</h1>
    <h2 className="email">{user.email}</h2>
    <button className="random-button" onClick={randomUser}>random</button>
  </div>
)

const mapStateToProps = ({ user }) => ({ user })

export default connect(mapStateToProps, { randomUser })(App)
