import React from 'react'
import '../../assets/css/ButtonFixed.scss'
import '../../assets/css/Effects/ShakeEffect.scss'
import { BsFillChatFill } from "react-icons/bs";
const ButtonToUp = ({ Scroll, seccionToUpId }) => {
    return (
        <a
            // onClick={() => Scroll.scroll('Home')}
            className="buttonFixed_sgr bottomRight"
            href="https://sgrsaludmental.unimagdalena.edu.co/"
            target="_blank" rel="noreferrer"
        >
            <BsFillChatFill size={25} className="shake" color="white" />
        </a>
    )
}

export default ButtonToUp
