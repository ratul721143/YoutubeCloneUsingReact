import React from 'react'
import {Avatar} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import YouTubeIcon from '@material-ui/icons/YouTube';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import './Header.css';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <MenuIcon className="icon" />
                <div className="youtube__logo">
                    <YouTubeIcon className="youtube__icon icon" />
                    <h1 className="youtube__text">YouTube </h1>
                </div>
            </div>
            
            <div className="header__middle">
                <div className="search__box">
                    <input type="text" className="search__inputBox" placeholder="Search"/>
                    <SearchIcon className="search__icon icon" />
                </div>
                
                <MicIcon className="mic icon"/>
            </div>
            
            <div className="header__right">
                <VideoCallIcon className="left__icons icon"/>
                <AppsIcon className="left__icons icon"/>
                <NotificationsIcon className="left__icons icon"/>
                <Avatar src="https://yt3.ggpht.com/yti/ANoDKi6iKznX-LbJhkW7mg97R2mwaqF1HFUXiQWUxbGE=s88-c-k-c0x00ffffff-no-rj-mo" className="left__icons icon"/>
            </div>
            
        </div>
    )
}

export default Header;
