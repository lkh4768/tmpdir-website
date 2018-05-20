import PropTypes from 'prop-types';
import React from 'react';
import BodyRow from '_components/BodyRow';
import F from '_utils/func';
import C from '_utils/constants';

const propTypes = {
  expireTime: PropTypes.shape({
    data: PropTypes.number,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
  }).isRequired,
  download: PropTypes.shape({
    error: PropTypes.string.isRequired,
  }).isRequired,
  reqFileInfo: PropTypes.func.isRequired,
  reqDownloadFile: PropTypes.func.isRequired,
};

const CLASS_NAME = {
  text: 'time__text',
};

const getRegiIdInUri = () => window.location.pathname.replace('/', '');

class ExpireTime extends React.Component {
  componentDidMount() {
    this.props.reqFileInfo(getRegiIdInUri());
    this.props.reqDownloadFile(getRegiIdInUri());
  }
  render() {
    if (this.props.expireTime.loading) {
      return <div />;
    }
    if (this.props.expireTime.error || this.props.download.error) {
      return <div>error</div>;
    }
    return (
      <BodyRow align={BodyRow.ALIGN.center}>
        <h1 className={CLASS_NAME.text}>{[F.secToLocalTime(this.props.expireTime.data), C.TEXT.EXPIRE].join(' ')}</h1>
      </BodyRow>
    );
  }
}

ExpireTime.propTypes = propTypes;

export default ExpireTime;
