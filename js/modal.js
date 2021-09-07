$('#media-img').click(showModal);
$('#close-modal').click(hideModal);

function showModal() {
  $('#modal').show('fast');
  $('body').css('overflow-y', 'hidden');
  $('.container-col').first().css('filter', 'blur(3px)');
}

function hideModal() {
  $('#modal').hide('fast');
  $('body').css('overflow-y', 'auto');
  $('.container-col').first().css('filter', 'none');
}
