import React, {  useState } from 'react';

import ReactPaginate from 'react-paginate';
import { useNavigate } from 'react-router-dom'


import { MdKeyboardArrowRight, MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md';
import ArticleImage1 from '/ArticleImage1.png'
import { IoTimerSharp } from 'react-icons/io5';

const items = [0,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 13, 14,0,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,];

let ArticleCard = ({src})=>{
  let nevigate= useNavigate()
  return (

  <div onClick={()=> nevigate ('/article/open/')} className='w-[327px] md:w-[526px] bg-[#1E2127] py-[14px] pl-2.5 md:px-6 md:pt-[27px] md:pb-[42px] rounded-[25px] flex md:inline-block gap-[14px] md:gap-0 cursor-pointer'>
    <img className='w-[121px] md:w-auto h-[107px] md:h-auto'  src={src} alt="" />

   <div className=''>
     <p className='font-Inter text-white text-[14px] md:text-[30px] w-[160px] md:w-[323px] md:mt-[25px] md:mb-[36px]'>Game Keys The Best 
    Websites for Affordable 
    Gaming Deals</p>


    <p className='text-[13px] md:text-[28px] font-Inter text-[#E614FC]'>19 Sep, 23</p>

    <p className='text-white font-OS text-[14px] md:text-[20px] flex items-center gap-[7px] md:mt-[31px]'>
    <IoTimerSharp className='text-white/40 h-[17px] md:h-[31px] w-[17px] md:w-[31px]' />

    3 min read

    </p>
   </div>

  </div>

)}

function Items({ currentItems }) {
    return (
      <>
        {currentItems &&
          currentItems.map((item) => (
            <div>
              <ArticleCard
                src={ArticleImage1}/>
              
            </div>

            
          ))}
      </>
    );
  }

const ArticlePaginate = ({itemsPerPage}) => {
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
      <div className='flex flex-col md:flex-row gap-5 md:gap-x-[29.5px] flex-wrap md:gap-y-[54px]'>
      <Items currentItems={currentItems} />
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel={<div className='w-full h-full flex items-center justify-center text-white ' > 
        <MdOutlineArrowForwardIos  /> </div>}
        nextClassName="page-item border shadow rounded-full  w-[33px] md:w-[59px] h-[33px] md:h-[59px]  cursor-pointer  transition-all duration-300 ml-3 md:ml-[23.5px] "
        onPageChange={handlePageClick}
        pageRangeDisplayed={6}
        pageCount={pageCount}
        
        previousLabel={  <div className='w-full h-full  flex items-center justify-center text-white ' > <MdOutlineArrowBackIos/></div> }
        previousClassName="page-item border shadow rounded-full w-[33px] md:w-[59px] h-[33px]  md:h-[59px]  cursor-pointer  transition-all duration-300 "
        renderOnZeroPageCount={null}
       
        pageClassName="page-item liCss flex items-center justify-center text-[13px] md:text-[24px] text-white ml-[13px] md:ml-6  "

         pageLinkClassName="page-link aCss w-[33px] md:w-[59px] h-[33px]  md:h-[59px] rounded-full border flex items-center justify-center"

         activeClassName="active bg-gradient-to-bl from-[#FC00FF] from-1% via-[#7E6EEF] via-50% to-[#00DBDE] to-100% rounded-full"
        
         containerClassName="pagination flex  items-center justify-center pt-6 md:pt-[126px] gap-0 md:mt-0"
      />
    </>
  );
}





export default ArticlePaginate