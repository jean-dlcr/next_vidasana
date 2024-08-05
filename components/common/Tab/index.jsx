"use client";
import React from 'react';

import Button from '../Button';

const Tab = ({tabElements=null}) =>{
  
  const headerTab=[],dataTab=[]

  tabElements.map((item) => {
        headerTab.push(item.titulo)
        dataTab.push(item.content)
  })

  const [toggleState, setToggleState] = React.useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

    return(
        <div className="tab-container flex flex-column">    
            
      <div className="tabs-header grid">
        {headerTab.map((item,index)=>{     
            return (<Button  key={"tabHeader"+(index+1)} label={item} addClass={"blue-dark tabs pointer " +(toggleState === index+1 ? "active-tabs " : "tab-inactive ")} onClick ={() => toggleTab(index+1)} />)
        })}        
      </div>

      <div className="content-tabs">
        {dataTab.map((item,index)=>{
          return(
          <div key={"dataTab"+index} className={`${toggleState === index+1 ? "show" : "hide"}`}>
            {item}
          </div>)
        })}        
      </div>
    </div>    
    )

}

export default Tab