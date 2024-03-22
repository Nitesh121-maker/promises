'use client'
import React, { useState } from 'react';
import Header from './header/page'
import Link from 'next/link';
import SharedPromisesList from './shared/page';
import Postcrate from './post/page'
const page = () => {
  const promises = [
    {
      id: 1,
      title: 'Go on a picnic',
      description: 'Plan a picnic at the park on Saturday afternoon.',
      progress: 60,
      shared: true,
      sharedWith: ['Partner'],
      reminders: ['Friday, 5:00 PM'],
      completed: false
    },
    {
      id: 2,
      title: 'Go on a vacation',
      description: 'Plan a vacation in lakshdwip.',
      progress: 60,
      shared: true,
      sharedWith: ['Partner'],
      reminders: ['Friday, 5:00 PM'],
      completed: false
    },
    // Add more promises here
  ];
  const [showpostform, setshowpostform] = useState(false);
  const post = () => {
    // Toggle the state between true and false
    setshowpostform(!showpostform);
  };
  return (
    <>
     <Header/>
     <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center" >
      <button
        onClick={post}
        className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-3 rounded-full shadow-md hover:from-purple-600 hover:to-purple-700 hover:shadow-lg transition duration-300 ease-in-out mb-4"
      >
        Create Post
      </button>
      {showpostform && <Postcrate />}
      <div className="w-full max-w-screen-lg flex flex-col md:flex-row ">
        <div className="w-full max-w-screen-lg flex flex-col md:flex-row justify-between shadow-md rounded-lg p-6">
          <section className="w-full md:w-3/4 mb-4 md:mb-0">
            <h2 className="text-2xl text-purple-300 font-bold mb-4">Delve into the World of Promises</h2>
            <ul>
              {promises.map(promise => (
                <li key={promise.id} className="bg-gray-200 rounded-md p-4 mb-2">
                  <div className="text-purple-800 font-bold">Title: {promise.title}</div>
                  <div className="text-purple-600">Description: {promise.description}</div>
                  <div className="text-purple-600">Progress: {promise.progress}%</div>
                  <div className="text-purple-600">Shared: {promise.shared ? 'Yes' : 'No'}</div>
                  <div className="text-purple-600">Shared With: {promise.sharedWith.join(', ')}</div>
                  <div className="text-purple-600">Reminders: {promise.reminders.join(', ')}</div>
                  <div className="text-purple-600">Completed: {promise.completed ? 'Yes' : 'No'}</div>
                </li>
              ))}
            </ul>
          </section>
          {/* <div className="w-full md:w-1/4 ml-0 md:ml-4">
            <div className="p-6 bg-purple-100 rounded-lg shadow-md">
              <h3 className="text-2xl text-purple-800 font-bold mb-4">Shared Promises</h3>
              <hr className="border-purple-400 mb-4" />
              <SharedPromisesList />
            </div>
          </div> */}
        </div>
         <div className="w-full md:w-1/4 ml-0 md:ml-4">
            <div className="p-6 bg-purple-100 rounded-lg shadow-md">
              <h3 className="text-2xl text-purple-800 font-bold mb-4">Shared Promises</h3>
              <hr className="border-purple-400 mb-4" />
              <SharedPromisesList />
            </div>
          </div>
      </div>
    </div>

    </>  
  )
}

export default page