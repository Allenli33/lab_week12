// part 2
function Select(){
    const footer = document.querySelector('footer')
    return footer
}
console.log(Select())

// part 3

const students = [
    { name: "Tasha", grades: [ 80, 67, 75, 62 ] },
    { name: "Tuvok", grades: [ 90, 88, 91, 92 ] },
    { name: "Dax", grades: [ 88, 90, 89, 85 ] },
    { name: "Neelix", grades: [ 60, 54, 48, 50 ] }
  ]
  
  function average(students) {
      var i = 0, sum = 0, len = students.grades.length;
      while (i < len) {
          sum = sum + students[i++];
      }
      return sum / len;
  }

//part 4

