import React from 'react'
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

function Footer(){

    

    return <BottomNavigation>
    <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} />
    <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
    <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} />
    <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
  </BottomNavigation>
}


export default Footer