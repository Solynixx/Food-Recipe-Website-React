import React from 'react';
import Navbar from '../home/Navbar';
import Footer from '../home/Footer';
import Modals from '../home/Modals';

class ShopPageLayout extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        {this.props.children}
        <Footer />
        <Modals />
      </>
    );
  }
}

export default ShopPageLayout;