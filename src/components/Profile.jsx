import React from 'react';

const Profile = () => {
  return (
    <main className="main">
      <div className="main__mw-image">
        <img src="https://незабываемая.москва/uploads/posts/ekskursiya_na_smotrovuyu_ploshchadku_panorama_360_2.jpg" alt="" />
      </div>
      <div className="main__user">
        <div className="main__user-image">
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/38/Wikipedia_User-ICON_byNightsight.png" alt="" />
        </div>
        <div className="main__user-info">
          <div className="name">
            Petr K.
            </div>
          <div className="birthday">
            Date of Birth: 1 january
            </div>
          <div className="city">
            City: Moscow
            </div>
          <div className="education">
            Education: MGU
            </div>
          <div className="site">
            Web-site: https://www.google.com
            </div>
        </div>
      </div>
      <div className="main__posts">
        <div className="main__posts-title">
          My Posts
        </div>
        <form action="" className="main__posts-form">
          <textarea name="" id="" className="text" placeholder="new post..."></textarea>
          <button type="submit" className="btn">send</button>
        </form>
        <div className="main__posts-item">
          <a href="#a" className="user-image">
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/38/Wikipedia_User-ICON_byNightsight.png" alt=""/>
          </a>
          <div className="message">
            Hey, what are you doing?
          </div>
        </div>
        <div className="main__posts-item">
          <a href="#a" className="user-image">
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/38/Wikipedia_User-ICON_byNightsight.png" alt="" />
          </a>
          <div className="message">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum aut incidunt eligendi ratione repudiandae blanditiis, alias minus quaerat ullam temporibus cum doloremque quibusdam voluptate dolorum. Iste quibusdam repellat reiciendis dolore.
          </div>
        </div>
      </div>
    </main>
  );
}

export default Profile;