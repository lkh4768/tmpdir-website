const F = {
  removeEvent: (e) => {
    e.stopPropagation();
    e.preventDefault();
  },
  emptyFunc: f => f,
};

export default F;
