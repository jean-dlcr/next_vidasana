import React from 'react'
import { MdOutlineClose } from 'react-icons/md'

const Sidebar = (props) => {
  const { children, ...restProps } = props;
     
    return (
      <div {...restProps}>
      <label className="overlay" htmlFor="toggleSidebar"></label>
      <div className="sidebar-container flex flex-column animate__animated animate__fadeInLeft">
      <div className="sidebar-header flex">
            <label className='flex' htmlFor="toggleSidebar">            
            <MdOutlineClose size={30} className="pointer"  />
            </label>
          </div>
          <div className="sidebar-body">
            <ul className='flex flex-column'>
              {children}
            </ul>
          </div>
      </div>
      </div>
    )

}

export default Sidebar