import React from 'react'

export default function FormularDisk({ text }:any) {
  return (
    <div className='bg-main rounded-full w-6 h-6 flex-shrink-0 mx-2 relative'>
        <p className='text-lg font-semibold absolute -top-10 left-1/2 -translate-x-[50%] min-w-max w-fit break-normal'>{text}</p>
    </div>
  )
}
