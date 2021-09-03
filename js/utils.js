function dateInputInitialConfig() {
  const today = new Date(),
        year = today.getFullYear(),
        month = today.getMonth() + 1,
        day = today.getDate(),
        todayFormatted = getFormattedDate(year, month, day);
  
  // date is an id of an input of type date on the HTML.
  date.value = todayFormatted;
  date.max = todayFormatted;
}

function getFormattedDate(year, month, day) {
  const twoDigits = (n) => (n < 10 ? '0' : '') + n;
  
  return `${year}-${twoDigits(month)}-${twoDigits(day)}`;
}
