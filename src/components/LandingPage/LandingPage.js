import React, { Component } from 'react';
import { connect } from 'react-redux';
import FullHeader from '../FullHeader/FullHeader';
import ProjectsOverview from '../ProjectsOverview/ProjectsOverview';
import AboutUs from '../AboutUs/AboutUs';
import SquareCards from '../SquareCards/SquareCards';
import ContactUsForm from '../ContactUsForm/ContactUsForm';

class LandingPage extends Component {
  state = {
    showDrawer: false
  }

  sideDrawerClosedHandler = () => {
    this.setState({ showDrawer: false });
  }

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showDrawer: !prevState.showDrawer };
    });
  }

  render() {
    return (
      <>
        <FullHeader />
        <ProjectsOverview/>
        <AboutUs />
        <SquareCards />
        <ContactUsForm />
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
  };
};

export default connect(mapStateToProps)(LandingPage);