import React from 'react';
import { connect } from 'react-redux';
import Friends from './Friends';

// const Friends = (props) => {
  
//   let friendsItem = props.friendsData.map(f => <Friend id={f.id} name={f.name} img={f.img} />);
  
//   return (
//     <div className={s.friends}>
//       { friendsItem }
//     </div>
//   );
// };

let mapStateToProps = (state) => {
  return {
    friendsData: state.friendsPage.friendsData
  }
};

let mapDispatchToProps = () => {};

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default FriendsContainer;