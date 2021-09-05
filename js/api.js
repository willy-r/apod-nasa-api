/**
 * Makes a GET HTTP request and handles the data received.
 * 
 * NOTE: Both callbacks receives an optional param called 'data'.
 * 
 * @param {string} url A string containing the url to make the request.
 * @param {Function} cbSuccess A callback to handle the data when it's success (required).
 * @param {Function} cbcbError A callback to handle the response when it's fails (optional).
 */
 function handleData(url, cbSuccess, cbError) {
  const configs = {
    url: url,
    success: (data) => cbSuccess(data),
  }

  if (cbError)
    configs['error'] = (data) => cbError(data);
  
  $.get(configs);
}
