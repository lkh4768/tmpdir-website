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

import ShareEntity from '_entities/Share';

import styles from './style.scss';

const propTypes = {
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

const defaultProps = {
  share: null,
};

function ShareButton({ share }) {
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
  const ButtonComponent = components.get(share.vender).button;
  const IconComponent = components.get(share.vender).icon;
  return (
    <ButtonComponent
      className={styles.share_button}
      quote={share.title}
      url={share.url}
    >
      <IconComponent
        size={share.icon.size}
        round={share.icon.isRound}
      />
    </ButtonComponent>
  );
}

ShareButton.propTypes = propTypes;
ShareButton.defaultProps = defaultProps;

export default ShareButton;
