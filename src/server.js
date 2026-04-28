import app, { server } from "./app.js";
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("ok")
})

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})