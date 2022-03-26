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

const studentsScholarship = []


function CalSum(array) {
    let total = 0
    for (let i = 0; i < array.length; i++) {
    total += array[i];
    }
    return total
}

function CalAvg(array) {
    let Avg = CalSum(array) / array.length
    return Avg
}

for (const student of students) {
    Avg = CalAvg(student.grades)
    if(Avg >= 80){
        const Scholarship = {name: student.name, gradeAvg: Avg}
        studentsScholarship.push(Scholarship)
        }
}
console.log(studentsScholarship)

//part 4

function dark_mode(){
    const dark_theme = document.querySelector(".light-theme")
    return dark_theme.classList.add("dark-theme")
}
dark_mode()