import React from 'react';

class Copyright extends React.Component {
  render() {
    const html = (
      <span>
        <i className="fa fa-copyright" />
        {this.props.releaseYear} {this.props.owner}
      </span>
    );
    return html;
  }
}

Copyright.defaultProps = {
  releaseYear: '2017',
  owner: 'Kihyeon Lee.',
};

export default Copyright;
