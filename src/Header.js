import React, { useState } from 'react'
import './Header.css'
import MenuSharpIcon from '@material-ui/icons/MenuSharp';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import VideoCallSharpIcon from '@material-ui/icons/VideoCallSharp';
import AppsSharpIcon from '@material-ui/icons/AppsSharp';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import {Link } from "react-router-dom";
function Header() {
    const  [inputSearch, setInputSearch]= useState('');
    return (
        //BEM
        <div className="header">
           <div className="header__left">
                      <MenuSharpIcon />
                   <Link to="/">
                       
                      <img  className="header__logo"
                       src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Logo_of_YouTube_%282005-2011%29.svg/284px-Logo_of_YouTube_%282005-2011%29.svg.png"/>
                   </Link>
                     
                   
           </div>
           <div className="header__middle">
                       <input value={inputSearch} onChange={e =>setInputSearch(e.target.value)} placeholder="search"type="text" />
                       <Link to={`/search/${inputSearch}`}> 
                               <SearchSharpIcon className="input__button"/>
                       </Link>
           </div>
            
          <div className="header__right">
                    <Link>
                     <VideoCallSharpIcon className="header__icon"/>
                    </Link>
                    <Link>
                         <AppsSharpIcon  className="header__icon"/>
                    </Link>
                    <Link>
                     <NotificationsIcon  className="header__icon"/>
                    </Link>
                    <Link>
                      <Avatar alt="YU" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRyBJVrg2a1UFMdoiEPIJz_MmvZZts4cIZlPjq3AVy8AA&usqp=CAU&ec=45702844" />
                    </Link>
                   
                  
                   
          </div>
        
        </div>
    )
}

export default Header
