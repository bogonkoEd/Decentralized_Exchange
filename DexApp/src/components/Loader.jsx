import React from 'react'

const Loader = () => {
  return (
    <div className='flex justify-center item-center p-1'>
      <svg className='animate-spin rounded-full h-16 w-16 border-dashed border-b-4 border-blue-700'/>    
    </div>
  )
}

export default Loader