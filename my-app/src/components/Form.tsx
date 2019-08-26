
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';
// import LogOut from "./LogOut";
// import { url } from 'inspector';

const Form = (props:any) => (
    <div className="allofit">
        <AppBar position="static" style={{backgroundColor: '#2c6c8c'}}>
            <Toolbar>
            <Typography variant="title" color="inherit" className="heade">
                LyricFindr
            </Typography>
            <img className="profilePic" src={props.urlPic || ''} width="60" height="60" />
            <form onSubmit={props.logOut}>
                <button className="logout">Log Out</button>
            </form>
            </Toolbar>
        </AppBar>
        <form onSubmit={props.lyricsFunc}>
            <h1 className="name">{props.name}</h1>
            <input className="text" name="artist" placeholder="Artist Name"/>
            <input id="song" name="song" className="text" placeholder="Song Name"/>
            <button className="search">Search</button> 
        </form>
    </div>
);

export default Form;