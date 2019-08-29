import 'semantic-ui-css/semantic.min.css';
import '../../assets/css/index.css';
import '../../assets/css/NavMenu.css';
import "react-toastify/dist/ReactToastify.css";
import '../../../static/awesome/css/font-awesome.css';
import React, { Component } from 'react';
import TopMenu from '../Menu/TopMenu';
import SideMenu from '../Menu/SideMenu';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import Router from 'next/router'
import _ from 'lodash';

class DashboardLayout extends Component {
    
    // componentWillReceiveProps(nextProps) {
    //     const {alerts} = this.props;
    //     const _alerts = nextProps.alerts || {};
    //     if(_alerts.message !== alerts.message) {
    //         if(_alerts.type === 'success') {
    //             toast.success(_alerts.message);
    //         } else if(_alerts.type === 'warn') {
    //             toast.warn(_alerts.message);
    //         } else if(_alerts.type === 'error') {
    //             toast.error(_alerts.message);
    //         }
    //     }
    // }

    // componentWillMount(){
    //     console.log('router ... ',Router);
    //     if(!_.isUndefined(Router.router) && !_.isNull(Router.router) && Router.router.asPath !== '/login'){
    //         Router.push('/login');
    //     }
    // }

    render() {
        return (
            <div className="grid">
                <div className="menu">
                    <TopMenu />
                </div>
                <div className="main-content">
                    <SideMenu>
                        {this.props.children}
                    </SideMenu>
                </div>
            </div>
        )
    }
}
const mapStateToProps =({alerts}) => ({alerts});

export default connect(mapStateToProps, null)(DashboardLayout);