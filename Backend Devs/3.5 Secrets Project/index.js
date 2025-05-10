//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import bodyParser from "body-parser";

//For navigating paths easily......
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));


const app = express();
const port = 3000

app.use(bodyParser.urlencoded( {extended: true} ));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});


//My own solution

app.post("/check", (req, res) => {

    // console.log(req.body);
    let userPasscode= req.body['password'];
    //   console.log(passcode);

    if("ILoveProgramming" === userPasscode) {
        res.sendFile(__dirname + "/public/secret.html");
    } else {
        res.sendFile(__dirname + "/public/index.html");
    }

})

//Angela's solution

// let UserIsAuthorised = false;

// var Authentication = (req, res, next) => {
//     const userPasscode = req.body["password"];
//     if(userPasscode === "ILoveProgramming") {
//         UserIsAuthorised = true;
//     }
//     next();
// }
// app.use(Authentication);

// app.post("/check", (req, res) => {
//    if(UserIsAuthorised) {
//     res.sendFile(__dirname + "/public/secret.html");
//    } else {
//     res.sendFile(__dirname + "/public/index.html");
//    }
// })


// The method used above which is commented is correct on like Angel's solution
app.listen(port, (req, res) => {
    console.log(`Listening on port ${port}`);
})