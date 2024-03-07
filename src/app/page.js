import Link from 'next/link'
import React from 'react'


function page() {
  return (
    <div className='flex flex-col gap-5 justify-center items-center pt-5'>
      <a href='/posts' className='border p-1 hover:bg-[#242424] hover:text-white'>/posts page with {`<a>`} element</a>
      <Link className='border p-1 hover:bg-[#242424] hover:text-white' href='/posts'>/posts page with {"<Link>"} element</Link>
    </div>
  )
}

export default page