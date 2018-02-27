import PropTypes from 'prop-types';
import React from 'react';
import { Row, Col } from 'reactstrap';
import {
  FacebookShareButton,
  GooglePlusShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  RedditShareButton,
  FacebookIcon,
  GooglePlusIcon,
  TwitterIcon,
  WhatsappIcon,
  RedditIcon,
} from 'react-share';

class Sns extends React.Component {
  render() {
    const ele = (
      <Row>
        <Col>
          <FacebookShareButton url={this.props.shareUrl} quote={this.props.title}>
            <FacebookIcon size={this.props.iconSize} round />
          </FacebookShareButton>
          <GooglePlusShareButton url={this.props.shareUrl} quote={this.props.title}>
            <GooglePlusIcon size={this.props.iconSize} round />
          </GooglePlusShareButton>
          <TwitterShareButton url={this.props.shareUrl} quote={this.props.title}>
            <TwitterIcon size={this.props.iconSize} round />
          </TwitterShareButton>
          <WhatsappShareButton url={this.props.shareUrl} quote={this.props.title}>
            <WhatsappIcon size={this.props.iconSize} round />
          </WhatsappShareButton>
          <RedditShareButton url={this.props.shareUrl} quote={this.props.title}>
            <RedditIcon size={this.props.iconSize} round />
          </RedditShareButton>
        </Col>
      </Row>
    );
    return ele;
  }
}

Sns.propTypes = {
  shareUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  iconSize: PropTypes.number,
};

Sns.defaultProps = {
  iconSize: 32,
};

export default Sns;
