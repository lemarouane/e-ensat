
$( "#note_fonctionnaire_note1").change(function() {
    calc_note_anuelle();
  });
  $( "#note_fonctionnaire_note2").change(function() {
    calc_note_anuelle();
  });
  $( "#note_fonctionnaire_note3").change(function() {
    calc_note_anuelle();
  });
  $( "#note_fonctionnaire_note4").change(function() {
    calc_note_anuelle();
  });
  $( "#note_fonctionnaire_note5").change(function() {
    calc_note_anuelle();
  });

function calc_note_anuelle(){
 n1 = parseInt($("#note_fonctionnaire_note1").val());
 n2 = parseInt($("#note_fonctionnaire_note2").val());
 n3 = parseInt($("#note_fonctionnaire_note3").val());
 n4 = parseInt($("#note_fonctionnaire_note4").val());
 n5 = parseInt($("#note_fonctionnaire_note5").val());
 $("#note_fonctionnaire_noteAnuelle").val(n1+n2+n3+n4+n5);

}
 