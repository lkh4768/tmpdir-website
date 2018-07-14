import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import Body from '_components/Body';
import Footer from '_components/Footer';
import ShareList from '_components/ShareList';
import Const from '_common/Const';
import actions from '_data/actions';

import LogoContainer from './containers/Logo';
import ExpireTimeContainer from './containers/ExpireTime';
import '../style.scss';

const propTypes = {
  href: PropTypes.string.isRequired,
  getHref: PropTypes.func.isRequired,
};

class Download extends React.Component {
  componentDidMount() {
    this.props.getHref();
  }
  render() {
    return (
      <React.Fragment>
        <Body>
          <LogoContainer />
          <ExpireTimeContainer />
          <ShareList sharedUrl={this.props.href} />
        </Body>
        <Footer labels={Const.LABELS} links={Const.LINKS} />
      </React.Fragment>
    );
  }
}

Download.propTypes = propTypes;

const mapStateToProps = state => ({
  href: state.location.href,
});

const mapDispatchToProps = dispatch => ({
  getHref: () => dispatch(actions.getHref()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Download);
