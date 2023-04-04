
import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
   let {title, description,imageurl,newsurl,author,date,source} = this.props;
    return (
      <div>
          <div className="card" >
  <img src={!imageurl?"https://motionarray.imgix.net/preview-327986-dY2hb6egMT-high_0015.jpg":imageurl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}... <h4><span className="badge bg-info text-dark">{source}</span></h4></h5>
    <p className="card-text">{description}...</p>
    <p className="card-text"><small className="text-muted">By {!author ?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
    <a rel="noopener noreferrer" href={newsurl}target="_blank" className="btn  btn-sm btn-dark">Read More</a>
  </div>
</div>

          </div>
    )
  }
}

export default Newsitem