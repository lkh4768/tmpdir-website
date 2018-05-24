import PropTypes from 'prop-types';
import React from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import BodyRow from '_components/BodyRow';

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
  intl: intlShape.isRequired,
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
        <h1 className={CLASS_NAME.text}>
          <FormattedMessage
            id="expiresOn"
            values={{
              expireDate: this.props.intl.formatDate(new Date(this.props.expireTime.data)),
              expireTime: this.props.intl.formatTime(new Date(this.props.expireTime.data)),
            }}
            defaultMessage="Expires on {expireDate}, {expireTime}"
          />
        </h1>
      </BodyRow>
    );
  }
}

ExpireTime.propTypes = propTypes;

export default injectIntl(ExpireTime);
