/**
 * Formats the date.
 * 
 * @param {string} date A date on the format 'yyyy-mm-dd'.
 * @returns {string} A string on the format 'Month dd, yyyy'.
 */
function getFormattedDate(date) {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];
  date = date.split('-');

  return `${months[Number(date[1]) - 1]} ${date[2]}, ${date[0]}`;
}

/**
 * Returns a valid URL to make a request to the NASA API.
 * 
 * @param {boolean} random If it's true, the URL returned will be a URL to make a request to get a random data.
 * @param {string} date A string on the format 'yyyy-mm-dd', specifying a date to get the data. 
 * @returns {string} A string representing an URL.
 */
function getURL(random=false, date='') {
  const url = new URL('https://api.nasa.gov/planetary/apod');
  url.searchParams.set('api_key', 'eLUJnfWa4uDNrxc9hb5uO9oo4FJ0U3O7ZrsbMJaK');

  if (random)
    url.searchParams.set('count', 1);
  else if (date)
    url.searchParams.set('date', date);

  return url.toString();
}

/**
 * Sets the current year on a element
 * 
 * @param {HTMLElement} element An element to set the year.
 */
function setCurrentYear(element) {
  const currentYear = new Date().getFullYear();
  
  element.textContent = currentYear;
}
