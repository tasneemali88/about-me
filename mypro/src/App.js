import React from 'react';
import "./App.css";

function App(){
  return(
    <div className="list-group">
      <div className="list-group-item">
        <img className="img1" src={process.env.PUBLIC_URL + "/images/me.jpg"} alt=""/>
        <h1>Tasneem Ali</h1>
      </div>
      <div className="list-group-item">
        <img className="img2" src={process.env.PUBLIC_URL + "/images/tart.jpg"} alt=""/>
        <h1>17 yrs, 3/5/2004</h1>
      </div>

      <div className="list-group-item">
        <img className="img3" src={process.env.PUBLIC_URL +"/images/location.jpg" } alt="" />
        <h1>Jabalia, North Gaza</h1>
      </div>

      <div className="list-group-item">
        <img className="img4" src={process.env.PUBLIC_URL + "/images/song.jpg"} alt="" />
        <h1>Speechless, Try everything</h1>
      </div>

      <div className="list-group-item">
        <img className="img5" src={process.env.PUBLIC_URL + "/images/facebook.png"} alt="" />
        <a href="https://www.facebook.com/tusneem.ali.1">Facebook</a>
      </div>

      <div className="list-group-item">
        <img className="img6" src={process.env.PUBLIC_URL + "/images/movie.jpg"} alt="" />
        <h1>Titanic, Zootopia</h1>
      </div>

      <div className="list-group-item">
        <img className="img7" src={process.env.PUBLIC_URL + "/images/funfact.jpg"} alt="" />
        <h1>I am afraid of open windows at night and I always quarrel with my sister because she wants to open them and I want to close them (one of the reasons I hate summer)</h1>
      </div>
    </div>
  )
}
export default App;
