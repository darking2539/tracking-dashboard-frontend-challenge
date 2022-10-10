import React from 'react'
import { ReactComponent as HamburgerMenu } from '../../assets/icon-ellipsis.svg'
import { ReactComponent as PlayIcon } from '../../assets/icon-play.svg'

export default function Card(props: any) {

  const { title, color, Icon } = props;

  return (
    <div className={`w-full ${color} rounded-xl`}>
      <div className="h-10 flex justify-end overflow-hidden mr-4">
        {Icon}
      </div>
      <div className="px-6 py-4 bg-violet-900 rounded-xl">
        <div className='flex flex-row justify-between'>
          <p className='font-bold text-slate-100 text-sm' >{title}</p>
          <div className='flex justify-center items-center'>
            <HamburgerMenu className='cursor-pointer' />
          </div>

        </div>
        <div className='flex md:flex-col flex-row justify-between items-end md:items-start my-3'>
          <p className='text-slate-100 text-2xl md:py-2'>32hrs</p>
          <p className='text-slate-100 text-sm md:pb-1'>Last Weeks - 36hrs</p>
        </div>
      </div>
    </div>
  )
}


