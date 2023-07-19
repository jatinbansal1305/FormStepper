import React from 'react';
import Header from './Header';
import LeftSidebar from './LeftSidebar';
import Footer from './Footer';
import RightSidebar from './RightSidebar';
import Body from './Body';
import '../styles.css';

const TemplateWrapper = ({ title }) => {
  return (
    <div className="container">
      <Header title={title} />
      <div style={{ display: 'flex' }}>
        <LeftSidebar />
        <Body onChangeTitle={(newTitle) => console.log('Title changed:', newTitle)} />
        <RightSidebar />
      </div>
      <Footer />
    </div>
  );
};

export default TemplateWrapper;
