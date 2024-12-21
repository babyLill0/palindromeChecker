import React from 'react'

type DisplaySectionProps = {
    children?: React.ReactNode | null
}

function DisplaySection ({children}: DisplaySectionProps) {
  return (
    <div className='flex justify-center'>
        {children}
    </div>
  )
}

export default DisplaySection