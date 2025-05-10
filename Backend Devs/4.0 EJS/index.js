import express from "express";


const app = express();
const port = 3000;

app.get("/", (req, res) => {

    const d = new Date("July 23, 1983 01:15:00");
    let day = d.getDay();
    console.log(day);

    var dayType= "a weekday";
    var advice= "It's time to work hard";

    if(day === 0 || day === 6) {
        dayType = "The weekend";
        advice = "It's time to have fun!";
    }
    res.render("index.ejs", {
        dayType: dayType,
        advice: advice,
    })
})

app.listen(port, () => {
    console.log(`Server Listening on port ${port}`);
})