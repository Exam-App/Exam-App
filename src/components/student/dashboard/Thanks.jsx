import { Typography } from '@material-ui/core'
import React, { Component } from 'react'
import LogOutBtn from '../../LogOutBtn'

export default class Thanks extends Component {
    render() {
        return (
            <div style={{ marginTop: 100}}>
                <Typography variant = "h1" align="center" gutterBottom>
                    Thank You<br/>
                    
                </Typography>
                <div>
                    <LogOutBtn/>
                </div>
            </div>
        )
    }
}
