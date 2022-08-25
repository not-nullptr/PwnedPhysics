# PwnedPhysics
 
A re-creation of Haubna's joke of a verification API (which still has no-one laughing) 

## You're not funny. How do I set this up?

Well, since you so politely asked, I'll tell you.

First, download Node.JS at https://nodejs.org/en/. Next, clone this repo and go into the folder. Open an instance of Command Prompt/Terminal/Bash (or whatever you gosh-darned kids use these days), then run the command `npm install`. If there's any errors, create an issue. I'm just a wall of text, I can't help you. After you've done all that, run `npm start`. We're not done yet, though. Next, run Notepad **AS ADMINISTRATOR** and open the file located at `C:\Windows\System32\drivers\etc\hosts`. Then, add `127.0.0.1 verify.minecraftphysicsmod.com` to the BOTTOM of the file. Finally, open up Minecraft with your unmodified Physics Mod. Now, mind you, I cannot PROVIDE this mod, per se, but if you were to go to the website https://kemono.party, I think you'd find what you're looking for.

## So, the server's running, but I still see the verification screen!! What do I do?

So, you shouldn't be seeing this. But, in the case that you are, open the `app.js` file in any text editor and around the 10th line or so there will be an array called 'allowedCodes'. Copy one of the codes from there and paste it in. Voila!
