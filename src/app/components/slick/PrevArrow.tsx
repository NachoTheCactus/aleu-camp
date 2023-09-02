import React from 'react'

export default function PrevArrow(props: any) {
    const { onClick } = props;
    return (
        <div
        className='p-3 w-fit cursor-pointer absolute left-0 top-1/4'
        onClick={onClick}
        >
            <svg className='w-5 h-5 sm:w-7 sm:h-7 fill-dsc-orange' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>
        </div>
    );
}