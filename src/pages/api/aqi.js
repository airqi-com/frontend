import axios from 'axios';

export default async function handler(req, res) {
  console.log(req)
  const latlngbox = `${req.query.lat},${req.query.lon},${+req.query.lat - 10},${+req.query.lon + 40}`;
  const weatherApi = `https://api.waqi.info/map/bounds?token=${process.env.API_KEY}&latlng=${latlngbox}`;
  try {
    const response = await axios.get(weatherApi);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching data.' });
  }
}
