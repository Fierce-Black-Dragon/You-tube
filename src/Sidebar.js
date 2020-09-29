import React from 'react'
import './Sidebar.css'
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import HomeIcon from '@material-ui/icons/Home';
import SidebarRow from './SidebarRow';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoOutlinedIcon from '@material-ui/icons/OndemandVideoOutlined';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import WatchLaterOutlinedIcon from '@material-ui/icons/WatchLaterOutlined';
function Sidebar () {
return (
< div className = " sidebar">
        < SidebarRow selected Icon = {HomeIcon} title ="Home"/>
        < SidebarRow Icon = {WhatshotIcon} title = "Trending"/>
        < SidebarRow Icon = {SubscriptionsIcon} title = " Subscription"/>
        <hr/>
        < SidebarRow Icon = {VideoLibraryIcon} title ="Library"/>
        < SidebarRow Icon = {HistoryIcon} title = "History"/>
        < SidebarRow Icon = {OndemandVideoOutlinedIcon} title = "Your Videos"/>
        < SidebarRow Icon = {WatchLaterOutlinedIcon} title ="Watch Later"/>
        < SidebarRow Icon = {ThumbUpAltOutlinedIcon} title = "Liked videos"/>
        < SidebarRow Icon = {ExpandMoreOutlinedIcon} title = "Show more"/>
       <hr/>
</ div>
);
}
export default Sidebar
