import React, {Component} from 'react';
import 'semantic-ui-css/semantic.min.css';
import '../assets/css/loginPage.css';
import {Button, Form, Grid, Header, Image, Message, Segment} from 'semantic-ui-react';
import {withCookies} from "react-cookie";

class Access extends React.Component {
    render() {
        return (
            <Grid textAlign='center'
                  style={{padding: 0, margin: 0, height: '100%', width: '100%', backgroundColor: '#eaecefb5'}}
                  verticalAlign='middle'>
                <Grid.Column style={{maxWidth: 450}}>
                    <Header as='h2' color='blue' textAlign='center'>
                        You don't have access permission. Contact: TuongDM2 Ipphone 14992
                    </Header>
                </Grid.Column>
            </Grid>
        );
    }
}

export default withCookies(Access);