import React, { Component, Fragment } from 'react';
import { Button, Input, Header, Grid, Segment, Icon, Progress, Form, FormGroup, Label} from 'semantic-ui-react';
import DashboardLayout from '../../components/Layout/DashboadLayout';
import CustomTable from '../../components/Table/Table';

import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {customerA} from '../../redux/_actions/categories/customerA';
import _ from 'lodash';
import moment from 'moment/moment';
import UpNewStep1 from '../../components/UpNew/UpNewStep1';
import UpNewStep2 from '../../components/UpNew/UpNewStep2';
import UpNewStep3 from '../../components/UpNew/UpNewStep3';
import StepCustom from '../../components/Step/StepCustom';

class UpNew extends Component {
    constructor(props) {
        super(props);
        this.state = {
            positionStep: 1
        }
    }

    componentDidMount() {
        document.title = "Customer List";
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