import React from 'react'

export default function FormularDisk({ text, par }:any) {
  return (
    <div className='bg-main rounded-full w-4 h-4 md:w-6 md:h-6 flex-shrink-0 mx-2 relative'>
        <p className={`text-sm text-center sm:text-start sm:text-base md:text-lg font-semibold absolute ${par ? "top-6 sm:-top-10" : "-top-10"} left-1/2 -translate-x-[50%] min-[400px]:min-w-[126px] sm:!min-w-max w-fit break-normal`}>{text}</p>
    </div>
  )
}
