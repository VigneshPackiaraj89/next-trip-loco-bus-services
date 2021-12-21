const express = require("express");
const path = require("path");

const app = express();

// Point static path to dist
app.use(express.static(path.join(__dirname, "dist")));
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});


/** Get port from environment and store in Express. */
const port = process.env.PORT || 3000;

/** Listen on provided port, on all network interfaces. */
app.listen(port, () => {
  console.log(`Listening to port ${port}`);
})