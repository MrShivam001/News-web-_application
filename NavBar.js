
import React, { Component } from 'react'
//import{ Link, Router useNavigate, useParams } from 'react-router-dom';
export class navbar extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">NewsApp</a >
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/">Home</a >
        </li>
        <li className="nav-item">
          <ul>
          <li className="nav-item"><a className="nav-link" href="/">About</a ></li>
          
          </ul>
        </li>
        
        {/*<li className="nav-item dropdown">
         <a className="nav-a dropdown-toggle  active" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            News Category
          </a >
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/business">Business</Link ></li>
            <li><Link className="dropdown-item" to="/entertainment">Entertainment</Link ></li>
            <li><Link className="dropdown-item" to="/science">Science</Link ></li>
            <li><Link className="dropdown-item" to="/sports">Sports</ Link></li>
            <li><Link className="dropdown-item" to="/healthandlifestyle">Health And Lifestyle</Link ></li>
            <li><Link className="dropdown-item" to="/technology">Technology</Link ></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="/general">General</Link ></li>
          </ul>
    </li>*/}
        
      </ul>
      
    </div>
  </div>
</nav>

      </div>
    )
  }
 
}

export default navbar