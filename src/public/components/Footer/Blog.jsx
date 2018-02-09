import React from 'react';
import PropTypes from 'prop-types';

class Blog extends React.Component {
  render() {
    const ele = (
      <span>
        {this.props.title}
        <a href={this.props.blogUrl}>
          {this.props.blogUrl}
        </a>
      </span>
    );

    return ele;
  }
}

Blog.defaultProps = {
  title: 'blog: ',
};

Blog.propTypes = {
  title: PropTypes.string,
  blogUrl: PropTypes.string.isRequired,
};

export default Blog;
