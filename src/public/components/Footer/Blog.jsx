import React from 'react';

class Blog extends React.Component {
  render() {
    const title = 'blog: ';
    const ele = (
      <span>
        {title}
        <a href={this.props.blogUrl}>
          {this.props.blogUrl}
        </a>
      </span>
    );

    return ele;
  }
}

Blog.propTypes = {
  blogUrl: React.PropTypes.string.isRequired,
};

export default Blog;
