import React from 'react'
import { NavLink } from 'react-router'

export default function Header() {
  return (
    <div className='flex justify-between px-5 items-center bg-gray-500 text-2xl'>
        {/* image logo */}
        <img width="100px" className='p-2' src="https://tse2.mm.bing.net/th/id/OIP.rW4a4ZrPdw8zAIVyGGoYXQHaE2?pid=Api&P=0&h=180" alt="" />
        {/* ul of links */}
        <ul className='flex gap-10 text-2xl'>
            <li>
                <NavLink to="home" className={({isActive})=>isActive?"text-blue-300 bg-blue-500 p-2":""}>Home</NavLink>
            </li>
            <li>
                <NavLink to="productsList" className={({isActive})=>isActive?"text-blue-300 bg-blue-500 p-2":""}>ProductsList</NavLink>
            </li>
            <li>
                <NavLink to="contact" className={({isActive})=>isActive?"text-blue-300 bg-blue-500 p-2":""}>ContactUS</NavLink>
            </li>
        </ul>
    </div>
  )
}
