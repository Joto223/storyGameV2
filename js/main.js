/*----- constants -----*/
const name = document.getElementById('pg1Input');
const start = document.querySelector('#pg1Button');
/*----- app's state (variables) -----*/
/*----- cached element references -----*/
/*----- event listeners -----*/
/*----- functions -----*/
console.log('hello');

$('#pg1Button').on('click', () => {
  $("#pg1InputTxt").fadeOut(3000);
  $('#pg1Section').fadeIn(5000);
});
