import React from 'react'
import { hot } from 'react-hot-loader'
import banner from './assets/images/vans.jpg'
import './App.css'

const App = () => (
  <div>
    <img src={banner} />
    <h1 className="header">Hello World.</h1>
  </div>
)

export default hot(module)(App)
