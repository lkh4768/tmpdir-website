class Icon {
  constructor(vender, size = 32, isRound = true) {
    this.vender = vender;
    this.size = size;
    this.isRound = isRound;
  }
}

class Share {
  constructor(vender, url, title) {
    this.vender = vender;
    this.url = url;
    this.title = title;
    this.icon = new Icon(this.vender);
  }
}

Share.VENDER = {
  facebook: 0,
  twitter: 1,
  googleplus: 2,
  whatsapp: 3,
  reddit: 4,
};

export default Share;
