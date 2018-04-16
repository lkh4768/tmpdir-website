const makeCssNode = url => ['<link type="text/css" rel="stylesheet" href="', url, '">'].join('');
const makeJsNode = url => ['<script src="', url, '"></script>'].join('');

export default {
  makeJsNode,
  makeCssNode,
};
