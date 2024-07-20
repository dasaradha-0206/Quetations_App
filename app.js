
function Generate_Quote(){
    let input = document.getElementById("welcome")
    let author=document.getElementById("author")
    let number=Math.floor(Math.random()*15)
    fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    input.innerHTML=data[number].text
    author.innerHTML=data[number].author
  });
}
