import React from 'react';
import Header from '../common/template/header';
import Sidebar from '../common/template/sideBar';
import Footer from '../common/template/footer';
// import Routes from './routes';
import Messages from '../common/msg/messages';

export default props => (
  <div className="wrapper">
    <Header />
    <Sidebar />
    <div className='content-wrapper'>
      {/* Example without Link/IndexRoute
        <Routes /> 
      */}
      {
        props.children
      }
    </div>
    <Footer />
    <Messages />
  </div>
)