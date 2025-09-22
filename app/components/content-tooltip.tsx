import React from 'react'

const ContentTooltip = ({content}: {content: string}) => {
  return (
    <div className="absolute z-10 left-1/2 opacity-0 -translate-x-1/2   rounded-full mt-3 shadow-lg  p-0.5 px-2 text-xs font-medium text-white bg-gray-500 group-hover:opacity-100 ">
    {content}
  </div>
  )
}

export default ContentTooltip