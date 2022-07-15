import React from 'react'
import { FaLeaf } from 'react-icons/fa'
export const ActivityCard = ({title,desc,_class,url}) => {

  return (
    <div className={"activityCard-card d-flex flex-column " + (_class? _class:"")} style={{cursor: "auto"}}>
      <div className="activityCard-card-header ">
                        <div style={{backgroundColor:"#F5F7FE"}} className="rounded-1"><FaLeaf className='p-1' size={35} fill={"#B2C7FC"}/></div>
                     
                    </div>
    <div className="activityCard-card-title">{title}</div>
    <div className="activityCard-card-subtitle">
        {desc}
    </div>
    {/* TODO: Desactivar esto cuando la plataforma no esté en pilotaje */}
    {/* <div className="activityCard-card-buttons">
      <a href={"/"+url}>
        <button className="search-buttons card-buttons">Ver actividad</button>
        </a>
    </div> */}
</div>
  )
}
