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
 
function scholarship(new_list) {

    const studentsScholarship = []

    for (let value of new_list) {
        value.grades = value.grades.reduce((a,b) => a + b, 0) / value.grades.length; {
            if (value.grades >= 80) {
                value.gradeAvg = value.grades;
                studentsScholarship.push(value)
            }
        }
    }
    return studentsScholarship
}
console.log(scholarship(students))

//part 4

function makeIncognito(){
    const DarkMode = document.querySelector('div')
    DarkMode.classList.add('dark-theme')
}
console.log(makeIncognito())
