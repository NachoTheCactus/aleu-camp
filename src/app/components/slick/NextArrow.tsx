import React from 'react'

export default function NextArrow(props: any) {
    const { onClick } = props;
    return (
        <div
        className='p-3 w-fit cursor-pointer absolute right-0 top-1/4'
        onClick={onClick}
        >
            <svg className='w-5 h-5 sm:w-7 sm:h-7 fill-dsc-orange' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
        </div>
    );
}
