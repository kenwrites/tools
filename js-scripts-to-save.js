// Random number generator - example generates number from 1 to 6

var randomNumber = Math.floor(Math.random() * 6) + 1;

// Random number generator as function.  Example generates number
// from 1 to upper.  

function get_random_number(upper) {
    var random_number = Math.floor(Math.random() * upper) + 1;
    return random_number;
}

// Create variables with `eval'.  Could be combined with loop to create 
// variables iteratively.  

var str = "var variable1;"
eval(str);

// Print to element by ID.  Replace "poem" with ID of target element
// Input must be formatted as HTML

function print(message) {
    var print_to = document.getElementById("poem");
    print_to.innerHTML = message;
}

// Create event listener that responds to button click

const btn = document.getElementById("btn");

btn.addEventListener('click', function(event) {
    [code];
});

// AJAX Listener Skeleton

var url
var request

request = new XMLHttpRequest()

request.onreadystatechange = () => {
    if (request.readyState < 4) {

        console.log("request readyState: " + request.readyState)

    } else if (request.readyState === 4) {

        console.log("request readyState: " + request.readyState)

        if (request.status == 200) {

            console.log("request status: " + request.status)

        } else {

            console.log("request status: " + request.status)

        }

    }
}

request.open('GET', url)
request.send()

// Make URL for GET request to an API

var key
var value
var base_url

function make_api_url(key, value, base_url) {
    let uri = encodeURI(value)
    let url = base_url + '&' + key + "=" + uri
    return url
}
