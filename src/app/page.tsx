import React from 'react'
import Header from './header/page'
import Link from 'next/link';
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
  return (
    <>
     <Header/>
     <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      {/* <Head>
        <title>PromiseTracker</title>
      </Head> */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">PromiseTracker</h1>
        <p className="text-lg text-gray-600">Keep track of your promises together!</p>
      </header>
      <div className="max-w-md w-full  shadow-md rounded-lg p-6">

      <section>
          <h2 className="text-2xl text-gray-800 font-bold mb-4">Explore Promises</h2>
          <ul>
            {promises.map(promise => (
              <li key={promise.id} className="bg-gray-200 rounded-md p-4 mb-2">
                <div className="text-gray-800 font-bold">Title: {promise.title}</div>
                <div className="text-gray-600">Description: {promise.description}</div>
                <div className="text-gray-600">Progress: {promise.progress}%</div>
                <div className="text-gray-600">Shared: {promise.shared ? 'Yes' : 'No'}</div>
                <div className="text-gray-600">Shared With: {promise.sharedWith.join(', ')}</div>
                <div className="text-gray-600">Reminders: {promise.reminders.join(', ')}</div>
                <div className="text-gray-600">Completed: {promise.completed ? 'Yes' : 'No'}</div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
    </>  
  )
}

export default page