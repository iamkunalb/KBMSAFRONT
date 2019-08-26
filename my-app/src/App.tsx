import * as firebase from 'firebase/app';
import * as React from 'react';


import './App.css';
// import SnackbarContent from '@material-ui/core/SnackbarContent';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
import Display from "./components/Display";
import Form from "./components/Form";
// import LogOut from "./components/LogOut";
// import firebase from "firebase"
// import withFirebaseAuth from 'react-with-firebase-auth'

import 'firebase/auth';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
// import firebaseConfig from './firebaseConfig';
// import { NPN_ENABLED } from 'constants';

// import { Right } from '../node_modules/@types/react-bootstrap/lib/Media';
firebase.initializeApp({
  apiKey: "AIzaSyCECL6ZgVbIsw0FtRU6iLnI2bpiTQC7Sao",
  authDomain: "dloplantool.firebaseapp.com"
})


interface IState{
  artist: any,
  isSignedIn: any,
  lyrics: any,
  song: any,
  picUrl: any
}



class App extends React.Component<{}, IState>{
  private uiConfig = {
    Callbacks: {
      signInSuccess: () => false
    },
    signInFlow: "popup",
    signInOptions:[
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ]
  }
  
  constructor(props:any){
    super(props);

    this.state = {
      artist: "",
      isSignedIn: false,
      lyrics: "",
      picUrl: "",
      song: ""
    }

  }


  public componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({isSignedIn:!!user})
      this.setState({
      });
      // console.log("user", user)
    })
  }

  public lyricsFunc = async (x: any) => { 
    x.preventDefault();
    const artist = x.target.elements.artist.value;
    const song = x.target.elements.song.value; 
    const result = await fetch(`https://orion.apiseeds.com/api/music/lyric/:${artist}/:${song}?apikey=sgc3rROE0Z0ju7qAXJL6cpI5UN9Xw4h3CT97PnKO7ej9UDpsAubk8BGcjVe3yMQJ`);
    const info = await result.json();
    if (info.error) {
      this.setState({
        artist: "Error",
        lyrics:  "Song Lyrics Not Found",
        song: "404"
      });
    }else{
      if (info.result.artist.name && info.result.track.name && info.result.track.text){
        this.setState({
          artist: info.result.artist.name,
          lyrics: info.result.track.text,
          song: info.result.track.name
        });
      }
    }
    
  }
  public LogOut(){
    firebase.auth().signOut();
  }


  public render() {
    
    return (
      <div className = "App">
        {this.state.isSignedIn ? (
          <span>
            <div>
              <Form lyricsFunc={this.lyricsFunc}
              urlPic = {firebase.auth().currentUser!.photoURL} name= {firebase.auth().currentUser!.displayName} logOut = {this.LogOut}/>
              <Display
                artist = {this.state.artist}
                lyrics = {this.state.lyrics}
                song = {this.state.song}
              />
            </div>
          </span>
        ):(
          <StyledFirebaseAuth
          uiConfig={this.uiConfig}
          firebaseAuth={firebase.auth()}/>
        )}
      </div>
    );
  }
}

export default App;