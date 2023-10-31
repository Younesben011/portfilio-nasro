import React from 'react'
import './Components.css';
export const Navbar = () => {
    const navigation_list =[
        {Lable:"Home",selected:true,},
        {Lable:"About",selected:false,},
        {Lable:"Skills",selected:false,},
        {Lable:"Contact",selected:false,},]
  return (
    <>
        <nav className='navbar'>
            <div className='Logo_container'>
                N
            </div>
            <div className='navContainer'>
                {navigation_list.map(item=>
                    <span 
                    className={!item.selected?'nav_item':'nav_item nav_item_selected'}>
                        {item.Lable}</span>
                )}
            </div>
        </nav>
    </>
  )
}
