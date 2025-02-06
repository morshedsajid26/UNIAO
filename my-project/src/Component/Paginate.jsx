import React, {  useState } from 'react';

import ReactPaginate from 'react-paginate';


import card2 from '/card2.png'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import GameCard from './GameCard';
import { MdKeyboardArrowRight, MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md';

const items = [0,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 13, 14,0,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 13, 14, 8, 9, 10, 11, 12, 13, 14, 13, 14, 8, 9, 10, 11, 12, 13, 14, 13, 14];


function Items({ currentItems }) {
    return (
      <>
        {currentItems &&
          currentItems.map((item) => (
            <div>
              <GameCard
                src={card2}/>
              
            </div>

            
          ))}
      </>
    );
  }

const Paginate = ({itemsPerPage}) => {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className='flex gap-x-[29.5px] flex-wrap gap-y-[54px]'>
      <Items currentItems={currentItems} />
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel={<div className='w-full h-full flex items-center justify-center text-white ' > 
        <MdOutlineArrowForwardIos  /> </div>}
        nextClassName="page-item border shadow rounded-full  w-[24px] md:w-[59px] h-[24px] md:h-[59px]  cursor-pointer  transition-all duration-300 ml-[23.5px] "
        onPageChange={handlePageClick}
        pageRangeDisplayed={6}
        pageCount={pageCount}
        
        previousLabel={  <div className='w-full h-full  flex items-center justify-center text-white hover:text-white transition-all duration-300' > <MdOutlineArrowBackIos/></div> }
        previousClassName="page-item border shadow rounded-full w-[24px] md:w-[59px] h-[24px]  md:h-[59px]  cursor-pointer  transition-all duration-300 mr-[23.5px] "
        renderOnZeroPageCount={null}
       
        pageClassName="page-item liCss flex items-center justify-center text-[24px] text-white  ml-6  "

         pageLinkClassName="page-link aCss w-[6px] md:w-[59px] h-[6px]  md:h-[59px] rounded-full border flex items-center justify-center "

         activeClassName="active bg-gradient-to-bl from-[#FC00FF] from-1% via-[#7E6EEF] via-50% to-[#00DBDE] to-100% rounded-full"
        
         containerClassName="pagination flex  items-center justify-center pt-[126px] md:mt-0"
      />
    </>
  );
}





export default Paginate