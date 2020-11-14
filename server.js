const app = require("./modules/app/app");
const cors = require("cors");
const config = require("./config");

const port = process.env.PORT || 8000;
app.use(
  cors({
    origin: config.CLIENT_ORIGIN,
  })
);

app.listen(port, () => {
  console.log(`[petful-server] Listening on ${port}.`);
});
