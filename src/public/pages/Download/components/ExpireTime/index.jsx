import PropTypes from 'prop-types';
import React from 'react';
import BodyRow from '_components/BodyRow';
import F from '_utils/func';
import C from '_utils/constants';

const propTypes = {
  expireTime: PropTypes.number,
  loading: PropTypes.bool.isRequired,
  reqFileInfo: PropTypes.func.isRequired,
};

const defaultProps = {
  expireTime: 0,
};

const CLASS_NAME = {
  text: 'time__text',
};

const getRegiIdInUri = () => window.location.pathname.replace('/', '');

class ExpireTime extends React.Component {
  componentDidMount() {
    this.props.reqFileInfo(getRegiIdInUri());
  }
  render() {
    if (this.props.loading) {
      return <div />;
    }

    return (
      <BodyRow align={BodyRow.ALIGN.center}>
        <h1 className={CLASS_NAME.text}>{[F.secToLocalTime(this.props.expireTime), C.TEXT.EXPIRE].join(' ')}</h1>
      </BodyRow>
    );
  }
}

ExpireTime.propTypes = propTypes;
ExpireTime.defaultProps = defaultProps;

export default ExpireTime;
