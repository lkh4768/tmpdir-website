import C from './constants';

const F = {
  removeEvent: (e) => {
    e.stopPropagation();
    e.preventDefault();
  },
  emptyFunc: f => f,
  convertFileSize: (byte) => {
    let cnt = 0;
    let remainSize = byte;
    while (Math.floor(remainSize / C.FILE.SIZE.WARTERMARK) > 0) {
      remainSize /= C.FILE.SIZE.WARTERMARK;
      cnt += 1;
    }
    return [remainSize.toFixed(2), C.FILE.SIZE.UNITS[cnt]].join(' ');
  },
};

export default F;
