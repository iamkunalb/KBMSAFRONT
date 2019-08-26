// import SnackbarContent from '@material-ui/core/SnackbarContent';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import * as React from 'react';


const Display = (props:any) => (

    <div>
        <div className="allofit">
            <Paper className="paper" elevation={1} style={{backgroundColor: '#424242', color: '#ffffff',marginLeft:'10px', marginBottom: '10px', marginRight: '10px', paddingLeft:'20px', paddingRight:'20px', paddingTop: '20px', paddingBottom:'20px'}}>
                <Typography variant="headline" component="h3" style={{color: '#ffffff'}}>
                {props.artist} - {props.song}
                </Typography>
                <br/>
                <Typography component="p" style={{color: '#ffffff'}}>
                {props.lyrics}
                </Typography>
            </Paper>
        </div>
    </div>
);

export default Display;