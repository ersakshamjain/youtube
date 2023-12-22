import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {

  const isMenuOpen = useSelector(store=>store.app.isMenuOpen)
  // console.log(isMenuOpen);
  
  if(!isMenuOpen) return null;

  return (
    <div className='shadow-lg p-5 '>
         <ul>
            <li><Link to="/">Home</Link></li>
            <li>Shorts</li>
            <li>Videos</li>
            <li>Suscription</li>
        </ul>

        <h2 className='font-bold pt-5'>Suscription</h2>
        <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
        </ul>

        <h2 className='font-bold pt-5' >Watch Later</h2>
        <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
        </ul>
    </div>
  )
}

export default Sidebar