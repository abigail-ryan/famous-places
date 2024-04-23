# Famous Places 
[View my live site here](https://abigail-ryan.github.io/famous-places/)

Famous Places is an online interactive quiz for teens and adults to test their knowledge of famous landmarks throughout the world.
Users of this site can play the multiple- choice quiz, with immediate feedback, and view their scores at the end.

![Screenshot of Famous Places responsive design through Am I responsive website](documentation/famous-places-responsive-screenshot.png)

## Contents
* [User Stories](#user-stories)
  * [Primary Goal](#primary-goal)
  * [Visitor Goals](#visitor-goals)
  * [New User](#new-user)
  * [Site Admin](#site-admin)
* [UX Design](#ux-design)
  * [Strategy](#strategy)
  *	[Scope](#scope)
  * [Structure](#structure)
  * [Skeleton](#skeleton)
    * [Wireframes](#wireframes)
  * [Surface](#surface)
* [Design](#design)
  * [Color Scheme](#color-scheme)
  * [Typography](#typography)
  * [Imagery](#imagery)
* [Page Features](#page-features)
  * [Desktop View](#desktop-view)
    * [Start Modal](#start-modal)
    * [Game Rules](#game-rules)
    * [Quiz Layout](#quiz-layout)
    * [Answer Feedback](#answer-feedback)
    * [Quiz Results](#quiz-results)
  * [Mobile View](#mobile-view)
    * [Mobile view](#mobile-view)
 * [Future Features](#future-features)
 * [Technologies Used](#technologies-used)
   * [Languages](#languages)
   * [Frameworks, Libraries, Technologies and Programs used](#frameworks-libraries-technologies-and-programs-used)
* [Testing](#testing)
  * [Manual Testing](#manual-testing)
  * [Bugs](#bugs)
  * [Validation and Lighthouse Testing](#validation-and-lighthouse-testing)
* [Deployment](#deployment) 
* [Forking the GitHub Repository](#forking-the-github-repository)
* [Clone the GitHub Repository](#clone-the-github-repository)
* [Credits](#credits)
  * [Content and Code References](#content-and-code-references)
  * [Media References](#media-references)
* [Acknowledgements](#acknowledgements)     
         
 
___

### User Stories
#### Primary Goal

The goal is to create an interactive online quiz for teens and adults, based on famous landmarks throughout the world. 

#### Visitor Goals

Visitors to Famous Places will be able to take part in a general knowledge quiz and see in real time if they got the correct answers. They will also be able to view their final score and have a chance to take the quiz again.

#### New User

* A new user can easily identify what the quiz is about.
* A new user can understand the quiz rules.
* A new user can start the quiz when they are ready.
* A new user can see what question number they are on.
* A new user can immediately see if their answer is correct/incorrect.
* A new user can easily navigate through the quiz.
* A new user can view their final score.
* A new user can start the quiz over again.

#### Site Admin

* I want to give users a fun experience testing their knowledge of landmarks around the world.

___

### UX Design

#### Strategy

* The Famous Places quiz needs to be fun, bright and interactive. The design must be simple but effective in displaying to the user that this is an online quiz game.
* The quiz needs to be started when the user is ready.
* Navigating through this quiz needs to be easy for the player.
*	The final score must be displayed to the player.
*	All text must be clear and legible on all device sizes. 
* Full responsiveness for all screen sizes is essential for this website.

#### Scope

*	The landing page should display the game rules. 
*	A “start” button will allow users to start the quiz when they are ready.
*	Once selected, the player will not be able to change their answer.
*	After an answer has been selected the “next” button will display to take the player to the next question.
*	The game will record the players correct answers.
*	When the quiz is finished, feedback to the player showing their score will be displayed.
*	A “play again” button will be displayed to allow the user to play the game again.

#### Structure

*	A large heading with the game name “Famous Places” will be at the top of the page.
*	A clear and short introduction to the game rules will be displayed to the user, to inform them how to play.
*	A clear call to action “start” button will be displayed underneath the rules to prompt the player to start the game.
*	The game will display large images with a question and multiple choice answers to test the players knowledge.
*	The answer buttons on the site must provide feedback to the player, in the form of a colour change to green for correct, and red for incorrect.
*	The next button will take the player to the next question.
*	The player will be informed of their score once all questions have been answered, with an option to play the game again.

#### Skeleton

*	The layout and design of the quiz must be clean, and very minimal to avoid distraction.
*	Upon loading, the landing page will display a large heading.
*	Below that, a short description of the game rules, with a start button underneath allowing the player to start the quiz when ready. This will be displayed on a ‘tile’ background that is centred on the page.
*	The player will be taken to the first question, which will have a large image of a famous monument/building, along with a question, and 4 possible answers. This will be displayed on a ‘tile’ that is centred on the page.
*	The “next” button will be displayed after the player selects an answer.
*	The results page will show the player a tally of their score. Again this will be displayed again on a ‘tile’ background that is centred on the page.

#### Wireframes
<details>
<summary>Mobile</summary>
<br>

![Screenshot of Famous Places mobile view wireframe](documentation/famous-places-wireframes-mobileview.PNG)
</details>

<details>
<summary>Desktop</summary>
<br>

![Screenshot of Famous Places desktop view wireframe - index page](documentation/famous-places-wireframes-gamerules-desktopview.PNG)

![Screenshot of Famous Places desktop view wireframe - quiz page](documentation/famous-places-wireframes-quiz-desktopview.PNG)

![Screenshot of Famous Places desktop view wireframe - results](documentation/famous-places-wireframes-results-desktopview.PNG)
</details>

<details>
<summary>From wireframe concept to final product</summary>
<br>

The overall design for my quiz has mostly remained the same as my wireframe layout, with some slight changes as mentioned below:

Mobile view:
* The answer buttons are stacked in a column for mobile devices to allow enough room for longer answers.

Mobile & Desktop view:
* The game rules have been placed in a modal pop up, underneath the start image. This allows room for the short paragraph instructing the user to input their username.
* An input field has been added on the start modal for the player to input their name before starting the quiz. This is optional.
* The players name is used to give personalisation on the results page. If the player doesn’t input their name on the start page, the default “Player 1” will be displayed on the results window.
* I added a feedback statement based on the users results; giving encouragement to try again for low scores, and congratulations for high scores
* An exit quiz button was added to allow players to exit out of the quiz loop back to the start window.
</details>

#### Surface 

* It was important to keep the design of the quiz clean and fresh.
* The background ‘tiles’ were kept white, to allow the images stand out and be the focus.
* The answer buttons were styled with pops of color inspired by the background image, for a bring fun feel for the game. 
* The player receives immediate feedback on their answers. The selected button changes color to indicate correct or incorrect answers. 
* The player recieves their final score at the end of the quiz, with a feedback message depending on their score level.
* The player has the option to play the quiz again or exit back to the start screen.

___

### Design
#### Color Scheme

With the idea to keep the design clean and fresh I chose my color pallete based on the images I had sourced for my questions. As my questions imagery has quite a strong blue presence, I chose bright contrasting colors similar to the background question-mark image. I also chose a vibrant green for indicating the correct answer, as well as a strong red to indicate incorrect answers.

![Screenshot of Famous Places color palette](documentation/famous-places-color-pallete.png)

<details>
<summary>Color Palette Inspo</summary>
<br>

![Quiz background - colorful question marks](assets/images/famous-places-background-img.jpg)
The background was darkened to allow the full focus to be on the question and images within the quiz.
</details>


<br>
I tested these colours out in Uizard to see a how I liked the color pairing.
<details>
<summary>Uizard Color pairing test</summary>
<br>

![Screenshot of Famous Places color palette test in Uizard](documentation/famous-places-color-pallete-test.PNG)
</details>

<details>
<summary>Aditional colors</summary>
<br>
I used the following colors to add more life to the buttons in the form of borders, box shadows and hover effects.

![Additional colors](documentation/famous-places-border-color-1.png)
![Additional colors](documentation/famous-places-border-color-2.png)
![Additional colors](documentation/famous-places-border-color-3.png)
![Additional colors](documentation/famous-places-box-shadow.png)
</details>

<br>
I also ran my colour pairings through Contrast Checker to check for color contrast accessibility issues. I had initially wanted to use white text within all my buttons however this returned all fails for the answers buttons color. So I decided to use black text throughout the entire quiz, apart from the “start”, “next”  and “play again” buttons, as these passed the contrast checker for large text, and so I ensured these buttons were large with a high font weight to make the text bold.
<details>
<summary>Color Contrast Checker</summary>
<br>

![Screenshot of Famous Places contrast checker 1](documentation/famous-places-contrast-checker-1.PNG)
![Screenshot of Famous Places contrast checker 2](documentation/famous-places-contrast-checker-2.PNG)
![Screenshot of Famous Places contrast checker 3](documentation/famous-places-contrast-checker-3.PNG)
![Screenshot of Famous Places contrast checker 4](documentation/famous-places-contrast-checker-4.PNG)
</details>

#### Typography

I used Font Joy to search for a font pairing that I liked. I chose to use only one font, “Nunito”, across the entire site as I liked the fun character to the lettering, and felt it suited the overall feel of the quiz. I used Google Fonts to import this. 

![Screenshot of font](documentation/famous-places-font.png)

#### Imagery

It was important to me that the imagery used within the quiz was very vibrant and had strong colors, as I wanted to create a clean look to body of the quiz, while the focus and attention was on the images and quiz questions. 

All images used throughout Famous Places were sourced from pixabay.com, unsplash.com and freepik.com. Attributions to each photographer and source are placed in the Credits section of this README.


___


### Page Features

#### Desktop View
##### Start Modal
![Screenshot of Famous Places start modal](documentation/famous-places-start-modal.png)

The start modal displays the game name, along with a tagline "A quiz around the world!" to inform the user what this game is about. A colorful image of a collage of famous monuments, some of which feature in the Famous Places quiz, is also displayed here. The game rules are contained within a pop out modal, and underneath that, the user is instructed to input their name(optional) before starting the game. 

The game cannot be started until the user clicks the start button.

##### Game Rules 
![Screenshot of Famous Places game rules pop out modal](documentation/famous-places-game-rules.png)

The game rules modal pops out when the user clicks the view game rules button. The game rules are explained, and the user then has to click the "x" in the top right hand corner to exit the rules modal. This modal cannot be closed by clicking anywhere else on the screen.

##### Quiz Layout
![Screenshot of Famous Places quiz layout](documentation/famous-places-quiz-layout.png)

Once the player clicks the start button, they are presented with the first question (shuffled randomly for each new game). The quiz includes a large image of a famous place in the world, along with a question, and four possible answers. The questions include some interesting facts and general knowledge, and vary in difficulty. Only after the player selects an aswer, the "next" button appears allowing the player move to the next question.

##### Answer Feedback
![Screenshot of Famous Places incorrect answer feedback](documentation/famous-places-incorrect-answer.png)
![Screenshot of Famous Places correct answer feedback](documentation/famous-places-correct-answer.png)

The player recieves immediate feedback if they got the correct or incorrect answer. Once selected, the player is not able to change their answer. To encourage the players to play the quiz again I chose not to include highlighting the correct answer when the user gets it wrong. This way, for more difficult questions or when the player has no clue what the answer is, it will encourage them to play again to find out the correct answer and beat their previous score. 

##### Quiz Results
![Screenshot of Famous Places quiz results default name](documentation/famous-places-results-modal-default-name.png)
![Screenshot of Famous Places quiz results personalised](documentation/famous-places-results-modal-personalised.png)

When the player reaches the end of the quiz, they are presented with their results. If the player did not input their name at the start, the results show the default "Player 1", and if they did the result page is personalised. This is followed by their score out of 10 correct answers, and a message based on their score level. The player then has the option to play the game again, which will keep their name/default name, and take them to the first question. If the user exits the quiz, they are brough back to the start modal.

In tablet view, the game is displayed the same as desktop view.

#### Mobile View
<details>
<summary>Mobile View</summary>
<br>

| Start Modal | Game Rules | Quiz Layout |
| ---| ---| ---|
| ![Screenshot of Famous Places mobile view - start modal](documentation/famous-places-mobile-start-modal.png) | ![Screenshot of Famous Places mobile view - rules modal](documentation/famous-places-mobile-rules-modal.png) | ![Screenshot of Famous Places mobile view - quiz layout](documentation/famous-places-mobile-quiz-layout.png) | 


| Incorrect Answer | Correct Answer | 
| ---| ---|
| ![Screenshot of Fammous Places mobile view - incorrect answer](documentation/famous-places-mobile-incorrect-answer.png) | ![Screenshot of Fammous Places mobile view - correct answer](documentation/famous-places-mobile-correct-answer.png) |

| Results - Default Name | Results - Personalised Name |
| ---| ---|
| ![Screenshot of Famous Places mobile view - default player name](documentation/famous-places-mobile-default-name.png) | ![Screenshot of Famous Places mobile view - personalised player name](documentation/famous-places-mobile-personalised-name.png) |
</details>

___

### Future Features

With more learning and understanding of JavaScript, for future development of this project I would like to add:
* A high scores feature, that shows the current users a list of their high scores based on their current game attempts.
* A timer function so users can see their time taken to complete the quiz. 
* A results percentage display, inspired by this tutorial from [Codehal](https://www.youtube.com/watch?v=Vp8x8-reqZA). (_I did want to, and tried to, include this particular feature in the current version of this project, however it is outside my scope of learning at the moment and I was unable to make the code work in my project. It is a feature I will work to understand and include in future versions._)
* A much larger selection of questions so that the quiz is vastly different every time the game is played.
* A difficulty level where players race against the clock to get the answers right before running out of time.

___

### Technologies Used
#### Languages
* HTML
* CSS
* JavaScript

#### Frameworks, Libraries, Technologies and Programs Used

* Uizard - used to create wireframes and view colour scheme
*	Git - used for version control
*	GitHub - used to save and store all files for this website
*	Google Fonts – used to import the font for this site
*	Canva Colour – used for colour palette creation
*	Favicon.io – for the globe favicon
*	Tiny PNG - used to compress images
* WebAim Contrast Checker - for checking my colour contrasts for this site
*	Google Dev Tools – used to test responsiveness and to debug
*	Google Lighthouse - for testing overall performance and accessibility of the site
*	W3C Validator - for validating my HTML and CSS code
* JSHint - for validating my JavaScript code

___

### Testing
#### Manual Testing

My goal for this project was to create a fun and interactive quiz that users could enjoy playing on mobile devices primarily, but could also access on various devices with larger screen sizes. I used Chrome Dev Tools to view Famous Places on various screen sizes through my entire project and ensure a responsive design. The browsers used were:
The browsers used were:
*	Chrome
*	Opera
*	Microsoft Edge
*	Safari

I deployed my site early in the development process to test on real-world devices and continued testing throughout. These devices user were:
* Acer Aspire F 15 Laptop
*	Realme 11 Pro+ phone
*	Huawei P20 Pro phone
*	Apple iPad 2018

The results of feature testing are as follows:

* Start Modal

| Feature | Expected Action | Pass/Fail |
| ---| ---| ---|
| Start Modal | Appears on load, displaying game name and tagline, image, game rules, username input and start button | Pass |
| Start Modal | Users cannot click anywhere outside start modal to start the quiz | Pass |
| Game Rules Button | When user clicks "View Game Rules" button, game rules modal pops up to display the rules of the game | Pass |
| Game Rules Modal | Users must click the "x" to close the rules modal. Modal cannot be closed when clicking anywhere else on the screen | Pass |
| Username Input | Requires a minimum of 2 characters | Fail |
| Username Input | Users can input a name up to max 10 characters | Pass |
| Start Buttion | Starts the quiz and hides the start modal | Pass |
<br>

* Quiz

| Feature | Expected Action | Pass/Fail |
| ---| ---| ---|
| Quiz page | Start modal is hidden, then page displays quiz image, questions and 4 multiply choice answers | Pass |
| Quiz Questions | Corresponding image, question, and answers set are displayed | Pass |
| Quiz Questions | Question set is displayed randomly for each new game | Pass |
| Quiz Questions | Quiz runs through 10 question sets, from a possible 15 | Pass |
| Question Number | Question number is displayed at start of question and increments by 1 for each question | Pass |
| Answer Buttons | Incorrect answer buttons turn red for incorrect answers | Pass |
| Answer Buttons | Correct answer buttons turn green for correct answers | Pass |
| Answer Buttons | All buttons are disable once an answer has been selected | Pass |
| Next Button | "Next" button is hidden by default | Pass |
| Next Button | "Next" button only displays after an answer is selected | Pass |
| Next Button | "Next" button takes the user to the next question set | Pass |
<br>

* Results Modal

| Feature | Expected Action | Pass/Fail |
| ---| ---| ---|
| Results Modal | Results modal is display when the users has reached the end of the quiz | Pass |
| Player Name | Player name is displayed as "Player 1" by default if a player does not input their username | Pass |
| Player Name | Player name is displayed as the value entered if a player does input their username | Pass |
| Player Score | Player score shows the number of correct answers out of 10  | Pass |
| Player Feedback | Displays a message based on the users score level | Pass |
| Play Again Button | Continues the game loop and brings the user back to the first question | Pass |
| Play Again Function | Keeps the username - if entered. Otherwise keeps default "Player 1" | Pass |
| Exit quiz Button | Exits out of the game loop. Brings the user back to the start modal. Username input field is reset | Pass |



#### Bugs
* Start Modal

| Feature | Expected Action | Pass/Fail |
| ---| ---| ---|
| Username Input | Requires a minimum of 2 characters | Fail |

The form input field fails to require a user to input a minimum of 2 characters for a username. This fail is possibly due to the fact that I have allowed inputting a username to be optional, rather than required. I prefer to keep the username input optional, however I will look into a solution to this minlenght issue for future projects.


#### Validation and Lightouse Testing

<details>
<summary>HTML Validation</summary>
<br>

![Screenshot of w3c html validation no errors](documentation/html-validation-check.png)
</details>

<details>
<summary>CSS Validation</summary>
<br>

![Screenshot of w3c css validation no errors](documentation/css-validation-check.png)
</details>

<details>
<summary>JavaScript Validation</summary>
<br>

![Screenshot of jshint javascript validation no errors, 2 warnings](documentation/javascript-validation-check.png)

These warnings were minor and very easily fixed.
</details>

<details>
<summary>Lighthouse Testing - Desktop Score</summary>
<br>

![Screenshot of lighthouse testing - desktop score](documentation/lighthouse-score-desktop.png)
</details>

<details>
<summary>Lighthouse Testing - Mobile Score</summary>
<br>

![Screenshot of lighthouse testing - desktop score](documentation/lighthouse-score-mobile.png)

The lighthouse performance score for mobile is significantly lower than on desktop. The diagnostics mentions large layout shifts, which I will take into account for future projects. There is also a mention of large image file sizes. As my project has many images throughout, I feel that this accounted for the slower performance score, and will ensure to minimise file sizes as much as possible for future versions of this project and other projects going forward.
</details>

___

### Deployment
GitHub was used to deploy the Mindful Habit website. 
1.	Login to your GitHub account
2.	Navigate to the project repository, [abigail-ryan/famous-places](https://github.com/abigail-ryan/famous-places)
3.	Click the Settings button near the top of the page.
4.	On the left-hand side, click on the Pages button
5.	In the Source section, choose 'main' from the drop-down, select branch menu
6.	Select 'root' from the drop-down folder menu
7.	Click 'Save' and after a few minutes the project will be live and a link will be visible at the top of the page

### Forking the GitHub Repository
By forking the GitHub repository you can make a copy of the original repository to your own GitHub account. You can view and make changes to this copy, without affecting the original repository.
Use the following steps to copy a repository:
1.	Log in to your GitHub account or sign up.
2.	Navigate to the GitHub Repository of this project, [abigail-ryan/famous-places](https://github.com/abigail-ryan/famous-places)
3.	At the top right of the Repository, just below your profile picture, find the "Fork" button.
4.	You should now have a copy of the original repository in your own GitHub account.
5.	Changes made to the forked repository can be merged with the original repository via a pull request.

### Clone the GitHub Repository
You can create a local copy of this repository by cloning a GitHub Repository, on your computer. This will allow local edits, rather than directly in the source files of the original repository, 
Use following steps to make a clone:
1.	Log in to your GitHub account or sign up.
2.	Navigate to the GitHub Repository of this project, [abigail-ryan/famous-places](https://github.com/abigail-ryan/famous-places)
3.	Above the list of files, click on the dropdown item called "Code".
4.	To clone the repository using HTTPS, copy the link under "HTTPS".
5.	Open Git Bash.
6.	Change the current working directory to the location where you want the cloned directory to be made.
7.	Type git clone, and then paste the URL you copied in Step 4.
8.	Finally, press Enter. Your local clone has now been created.


Changes made on the cloned repository can be pushed to the upstream repository directly if you have a write access for the repository. Otherwise, the changes made in the cloned repository are first pushed to the forked repository, and then a pull request is created.

___

### Credits
#### Content and Code References
* [Code Institute](https://codeinstitute.net/ie/) for the HTML, CSS and JavaScript learning material.
* [W3Schools](https://www.w3schools.com/howto/howto_css_modals.asp) for start, game rules and results modals functions adapted for this project.
* [GreatStack](https://www.youtube.com/watch?v=PBcqGxrr9g8) for the quiz layout, questions array and quiz game functions, which I studied and adapted for this project.
* [Canva Colours](https://www.canva.com/colors/color-palettes/inner-glow/) for the color palette creation.
* [Tiny.png](https://tinypng.com/) for compressing image files.
* [Google fonts](https://fonts.google.com/) for the fonts used in this project.
* [MND Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow) for box shadow styling used throughout this project.
* [Alice Hiller](https://github.com/alicehillier/rainforest-cafe/#deployment) for the forking and cloning a GitHub repository structure.
* [Kera Cudmore - Creating your First README](https://github.com/kera-cudmore/readme-examples) for README content structure and Markdown language guidance.

#### Media References
* [Pixabay](https://www.pixabay.com/), [Unsplash](https://unsplash.com/), and [Freepik](https://www.freepik.com/) were used to source all images used on this site. 
* All general knowledge and factual questions used within this site were written and/or edited by me, and sourced through Google searches.
<details>
<summary>Sources</summary>
<br>

[Questions marks image used for the body background](https://www.freepik.com/free-vector/web-help-support-page-template-design_9504938.htm#query=quiz%20background&position=14&from_view=keyword&track=ais&uuid=ecc6cc2e-31ff-4e9f-8fce-bfb49f5cc882) - I removed the text within the center of the image using paint on my laptop.

[Taj Mahal Image](https://unsplash.com/@jovynchamb?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) | [Taj Mahal Question](https://indiaculture.gov.in/taj-mahal#:~:text=Shah%20Jahan%2C%20in%20order%20to,had%20this%20funerary%20mosque%20built)

[The Louvre Image](https://pixabay.com/users/designerpoint-554875/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=7159870) | [The Louvre Question](https://artsandculture.google.com/story/the-5-most-valuable-exhibits-around-the-world/oQWBcVVxVSq57g?hl=en)

[The Eiffel Tower](https://pixabay.com/users/nkoks-771541/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1175022) | [The Eiffel Tower Question](https://www.paintsquare.com/news/view/?18617#:~:text=According%20to%20Traveller%2C%20the%20Eiffel,cover%20the%2010%2C000%2Dton%20structure)

[Cliffs of Moher](https://pixabay.com/users/naknaknak-90985/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4533675) 

[Big Ben](https://pixabay.com/users/sarahlarkin-1640973/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1042240)

[Sydney Opera House Image](https://pixabay.com/users/jonny_joka-4913008/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=3933588) | [Sydney Opera House Question](https://www.sydneyoperahouse.com/building/interesting-facts-about-sydney-opera-house)

[Statue Of Liberty Image](https://pixabay.com/users/engel9-641086/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=5503807) | [Statue Of Liberty Question](https://artsandculture.google.com/story/hgWBLOYeOkTxmQ)

[Roman Colosseum Image](https://pixabay.com/users/vmonte13-8508172/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4673265) | [Roman Colosseum Question](https://www.natgeokids.com/ie/discover/history/romans/colosseum/)

[Sagrada Familia Image](https://pixabay.com/users/pcdazero-2615/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=536856) | [Sagrada Familia Question](https://sagradafamilia.barcelona-tickets.com/sagrada-familia-finish-date/)

[Burj Khalifa Image](https://pixabay.com/users/bs1920-4429075/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2057583) | [Burj Khalifa Question](https://en.wikipedia.org/wiki/Burj_Khalifa)

[Death Valley Desert Image](https://pixabay.com/users/jplenio-7645255/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=3133502) | [Death Valley Desert Question](https://en.wikipedia.org/wiki/Death_Valley)

[Great Wall of China Image](https://pixabay.com/users/jplenio-7645255/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=3675637) | [Great Wall of China Question](https://en.wikipedia.org/wiki/History_of_the_Great_Wall_of_China#:~:text=The%20history%20of%20the%20Great,against%20incursions%20by%20nomads%20from)

[Great Pyramids of Giza Image](https://pixabay.com/users/henryleester-2440121/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=5584652) | [Great Pyramids of Giza Question](https://www.nationalgeographic.com/history/history-magazine/article/egypt-great-pyramids-giza-plateau#:~:text=Along%20with%20the%20enigmatic%20Sphinx,and%20Menkaure%20(213%20feet).)

[The Grand Canyon Image](https://pixabay.com/users/thedigitalartist-202249/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=5414355) | [The Grand Canyon Question](https://www.shakaguide.com/article/grand-canyon/egyptian-artifacts-in-the-grand-canyon)

[Abu Simbel Temple Image](https://pixabay.com/users/axp_photography-28445136/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=7348347) | [Abu Simbel Temple Question](https://www.enjoytravel.com/en/travel-news/interesting-facts/interesting-facts-about-abu-simbel)

</details>
<br>

* [Favicon.io](https://favicon.io/) for the favicon used for this site.

___

### Acknowledgements

I would like to thank the following:
* My mentor, Mitko Bachvarov, for his time, help and suggestions throughout this project.
* My C.I. Cohort Facilitator, Amy Richardson, also for her encouragement and guidance, and for checking in along the way.
* My family for their help testing my project and offering valuable user feedback.