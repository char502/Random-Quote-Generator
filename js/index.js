
var request = new XMLHttpRequest();

request.open('GET', 'https://gist.githubusercontent.com/char502/abbd19ab22972fa732a33f1bfda04ad8/raw/a4582b8aa8b634a99d773bd66232cca1702952f3/Quotes,json', true);

request.onload = function() {
  
  var data = JSON.parse(request.response);
  
  var len = Object.keys(data).length; // gives total number objects in array
    //var ref = Object.keys(data); shows all the indexes
    var item = Object.values(data);
  
  document.getElementById("myBtn").addEventListener("click", getQuote);
  
   function getQuote() {
      var random = item[Math.floor(Math.random() * len)];
   //console.log(random);
      var newQuote = random.quote
      var name = random.name
      var finalQuote = '"' + newQuote + '"' + " " + "<br/><br/>" + " " + name;
    document.getElementById("quoteHere").innerHTML = finalQuote;
      }
  getQuote();
  
  
  document.getElementById("tweetSend").addEventListener("click", sendTweet);
  
  function sendTweet() {
    var tweetedQuote = quoteHere.textContent;
    window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(tweetedQuote));
  }
}

request.send();