/*
    authored by madzzz in 2023
    drm is bad
    free media heck yeah
*/

var express = require("express");
var app = express();
const allowedCodes = [
    'thisCodeWorks'
]
const doVerification = false; // set to true if you only want codes in allowedCodes to work
const oldVersion = false;
app.use((req, res, next) => {
    console.log(`${req.method} request made to "${req.baseUrl + req.path}" ${req.query ? `using code "${req.query.code}" (${allowedCodes.includes(req.query.code) || !doVerification ? `successfully verified` : `failed to verify`})` : `without a code`} at ${new Date().toLocaleTimeString()}.`)
    next();
})

app.get('/verify', (req, res) => {
    try {
        if (req.query.code == "error") throw new Error("Sample error thrown.")
        if (!doVerification) return res.status(200).send(`${req.query.code}verified`)
        if (allowedCodes.includes(req.query.code) && req.query.code) {
            return res.status(200).send(`${req.query.code}verified`) // no space bcs String.contains("abcd " + "verified") returns false in java
        }
        return res.status(200).send(`Invalid code! Valid codes are ${allowedCodes.toString().replace(/,([^,]*)$/, ' and $1').replace(/,/g, ', ')}.`) // i don't know why but it always expects 200?? shitty code
    } catch(e) {
        console.log(`An error occured while verifying. (${e})`) // this should never, EVER happen
        return res.status(200).send(`${e.toString().slice(7)}`)
    }
})

app.listen(oldVersion ? 4567 : 80, () => {
    console.log(`Listening on port ${oldVersion ? 4567 : 80}`)
})
