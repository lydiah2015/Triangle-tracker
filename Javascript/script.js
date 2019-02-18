function triangle() {
  var sideA = parseInt(document.getElementById('a').value);
  // console.log(sideA);
  var sideB = parseInt(document.getElementById('b').value);
  // console.log(sideB);
  var sideC = parseInt(document.getElementById('c').value);
  // console.log(sideC);
  var triangles = ["Equilateral triangle", "Isosceles triangle", "Scalene triangle"];

  // if(((sideA+sideB !=sideC) || (sideA+sideC!=sideB) || (sideB+sideC!=sideA)) && ((sideA+sideB<sideC) || (sideA+sideC<sideB) || (sideB+sideC<sideA))){
  //     // console.log("so far so good");
  //     document.getElementById("result").innerHTML = 'Not a triangle<img src = "/home/user/Desktop/Triangle-tracker/images/sign-304093_1280.png">';
  // }

  if (sideA + sideB > sideC && sideB + sideC && sideA + sideC) {
    if (sideA == sideB && sideB == sideC && sideA == sideC) {
      document.getElementById("result").innerHTML = 'Equilateral triangle <img src = "/home/user/Desktop/Triangle-tracker/images/equilateral triangle.png">';
    } else if ((sideA == sideB) || (sideB == sideC) || (sideA == sideC)) {
      document.getElementById("result").innerHTML = 'Isosceles triangle <img src = "/home/user/Desktop/Triangle-tracker/images/isosceles.png">'
    } else {
      document.getElementById("result").innerHTML = "Scalene triangle"
    }
  } else {
    document.getElementById("result").innerHTML = "Not a triangle"
  }

  function reload() {
    location.reload();
  }
}
