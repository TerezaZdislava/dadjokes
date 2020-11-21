import React, { useState } from 'react';
import './style.css';
import '../assets/img/user01.png';
import '../assets/img/user02.png';
import '../assets/img/user03.png';
import '../assets/img/user04.png';
import '../assets/img/user05.png';
import '../assets/img/user06.png';
import '../assets/img/user07.png';
import '../assets/img/user08.png';
import '../assets/img/user09.png';

const Joke = (props) => {
  const [upLikes, setUpLikes] = useState(props.likes);
  const [downLikes, setDownLikes] = useState(props.dislikes);

  const handleUpLikes = () => {
    setUpLikes(upLikes + 1);
  };
  const handleDownLikes = () => {
    setDownLikes(downLikes + 1);
  };

  return (
    <div className="joke">
      <div className="joke__body">
        <div className="joke__user">
          <img
            className="user-avatar"
            src={'../assets/img/' + props.id + '.png'}
          />
          <p className="user-name">{props.name}</p>
        </div>

        <p className="joke__text">{props.text}</p>
      </div>
      <div className="joke__likes">
        <button
          id="btn-up"
          className="btn-like btn-like--up"
          onClick={handleUpLikes}
        ></button>
        <span id="likes-up" className="likes-count likes-count--up">
          {upLikes}
        </span>
        <button
          id="btn-down"
          className="btn-like btn-like--down"
          onClick={handleDownLikes}
        ></button>
        <span id="likes-down" className="likes-count likes-count--down">
          {downLikes}
        </span>
      </div>
    </div>
  );
};

export default Joke;
