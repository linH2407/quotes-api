const url = "https://goquotes-api.herokuapp.com/api/v1/random?count=24";
var i;
function generateQuote(){
  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(data){
      console.log(data);
      i = Math.floor(Math.random()*data.quotes.length);
      document.getElementById("quote").innerHTML = data.quotes[i].text;
      document.getElementById("author").innerHTML = "-" + data.quotes[i].author;
    })
    .catch(function (err) {
      console.log(err);
    });
}
window(generateQuote()).location.reload(true);


