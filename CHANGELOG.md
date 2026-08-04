
### CHANGELOG
All project changes will be recorded in this file. 

## PATCHES

# [04-07-2026] - Footer, Header and Policy pages update. CSS Architecture refactored.  
- FOOTER CHANGES
- Several changes have been made in footer section, including: 
  - Less space between social and copyright sections in footer.
  - Policy buttons text now is white when cursor gets over them.
  - Footer overall height reduced, so that the "Follow us" row remains visible.
  - Social icons are now re-arranged for better visualization. 
- HEADER CHANGES
  - New header photos have been loaded, splitted between mobile and PC version, updating the logic. 
  - Now, portrait photos are visible in mobile view only, while landscape ones in PC view only.
  - Transition animation speed has been slightly increased.
  - The logic to insert or update photos was not changed.
- POLICY PAGES CHANGES
  - Policy pages now have a different background image.
- RELEASES CHANGES
  - San Marino Playlist links updated
  - Added new simple youtube icon to each element of releases page
- GENERAL CHANGES
  - Now style.css imports specific css files, to improve maintainability and readability. For example, all CSS rules regarding the footer section are now collected in static/css/footer.css file, just like header and other specific parts. This refactoring takes time, so it will be completed gradually. 
- modified files: _includes/footer.html, _includes/header.html _data/header_pictures.yml, files/header_pictures, files/pictures, static/css, static/style.css, releases.html

# [30-07-2026] - Patch to previous update
- Copyright section in footer, correction from "Caflish" to "Caflisch" and "Support" to "Support Us"
- Media Query for policy links modified, now there are two equal buttons at the bottom of the footer and the copyright takes 3 rows
- Footer structure adjusted for better items alignment 
- modified files: _includes/footer.html, static/style.css

# [30-07-2026] - Copyright and Policy&TermsOfUse sections added, go-to-up button fix, adjusted responsitivity
- The footer section has been complemented with the copyright section and two links to the policy page and the terms of use page
- Footer structure has been changed, creating a new section having class "copyright-section" under the previous "social-section"
- Both pages has been created as separated html files in root directory, named privacy-policy.html and terms.html 
- New layout "policy.html" has been created, shared by both pages. This is very similar to simple.html layout, without the header section
- New CSS rules has been added to static/style.css file, along with others footer rules, all near the section FOOTER
- Other CSS rules for responsitivity has been added, like central aligning of the text for every page in mobile view
- files/pictures directory created for generic pictures. `privacy-terms-background.JPG` added as fixed background of both pages.
- static/js/common.js javascript file has been updated; the logic has been changed to prevent the button from moving below the footer's social section, as it would otherwise overlap with the policy buttons.
- modified files: _layouts/simple.html, _layouts/policy.html, privacy-policy.html, terms.html, _includes/footer.html, static/style.css, files/pictures, static/js/common.js

# [30-07-2026] - Header fix and vertical pictures allowed, new file convention added
- Changed header logic to avoid slowdown in page loading and including vertical pictures in mobile view only.
- Vertical pictures are now allowed and selectively displayed in mobile view to prevent cropping issues.
- Refactored header logic and `_data/header_pictures.yml` organization, dividing images into two main families based on viewport orientation (`Landscape` for PC, `Portrait` for mobile).
- Introduced a naming convention for header images: all vertical photos sharing the main folder must be marked with a `_ver` suffix (example, `img1.jpg` -> `img1_ver.jpg`).
- New images cannot be used exactly as created, as they slow down the browser too much. They must be compressed so that the image file size falls within the 100–400 KB range. Below is the bash command used to compress the images (input.png and output.png are placeholders for the picture to compress and the relative output, check ffmpeg documentation for additional info):
ffmpeg -i files/header_pictures/input.jpg -vf "scale=1920:-1" -q:v 5 -map_metadata -1 files/header_pictures/output.jpg
- modified files: _data/header_pictures.yml, _includes/header.html, files/header_pictures

# [28-07-2026] - Auto-scrolling header pictures added
- header now displays a collection of auto-scrolling photos
- new sub-directory "header_pictures" in "files" directory created, containing all header photos
- new directory "_data" and "header_pictures.yml" created. This contains a list of the of the pictures' names
- the header structure has been changed, using Liquid templating for dynamic loading of the pictures inside _data/header_pictures.yml file and files/header_pictures directory.
- The data must be consistent. Therefore, if photos are renamed, added, removed or replaced, both the folder files/header_pictures (which contains the pictures) and the file _data/header_pictures.yml (which contains the image filenames and the orientation) must be updated manually.
- the scrolling animation has been added in style.css file
- pictures have been manually modified to fit in both PC and mobile view
- modified files: files/header_pictures, _includes/header.html, static/style.css, static/js/common.js, _data/header_pictures.yml

# [28-07-2026] - Fixed horizontal scrolling and go-to-up button
- Problem with overflowing videoclip and consequential unwanted horyzontal scroll solved
- Go-to-up button style is now the same as other buttons
- Support icon in footer has been aligned with other links from PC view
- modified files: static/css/index.css, static/style.css, _includes/footer.html

# [27-07-2026] - Go-to-top Button added
- added the go-to-top button, which allows the user to rapidly go to the top of the web site page. 
- modified files: _layouts/simple.html, static/style.css, static/js/common.js

# [27-07-2026] - Email copying on clipboard is now available, videoclip updated
- added a button in footer.html for copying band email address to clipboard with a small message box for confirming the action  
- modified simple.html layout to include in every page common.js file 
- button logic has been added to common.js
- style features have been added to style.css 
- the videoclip file has been replaced with the band selected video clip. The quality of the video has been reduced to avoid page loading latency (new dimension: 1.9MB from 320MB) and the audio track has been removed
- modified files: _includes/footer.html, _layouts/simple.html, static/style.css, static/js/common.js, file/videos/clip_attention_seeker.mp4

# [26-07-2026] - Bigger links button in tour page for PC view and specialized javascript and css files
- added a media query for bigger links in tour page in PC or tablet view 
- it's now possible to include specialized javascript and css files for each page extending the layout

# [26-07-2026] - Home video clip button changed and footer links update
- video clip button and writings updated in home page
- all footer links now open a new browser window instead of reloading the page

# [25-07-2026] - Attention Seeker video clip added in Home page
- a section containing the video clip of Attention Seeker has been added in the home page, eliminating the 
  youtube preview and adding a new button with different style

# [25-07-2026] - Update of the Releases page 
- the releases page is now fully responsive 
- the page elements like songs have been redesigned in order to better appear on mobile devices

# [25-07-2026] - New diretories added
- directory "videos" for mp4 videos has been added. Path: metiria.github.io > files > videos
- directory "js" for javascript files has been added. Path: metiria.github.io > static > js
- clip_attention_seeker.mp4 file has been added to the directory "videos"
- common.js has been added to the directory "js"

# [25-07-2026] - News "La Sicilia 25_09_15" update
- updated the "La_Sicilia_25_09_15.jpeg" file 

# [23-07-2026] - San Marino Song Contest 2026 spotify link added to Releases page 
- new element added to the playlists section of the releases page
- the element contains the playlist cover and the spotify link

# [22-07-2026] - Attention Seeker video added to the home page 

## [23-07-2026] - San Marino Song Contest 2026 spotify link added to Releases page 
- new element added to the playlists section of the releases page
- the element contains the playlist cover and the spotify link

## [22-07-2026] - Attention Seeker video added to the home page 
- added YouTube video preview on the Home page


