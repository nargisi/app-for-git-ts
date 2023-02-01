import React from 'react';
import ReactPaginate from 'react-paginate';
import { perPage } from '../../utils/constants';
import { Person } from '../Main/Main';
import '../Paginate/Paginate.css';

type Props = {
  totalRepos: Person['public_repos'];
  setPage: React.Dispatch<React.SetStateAction<number>>
}

export default function Paginate({ totalRepos, setPage } : Props) {
  const pageCount = Math.ceil(totalRepos / perPage);
  // const pageCount = 4;
  const handlePageClick = (data: {selected: number}) => {
    setPage(data.selected + 1);
  };
  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageCount={pageCount}
        previousLabel="<"
        // renderOnZeroPageCount={null}
        containerClassName="pagination"
        nextClassName="pagination__num"
        previousClassName="pagination__num"
        pageClassName="pagination__num"
        breakClassName="pagination__break"
        activeLinkClassName="pagination__link-active"
        activeClassName="pagination__active"
      />
    </>
  );
}
