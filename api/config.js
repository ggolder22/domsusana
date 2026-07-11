export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  res.status(200).json({
    host:     process.env.MQTT_HOST,
    port:     parseInt(process.env.MQTT_PORT || '8884'),
    username: process.env.MQTT_USER,
    password: process.env.MQTT_PASSWORD
  });
}
