import React, { useState } from "react";
import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

function Header() {
  const [selectWidth, setWidth] = useState("40px");

  const resizeSelect = (event) => {
    let select = event.target;
    setWidth(8 * select.options[select.selectedIndex].text.length + 20 + "px");
  };

  return (
    <header>
      {/* Top nav */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="flex mt-2 items-center flex-grow sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>

        {/* Search */}
        <div className="hidden sm:flex items-center h-10  rounded-r-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500 rounded-l-md focus-within:search-shadow">
          <div className="filter-contaienr hover:filter-container rounded-l-md focus-within:search-shadow">
            <select
              className="filter focus:filter"
              onChange={resizeSelect}
              style={{ width: selectWidth }}
              defaultValue="1"
            >
              <option value="1">All</option>
              <option value="2">Arts &amp; Crafts</option>
              <option value="3">Automotive</option>
              <option value="4">Baby</option>
              <option value="5">Beauty &amp; Personal Care</option>
              <option value="6">Books</option>
              <option value="7">Computers</option>
              <option value="8">Digital Music</option>
              <option value="9">Electronics</option>
              <option value="10">Kindle Store</option>
              <option value="11">Prime Video</option>
              <option value="12">Women's Fashion</option>
              <option value="13">Men's Fashion</option>
              <option value="14">Girls' Fashion</option>
              <option value="15">Boys' Fashion</option>
              <option value="16">Deals</option>
              <option value="17">Health &amp; Household</option>
              <option value="18">Home &amp; Kitchen</option>
              <option value="19">Industrial &amp; Scientific</option>
              <option value="20">Luggage</option>
              <option value="21">Movies &amp; TV</option>
              <option value="22">Music, CDs &amp; Vinyl</option>
              <option value="23">Pet Supplies</option>
              <option value="24">Software</option>
              <option value="25">Sports &amp; Outdoors</option>
              <option value="26">Tools &amp; Home Improvement</option>
              <option value="27">Toys &amp; Games</option>
              <option value="28">Video Games</option>
            </select>
          </div>
          <input
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-r-md focus:outline-none px-4"
            type="text"
          />
          <SearchIcon className="h-12 p-4" />
        </div>
        {/* Right */}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div className="link">
            <p>Hello Bibek Khatri</p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <div className="relative link flex items-center">
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
              0
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline font-extrabold md:text-sm mt-2">
              Basket
            </p>
          </div>
        </div>
      </div>
      {/* Bottom nav */}
      <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
        <p className="link flex items-center">
          <MenuIcon className="h-6 mr-1" />
          All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's Deals</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Food & Grocery</p>
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
        <p className="link hidden lg:inline-flex">Health & Personal Care</p>
      </div>
    </header>
  );
}

export default Header;
