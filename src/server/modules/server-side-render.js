class NodeMaker {
  static makeNode(type, src) {
    if (!src) {
      return null;
    }
    return NodeMaker.formet[type].replace(NodeMaker.mark.url, src);
  }
}

NodeMaker.mark = {
  url: '[url]',
};

NodeMaker.type = {
  js: 0,
  css: 1,
};

NodeMaker.formet = [
  ['<script src="', NodeMaker.mark.url, '"></script>'].join(''),
  ['<link type="text/css" rel="stylesheet" href="', NodeMaker.mark.url, '">'].join(''),
];

class ServerRender {
  constructor() {
    this.filenames = [];
  }
  get jsUrls() {
    return this.filenames.filter(filename => /\.js$/.exec(filename));
  }
  get cssUrls() {
    return this.filenames.filter(filename => /\.css$/.exec(filename));
  }
  get jsNodes() {
    const urls = this.jsUrls;
    return urls.map(url => NodeMaker.makeNode(NodeMaker.type.js, url));
  }
  get cssNodes() {
    const urls = this.cssUrls;
    return urls.map(url => NodeMaker.makeNode(NodeMaker.type.css, url));
  }
  render() {
    return [
      '<!doctype html>',
      '<html>',
      '<head>',
      '<title>App</title>',
      this.cssNodes,
      '</head>',
      '<body>',
      '<div id="root">',
      '</div>',
      this.jsNodes,
      '</body>',
      '</html>',
    ].join('');
  }
}

const serverRender = new ServerRender();
export default serverRender;
