// Initialize the input with a default and a max value.
dateInputInitialConfig();

$('#form').on('submit', (event) => {
  event.preventDefault();

  $.ajax({
    url: `https://api.nasa.gov/planetary/apod?api_key=eLUJnfWa4uDNrxc9hb5uO9oo4FJ0U3O7ZrsbMJaK&date=${date.value}`,
    success: (resultObj) => displayResult(resultObj),
  });
});

function displayResult(obj) {
  $('#result').html(`
    <img src="${obj.url}" alt="${obj.title} image">
    <figcaption>
      <h2>${obj.title}</h2>
      <p>${obj.explanation}</p>
    </figcaption>
  `);
}
