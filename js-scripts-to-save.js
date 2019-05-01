/*********************************************************************
Numbers
************************************************************************/


// Random number generator - example generates number from 1 to 6

var randomNumber = Math.floor(Math.random() * 6) + 1;

// Random number generator as function.  Example generates number
// from 1 to upper.  

function get_random_number(upper) {
    var random_number = Math.floor(Math.random() * upper) + 1;
    return random_number;
}

// Generate a hash from a string
// From https://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript/7616484#7616484


String.prototype.hashCode = function () {
    var hash = 0, i, chr;
    if (this.length === 0) return hash;
    for (i = 0; i < this.length; i++) {
        chr = this.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
};


/*********************************************************************
Working with Dates
************************************************************************/

// assume 'day' is a string in the format YYYY-MM-DD

let day;
date_split = day.date.split('-');
year = parseInt(date_split[0]);
month_numeral = parseInt(date_split[1]);
day_of_month = parseInt(date_split[2]);
date = new Date(year, month_numeral-1, day_of_month);
month = date.toDateString().split(' ')[1];


/*********************************************************************
AJAX Stuff
************************************************************************/

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
var ampersand = true

function make_api_url(key, value, base_url, ampersand) {
    let uri = encodeURI(value)
    let url
    if (ampersand) {
        url = base_url + '&' + key + "=" + uri
    } else {
        url = base_url + key + "=" + uri
    }
    return url
}

// Select item from within a returned JSON file 
// Must use both functions below in tandem

function select_item(object, key_array) {

    if (key_array.length === 0) {

        return object

    } else {

        let selector = key_array.shift()
        let selection = object[selector]
        return select_item(selection, key_array)

    }
}

function get_item_from_json_request(request, item_location) {

    // item_location should be a dot-notation string specifying
    // the location of the item.  i.e 'search.0.pageid'

    let json
    let item

    json = JSON.parse(request.response)
    keys = item_location.split('.')

    item = select_item(json, keys)

    return item

}

