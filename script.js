
$(function () {
//id grabbing blocks of code for the hours 
  var nineHr = $('#hour-9');
  var tenHr = $('#hour-10');
  var elevenHr = $('#hour-11');
  var twelveHr = $('#hour-12');
  var thirteenHr = $('#hour-13');
  var fourteenHr = $('#hour-14');
  var fifteenHr = $('#hour-15');
  var sixteenHr = $('#hour-16');
  var seventeenHr = $('#hour-17');
// grabbing the button in each hour section
  var saveBtnNine = nineHr.children('button');
  var saveBtnTen = tenHr.children('button');
  var saveBtnEleven = elevenHr.children('button');
  var saveBtnTwelve = twelveHr.children('button');
  var saveBtnThirteen = thirteenHr.children('button');
  var saveBtnFourteen = fourteenHr.children('button');
  var saveBtnFifteen = fifteenHr.children('button');
  var saveBtnSixteen = sixteenHr.children('button');
  var saveBtnSeventeen = seventeenHr.children('button');
// grabbing the textarea of each hour
  var textareaNine = nineHr.children('textarea');
  var textareaTen = tenHr.children('textarea');
  var textareaEleven = elevenHr.children('textarea');
  var textareaTwelve = twelveHr.children('textarea');
  var textareaThirteen = thirteenHr.children('textarea');
  var textareaFourteen = fourteenHr.children('textarea');
  var textareaFifteen = fifteenHr.children('textarea');
  var textareaSixteen = sixteenHr.children('textarea');
  var textareaSeventeen = seventeenHr.children('textarea')
//each button from the speciffic text area and store it in local storage.
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
  // textarea set to previous local storage.
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
  
//current hour turned into a number variable
  var currentHour = parseInt(dayjs().format('H'))
//if else statement determining color of background 
  console.log(typeof currentHour)
  if(currentHour === 9){
      nineHr.attr('class', 'row time-block present')
    }else if(currentHour > 9){
      nineHr.attr('class', 'row time-block future')
    }else{
      nineHr.attr('class', 'row time-block past')
  }

  if(currentHour === 10){
      tenHr.attr('class', 'row time-block present')
    }else if(currentHour>10){
      tenHr.attr('class', 'row time-block future')
    }else{
      tenHr.attr('class', 'row time-block past')
  }
  if(currentHour === 11){
      elevenHr.attr('class', 'row time-block present')
    }else if(currentHour>11){
      elevenHr.attr('class', 'row time-block future')
    }else{
      elevenHr.attr('class', 'row time-block past')
  }
  if(currentHour === 12){
    twelveHr.attr('class', 'row time-block present')
    }else if(currentHour<12){
    twelveHr.attr('class', 'row time-block past')
    }else{
    twelveHr.attr('class', 'row time-block future')
    }
  if(currentHour === 13){
    thirteenHr.attr('class', 'row time-block present')
    }else if(currentHour<13){
    thirteenHr.attr('class', 'row time-block past')
    }else{
    thirteenHr.attr('class', 'row time-block future')
    }
  if(currentHour === 14){
  fourteenHr.attr('class', 'row time-block present')
    }else if(currentHour<14){
  fourteenHr.attr('class', 'row time-block past')
    }else{
  fourteenHr.attr('class', 'row time-block future')
    }
  if(currentHour === 15){
    fifteenHr.attr('class', 'row time-block present')
    }else if(currentHour<15){
    fifteenHr.attr('class', 'row time-block past')
    }else{
    fifteenHr.attr('class', 'row time-block future')
    }
  if(currentHour === 16){
    sixteenHr.attr('class', 'row time-block present')
    }else if(currentHour<16){
    sixteenHr.attr('class', 'row time-block past')
    }else{
    sixteenHr.attr('class', 'row time-block future')
    }
  if(currentHour === 17){
    seventeenHr.attr('class', 'row time-block present')
    }else if(currentHour<17){
    seventeenHr.attr('class', 'row time-block past')
    }else{
    seventeenHr.attr('class', 'row time-block future')
    }
//active clock
  function displayTime(){
    var currentTime = dayjs().format('MMM d, YYYY [at] hh:mm:ss')
    $('#currentDay').text(currentTime)
  }

  timer = setInterval(displayTime,1000)
});