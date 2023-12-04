import React from 'react'

function Rescard(props) {

  const data =props.menu.info
 
  // console.log(data)
  return (



    <div className='res-card'>
      <img alt="res-logo" className='res-logo'
        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+data.cloudinaryImageId}/>
     <h3>{data.name}</h3>
      {/* <h4>{data.cuisines.join(",")}</h4> */}
      <h4>{data.avgRating}</h4>
      <h4>{data.costForTwo}</h4>
          
      
    </div>
    
  )
}

export default Rescard
