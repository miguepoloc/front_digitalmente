import React from 'react'

export const ActivityCard = ({title,desc,_class}) => {

  return (
    <div class={"activityCard-card d-flex flex-column " + (_class? _class:"")}>
      <div class="activityCard-card-header ">
                        <svg viewBox="0 -13 512 512" xmlns="http://www.w3.org/2000/svg" style={{backgroundColor:"#2e2882"}}>
                            <g fill="#feb0a5">
                                <path d="M256 92.5l127.7 91.6L512 92 383.7 0 256 91.5 128.3 0 0 92l128.3 92zm0 0M256 275.9l-127.7-91.5L0 276.4l128.3 92L256 277l127.7 91.5 128.3-92-128.3-92zm0 0" />
                                <path d="M127.7 394.1l128.4 92 128.3-92-128.3-92zm0 0" />
                            </g>
                            <path d="M512 92L383.7 0 256 91.5v1l127.7 91.6zm0 0M512 276.4l-128.3-92L256 275.9v1l127.7 91.5zm0 0M256 486.1l128.4-92-128.3-92zm0 0" fill="#feb0a5" />
                        </svg>
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
