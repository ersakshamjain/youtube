import React from 'react'
import Button from './Button'

const btnList = ["All", "Movies","Gaming","Songs","Cricket","Soccer","Live","Cooking", "News","Valentines","Trending","Viral"]

const ButtonList = () => {
  return (
    <div className='flex'>
    
  {
    btnList.map((item,index)=>{
        return <Button key={index} name={item}/>
    })
  }
    
    
    </div>
  )
}

export default ButtonList