const express = require("express");
const cors = require("cors");
const app = express();
const port = 3002;

app.use(cors());


app.get("/cards/:difficulty/:theme", (req, res) => {
	let cards = [];
	
  if (req.params !== null) {
    if (req.params.difficulty !== null && req.params.theme !== null) {
      const difficulty = req.params.difficulty;
      const theme = req.params.theme;
    }
  }
  res.send(JSON.stringify(cards));
});
app.get("/scores", (req, res) => {
  res.send("scores");
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});


function

let cards = `
{
    "cards": [
        {
            "isDiscovered": false,
            "icon": "🥜",
            "id": 49
        },
        {
            "isDiscovered": false,
            "icon": "🍏",
            "id": 0
        },
        {
            "isDiscovered": false,
            "icon": "🥝",
            "id": 16
        },
        {
            "isDiscovered": false,
            "icon": "🥝",
            "id": 16
        },
        {
            "isDiscovered": false,
            "icon": "🥭",
            "id": 13
        },
        {
            "isDiscovered": false,
            "icon": "🥭",
            "id": 13
        },
        {
            "isDiscovered": false,
            "icon": "🍉",
            "id": 6
        },
        {
            "isDiscovered": false,
            "icon": "🥒",
            "id": 22
        },
        {
            "isDiscovered": false,
            "icon": "🍹",
            "id": 56
        },
        {
            "isDiscovered": false,
            "icon": "🥜",
            "id": 49
        },
        {
            "isDiscovered": false,
            "icon": "🍹",
            "id": 56
        },
        {
            "isDiscovered": false,
            "icon": "🍏",
            "id": 0
        },
        {
            "isDiscovered": false,
            "icon": "🥎",
            "id": 53
        },
        {
            "isDiscovered": false,
            "icon": "🍉",
            "id": 6
        },
        {
            "isDiscovered": false,
            "icon": "🥎",
            "id": 53
        },
        {
            "isDiscovered": false,
            "icon": "🥒",
            "id": 22
        }
    ]
}
`;
