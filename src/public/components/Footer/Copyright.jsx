import React from 'react';

class Copyright extends React.Component {
  render() {
    const releaseYear = '2017';
    const owner = 'Kihyeon Lee.';
    const ele = (
      <span>
        <i className="fa fa-copyright" />
        {releaseYear} {owner}
      </span>
    );
    return ele;
  }
}

export default Copyright;
