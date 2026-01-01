import React from 'react';
import Navbar from '../../components/navigations/Navbar';
import Footer from '../../components/footer/Footer';
import Modals from "../../components/modals/Modals";


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