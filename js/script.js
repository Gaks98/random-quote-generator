/*** 
 * `quotes` array to store all quote objects 
 ***/
const quotes = [{
    quote: "You will face many defeats in life, but never let yourself be defeated.",
    source: "Maya Angelou",
    citation: "I Know Why the Caged Bird Sings",
    category: "#motivation",
  },
  {
    quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    source: "Nelson Mandela",
    year: 2002,
    category: "#motivation",
  },
  {
    quote: "In the end, it's not the years in your life that count. It's the life in your years.",
    source: "Abraham Lincoln",
    year: 1945,
    category: "#motivation",
  },
  {
    quote: "Life is a succession of lessons which must be lived to be understood.",
    source: "Ralph Waldo Emerson",
    category: "#motivation",
  },
  {
    quote: "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
    source: "Theodor Seuss Geisel",
    citation: "Oh, The Places You'Ll Go - Poem",
    category: "#motivation/humour",
  },
];

/***
 * creates a random number, and uses that random number to return a random quote object from the quotes array
 * @return {object} the randomly picked quote object
 ***/
function getRandomQuote() {
  let random = Math.floor(Math.random() * quotes.length);
  let randomQuote = quotes[random];
  return randomQuote;
}


/***
 * prints and displays a random quote to the browser
 * @return {object} html representation of the picked quote
 ***/
function printQuote() {
  let pickedQuote = getRandomQuote();
  let html = `<p class="quote"> ${pickedQuote.quote} </p>
  <p class="source"> ${pickedQuote.source} `;

  // conditionals to test if objects properties 'citation' and/or 'year' exist
  if (pickedQuote.citation && pickedQuote.year) {
    html += `<span class="citation"> ${pickedQuote.citation} </span>
    <span class="year"> ${pickedQuote.year} </span>`;
  } else if (pickedQuote.citation) {
    html += `<span class="citation"> ${pickedQuote.citation} </span>`;
  } else if (pickedQuote.year) {
    html += `<span class="year"> ${pickedQuote.year} </span>`;
  }

  html += `${pickedQuote.category}</p>`;

  let setHtml = (document.getElementById("quote-box").innerHTML = html);

  return setHtml;
}

/**
 * =========================================================
 *  Start of Background Color Section
 * =========================================================
 */

const body = document.querySelector('body');
const btn = document.querySelector('#load-quote');


/**
 * Generates random number between 0 and 255
 * @returns {number} random number
 */
function RandomNumberFrom0To255() {
  let random = Math.floor(Math.random() * 256);
  return random;
}


/**
 * generates a random rgb color
 * @return {string} {
 */
function getRandomColor() {
  let red = RandomNumberFrom0To255();
  let green = RandomNumberFrom0To255();
  let blue = RandomNumberFrom0To255();
  let rgb = `${red},${green},${blue}`;

  return `rgba(${rgb},${0.8})`;
}


/**
 * sets the background color of the page 
 */
function setBackgroundColor() {
  let bgColor = (body.style.backgroundColor = getRandomColor());
  return bgColor;
}


/**
 * =========================================================
 *  End of Background Color Section
 * =========================================================
 */

/**
 * calls printQuote and setBackgroundColor functions
 */
function printQuoteAndChangeBackground() {
  setBackgroundColor();
  printQuote();
}


setInterval(printQuoteAndChangeBackground, 3000);


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);