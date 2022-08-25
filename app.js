/*
    Authored by Robot in 2022
    Get owned, Haubna
    Maybe don't put DRM in your mods next time, you speccy-eyed twat <3
    (icl though you're making bank off of your physx port and i can respect that, not sure nvidia will tho LOL)
*/

var express = require("express");
var app = express();
const allowedCodes = [
    'sampleCode',
    'anotherSampleCode',
    'verified',
]
const doVerification = true;
app.use((req, res, next) => {
    console.log(`${req.method} request made to "${req.baseUrl + req.path}" ${req.query ? `using code "${req.query.code}"` : `without a code`} at ${new Date().toLocaleTimeString()}.`)
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
        return res.status(200).send(`${e}`)
    }
})

app.listen(4567, () => {
    console.log(`Listening on port 4567`)
})