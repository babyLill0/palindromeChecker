import React from 'react'

type InputProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  type?: 'warning' | 'success' | 'error' | 'default';  
}

function Input({onChange, className, type = 'default'}: InputProps) {
  const typeClassName = type === 'warning' ? 'outline-yellow-500' : type === 'success' ? 'outline-green-500' : type === 'error' ? 'outline-red-500' : '';
  
  return (
    <div className='flex justify-center align-middle'>
        <input 
          onChange={onChange} 
          type="text" 
          placeholder="Type something..." 
          className={`border border-gray-300 rounded-md p-2 w-full ${className} ${typeClassName}`}
        />
    </div>
  )
}

export default Input