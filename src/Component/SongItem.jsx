import React, { useContext } from 'react'
import { PlayerContext } from '../Context/PlayerContext';

const SongItem = ({id,name,image,desc,duration}) => {
  const {PlayWithId}=useContext(PlayerContext);
  return (
    <div onClick={()=>PlayWithId(id)} className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
        <img className='rounded' src={image} alt="" />
        {/* <p className='font-bold mt-2 mb-1 '>{file}</p> */}
        <p className='font-bold mt-2 mb-1 '>{name}</p>
        <p className='font-bold mt-2 mb-1 '>{duration}</p>
        <p className='text-slate-200 text-sm'>{desc}</p>
    </div>
  )
}

export default SongItem;