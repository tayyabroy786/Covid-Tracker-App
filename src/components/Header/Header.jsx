import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


export const Header = () => {
    return (
        <div>
            <AppBar position="static" color="secondary">
                <Toolbar>
                    <Typography variant="h6" align="center" display="block">
                        COVID-19 TRACKER
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;
