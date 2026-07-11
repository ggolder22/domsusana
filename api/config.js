module.exports = function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  res.status(200).json({
    host:     'dc0ae886b9c7482695c794c9ca02717e.s1.eu.hivemq.cloud',
    port:     8884,
    username: 'domsusana',
    password: 'Eciiii2580#'
  });
};
