import React from 'react';
import Edit from '../img/edit.png';
import Delete from '../img/delete.png';
import { Link } from 'react-router-dom';
import Menu from '../components/Menu';

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
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="Img" />
            </Link>
            <img src={Delete} alt="Img" />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium
          inventore non quia, voluptatem veritatis consequatur repudiandae cum.
          Exercitationem quod officiis, reprehenderit porro iure facere quas
          quia totam non eum laborum similique harum molestias, et blanditiis
          explicabo mollitia repellat saepe inventore suscipit quaerat. Nesciunt
          cumque aut odit dolore incidunt. Veniam, voluptate. Quidem tempore
          perspiciatis commodi, incidunt magnam soluta asperiores libero odio
          fugiat iste similique recusandae harum delectus dolores blanditiis
          eligendi corrupti quo ex est quod pariatur. Ab, voluptatum natus animi
          eum dicta ex molestias quam quia temporibus. Temporibus, tempore! Ipsa
          magni accusamus, quaerat nihil non fugit sapiente hic! Quasi,
          accusamus aliquam. Lorem ipsum dolor, sit amet consectetur adipisicing
          elit.Ipsa commodi quasi possimus eos nobis atque recusandae. Iure quae
          quidem ratione itaque incidunt inventore perferendis eos nostrum neque
          alias architecto, odio facere! Aspernatur quae dicta id fuga quam vel
          aperiam dolorum!
        </p>
      </div>
      <Menu />
    </div>
  );
}

export default Single;
