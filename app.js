function myFunction() {
  var letter = document.getElementById("myInput").value;
  var text;

  if (letter === "سلام") {
    text = "سلام به روی ماهت";
  } else if (letter === "") {
    text = " چرا سلام رو وارد نکردی هان؟ داری منو تست میکنی؟ ها ها ها";
  } else if (letter === "نمیگم") {
    text = " خو نگو ولی ضرر میکنی  کوچولو";
  } else if (letter === "عجب") {
    text = "عجب  نه مش رجب";
  }

  document.getElementById("show").innerHTML = text;
}
