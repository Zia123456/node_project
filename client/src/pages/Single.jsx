import React, { useState, useEffect, useContext } from 'react';
import Edit from '../img/edit.png';
import Delete from '../img/delete.png';
import { Link, useLocation } from 'react-router-dom';
import Menu from '../components/Menu';
import axios from 'axios';
import moment from 'moment';
import { AuthContext } from '../context/authContext';

function Single() {
  const [post, setPost] = useState({});
  const location = useLocation();
  const postId = location.pathname.split('/')[2];
  const { curentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts${postId}`);
        if (Array.isArray(res.data)) {
          setPost(res.data);
        } else {
          console.error('API response is not an array:', res.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [postId]);
  return (
    <div className="single">
      <div className="content">
        <img src={post.img} alt="Img" />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Img"
          />
          <div className="info">
            <span>{post.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
          {curentUser.username === post.username && (
            <div className="edit">
              <Link to={`/write?edit=2`}>
                <img src={Edit} alt="Img" />
              </Link>
              <img src={Delete} alt="Img" />
            </div>
          )}
        </div>
        <h1>{post.title}</h1>
        {post.desc}
      </div>
      <Menu />
    </div>
  );
}

export default Single;
