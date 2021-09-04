/**
 * Makes a GET HTTP request and handles the data received, using the callback function.
 * 
 * @param {string} url A string containing the url to make the request.
 * @param {Function} callback A function to handles the data, a JSON is passed as a param to this function.
 */
 function handleData(url, callback) {
  $.get({
    url: url,
    success: (data) => callback(data),
  });
}
