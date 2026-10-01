// ----- VARIABLES -----
let houseImage = "img/scene1-house.svg";
let boxImage = "img/scene2-box.svg";
let openImage = "img/scene3-open.svg";

// ----- FUNCTION -----
// changes the 3 image slots, the 3 captions,
// and the title/paragraph text on the page.
function showStory(title, text, firstImg, secondImg, thirdImg, firstCaption, secondCaption, thirdCaption) {

  //DOM manipulation using innerHTML
  document.getElementById("storyTitle").innerHTML = title;
  document.getElementById("storyText").innerHTML = text;

  // Change which image appears in each of the 3 slots
  document.getElementById("img1").src = firstImg;
  document.getElementById("img2").src = secondImg;
  document.getElementById("img3").src = thirdImg;

  // Change the caption under each image
  document.getElementById("caption1").innerHTML = firstCaption;
  document.getElementById("caption2").innerHTML = secondCaption;
  document.getElementById("caption3").innerHTML = thirdCaption;

}

// ----- STORY 1: THE MYSTERY -----
// Order: house -> box -> open
function playStoryA() {
  let title = "Story 1: The Mystery";
  let text = "A person comes home and notices something strange waiting outside. " +
              "Curiosity gets the better of them, and they decide to open it.";

  showStory(
    title,
    text,
    houseImage, boxImage, openImage,
    "Beginning: Arriving home",
    "Middle: A strange box appears",
    "End: Opening the mystery"
  );
}

// ----- STORY 2: THE HAPPY SURPRISE -----
// Order: open -> box -> house
// Same 3 images, different order
function playStoryB() {
  let title = "Story 2: The Happy Surprise";
  let text = "Something wonderful is discovered inside a box first, " +
             "then packed carefully, and brought home at last.";

  showStory(
    title,
    text,
    openImage, boxImage, houseImage,
    "Beginning: A surprising find",
    "Middle: Packing it up",
    "End: Bringing it home"
  );
}
