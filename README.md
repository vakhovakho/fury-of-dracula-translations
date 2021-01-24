# fury-of-dracula-translations
This project contains (addable) translations for the board game cards of Dracula Third/Fourth edition.   
You can search for cards by their English titles and get translation in other Languages (In this case Georgian Or any language you add).  
You can add translation of any language.

## DEMO
see here: http://dracula.vakho.space

## How to use?
- Run `npm install` command from project's root directory.  
- Run `npm start` command and open app iside a browser.
- Type any letter to search by card title.

## How to change language?
Duplicate the file `/translations/ka.json`. For example, create `/translations/fr.json`.  
Then translate contents of `fr.json`.  
Then open the app in your browser with `lang` parameter. For example `http://localhost:5000?lang=fr`.

**Note: Default app language is Georgian (ka). It can be modified inside the /assets/js/script.js file** 

## Resources:
Fury Of Dracula Third/Fourth Edition: https://boardgamegeek.com/boardgame/181279/fury-dracula-thirdfourth-edition
