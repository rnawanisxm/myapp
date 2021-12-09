const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// API calls
app.get("/api/Philipsburg", (req, res) => {
  res.json({
      "label": "Philipsburg",
      "desc": "Philipsburg is the main town and capital of the country of Sint Maarten. The town is on a narrow stretch of land between Great Bay and the Great Salt Pond. It functions as the commercial center of Saint Martin island, whereof Sint Maarten encompasses the southern half. As of 2017, it has 1,894 inhabitants.",
      "jpg": "sxm.jpg"
  });
});
app.get("/api/Malaga", (req, res) => {
  res.json({
      "label": "Malaga",
      "desc": "Málaga is a municipality of Spain, capital of the Province of Málaga, in the autonomous community of Andalusia. With a population of 578,460 in 2020, it is the second-most populous city in Andalusia after Seville and the sixth most populous in Spain. It lies on the Costa del Sol (Coast of the Sun) of the Mediterranean, about 100 kilometres (62.14 miles) east of the Strait of Gibraltar and about 130 km (80.78 mi) north of Africa.",
      "jpg": "malaga.jpg"
  });
});
app.get("/api/Reykjavik", (req, res) => {
  res.json({
      "label": "Reykjavik",
      "desc": "Reykjavik s the capital and largest city of Iceland. It is located in southwestern Iceland, on the southern shore of Faxaflói bay. Its latitude is 64°08' N, making it the world's northernmost capital of a sovereign state. With a population of around 131,136 (and 233,034 in the Capital Region), it is the centre of Iceland's cultural, economic and governmental activity, and is a popular tourist destination.",
      "jpg": "rey.jpg"
      });
  });
  app.get("/api/Edmonton", (req, res) => {
    res.json({
      "label": "Edmonton",
      "desc": "Edmonton is the capital city of the Canadian province of Alberta. Edmonton is on the North Saskatchewan River and is the centre of the Edmonton Metropolitan Region, which is surrounded by Alberta's central region. The city anchors the north end of what Statistics Canada defines as the Calgary–Edmonton Corridor.",
      "jpg": "edm.jpg"
    });
  });
  app.get("/api/Vancouver", (req, res) => {
    res.json({
      "label": "Vancouver",
      "desc": "Vancouver is a major city in western Canada, located in the Lower Mainland region of British Columbia. Vancouver is one of the most ethnically and linguistically diverse cities in Canada: 52 percent of its residents are not native English speakers, 48.9 percent are native speakers of neither English nor French, and 50.6 percent of residents belong to visible minority groups.",
      "jpg": "yvr.jpg"
     });
  });
  app.get("/api/default", (req, res) => {
    res.json({
      "label": "Pick A City",
      "desc": "Description",
      "jpg": "malaga.jpg"
  
  });
});



if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}
app.listen(port, () => console.log(`Listening on port ${port}`));