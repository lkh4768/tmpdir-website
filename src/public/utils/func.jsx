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
  getTotalFileSize: (files = []) => {
    if (files && files.length > 0) {
      return files.reduce((sum, file) => sum + file.size, 0);
    }
    return 0;
  },
  uniqArray: (arr, prop) => {
    const uniqKeySet = new Set([...arr].map(elem => elem[prop]));
    return arr.filter((elem) => {
      const has = uniqKeySet.has(elem[prop]);
      if (has) {
        uniqKeySet.delete(elem[prop]);
      }
      return has;
    });
  },
  secToLocalTime: (sec) => {
    const parseYYYYMMDDHHmm = date => [
      date.substring(6, 10),
      '.',
      date.substring(0, 2),
      '.',
      date.substring(3, 5),
      ' ',
      date.substring(12),
    ].join('');
    const curDate = new Date(null);
    curDate.setTime(sec);
    return parseYYYYMMDDHHmm(curDate.toLocaleString(
      [],
      {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: 'numeric',
        minute: '2-digit',
        hour12: false,
      },
    ));
  },
};

export default F;
