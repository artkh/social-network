import React from 'react';
import s from './Friends.module.scss';
import Preloader from '../elements/Preloader';
import Paginator from '../elements/paginator/Paginator';
import Friend from './Friend/Friend';

const Friends = (props) => {
  
  return (
    <div className={s.friends}>

      <Paginator onPage={props.onPage} currentPage={props.currentPage}
        totalCount={props.totalCount} pageSize={props.pageSize} />

      {props.isLoading ? <Preloader /> : null}

      <Friend friendsData={props.friendsData} followingIsProgress={props.followingIsProgress}
        followThunk={props.followThunk} unfollowThunk={props.unfollowThunk} />

    </div>
  )
}

export default Friends;