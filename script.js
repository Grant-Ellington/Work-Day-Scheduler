// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  var nineHr = $('#hour-9');
  var tenHr = $('#hour-10');
  var elevenHr = $('#hour-11');
  var twelveHr = $('#hour-12');
  var thirteenHr = $('#hour-13');
  var fourteenHr = $('#hour-14');
  var fifteenHr = $('#hour-15');
  var sixteenHr = $('#hour-16');
  var seventeenHr = $('#hour-17');

  var saveBtnNine = nineHr.children('button');
  var saveBtnTen = tenHr.children('button');
  var saveBtnEleven = elevenHr.children('button');
  var saveBtnTwelve = twelveHr.children('button');
  var saveBtnThirteen = thirteenHr.children('button');
  var saveBtnFourteen = fourteenHr.children('button');
  var saveBtnFifteen = fifteenHr.children('button');
  var saveBtnSixteen = sixteenHr.children('button');
  var saveBtnSeventeen = seventeenHr.children('button');

  var textareaNine = nineHr.children('textarea');
  var textareaTen = tenHr.children('textarea');
  var textareaEleven = elevenHr.children('textarea');
  var textareaTwelve = twelveHr.children('textarea');
  var textareaThirteen = thirteenHr.children('textarea');
  var textareaFourteen = fourteenHr.children('textarea');
  var textareaFifteen = fifteenHr.children('textarea');
  var textareaSixteen = sixteenHr.children('textarea');
  var textareaSeventeen = seventeenHr.children('textarea')

  saveBtnNine.on('click', function(){
    savedNote = textareaNine.val() 
    localStorage.setItem('savedNoteNine', savedNote)
  });
  saveBtnTen.on('click', function(){
    savedNote = textareaTen.val() 
    localStorage.setItem('savedNoteTen', savedNote)
  });
  saveBtnEleven.on('click', function(){
    savedNote = textareaEleven.val() 
    localStorage.setItem('savedNoteEleven', savedNote)
  });
  saveBtnTwelve.on('click', function(){
    savedNote = textareaTwelve.val() 
    localStorage.setItem('savedNoteTwelve', savedNote)
  });
  saveBtnThirteen.on('click', function(){
    savedNote = textareaThirteen.val() 
    localStorage.setItem('savedNoteThirteen', savedNote)
  });
  saveBtnFourteen.on('click', function(){
    savedNote = textareaFourteen.val() 
    localStorage.setItem('savedNoteFourteen', savedNote)
  });
  saveBtnFifteen.on('click', function(){
    savedNote = textareaFifteen.val() 
    localStorage.setItem('savedNoteFifteen', savedNote)
  });
  saveBtnSixteen.on('click', function(){
    savedNote = textareaSixteen.val() 
    localStorage.setItem('savedNoteSixteen', savedNote)
  });
  saveBtnSeventeen.on('click', function(){
    savedNote = textareaSevenTeen.val() 
    localStorage.setItem('savedNoteSeventeen', savedNote)
  });
  
  perviousNoteNine = localStorage.getItem('savedNoteNine')
  textareaNine.text(perviousNoteNine)

  perviousNoteTen = localStorage.getItem('savedNoteTen')
  textareaTen.text(perviousNoteTen);

  perviousNoteEleven = localStorage.getItem('savedNoteEleven')
  textareaEleven.text(perviousNoteEleven);

  perviousNoteTwelve = localStorage.getItem('savedNoteTwelve')
  textareaTwelve.text(perviousNoteTwelve)

  perviousNoteThirteen = localStorage.getItem('savedNoteThirteen')
  textareaThirteen.text(perviousNoteThirteen)

  perviousNoteFourteen = localStorage.getItem('savedNoteFourteen')
  textareaFourteen.text(perviousNoteFourteen)

  perviousNoteFifteen = localStorage.getItem('savedNoteFifteen')
  textareaFifteen.text(perviousNoteFifteen);

  perviousNoteSixteen = localStorage.getItem('savedNoteSixteen')
  textareaSixteen.text(perviousNoteSixteen);

  perviousNoteSeventeen = localStorage.getItem('savedNoteSeventeen')
  textareaSeventeen.text(perviousNoteSeventeen)
  

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //

  // TODO: Add code to display the current date in the header of the page.
  

  function displayTime(){
    var currentTime = dayjs().format('MMM d, YYYY [at] hh:mm:ss')
    $('#currentDay').text(currentTime)
  }

  timer = setInterval(displayTime,1000)
});