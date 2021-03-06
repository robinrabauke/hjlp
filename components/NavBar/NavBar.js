import React from "react";

export const NavBar = () => (
  //   <div className="flex flex-col items-center p-3 drop-shadow-2xl fixed">
  <div className=" px-20 py-6 fixed transform-x inset-x-0 z-50">
    <div class="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box drop-shadow-2xl">
      <div class="px-2 mx-2 navbar-start">
        <span class="text-lg font-bold">hjälp</span>
      </div>
      <div class="hidden px-2 mx-2 navbar-center lg:flex">
        <div class="flex items-stretch">
          <a class="btn btn-ghost btn-sm rounded-btn">Home</a>
          <a class="btn btn-ghost btn-sm rounded-btn">Jobs</a>
          <a class="btn btn-ghost btn-sm rounded-btn">About</a>
          <a class="btn btn-ghost btn-sm rounded-btn">Contact</a>
        </div>
      </div>
      <div class="navbar-end">
        <button class="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block w-6 h-6 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
        </button>
        <button class="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block w-6 h-6 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
);
