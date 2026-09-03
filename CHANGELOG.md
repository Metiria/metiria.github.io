### CHANGELOG
All project changes will be recorded in this file. 

## PATCHES

# [03-09-2026] - Tour and pictures update. Releases update.  
- TOUR & PICTURES
- New field "stage" added to tour.yml, to indicate eventual tour stages (ex. Sanremo rock -> venue, Finals -> stage). 
- Liquid templating logic in tour.html changed. Now, the venue is complemented with the stage, which info are withdrawn from tour.yml file
- New CSS rules added to the ".tour-stage" class in tour.css file
- Liquid templating logic in pictures.html changed. As previous, the venue is now complemented with an optional stage row. 
- New CSS rules added to the ".picture-stage" class in single-picture-page.css file
- RELEASES
- In releases.yml file, YouTube icon has been moved before Spotify icon for every element; each element has been correctly labeled, to achieve better recognition. 
- In releases.html file, a new div class ".collapsable" has been added, in order to make every category (es. Singles, Albums, ...) collapsable by cliking over the title. 
- All style rules linked to this functionality have been added to releases.css file. 
- modified files: _data/tour.yml, tour.html, static/css/tour.css, pictures.html, static/css/single-pictures-page.css, releases.html, _data/releases.yml, static/css/releases.css

# [02-09-2026] - Various updates and fixes.
- In tour.html page, all item cards animation have been removed (CSS rule ➔ tour-card:hover). 
- Rosemary's pub event removed, new Music Contest added 
- Policy pages background image changed
- Threads and X buttons added in footer links
- Social links updated in arturo.html page
- Updating news cards structure in News page and in the auto-generated pages; now, a new author field is available
- modified files: _data/tour.yml, _includes/footer.html, _layouts/news-single.html, _posts/news, static/css/news-page.css, static/css/policy-pages.css, arturo.html, news.html

# [02-09-2026] - Anchoring all links to specific html elements. 
- Anchoring all links in home page to the correct page sections, specifically:
- *Benedictine Monastery* ➔ Disummer 2024.
- *Local contests & Festivals* are now two splitted links: "Local contests" and "Rock Festivals"
- *Small theaters* link removed.
- *Basilicata* link removed 
- *Interregional round* ➔ Interregional Selection, uniforming titles in: Selection, Round and Finals
- *Sorrow* ➔ Sorrow id, Releases page
- *National grand final* ➔ National finals.
- *Third overall place* ➔ Linked directly to the article.
- *Castings* ➔ Castings.
- *Stage and Live…* ➔ Stage.
- *Attention Seeker* ➔ Link corrected from Sorrow to Attention Seeker.
- *First semifinal* ➔ Semifinals.
- *numerous national and international artists* ➔ Aggiungere nuovo link verso la playlist di San Marino.
- *Part of the first 20* ➔ Decidere se far aprire direttamente l'articolo. 
- New rule in style.css file added (scroll-padding-top) in order to center anchoring elements when navigating through links
- modified files: index.html, static/style.css, _data/tour.yml

# [31-07-2026] - Auto-scrolling carousel in home page refactored. 
- Auto-scrolling carousel in home page has been reconstructed. 
- Two buttons now enables manual scrolling, while all cards auto-scrolls. 
- In mobile view, the buttons appear below the cards
- All the logic has been defined in static/js/index.js file. 
- The freezing problem has been fixed, now the animation-stop linked to the cursor movement over the cards is applied only in desktop view, while it is adjusted in mobile-view. 
- modified files: index.html, index.css, index.js

# [31-07-2026] - Favicon updated. Home updates and bug fixes. 
- FAVICON
- Blue logo setted in browser tab. 
- HOME
- General information text has been updated
- Metiria logo position has been adjusted to better fit both PC and mobile view in General Information section
- Videoclip in Attention Seeker section has been fixed in order to avoid freezing in mobile devices. The new javascript file "index.js" has been linked to the index.html page in order to fix video refreshing problems.
- modified files: _layouts/simple.html, _layouts/profile.html, _layouts/policy.html, _layouts/news-single.html, _layouts/gallery-pictures.html, index.html, static/css/index.css, static/js/index.js

# [25-07-2026] - Releases page is now dynamic. 
- Logic and page style modified. Now it is possible to add new categories of releases or new items like singles, albums, etc.. modifying the _data/releases.yml file. 
- releases.yml file organizes each release in categories (Singles, Ep's, Albums, Live, Playlists), which has to be specified; these categories are editable and it's possible to add or remove a category
- each category contains some items, which are displayed as cards showing the title, the cover image and some links to the streaming platform. 
- each information related to a specific item has to be inserted into releases.yml file, following the same strutcure 
- all additional information are found in the guide
- modified files: _data/releases.yml, releases.html, static/css/releases.css, static/style.css

# [19-07-2026] - General Fixes, Picture page completed, documentation written. 
- Picture section completed with functionality, contents and styling 
- picture.css file removed, new static/css/single-picture-page.css file created
- gallery-modal.js file created and linked to gallery-pictures.html layout
- tour.html page logic updated, now photos buttons appears only if "pictures" field in tour.yml is not false and it is linked directly to the event specific photo page
- CSS conflict fixed and Tour page functionality restored; in tour.css and tour.js, the "hidden" class has become the "collapsed" class, while in style.css the class "hidden" has a specific rule of display:none. 
- EVENTS ADDED TO PICTURES AND LINKED TO TOUR PAGE
- disummer
- risuoni
- rumori-barocchi
- san-marino
- sanremo-rock
- DOCUMENTATION 
- The procedure to create a new gallery in pictures page linked to the event in the tour page is fully explained in the documentation file, which is developed simultaneously. 
- All pictures given have been sorted and compressed to acceptable dimensions (KB, not MG). 
- modified files: CHANGELOG.md, tour.html, pictures.html, news.html, lineup.html, index.html, static/style.css, static/css/tour.css, static/css/single-pictures-page.css, static/css/index.css, static/js/tour.js, static/js/gallery-modal.js, files/events_pictures, _posts/news, _posts/events_pictures, _layouts/gallery-pictures.html, _includes/menu.html, _data/tour.yml

index.html, lineup.html, menu.html, news.html, pictures.html, _posts, events_pictures, static/style.css, static/css/index.css

# [12-07-2026] - New Pictures page created and linked to Tour page. Home and News pages fixes. 
- Music style section is now below videoclip in home page. 
- Lineup pharentesis removed from members' names. 
- Store link added to the store button; now it redirects directly to bandcamp page. 
- PICTURES
- New page pictures.html created. It dinamycally loads all events covers from _posts/pictures directory in form of standard cards. Each card is a link which refers to an automatically generated page, specific for each event. 
- _posts logic slightly modified; now, the attribute type has been added to all .md files in _posts, in order to differenciate between news and pictures subdirectories
- modified files: index.html, lineup.html, menu.html, news.html, pictures.html, _posts, events_pictures, static/style.css, static/css/index.css

# [09-07-2026] - General information section in home page refactored
- The list of members' links has been replaced by an automatic scrolling carousel, displaying some clickable cards of each active member. 
- The logo has been placed as a watermark, instead of an active element of the page
- modified files: index.html, static/style.css, static/css/index.css

# [08-07-2026] - Small fixes in news-single.html layout
- removed the go back to news button and reduced page padding
- link label updated, new link added to the first news and image updated
- modified files: _layouts/news-single.html, _posts, static/css/single-news-page.css

# [08-07-2026] - News page rebuilt and linked to Tour page. Tour page and simple fixes.
- GENERAL FIXES
- menu.css file has been moved to static/css directory; all layouts now are linked only to style.css, which imports every other CSS file. 
- NEWS PAGE 
- News page completely rebuilt. New logic has been implemented to link the tour page events and the news. Indeed, some events are linked to a news, which are now reported in the news page. Read TOUR section for more information about linking events and news. 
- The news page presents a collection of news as cards, sorted from the most recent to the oldest one. The structure has been defined in the news.html file. All data to fill the cards are collected from the markdown files saved in _posts directory. 
- By clicking over a card, a new page opens, which is a dedicated page to the selected news. 
- The directory _posts collects every markdown file for each news. A single markdown file contains all informations of a news and has a fixed structure with some fields to fullfill (example, title, cover_image, ...). Some fields are optional, like source, news_id and youtube_id. 
The text content can be copy-pasted below this fixed structure, which is marked by dashes ---. 
- A new layout has been defined in the _layouts directory, named news-single.html. This layout automatically builds the page (using Liquid template) for the selected news, collecting all informations from the related markdown file. 
- The style rules for the news page are collected inside static/css/news-page.css, while specific news pages rules are collected inside static/css/single-news-page.css
- files/news_pictures folder has been created to collect every picture for the news pages
- TOUR PAGE
- In Tour page, Branch titles now are blue by default and became white when cursor is hover. 
- Now, in _data/tour.yml file, the news field must be filled with "false" if no news is linked to the event, else you have to use the news id defined in the corresponding news markdown file. For example, looking in tour.yml file, you can find the "san-marino-song-contest-2026" event, which is linked to the news in the _posts directory "2026-02-20-ariston-metiria.md". If you open this markdown file, you can find the news_id. All you have to do to link the news to the event is to copy-paste this link in the news field of the event in the tour.yml file.
- modified files: _data/tour.yml, _layouts/news-single.html, _layouts/policy.html, _layouts/profile.html, _layouts/simple.html, _posts, _files/news_pictures, static/style.css, static/css/menu.css, static/css/news-page.css, static/css/policy-pages.css, static/css/single-news-page.css, news.html, tour.html
- deleted files: files/news folder

# [07-07-2026] - CSS refactoring, color palette update. 
- New dedicated CSS file created in static/css directory, named "members.css", containing all CSS rules shared by the individual pages for each member of the band
- Home specific CSS rules have been moved to static/css/index.css file
- All new CSS files are imported in static/style.css file, which is linked in every layout (check _layout/simple.html, profile.html and policy.html)
- The new color variables are defined in style.css in root rules; to change color palette, change those variables. All the colors in every CSS files now refer to those rules. 
- Back-to-top button aesthetics fixed.
- Logo updated to blue version. 
- modified files: static/style.css, static/menu.css, static/css/members.css, static/css/index.css, static/css/header.css, static/css/footer.css, static/css/tour.css, static/css/news.css, static/css/policy-pages.css, index.html, _includes/menu.html, files/logo/transparent_background/Logo/blue_logo.png

# [06-07-2026] - Home, Tour and News update. New site colors chosen.
- GENERAL
- New color palette chosen. Main colors are black, white, #2D6F87 and #3D94B2. The conversion is gradual, continuing the CSS optimization process also. The elevated number of redundacies increments the time needed to complete the task. 
- New element animation added in common.js. Now, the targeted elements are subjected to a scrolling animation. To target new elements, simply add the class or the id inside the targeted elements list in common.js.   
- HOME & NEWS
- Begginning text corrected and code re-organized.
- New dedicated CSS file created in static/css directory, named "news.css". All redundancies in style.css have been eliminated. 
- TOUR 
- New dedicated CSS file created in static/css directory, named "tour.css". All redundancies in style.css have been eliminated.
- New dedicated JavaScript file created in static/js directory, named "tour.js", in order to animate the timeline buttons. 
- New "tour.yml" file created in _data/ directory. This file contains all information about tours and events; it must to be updated to alter the timeline structure, which uses Liquid template to generate all the structures like branches and cards. To add a new branch or event, simply copy-paste an existent branch or event and modify the information, following the current format. 
- Timeline has been changed completely. Now, it is animated and uses Liquid Templating in order to respect DRY principle. There are 2 different animation, one in the opening phase of the branch and the other one in the closing phase. All tour page specific CSS rules are written into static/css/tour.css. 
- modified files: index.html, tour.html, news.html, static/style.css, static/css/tour.css, static/css/news.css, static/js/common.js, static/js/tour.js, _data/tour.yml

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


