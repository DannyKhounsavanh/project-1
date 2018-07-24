// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// created an array of quotes with sources, citations, and years
var quotes = [
  {
    source: "Dr. Suess",
    quote: 'You know you’re in love when you can’t fall asleep because reality is finally better than your dreams.'
  },
  {
    source: 'Henry Ford',
    quote: 'When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.'
  },
  {
    source: 'Wayne Gretzky',
    quote: 'You miss 100% of the shots you don’t take.'
  },
  {
    source: 'Dr. Martin Luther King Jr.',
    quote: "Intelligence plus character - that is the goal of true education.",
    citation: "The Purpose of Education",
    year: 1947
  },
  {
    source: 'Albert Einstein',
    quote: "The ideals that have lighted my way, and time after time have given me new courage to face life cheerfully, have been Kindness, Beauty, and Truth.",
    citation: "The World As I See It",
    year: 1930
  }
];

// created a function that pulls a random quote from the quotes array
function getRandomQuote() {
  var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  return randomQuote;
}

// function that generates an RGB color
function randomColor() {
 var red = Math.floor( Math.random() * 256 );
 var green = Math.floor( Math.random() * 256 );
 var blue = Math.floor( Math.random() * 256 );
 var rbgColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
 document.body.style.background = rbgColor;
 document.getElementById('loadQuote').style.background = rbgColor;
}

// function that calls getRandomQuote() and prints in onto index.html
function printQuote() {
  var quote = getRandomQuote();
  var html = '<p class="quote">' + quote.quote + '</p>';
  html += '<p class="source">' + quote.source;

  if (quote.citation) {
    html += '<span class="citation">' + quote.citation + '</span>';
  }
  if (quote.year) {
    html += '<span class="year">' + quote.year + '</span>';
  }
  html += '</p>'

  document.getElementById('quote-box').innerHTML = html;

  randomColor();  // A new color is displayed simultaneously with a new quote
}
