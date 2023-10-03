import React from 'react';
import Edit from '../img/edit.png';
import Delete from '../img/delete.png';

function Single() {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Img"
        />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Img"
          />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <img src={Edit} alt="Img" />
            <img src={Delete} alt="Img" />
          </div>
        </div>
      </div>
      <div className="menu">menu</div>
    </div>
  );
}

export default Single;
