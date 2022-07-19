import React from 'react'
import { AiOutlineFileWord } from 'react-icons/ai'
import { VscFilePdf } from "react-icons/vsc"
import { TbBrandGoogleDrive } from "react-icons/tb"
import documentoPdf from "../assets/documents/Autoregistro-Relax.pdf"
import documentoWord from "../assets/documents/Autoregistro-Relax.docx"
import documentoExcel from "../assets/documents/Autoregistro-Relax.xlsx"
export const DescargablesActFomento = () => {
  return (
    <div className=' text-center'>
                    <a href={documentoPdf} download="Autoregistro-Relax" className='d-flex justify-content-center'>
                        <button className='w-50 btn-radius btn-pdf d-flex justify-content-center align-items-center '> Descargar PDF <VscFilePdf size={25} color="white" className='mx-1' /></button>
                    </a>

                    <a href={documentoWord} download="Autoregistro-Relax" className='d-flex justify-content-center'>
                        <button className='w-50 btn-radius btn-word d-flex justify-content-center align-items-center '>  Descargar documento editable DOCX <AiOutlineFileWord size={25} color="white" className='mx-1' /></button>
                    </a>

                    <a href={documentoExcel} download="Autoregistro-Relax" className='d-flex justify-content-center'>
                        <button className='w-50 btn-radius btn-excel d-flex justify-content-center align-items-center '>  Descargar documento editable XLSX <TbBrandGoogleDrive size={25} color="white" className='mx-1' /></button>
                    </a>
                    <a href="https://docs.google.com/spreadsheets/d/1yRs7zHNwLs3uMggg3H1bpcKRBL9-Ivx1v4Gpje8MpNY/copy?usp=sharing" target={"_blank"} download="Autoregistro-Relax" className='d-flex justify-content-center'>
                        <button className='w-50 btn-radius btn-googleDocs d-flex justify-content-center align-items-center '>  Crear una copia en la nube <TbBrandGoogleDrive size={25} color="white" className='mx-1' /></button>
                    </a>
                </div>
  )
}
