import PropTypes from 'prop-types';
import React from 'react';
import { Container } from 'reactstrap';
import Title from '../Title/Title';
import Sns from '../Sns/Sns';
import FileExplorer from '../FileExplorer/FileExplorer';
import Upload from '../Upload/Upload';

class Body extends React.Component {
  render() {
    const ele = (
      <div className="body">
        <Container fluid>
          <Title />
          <Sns title={this.props.tmpdirName} shareUrl={this.props.tmpdirUrl} />
          <FileExplorer />
          <Upload />
        </Container>
      </div>
    );
    return ele;
  }
}

Body.propTypes = {
  tmpdirName: PropTypes.string.isRequired,
  tmpdirUrl: PropTypes.string.isRequired,
};

export default Body;
