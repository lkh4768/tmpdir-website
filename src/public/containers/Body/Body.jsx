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
          <Title appInfo={this.props.appInfo} />
          <Sns shareList={this.props.shareList} />
          <FileExplorer files={this.props.files} />
          <Upload />
        </Container>
      </div>
    );
    return ele;
  }
}

Body.propTypes = {
  appInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    logo: PropTypes.node.isRequired,
    version: PropTypes.string,
  }).isRequired,
  shareList: PropTypes.arrayOf(PropTypes.shape({
    vender: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  })),
  files: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
  })),
};

Body.defaultProps = {
  shareList: null,
  files: null,
};

export default Body;
