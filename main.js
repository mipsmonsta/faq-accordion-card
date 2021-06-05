let questions = document.getElementsByClassName("question");
console.log(questions)

let i;
for (i = 0; i < questions.length; i++) {
  questions[i].addEventListener("click", function () {
    console.log(this);
    this.classList.toggle("active");

    let answer = this.nextElementSibling;
    let imgElement = this.lastElementChild;
    if (answer.style.display == "block") {
      answer.style.display = "none";
    } else {
      answer.style.display = "block";
    }

    if (this.classList.contains("active")) {
      imgElement.style.transform = "rotate(180deg)";
    } else {
      imgElement.style.transform = "rotate(0deg)";
    }
  });
}
