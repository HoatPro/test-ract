import React, {Component} from 'react';
// import 'semantic-ui-css/semantic.min.css';
// import '../src/assets/css/index.css';
import {Segment} from 'semantic-ui-react';
import DashboardLayout from '../components/Layout/DashboadLayout';


class Index extends React.Component {
    // static async getInitialProps(context) {
    // const { id } = context.query;
    // const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
    // const show = await res.json();

    // console.log(`fetched show: ${show.name}`)
    // return { show }
    // }s

    componentDidMount() {
        document.title = "Home";
    }

    render() {
        return (
            <div>
                <DashboardLayout>
                    <Segment>
                        <h1> RACA Dashboard</h1>
                    </Segment>
                </DashboardLayout>
            </div>

        )
    }
}

export default Index;