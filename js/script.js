/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote: "You will face many defeats in life, but never let yourself be defeated.",
    source: "Maya Angelou",
    citation: "I Know Why the Caged Bird Sings",
  },
  {
    quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    source: "Nelson Mandela",
    year: 2002,
  },
  {
    quote: "In the end, it's not the years in your life that count. It's the life in your years.",
    source: "Abraham Lincoln",
    year: 1945,
  },
  {
    quote: "Life is a succession of lessons which must be lived to be understood.",
    source: "Ralph Waldo Emerson",
  },
  {
    quote: "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
    source: "Theodor Seuss Geisel",
    citation: "Oh, The Places You'Ll Go - Poem",
  },
];

/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  let random = Math.floor(Math.random() * quotes.length);
  let randomQuote = quotes[random];
  return randomQuote;
}

/***
 * `printQuote` function
***/
function printQuote() {
  let pickedQuote = getRandomQuote();
  let html = `<p class="quote"> ${pickedQuote.quote} </p>
  <p class="source"> ${pickedQuote.source} `;
  
  if (pickedQuote.citation && pickedQuote.year) {
    html += `<span class="citation"> ${pickedQuote.citation} </span>
    <span class="year"> ${pickedQuote.year} </span>`;
  }
  else if (pickedQuote.citation) {
    html += `<span class="citation"> ${pickedQuote.citation} </span>`;
  }
  else if (pickedQuote.year) {
    html += `<span class="year"> ${pickedQuote.year} </span>`;
  }

  html += `</p>`;

  let setHtml = document.getElementById("quote-box").innerHTML = html;

  return setHtml;
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);