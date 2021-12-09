const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// API calls
app.get("/api/hello", (req, res) => {
  res.json({
    "Philipsburg":{
      "label": "Friendly Island",
      "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "jpg": "sxm.jpg"
    },
    "Malaga":{
      "label": "Malaga",
      "desc": "Spanish Island",
      "jpg": "malaga.jpg"
    },
    "Reykjavik":{
      "label": "Reykjavik",
      "desc": "Spanish Island",
      "jpg": "rey.jpg"
    },
    "Edmonton":{
      "label": "Edmonton",
      "desc": "Spanish Island",
      "jpg": "edm.jpg"
    },
    "Vancouver":{
      "label": "Vancouver",
      "desc": "Spanish Island",
      "jpg": "yvr.jpg"
    },
    "default":{
      "label": "Pick A City",
      "desc": "Description",
      "jpg": "malaga.jpg"
    }
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