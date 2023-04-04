import React from 'react'

export default function SelectedButton({val}) {
  return (
    <div className="bg-amber-700 text-amber-50  rounded-md mx-1 my-1 py-2 px-2 w-fit duration-150 text-sm">
    {val}
  </div>
  )
}
