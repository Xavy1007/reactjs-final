import React, { useState, useEffect } from 'react';
import { Button } from '../stories/Button';
import './modal.css';


interface ModalProps {
  title: string;
  button_title:string,
  content:string;
  bgcolor:string;
  
  onClick?: () => void;
}

export const Modal = ({
  title="Ejemplo",
  content="Contenido Ejemplo de modal",  
  button_title='Modal',
  bgcolor='blue',
  ...props
}: ModalProps) => {
  const [show, setShow] = useState(false);
 /* title='Modal De Ejemplo por el Trabajo del Modulo VII';
  content="Ejemplo de verificacion para la practica final, de la materia de React USIP"*/
  return (
    <>
    <Button label={button_title} backgroundColor={bgcolor} onClick={() => {
          setShow(!show);
        }}></Button>
 

      {show ? (
        <div style={{ visibility:'visible'}} className={`modal darkBG`}>
          
        
          <div className={`darkBG`} />
          <div className={`centered`}>
            <div className={`modal`}>
              <div className={`modalHeader` }>
                <h4 className={`heading`}>{title}</h4>
              </div>
              <h6 className={`content`}>{content}</h6>
              <Button label='Cerrar' size='medium' backgroundColor='red'onClick={()=>{
              setShow(!show); 
            }} ></Button>

            </div>
          </div>
          </div>
      ) : (<p></p> )}
 
    </>
    
  );
};
