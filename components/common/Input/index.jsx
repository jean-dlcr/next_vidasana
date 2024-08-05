"use client";
import React from 'react';

const InputText = ({
    addClass="",
    titulo="",
    isError=false,
    error="",
    ...props
}) => {

  const [activeBox, setActiveBox] = React.useState(false);

  const refInput = React.useRef(null);


  React.useEffect(() => {
    refInput.current.addEventListener('focus', () => {
      setActiveBox(true);
    });
    refInput.current.addEventListener('blur', () => {
      setActiveBox(false);
    });
  }, []);

  const classname = `input flex bg-white ${activeBox ? 'input-text-active' : ''}`

  return (
    <div className={`input-container ${addClass}`}>
      <label>{titulo}</label>   
    <div className={classname}>
      
        <input className='input-text-box bg-white'  {...props} ref={refInput} />        
    </div>
    <div className=''><label className={`error-label ${isError?"show":"hide"}`}>{error}</label></div>
    </div>
    
  )
}

export default InputText