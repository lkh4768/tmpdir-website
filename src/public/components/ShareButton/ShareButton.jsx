import PropTypes from 'prop-types';
import React from 'react';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  GooglePlusShareButton,
  GooglePlusIcon,
  WhatsappShareButton,
  WhatsappIcon,
  RedditShareButton,
  RedditIcon,
} from 'react-share';
import ShareEntity from '../../entities/Share';

const CLASS_NAME = {
  button: 'share-button',
};
class ShareButton extends React.Component {
  render() {
    const components = new Map([
      [
        ShareEntity.VENDER.facebook,
        {
          button: FacebookShareButton,
          icon: FacebookIcon,
        },
      ],
      [
        ShareEntity.VENDER.twitter,
        {
          button: TwitterShareButton,
          icon: TwitterIcon,
        },
      ],
      [
        ShareEntity.VENDER.googleplus,
        {
          button: GooglePlusShareButton,
          icon: GooglePlusIcon,
        },
      ],
      [
        ShareEntity.VENDER.whatsapp,
        {
          button: WhatsappShareButton,
          icon: WhatsappIcon,
        },
      ],
      [
        ShareEntity.VENDER.reddit,
        {
          button: RedditShareButton,
          icon: RedditIcon,
        },
      ],
    ]);
    const ButtonComponent = components.get(this.props.share.vender).button;
    const IconComponent = components.get(this.props.share.vender).icon;
    const ele = (
      <ButtonComponent
        className={CLASS_NAME.button}
        quote={this.props.share.title}
        url={this.props.share.url}
      >
        <IconComponent
          size={this.props.share.icon.size}
          round={this.props.share.icon.isRound}
        />
      </ButtonComponent>
    );
    return ele;
  }
}

ShareButton.propTypes = {
  share: PropTypes.shape({
    vender: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    icon: PropTypes.shape({
      vender: PropTypes.number.isRequired,
      size: PropTypes.number,
      isRound: PropTypes.bool,
    }).isRequired,
  }),
};

ShareButton.defaultProps = {
  share: null,
};

export default ShareButton;
