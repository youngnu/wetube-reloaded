import "./db";
import "./models/Video";
import app from "./server"

const PORT = 4000;
const handleListener = () => console.log(
    `Server listening on port 4000 http://localhost:${PORT}`
);


app.listen(PORT, handleListener);