import React from 'react'
import { AiOutlineFileWord } from 'react-icons/ai'
import { VscFilePdf } from "react-icons/vsc"
import { TbBrandGoogleDrive } from "react-icons/tb"
import { FaRegFileExcel } from "react-icons/fa"
import documentoPdf from "../assets/documents/DiarioPensamientos.pdf"
import documentoWord from "../assets/documents/DiarioPensamientos.docx"
import documentoExcel from "../assets/documents/DiarioPensamientos.xlsx"
export const DescargablesActFomento = () => {
    return (
        <div className=' text-center d-flex flex-column justify-content-center'>
            <a href={documentoPdf} download="DiarioPensamientos.pdf" className='w-50 btn-radius btn-pdf align-self-center d-flex justify-content-center align-items-center '> Descargar PDF <VscFilePdf size={25} color="white" className='mx-1' /></a>

            <a href={documentoWord} download="DiarioPensamientos.docx" className='w-50 btn-radius btn-word align-self-center d-flex justify-content-center align-items-center '>  Descargar documento editable DOCX <AiOutlineFileWord size={25} color="white" className='mx-1' /></a>


            <a href={documentoExcel} download="DiarioPensamientos.xlsx" className='w-50 btn-radius btn-excel align-self-center d-flex justify-content-center align-items-center '>  Descargar documento editable XLSX <FaRegFileExcel size={23} color="white" className='mx-1' /></a>

            <a rel="noreferrer" href="https://docs.google.com/spreadsheets/d/1RKaX-oW0ON5MdI8AA4-DpHLE1BXhN_Fy4Wv_-JEtgg4/copy?usp=sharing" target={"_blank"} className='w-50 btn-radius btn-googleDocs align-self-center d-flex justify-content-center align-items-center '>  Crear una copia en la nube <TbBrandGoogleDrive size={25} color="white" className='mx-1' /></a>
        </div>
    )
}
