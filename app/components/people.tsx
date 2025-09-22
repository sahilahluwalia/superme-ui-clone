import Image from 'next/image'
import React from 'react'

const People = ({
    name,
    connection,
    image
}: {
    name: string
    connection: string
    image: string
}) => {
  return (
    <div className='flex items-center gap-2 p-2 rounded-2xl hover:bg-[#EDE8DE] cursor-pointer w-full'>
        <Image src={image} className='rounded-full' alt="people" width={40} height={100} />
        <div className='flex flex-col'>
            <h4 className='font-medium text-base text-gray-800'>{name}</h4>
            <p className='text-gray-500 text-xs'>{connection}</p>
        </div>
    </div>
  )
}

export default People