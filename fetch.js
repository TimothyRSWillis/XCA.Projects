//1. Fetch
//etch("https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/languages.txt")
//.then(response => response.text()) // Access and return response's text content
//.then(text => {
//onsole.log(text); // Display file content in the console
//});
//fetch("someurl")
//.then(responce => responce.text())
//.then(text => { //  console.log(text)
//})
//2. Errors
//fetch("http://non-existent-resource&")
//.catch(err => {
//console.error(err.message);
//});
//.catch(err => {

//})
//3. JSON
//const planes = [
//{
//manufacturer: "Airbus",
//model: "A320"
//},
//{
//manufacturer: "Boeing",
//model: "737"
//}
//];
//console.log(planes); // Display the array of objects

//const planesText = JSON.stringify(planes);
//console.log(planesText); // Display the array as a JSON string

////console.log(JSON.parse(planesText));


//4. Retrieving JSON object from the web!
//fetch(
//"https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/movies.json"
//.then(response => response.json()) // Access and return response's JSON content
//.then(movies => {
// Iterate on the movie array
//movies.forEach(movie => {
// Display title of each movie
//console.log(movie.title);
//});
//})
//.catch(err => {
//console.error(err.message);
//});



//URLS
fetch(
    "https://www.balldontlie.io/api/v1/teams/28")
    .then(response => response.json()) 
    .then(text => {
        console.log(text)
    })
fetch(
"https://api.punkapi.com/v2/beers/random")
.then(response => response.json())
.then(text => {
    console.log(text)
})