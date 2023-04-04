import './App.css';
import NavBar from './components/NavBar';
import News from './components/News';
import React, { Component } from 'react'
import LoadingBar from 'react-top-loading-bar'
import {  BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export class App extends Component {
  static propTypes = {}
pageSize=5;
state ={
  progress:0
}
setProgress=(progress)=>{
  this.setState({progress:progress})
}
  render() {
    return (
      <div>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        
      />
     <NavBar/>
     <Router>
     <ul className="nav-item dropdown" style={{background:'darkgrey'}}>
         <a className="nav-a dropdown-toggle  active " href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"  >
           <strong style={{color: 'black',textDecoration:"none",fontSize:'25px'}}> News Category</strong>
          </a >
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" style={{fontSize:'20px'}}to="/business">Business</Link ></li>
            <li><Link className="dropdown-item" style={{fontSize:'20px'}}to="/entertainment">Entertainment</Link ></li>
            <li><Link className="dropdown-item" style={{fontSize:'20px'}}to="/science">Science</Link ></li>
            <li><Link className="dropdown-item" style={{fontSize:'20px'}}to="/sports">Sports</ Link></li>
           
            <li><Link className="dropdown-item" style={{fontSize:'20px'}}to="/technology">Technology</Link ></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" style={{fontSize:'20px'}} to="/">General</Link ></li>
          </ul>
    </ul>
     
      <Routes>
        <Route path="/" element={<News setProgress={this.setProgress}     key="general" pageSize={this.pageSize} country='in' category='General'/>} />general
        <Route path="/sports" element={<News setProgress={this.setProgress}     key="sports" pageSize={this.pageSize} country='in' category='Sports'/>} />
        <Route path="/science" element={<News setProgress={this.setProgress}     key="science" pageSize={this.pageSize} country='in' category='Science'/>} />
        <Route path="/entertainment" element={<News setProgress={this.setProgress}     key="entertainment" pageSize={this.pageSize} country='in' category='Entertainment'/>} />
        
        <Route path="/business" element={<News setProgress={this.setProgress}     key="business" pageSize={this.pageSize} country='in' category='Business'/>} />
        <Route path="/technology" element={<News setProgress={this.setProgress}     key="technology" pageSize={this.pageSize} country='in' category='Technology'/>} />
      </Routes>
        </Router>
      </div>
    )
  }
}

export default App
