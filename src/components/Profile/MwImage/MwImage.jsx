import React from 'react';
import s from './MwImage.module.css';

const MwImage = (props) => {
  return (
    <div className={s.main__mw_image}>
      <img src={!props.largePhoto ? 'https://незабываемая.москва/uploads/posts/ekskursiya_na_smotrovuyu_ploshchadku_panorama_360_2.jpg' :
        props.largePhoto} alt="" />
    </div>
  );
}

export default MwImage;