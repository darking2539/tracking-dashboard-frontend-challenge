import React from 'react'
import ProfileImage from '../../assets/image-jeremy.png'

export default function Profile() {
  return (
    <div className="bg-violet shadow rounded-xl bg-violet-900">
      <div className="bg-violet shadow rounded-xl md:w-48 bg-blue-500 py-5 px-6">
        <div className='flex md:flex-col md:mb-4'>
          <div className='mt-1 mb-4'>
            <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src={ProfileImage} />
          </div>
          <div className='mb:flex ml-5 md:ml-0'>
            <p className='text-slate-300 text-sm'>Report for</p>
            <div className='flex md:flex-col space-x-2 md:space-x-0'>
              <p className='text-slate-100 text-2xl'>Jeremy</p>
              <p className='text-slate-100 text-2xl'>Robson</p>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-row md:flex-col px-6 py-5 justify-between'>
        <a href="#" className='text-slate-100 text-base my-1'>Daily</a>
        <a href="#" className='text-slate-100 text-base my-1'>Weekly</a>
        <a href="#" className='text-slate-100 text-base my-1'>Monthly</a>
      </div>
    </div>
  )
}
