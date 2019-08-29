import React, { Component, Fragment } from 'react';
import { Button, Input, Header, Grid, Segment, Icon, Progress, Form, FormGroup, Label} from 'semantic-ui-react';
import DashboardLayout from '../../src/components/Layout/DashboadLayout';
import CustomTable from '../../src/components/Table/Table';
import Head from 'next/head';
import Link from 'next/link';
import { connect } from 'react-redux';
import {customerA} from '../../src/redux/_actions/categories/customerA';
import _ from 'lodash';
import moment from 'moment/moment';
import UpNewStep1 from '../../src/components/UpNew/UpNewStep1';
import UpNewStep2 from '../../src/components/UpNew/UpNewStep2';
import UpNewStep3 from '../../src/components/UpNew/UpNewStep3';
import StepCustom from '../../src/components/Step/StepCustom';
import Router from 'next/router'

class UpNew extends Component {
    constructor(props) {
        super(props);
        this.state = {
            positionStep: 1
        }
    }

    handleBackStep = () => {
        const positionStep = this.state.positionStep;
        if(positionStep > 1){
            this.setState({
                positionStep: positionStep - 1
            });
        }
    };

    handleNextStep = () => {
        const positionStep = this.state.positionStep;
        if(positionStep < 3 ){
            this.setState({
                positionStep: positionStep + 1
            });
        } else {
            console.log("Submit up new !");
        }
    };

    render() {
        console.log('render l');
        const { positionStep } = this.state;
        return (
            <div>
                <Head>
                    <title>Customer List</title>
                </Head>
                <DashboardLayout>
                    <Segment>
                        <StepCustom positionStep={positionStep} />
                        <Progress percent={positionStep === 1 ? 33 : (positionStep === 2 ? 66 : 100)} active color='green'> </Progress>
                        {
                            positionStep === 1 ?
                                <UpNewStep1 />
                            : 
                            (
                                positionStep === 2 ?
                                    <UpNewStep2 />
                                :
                                    <UpNewStep3 />

                            )
                        }
                        <Button.Group fluid className='back-next'>
                            <Button labelPosition='left' icon='left chevron' content='Back' disabled={positionStep === 1 ? true : false} onClick={this.handleBackStep} />
                            <Button labelPosition='right' icon='right arrow' content={positionStep === 3 ? 'Submit' : 'Forward'} color='blue' onClick={this.handleNextStep} />
                        </Button.Group>
                        
                    </Segment>
                </DashboardLayout>
            </div>)
    }
}

const mapStateToProps = ({ upNews }) => ({ upNews });

export default connect(mapStateToProps, null)(UpNew);