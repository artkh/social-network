import React from 'react';
import s from './Paginator.module.scss';

const Paginator = (props) => {

  let pagesCount = Math.ceil(props.totalCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  
  return (
    <div>
      {pages.map(p => {
        return <span
          onClick={() => { props.onPage(p) }}
          className={props.currentPage === p && s.selectedPage}> {p} </span>
      })}
    </div>
  )
}

export default Paginator;