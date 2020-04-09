import React from 'react';
import s from './Friends.module.scss';
import Preloader from '../elements/Preloader';
import { NavLink } from 'react-router-dom';
import { usersAPI } from '../../api/api';

const Friends = (props) => {

  let pagesCount = Math.ceil(props.totalCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let onFollow = (userId) => {
    props.followingIsLoading(true, userId);
    usersAPI.followUser(userId).then(data => {
        if(data.resultCode === 0) {
          props.follow(userId);
          props.followingIsLoading(false, userId);
        }
      })
  }

  let onUnFollow = (userId) => {
    props.followingIsLoading(true, userId);
    usersAPI.unfollowUser(userId).then(data => {
        if (data.resultCode === 0) {
          props.unfollow(userId);
          props.followingIsLoading(false, userId);
        }
      })
  }
  
  return (
    <div className={s.friends}>
      <div>
        {pages.map(p => {
          return <span
            onClick={() => { props.onPage(p) }}
            className={props.currentPage === p && s.selectedPage}> {p} </span>
        })}
      </div>
      {props.isLoading ? <Preloader /> : null}
      {
        props.friendsData.map(f =>
          <div className={s.friend} key={f.id}>
            <div className={s.shortInfo}>
                <div className={s.friend_image}>
                  <NavLink to={`/profile/${f.id}`}>
                    <img src={f.photos.small != null ? f.photos.small : 'https://klike.net/uploads/posts/2019-03/medium/1551511829_46.jpg'} alt="" />
                  </NavLink>
                </div>
              <div className={s.friend_button}>
                {f.followed ?
                  <button type="button" disabled={props.followingIsProgress.some(id => id === f.id)} onClick={() => { onUnFollow(f.id) }}>unfollow</button> :
                  <button type="button" disabled={props.followingIsProgress.some(id => id === f.id)} onClick={() => { onFollow(f.id) }}>follow</button>}
              </div>
            </div>
            <div className={s.moreInfo}>
              <div className={s.friend_name}>
                <span>{f.name}</span>
                <span>{f.lastName}</span>
                <div className={s.friend_status}>
                  <span>{f.status}</span>
                </div>
              </div>
              <div className={s.friend_country}>
                <span>{f.country}</span>
                <span>{f.town}</span>
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}

// class Friends extends React.Component {

//   componentDidMount() {
//     axios.get("https://artkh.github.io/json/friends.json").then(response => {
//       this.props.setFriends(response.data.items);
//       this.props.setCountFriends(response.data.totalCount);
//     });
//   }

//   onPage = (pageNumber) => {
//     this.props.setCurrentPage(pageNumber);
//   }

//   render() {

//     let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize);
//     let pages = [];
//     for (let i = 1; i <= pagesCount; i++) {
//       pages.push(i);
//     }

//     return <div className={s.friends}>
//       <div>
//         { pages.map( p => { return <span 
//         onClick={ () => { this.onPage(p) } } 
//         className={ this.props.currentPage === p && s.selectedPage}> {p} </span> } ) }
//       </div>
//       {
//         this.props.friendsData.map( f => 
//           <div className={s.friend} key={f.id}>
//             <div className={s.shortInfo}>
//               <div className={s.friend_image}>
//                 <img src={f.img} alt="" />
//               </div>
//               <div className={s.friend_button}>
//                 {f.subscribe ? 
//                 <button type="button" onClick={ () => {this.props.unfollow(f.id)} }>unfollow</button> :
//                 <button type="button" onClick={ () => {this.props.follow(f.id)} }>follow</button>}
//               </div>
//             </div>
//             <div className={s.moreInfo}>
//               <div className={s.friend_name}>
//                 <span>{f.firstName}</span>
//                 <span>{f.lastName}</span>
//                 <div className={s.friend_status}>
//                   <span>{f.status}</span>
//                 </div>
//               </div>
//               <div className={s.friend_country}>
//                 <span>{f.country}</span>
//                 <span>{f.town}</span>
//               </div>
//             </div>
//           </div>
//         )
//       }
//     </div>
//   }
// }

export default Friends;