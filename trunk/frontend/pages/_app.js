import React from 'react'
import { Provider } from 'react-redux'
import App, { Container } from 'next/app'
import Head from 'next/head';
import withRedux from 'next-redux-wrapper'
import { initStore } from '../src/redux/store'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import redirectTo from '../src/components/Common/redirectTo.js';
import fetch from 'isomorphic-unfetch';
import _config from '../src/utils/config';
const config = _config[_config.environment];
import { parseCookies, setCookie, destroyCookie } from 'nookies';

export default withRedux(initStore)(
    class MyApp extends App {

        static resetCookies(ctx) {
            destroyCookie(ctx, 'authtoken');
            destroyCookie(ctx, 'user');
        }
        static async getInitialProps ({ Component, router, ctx }) {
            try {
                let pageProps = {};
                const coo = parseCookies(ctx);
                if (Component.getInitialProps) {
                    pageProps = await Component.getInitialProps(ctx)
                }
                // console.log(ctx);
                // return  pageProps;

                //if the authtoken is not found
                // console.log(coo.authtoken, ctx.pathname);

                const query = ctx.query || {};
                const authtoken = coo.authtoken || query.token;
                console.log(1, authtoken);
                if(!authtoken) {
                    // console.log(2);

                    try {
                        this.resetCookies(ctx);
                        //don't do anything if we are on a page that doesn't require credentials
                        if(ctx.pathname === "/login" || ctx.pathname === "/forgot-password") return {pageProps};
                        //if we are on any other page, redirect to the login page

                        else {
                            const redirect = config.originRoot + '/openid?redirect=' + config.originFrontend;
                            return redirectTo(redirect, { res: ctx.res, status: 301});
                        }
                    } catch (e) {
                        console.log('error 1', e);
                    }

                }
                //if we do have an auth token to check
                else {
                    // console.log(3);
                    //
                    // console.log('access_token', authtoken, config.environment);
                    // Cookies.set('authtoken', authtoken);
                    setCookie(ctx,'authtoken', authtoken, {
                        maxAge: 24 * 60 * 60,
                        path: '/',
                    });
                    // if(ctx.res) ctx.res.cookie('authtoken', authtoken);
                    let url = '';
                    if(_config.environment === "production") {
                        if(ctx.res) {
                            url = 'http://172.27.219.41:3001';
                        } else {
                            url = config.originBackend;
                        }
                    } else {
                        url = config.originBackend;
                    }
                    var response = await fetch(`${url}/raca-api/auth-user`, { method: 'POST', headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ 'access_token': authtoken })
                    })
                        .then( r => r.json() )
                        .then((resp) => {
                            if(ctx.pathname === "/login") {
                                try {
                                    // console.log('login local', resp.data);
                                    //shouldn't show the login page is we are already logged in
                                    if(resp.status === 200) {
                                        this.resetCookies(ctx);
                                        redirectTo('/', { res: ctx.res, status: 301 });
                                    }
                                    //if it wasn't successful, stay where we are
                                    else {
                                        this.resetCookies(ctx);
                                        return {...pageProps, ...{query: ctx.query, authtoken: authtoken}};
                                    }

                                } catch(e) {
                                    console.log('error 2', e);
                                }
                            }

                            //any other page that requires a login
                            else {
                                try {
                                    // console.log('login SSO', resp.data);
                                    //if auth check was successful, stay where we are
                                    if(resp.status === 200) {
                                        const data = resp.data;
                                        setCookie(ctx,'authtoken', authtoken,{
                                            maxAge: 24 * 60 * 60,
                                            path: '/',
                                        });
                                        setCookie(ctx,'user', JSON.stringify(data.user),{
                                            maxAge: 24 * 60 * 60,
                                            path: '/',
                                        });

                                        return {...pageProps, ...{query: ctx.query, authtoken: authtoken}};
                                    }
                                    //if it wasn't successful, clear the authtoken since it must be expired or invalid and redirect to login
                                    else {
                                        this.resetCookies(ctx.res);

                                        // redirectTo(config.prevURL + '/login', { res: ctx.res, status: 301 });

                                        const redirect = config.originRoot + '/openid';
                                        // const buff = Buffer.from(config.originFrontend, 'utf8').toString('hex');
                                        // // ctx.res.cookie('redirect', buff);
                                        redirectTo(redirect, { res: ctx.res, status: 301});
                                    }
                                } catch (e) {
                                    console.log('error 3', e);
                                }
                            }
                        })
                        .catch((err) => { console.log('err', err); return {pageProps}; })

                }
                if(response !== null) {
                    // return {response};
                    pageProps = response;
                    return {pageProps};
                } else
                    return {pageProps};
            } catch (error) {
                console.log('error', error)
            }

        }

        render () {
            // console.log('router ... ',Router);
            // if(!_.isUndefined(Router.router) && !_.isNull(Router.router) && Router.router.asPath !== '/login'){
            //   Router.push('/login');
            // }
            const { Component, pageProps, store } = this.props;
            return (
                <Container>

                    <Head>
                        <title>Raca</title>
                    </Head>
                    <Provider store={store}>
                        <Component {...pageProps} />
                    </Provider>
                    <ToastContainer autoClose={2000} />
                </Container>
            )
        }
    }
)
