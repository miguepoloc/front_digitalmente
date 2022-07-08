import React from 'react'
import { FaLeaf } from 'react-icons/fa'
export const ActivityCard = ({title,desc,_class}) => {

  return (
    <div class={"activityCard-card d-flex flex-column " + (_class? _class:"")}>
      <div class="activityCard-card-header ">
                        <div style={{backgroundColor:"#F5F7FE"}} className="rounded-1"><FaLeaf className='p-1' size={35} fill={"#B2C7FC"}/></div>
                        <div class="menu-dot"></div>
                    </div>
    <div class="activityCard-card-title">{title}</div>
    <div class="activityCard-card-subtitle">
        {desc}
    </div>
    <div class="activityCard-card-buttons">
        <button class="search-buttons card-buttons">Ver actividad</button>
    </div>
</div>
  )
}
