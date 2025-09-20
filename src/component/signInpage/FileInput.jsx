import React, { forwardRef } from 'react'

const FileInput = forwardRef(({ onChange }, ref) => {
  return (
    <>
      <input 
      type="file" 
      ref={ref}
      onChange={onChange}
      className='hidden'
      />
    </>
  )
});

export default FileInput
