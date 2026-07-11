module.exports = function handler(req, res) {
  res.status(200).json({
    host:     process.env.MQTT_HOST,
    port:     process.env.MQTT_PORT,
    username: process.env.MQTT_USER,
    password: process.env.MQTT_PASSWORD,
    all_keys: Object.keys(process.env)
  });
};
