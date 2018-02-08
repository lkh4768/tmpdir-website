import React from 'react';

class Blog extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const html = (
      <span>
        {this.props.title}
        <a href={this.props.blogUrl}>
          {this.props.blogUrl}
        </a>
      </span>
    );

    return html;
  }
}

Blog.defaultProps = {
  title: 'Blog: ',
};

export default Blog;
