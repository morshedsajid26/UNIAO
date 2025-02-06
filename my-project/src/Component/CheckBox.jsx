import React from 'react'

const CheckBox = ({htmlFor,labelText,id}) => {
  return (
    <div className='flex  items-center gap-2'>
    <input id={id} type="radio" className='w-6 h-6 relative after:absolute after:content-[""] after:w-[15px] after:h-[15px] after:bg-[#E1E1E5] after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full checked:after:bg-gradient-to-bl from-[#FC00FF] from-1% via-[#7E6EEF] via-50% to-[#00DBDE] to-100%' />
    <label htmlFor={htmlFor} className='font-OS text-white text-2xl'>{labelText}</label>
    </div>
  )
}

export default CheckBox