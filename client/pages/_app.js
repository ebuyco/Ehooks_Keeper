import App from 'next/app';
import Page from '../components/Page';
import { Component } from 'react';


class MyApp extends App {
     static async getInitialProps({ Components, ctx}) {
         let pageProps = {};
         if(Component.getInitialProps){
              pageProps = await Component.getInitialProps(ctx);
         }      
         return { pageProps };
     }   
     render(){
              const { Component, pageProps} = this.props;
              return <Component {...pageProps}/>; 
     }
}



export default MyApp;