import React from 'react'
import { IoSearchSharp } from "react-icons/io5";


const SearchInput = () => {
  return (
    <form>
       <input type="text" placeholder='search here' className='input input-bordered rounded-full'/>
       <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
       <IoSearchSharp className='w-6 h-6 outline-none' />

        </button>
    </form>
  )
}

export default SearchInput