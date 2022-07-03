import React from "react";
import Image from "next/dist/client/image";
import { MenuIcon, SearchIcon, ShoppingCartIcon } from "@heroicons/react/solid";

export const Header = () => {
  return (
    <header>
      <div className='flex items-center bg-amazon_blue p-1 flex-grow py-2'>
        <div className='mt-2 flex items-center flex-grow sm:flex-grow-0'>
          <Image
            src='https://links.papareact.com/f90'
            width={150}
            height={40}
            alt='Zon Logo'
            objectFit='contain'
            className='cursor-pointer'
          />
        </div>
        <div className='hidden sm:flex items-center h-10 rounded-md bg-yellow-400 hover:bg-yellow-500 cursor-pointer flex-grow'>
          <input
            className='p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4'
            type='text'
            name='search'
          />
          <SearchIcon className='h-12 p-4' />
        </div>
        <div className='flex items-center text-xs space-x-6 mx-6 whitespace-nowrap'>
          <div className='text-white  items-center link'>
            <p>Hello Andrew D</p>
            <p className='font-bold md:text-sm'>Account & Lists</p>
          </div>
          <div className='text-white items-center link'>
            <p>Returns</p>
            <p className='font-bold md:text-sm'>& Orders</p>
          </div>
          <div className='relative text-white link flex items-center '>
            <span className='absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold'>
              0
            </span>
            <ShoppingCartIcon className='text-white h-10' />
            <p className='hidden md:inline  font-bold md:text-sm mt-2'>
              Basket
            </p>
          </div>
        </div>
      </div>
      <div className='flex items-center space-x-4 bg-amazon_blue-light p-2 text-white'>
        <MenuIcon className='w-4 h-4' />
        <p className='link text-xs md:text-sm'>All</p>
        <p className='link text-xs md:text-sm'>Prime Video</p>
        <p className='link text-xs md:text-sm'>Amazon Business</p>
        <p className='link text-xs md:text-sm'>Electronics</p>
        <p className='link text-xs md:text-sm'>Today&apos;s Deals</p>
        <p className='link text-xs md:text-sm'>Today&apos;s Deals</p>
        <p className='link text-xs md:text-sm'>Today&apos;s Deals</p>
      </div>
    </header>
  );
};
