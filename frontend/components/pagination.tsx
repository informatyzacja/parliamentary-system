import React from "react";

export default function Pagination({
  postsPerPage,
  totalPosts,
  paginate,
  currentPage,
}: { postsPerPage: number, totalPosts: number, paginate: (page: number) => {}, currentPage: number }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className='py-2'>
      <div>
        <p className='text-sm text-gray-700'>
          Pokazuje wyniki od
          <span className='font-medium'>
            {" "}
            {currentPage * postsPerPage - postsPerPage}{" "}
          </span>
          do
          <span className='font-medium'> {(currentPage * postsPerPage) <= totalPosts ? currentPage * postsPerPage : totalPosts} </span>
          z
          <span className='font-medium'> {totalPosts} </span>
        </p>
      </div>
      <nav className='block'>
        <ul className='flex pl-0 rounded list-none flex-wrap'>
          <li>
            {pageNumbers.map((number) => (
              <a
                onClick={() => {
                  paginate(number);
                }}
                key={number}
                href='#'
                className={
                  currentPage === number
                    ? "bg-blue border-red-300 text-red-500 hover:bg-blue-200 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                    : "bg-white border-gray-300 text-gray-500 hover:bg-blue-200 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                }
              >
                {number}
              </a>
            ))}
          </li>
        </ul>
      </nav>
    </div>
  );
}