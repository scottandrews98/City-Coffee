// Jquery section run when page loaded
// jquery.org, j. (2018). jQuery. [online] Jquery.com. Available at: https://jquery.com [Accessed 24 Apr. 2018]
$(document).ready( function(){
    
    // Hide the form section on page load
    $('#form').hide();
    
    // When contact link clicked fade into page in 500 miliseconds
    $('#contact').click(function(){
      $('#form').fadeIn(500);
    });
    
    // Have seperate id for footer contact link becuase jquery only uses the first id of the same name that it can find.
    $('#contactFooter').click(function(){
      $('#form').fadeIn(500);
    });
    
    // When the exit button is clicked hide the form section in 500 miliseconds
    $('#exit').click(function(){
      $('#form').fadeOut(500);
    });
});
// End of jquery section

// SECTION 4 ANIMATING PRODUCT IMAGES

// Get the all the items with product photos on the page
var productPhotosSection = document.getElementsByClassName("productPictures")[0];
// Get the photosEnlarge button
var productPhotos = document.getElementById("photosEnlarge");
// Get the back button from the page
var backButton = document.getElementById("backButton");
// Get the dim sceen section from the webpage
var dimScreen = document.getElementById("dimScreen");
var opacityReading = 0.0;
var dimBackground = 0.0;
var interval;
var backgroundInterval;
var shrinkInterval;
var shrinkBackground;

// If there are any photos with product photos id on the page
if(productPhotos){
    // Run animation if productPhotosSection has been clicked
    productPhotosSection.addEventListener("click", animation, true)
    // Run shrink image when the backButton has been clicked
    backButton.addEventListener("click", shrinkImage, true);
    backButton.style.opacity = 0.0;
    // Hide dim screen
    dimScreen.style.visibility = "hidden";
    dimScreen.style.opacity = 0.0;
}

function animation(){
    // Set the width of back button to 200 pixels 
    backButton.style.width = "200px";
    productPhotosSection.style.opacity = 0.0;
    // Add a class of productPhototsSection
    productPhotosSection.setAttribute("class", "productPhotosSection");
    // Add a class of productPhtots
    productPhotos.setAttribute("class", "productPhotos");
    opacityReading = 0;
    // Run function animateImages every 100 miliseconds
    interval = setInterval(animateImages, 100);
    // Run animate background every 100 miliseconds
    backgroundInterval = setInterval(animateBackground, 100);
}

function animateImages(){
    // If opacity is equel to or more than 1
    if (opacityReading >= 1.0){
        // Stop the interval
        clearInterval(interval);
    }else{
        // Add 0.1 to opacity
        opacityReading = opacityReading + 0.1;
        // Set the new opacity reading to the productPhotosSection
        productPhotosSection.style.opacity = opacityReading;
        // Set the back button to the same
        backButton.style.opacity = opacityReading;
    }
}

function animateBackground(){
    // If dim background is equel to or more than 0.7
    if (dimBackground >= 0.7){
        // Stop the interval
        clearInterval(backgroundInterval);
    }else{
        // Add 0.1 to dimBackground
        dimBackground = dimBackground + 0.1;
        dimScreen.style.opacity = dimBackground;
        dimScreen.style.visibility = "visible";
    }
}

// The same as enlarging but to animate down again and run when teh exit button is clicked
function shrinkImage(){
    shrinkInterval = setInterval(animateDown, 100);
    shrinkBackground = setInterval(animateBackgroundDown, 100);
}

function animateDown(){
    if (opacityReading <= 0.0){
        clearInterval(shrinkInterval);
        productPhotosSection.removeAttribute("class", "productPhotosSection");
        productPhotos.removeAttribute("class", "productPhotos");
        opacityReading = 1.0;
        productPhotosSection.style.opacity = opacityReading;
        backButton.style.width = 0;
    }else{
        opacityReading = opacityReading - 0.1;
        productPhotosSection.style.opacity = opacityReading;
        backButton.style.opacity = opacityReading;
    }
}

function animateBackgroundDown(){
    if (opacityReading <= 0.0){
        clearInterval(shrinkBackground);
    }else{
        dimBackground = dimBackground - 0.1;
        dimScreen.style.opacity = dimBackground;
        dimScreen.style.visibility = "hidden";
    }
}


// SECTION 5 VIDEO AND AUDIO CONTROLS

// Get video from page
var video = document.getElementById("video");
// Get seekbar from page
var seekbar = document.getElementById("seekbar");
// Get image play and pause button section from page
var play = document.getElementById("imageAlignment");
var videoPlaying = false;

// If video is on page then run video controls
if(video){
    videoControls();
}

function videoControls(){
    // Add a class that makes the play button show
    play.setAttribute("class", "videoButtonsVisiabilityShow");
    // Get the image alignment and add a click event listner to run videoButtons
    document.getElementById("imageAlignment").addEventListener("click", videoButtons, false);
    // Run seekVid when the seekbar value has been changed
    seekbar.addEventListener("change", seekVid);
    // Run pauseVideo when the seekbar has been mouse downed upon
    seekbar.addEventListener("mousedown", pauseVideo);
    // Run playVideo when the seekbar has been mouse uped 
    seekbar.addEventListener("mouseup", playVideo);
    // Run updateSeekbar when the time of the video has been changed
    video.addEventListener("timeupdate", updateSeekbar);
}

// Play And Pause Buttons
function videoButtons(){
    if(videoPlaying == true){
        // Pause video
        video.pause();
        // Change play pause button to play icon
        play.setAttribute("class", "videoButtonsVisiabilityShow");
        videoPlaying = false;
    }else{
        // Play video
        video.play();
        // Change play pause button to pause icon
        play.setAttribute("class", "videoButtonsVisabilityHidden");
        videoPlaying = true;
    }
}

// SeekBar Functionality 
function seekVid(){
    // Play video
    playVideo();
    // Change seekbar position to theduration of the video * by the seekbar value / 100
    var slideto = video.duration * (seekbar.value / 100);
    // Set the current time of the video to the value of the seekbar
    video.currentTime = slideto; 
}

function updateSeekbar(){
    // Update the seekbar to the current video position
    var newtime = video.currentTime * (100 / video.duration);
    seekbar.value = newtime;
}

function pauseVideo(){
    // Pause video
    video.pause();
    // Change play pause button to play icon
    play.setAttribute("class", "videoButtonsVisiabilityShow");
    videoPlaying = false;
}

function playVideo(){
    // Play Video
    video.play();
    // Change play pause button to pause icon
    play.setAttribute("class", "videoButtonsVisabilityHidden");
    videoPlaying = true;
}


// Get audio from page
var audio = document.getElementById("audioTrack");
// Get seekbar from page
var seekbar2 = document.getElementById("audioSeekbar");
// Get image play and pause button section from page
var play2 = document.getElementById("imageAudioAlignment");
var audioPlaying = false;

// If audio is on page then run audio controls
if(audio){
    audioControls();
}

function audioControls(){
    // Add a class that makes the play button show
    play2.setAttribute("class", "audioButtonsVisiabilityShow");
    // Get the image alignment and add a click event listner to run videoButtons
    document.getElementById("imageAudioAlignment").addEventListener("click", audioButtons, false);
    // Run seekAud when the seekbar value has been changed
    seekbar2.addEventListener("change", seekAud);
    // Run pauseAudio when the seekbar has been mouse downed upon
    seekbar2.addEventListener("mousedown", pauseAudio);
    // Run playAudio when the seekbar has been mouse uped 
    seekbar2.addEventListener("mouseup", playAudio);
    // Run updateAudioSeekbar when the time of the audio has been changed
    audio.addEventListener("timeupdate", updateAudioSeekbar);
}

// Play And Pause Buttons
function audioButtons(){
    if(audioPlaying == true){
        // Pause audio
        audio.pause();
        // Change play pause button to play icon
        play2.setAttribute("class", "audioButtonsVisiabilityShow");
        audioPlaying = false;
    }else{
        // Play audio
        audio.play();
        // Change play pause button to pause icon
        play2.setAttribute("class", "audioButtonsVisabilityHidden");
        audioPlaying = true;
    }
}

// SeekBar Functionality 
function seekAud(){
    // Play Audio
    playAudio();
    // Change seekbar position to the duration of the audio * by the seekbar value / 100
    var slideto = audio.duration * (seekbar2.value / 100);
    // Set the current time of the audio to the value of the seekbar
    audio.currentTime = slideto; 
}

function updateAudioSeekbar(){
    // Update the seekbar to the current audio position
    var newtime = audio.currentTime * (100 / audio.duration);
    seekbar2.value = newtime;
}

function pauseAudio(){
    // Pause audio
    audio.pause();
    // Change play pause button to play icon
    play2.setAttribute("class", "audioButtonsVisiabilityShow");
    audioPlaying = false;
}

function playAudio(){
    // Play audio
    audio.play();
    // Change play pause button to pause icon
    play2.setAttribute("class", "audioButtonsVisabilityHidden");
    audioPlaying = true;
}


// SECTION 6 PRODUCT PAGES CANVAS ANIMATION

// Gets the canvas from the html document.
var canvas = document.getElementById('mycanvas');
// Assigns whether or not to make the acnvas 2d or 3d.
var ctx; 
// Declares variale timer.
var timer;
// Sets the background colour of the canvas to white.
var fillColour = '#FFFFFF';

var img = new Image();
img.src = "assets/coffeeBean.png";

// Declares the value of x to be a random number between 1 and 1200.
var x = (Math.random() * 1200) + 1;;
var y = 10;

var x2 = (Math.random() * 1200) + 1;;
var y2 = 10;

var x3 = (Math.random() * 1200) + 1;;
var y3 = 10;

var canvasText;
var path = window.location.pathname;

if(path == "/about.html"){
    canvasText = "About";
}else if(path == "/cappuccino.html"){
    canvasText = "Cappuccino";
}else if(path == "/latte.html"){
    canvasText = "Latte";
}else if(path == "/americano.html"){
    canvasText = "Americano";
}

// if there is a canvas in the html document then run the function canvasFunction.
if(canvas){
    ctx = canvas.getContext('2d');
    canvasFunction();
}

function canvasFunction(){
    // Sets the canvas width to 1200 pixels.
    canvas.width = 1200;
    // Sets the canvas height to 300 pixels.
    canvas.height = 300;
    
    // A function that takes a value called fps when called and sets the value of timer to a setInterval method which runs the updateCanvas function every 1000 miliseconds divided by whatever the value of fps is.
    function frameRate(fps) {
        timer = window.setInterval(updateCanvas,1000/fps);
    }

    function updateCanvas(){
        // If statements are called if the y value of any of the balls are more than or equel to 280. 
        if (y >= 280){
            // Sets the variable of x to a random number between 1 and 1200;
            x = (Math.random() * 1200) + 1;
            // Sets y's new value to 10.
            y = 10;
        };
        
        if (y2 == 280){
            x2 = (Math.random() * 1200) + 1;
            y2 = 10;
        };
        
        if (y3 == 280){
            x3 = (Math.random() * 1200) + 1;
            y3 = 10;
        };
        
        // Adds a value to the variables y.
        y += 4;
        y2 += 2;
        y3 += 3;
        
        // Clears the canvas ready for it to be redrawn on.
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // Run each of the draw functions.
        draw1();
        draw2();
        draw3();
    }

    function draw1(){
        // Fill the inside of the circle to a brown colour.
        ctx.fillStyle = "#2B0F0E";
        // Begin drawing the circle.
        ctx.beginPath();
        // Draw a cirlce in the postion of x and y variables. The third value is the start angle of the circle and the last value is the end value of the circle.  
        ctx.drawImage(img, x, y, 30, 50);
        // Stops drawing the circle.
        ctx.closePath();
        // Fills the circle with whatever the value of fillStyle is.
        ctx.fill();
        // Declares the font size and font that will be used to show the text in the animation.
        ctx.font = "60px Lato";
        // Will set the x and y cordinates to have a direct effect on the center of the text. 
        ctx.textAlign="center";
        
        // Runs is the browser window is less than 1200 pixels wide. 
        if(window.innerWidth < 1200){
            // If window is less than 1200 pixels then align the text to be positioned at half the width of the browser and at 150 pixels down.
            ctx.fillText(canvasText,window.innerWidth/2,150);
        }else{
            ctx.fillText(canvasText,600,150);
        } 
    }
    
    function draw2(){
        ctx.fillStyle = "#2B0F0E";
        ctx.beginPath();
        ctx.drawImage(img, x2, y2, 30, 50);
        ctx.closePath();
        ctx.fill();
    }
    
    function draw3(){
        ctx.fillStyle = "#2B0F0E";
        ctx.beginPath();
        ctx.drawImage(img, x3, y3, 30, 50);
        ctx.closePath();
        ctx.fill();
    }
    
    // Sets the background of the canvas to the fillColour variable.
    ctx.fillStyle = fillColour;
    // Fills the canvas with whatever the fillStyle is set to.
    ctx.fill();
    // Sets the frames per second that the setInterval method should run at. 
    frameRate(50);
}



// SECTION 7 Increase And Decrease Font Size

// Get both buttons from the nav bar and add event listerners for when they're clicked
document.getElementById("largerFont").addEventListener("click", increaseFont, false);
document.getElementById("smallFont").addEventListener("click", decreaseFont, false);

// If there has been a localstorage value set for size
if (localStorage.getItem("size")){
    // Asign size to a variable
    var size = localStorage.getItem("size");
    
    // If size is quel to large
    if (size == "large"){
        // Run function increaseFont
        increaseFont();
    }else if(size == "small"){
        decreaseFont();
    }
}

function increaseFont(){
    // Get the right hand side of the nav bar
    var target = document.getElementById("rightList");
    // Add a class of largeText to right list
    target.setAttribute("class", "largeText");
    // Set size to value of large
    localStorage.setItem("size","large");
}

function decreaseFont(){
    // Get the right hand side of the nav bar
    var target = document.getElementById("rightList");
    // Add a class of smallText to right list
    target.setAttribute("class", "smallText");
    // Set size to value of small
    localStorage.setItem("size","small");
}


// Add Colour To Header

// get the brown square and assign it to a variable
var headerColour = document.getElementById("colourAdd")

// If headerColour is on the page
if(headerColour){
    // If headerColour is cicked then run add colour
    headerColour.addEventListener("click", addColour, false);
    
    // If local storage headerColour is equel to brown
    if(localStorage.getItem("headerColour") == "brown"){
        // Get the whole header section
        var colour = document.getElementsByTagName("HEADER");
        // Add a class of addColour to it
        colour[0].setAttribute("class", "addColour");
        // Add class of headerBrownButton to the headerColour button
        headerColour.setAttribute("class", "headerBrownButton");
    }

    function addColour(){
        // If local storage headerColour is equel to brown
        if(localStorage.getItem("headerColour") == "brown"){
            // Get the whole header section
            var colour = document.getElementsByTagName("HEADER");
            // Remove the class of addColour from the header section
            colour[0].removeAttribute("class", "addColour");
            // Remove headerColour from local storage
            localStorage.removeItem("headerColour");
            // Set a class of colour to headerColour
            headerColour.setAttribute("class", "colour");
            // Add the class of homeHeader to header section 
            colour[0].setAttribute("class", "homeHeader");
        }else{
            // Get the whole header section
            var colour = document.getElementsByTagName("HEADER");
            // Add a class of addColour to it
            colour[0].setAttribute("class", "addColour");
            // Set brown to local storage
            localStorage.setItem("headerColour","brown");
            // Set the class of brown to headerColour
            headerColour.setAttribute("class", "headerBrownButton");
        }
    }
}

// Chnge colour on click for every page but the home page

// get the blue square and assign it to a variable
var otherPagesHeaderColour = document.getElementById("blueAdd")

// If otherPagesHeaderColour is on the page
if(otherPagesHeaderColour){
    // If headerColour is cicked then run addBlueColour
    otherPagesHeaderColour.addEventListener("click", addBlueColour, false);
    
    // If local storage headerColour is equel to blue
    if(localStorage.getItem("otherHeaderColour") == "blue"){
        // Get the whole header section
        var colour = document.getElementsByTagName("HEADER");
        // Add a class of addColourBlue to it
        colour[0].setAttribute("class", "addColourBlue");
        // Add class of colour to the headerColour button
        otherPagesHeaderColour.setAttribute("class", "colour");
    }

    function addBlueColour(){
        // If local storage headerColour is equel to blue
        if(localStorage.getItem("otherHeaderColour") == "blue"){
            // Get the whole header section
            var colour = document.getElementsByTagName("HEADER");
            // Remove the class of addColourBlue from the header section
            colour[0].removeAttribute("class", "addColourBlue");
            // Remove otherHeaderColour from local storage
            localStorage.removeItem("otherHeaderColour");
            // Set a class of colourBlue to otherPagesHeaderColour
            otherPagesHeaderColour.setAttribute("class", "colourBlue");
            // Add the class of mainHeader to header section 
            colour[0].setAttribute("class", "mainHeader");
        }else{
            // Get the whole header section
            var colour = document.getElementsByTagName("HEADER");
            // Add a class of addColourBlue to it
            colour[0].setAttribute("class", "addColourBlue");
            // Set blue to local storage
            localStorage.setItem("otherHeaderColour","blue");
            // Set the class of colour to otherPagesHeaderColour
            otherPagesHeaderColour.setAttribute("class", "colour");
        }
    }
}



// SECTION 8 Present New Advert On Page Load 

// Get the different propoduct adverts from the page
var firstAd = document.getElementById("first");
var secondAd = document.getElementById("second");
var thirdAd = document.getElementById("third");

// If the page has the section first on it then run product ads
if (firstAd){
    productAds();
}


function productAds(){
    // If there is a local sotrage item set for coffeeType
    if (localStorage.getItem("coffeeType")){
        // Set this to a variable of coffee
        var coffee = localStorage.getItem("coffeeType");
        
        // If coffee is equel to Cappuccino
        if (coffee == "Cappuccino"){
            // Hide second and third ads
            firstAd.style.display = 'none';
            thirdAd.style.display = 'none';
            localStorage.setItem("coffeeType","Latte");
        }else if(coffee == "Latte"){
            // Hide first and third ads
            firstAd.style.display = 'none';
            secondAd.style.display = 'none';
            localStorage.setItem("coffeeType","Americano");
        }else if(coffee == "Americano"){
            // Hide first and second ads
            secondAd.style.display = 'none';
            thirdAd.style.display = 'none';
            localStorage.setItem("coffeeType","Cappuccino");
        }
    }else{
        // Set the localStorage value to Cappuccino if no value set before
        localStorage.setItem("coffeeType","Cappuccino");
        // Hide second and third ads
        secondAd.style.display = 'none';
        thirdAd.style.display = 'none';
    }
}


// SECTION 9 CURRENCY API CALLS

// Get the currency dropdown menu
var currencyMenu = document.getElementById("currencyDropdown");
// Get the price output section
var priceOutput = document.getElementById("priceDisplay");
var selectedCurrency;
var baseValue;

// If page currently then change base price
if(path == "/cappuccino.html"){
    baseValue = 2.99;
}else if(path == "/latte.html"){
    baseValue = 3.50;
}else if(path == "/americano.html"){
    baseValue = 2.50;
}

// If there is a currency menu then run
if(currencyMenu){
    // If there is a value of dropdown saved in local storage then run
    if(storageValue = localStorage.getItem("DropdownValue")){
        // Set the value of the dropdown to the value saved in local storage
        currencyMenu.value = storageValue;
        // Run function makeRequest
        makeRequest();
    }
    // When currency menu changed then run makeRequest
    currencyMenu.addEventListener("change",makeRequest);
}


function makeRequest() {
    xhr = new XMLHttpRequest(); 
    xhr.onreadystatechange = responseMethod;
    // Get the latest currency prices from open exchange
    xhr.open('GET', 'https://openexchangerates.org/api/latest.json?app_id=ee1bcb3a63944e52a1d4b814e4c86eee', true);
    // Start the request 
    xhr.send();
}
//Handle XHR response – Callback Function
function responseMethod() { 
    // Run when the ready state is equel to 4
    if (xhr.readyState == 4) { 
        // Run when the 200 response code is recieved
        if (xhr.status == 200) {
            // Get the value of the current value on the dropdown
            selectedCurrency = currencyMenu.options[currencyMenu.selectedIndex].value;
            
            // Parse the response into a json format
            var response = JSON.parse(xhr.responseText);
            // If currency selected on the dropdown is equel to GBP
            if(selectedCurrency == "GBP"){
                // Set the currency value from the json response
                var GBP = Number(response.rates.GBP);
                // Change the recived value to only 2 decimal places
                var changedValue = (baseValue * GBP).toFixed(2);
                // Output the price in the users chosen currency to the screen
                priceOutput.innerHTML = "£" + changedValue;
                // Set the dropdown value to local storage
                localStorage.setItem("DropdownValue", "GBP");

            }else if(selectedCurrency == "USD"){
                var USD = Number(response.rates.USD);
                var changedValue = (baseValue * USD).toFixed(2);
                priceOutput.innerHTML = "$" + changedValue;
                localStorage.setItem("DropdownValue", "USD");

            }else if(selectedCurrency == "EUR"){
                var EUR = Number(response.rates.EUR);
                var changedValue = (baseValue * EUR).toFixed(2);
                priceOutput.innerHTML = "€" + changedValue;
                localStorage.setItem("DropdownValue", "EUR");

            }else if(selectedCurrency == "AUD"){
                var AUD = Number(response.rates.AUD);
                var changedValue = (baseValue * AUD).toFixed(2);
                priceOutput.innerHTML = "$" + changedValue;
                localStorage.setItem("DropdownValue", "AUD");
            }
        }else {
            // If there is no response from the server
            alert('Sorry, There Has Been A Problem Connecting To The Exchange Rate Service.'); 
        }
    }   
}


// SECTION 10 FORM POST

// Create an event listner for click when the contact form button is clicked and run makeFormPost
document.getElementById("submit").addEventListener("click", makeFormPost);

var firstNamePost = /^[a-zA-Z]+$/;
var lastNamePost = /^[a-zA-Z]+$/;    
var emailPost = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

function makeFormPost(){
    // Create a new XML method
    xhr = new XMLHttpRequest(); 
    // When the status changes then run postResponse
    xhr.onreadystatechange = postResponse;
    // Post the data 
    xhr.open('POST', 'http://www.talade.worcestercomputing.com/mailing.php', true);
    // Set the type of data that is being sent
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    // Set what data is being sent
    
    var firstNameResponse = "";
    var lastNameResponse = "";
    var emailResponse = "";
    
    if(firstNamePost.test(firstName.value) == false){
        firstNameResponse = "First Name Not Valid";
    }
    
    if(lastNamePost.test(lastName.value) == false){
        lastNameResponse = "Last Name Not Valid";
    }
    
    if(emailPost.test(email.value) == false){
        emailResponse = "Email Not Valid";
    }
    
    if(firstNamePost.test(firstName.value) == true && lastNamePost.test(lastName.value) == true && emailPost.test(email.value) == true){
        xhr.send("firstname=" + firstName.value +"&lastname=" + lastName.value + "&emailaddress=" + email.value);
    }else{
        document.getElementById("responsePost").innerHTML = firstNameResponse +"<br>"+ lastNameResponse +"<br>"+ emailResponse;
    }
   
}

function postResponse(){
    if (xhr.readyState == 4) { 
        // Run if status is 200
        if (xhr.status == 200) {
            
            // Get the repsonse text and empty the input fields and session storage
            var response = xhr.responseText;
            firstName.value = "";
            sessionStorage.setItem("firstName", firstName.value);
            lastName.value = "";
            sessionStorage.setItem("lastName", lastName.value);
            email.value = "";
            sessionStorage.setItem("email", email.value);
            // Post the response from the server to the page
            document.getElementById("responsePost").innerHTML = response;
        }else if(xhr.status == 404){
            // Run if the code 404 is recieved
            document.getElementById("responsePost").innerHTML = "Sorry, There Has Been An Error Sending The Form.";     
        }
    }
}


// SECTION 12 ADDITIONAL FEATURE Mailing List Form
// Responsible for saving the users from values until they submit the form

// Get the form and form elements from the page and assign it to a variable
var form = document.getElementById("mailingListForm");
var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var email = document.getElementById("email");

// Run firstNameChange when the field value has been changed
firstName.addEventListener("change", firstNameChange);
// Run lastNameChange when the field value has been changed
lastName.addEventListener("change", lastNameChange);
// Run emailChange when the field value has been changed
email.addEventListener("change", emailChange);

function firstNameChange(){
    // Set session storage for first name
    sessionStorage.setItem("firstName", firstName.value);
}

function lastNameChange(){
    // Set session storage for last name
    sessionStorage.setItem("lastName", lastName.value);
}

function emailChange(){
    // Set session storage for email
    sessionStorage.setItem("email", email.value);
}
  
if(sessionStorage.getItem("firstName")){
    // If value exists then set value of firstname
    firstName.value = sessionStorage.getItem("firstName"); 
}

if(sessionStorage.getItem("lastName")){
    // If value exists then set value of lastname
    lastName.value = sessionStorage.getItem("lastName");
}

if(sessionStorage.getItem("email")){
    // If value exists then set value of email
    email.value = sessionStorage.getItem("email");
}



// SECTION 12 ADDITIONAL FEATURE GET WEATHER FOR THE COFFEE SHOP

var weather = document.getElementById("weather");
var weatherText = document.getElementById("weatherText");

// If there is a weather section on the page then run getWeather
if(weather){
    getWeather();
}

function getWeather(){
    xhrs = new XMLHttpRequest(); 
    xhrs.onreadystatechange = weatherResponse;
    // Run a get command to get the weather
    xhrs.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=Worcester,uk&units=metric&APPID=b54ec8a022bd83a905211f5de7cd9ed3', true);
    xhrs.send();
}

function weatherResponse(){
     if (xhrs.readyState == 4) { 
        if (xhrs.status == 200) {
            // Json parse the result of the weather
            var weatherResponseText = JSON.parse(xhrs.responseText);
            
            // Get the weather conditions text
            var conditions = weatherResponseText.weather[0].description;
            // Get the temperature rounded to a whole number
            var temp = Math.round(weatherResponseText.main.temp * 10) / 10;
            // Put the temperature to one decimal place
            var rounded = temp.toFixed(1); 
            // Get the weather location place name
            var place = weatherResponseText.name;
            
            // Display the weather information to the user
            weatherText.innerHTML = temp +"&deg;C And " + conditions + " In " + place;

        }   
    }else{
        // Display if the weather is unavaliable
        weatherText.innerHTML = "Weather Unavaliable";
    }
}