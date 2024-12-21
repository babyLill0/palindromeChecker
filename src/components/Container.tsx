import React from 'react'

function Container({children}: {children: React.ReactNode}) {
  return (
    <section className='h-full py-20 text-center bg-white'>
      {children}
    </section>
  )
}

export default Container