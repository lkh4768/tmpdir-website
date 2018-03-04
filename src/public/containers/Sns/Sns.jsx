import PropTypes from 'prop-types';
import React from 'react';
import BodyRow from '../Body/BodyRow';
import ShareButton from '../../components/ShareButton/ShareButton';

class Sns extends React.Component {
  render() {
    const ele = (
      <BodyRow align={BodyRow.ALIGN.right}>
        {this.props.shareList.map(share => <ShareButton key={share.vender} share={share} />)}
      </BodyRow>
    );
    return ele;
  }
}

Sns.propTypes = {
  shareList: PropTypes.arrayOf(PropTypes.shape({
    vender: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  })),
};

Sns.defaultProps = {
  shareList: null,
};

export default Sns;
