let name = 'Dennis Terna'
let courses = ['HTML', 'CSS', 'javaScript']

for(let i = 1; i <= 200; i++) {
    if(courses.length % 2 === 0 && i % 2 === 0) {
        console.log(i)
    } else if(courses.length % 2 !== 0 && i % 2 !== 0) {
        console.log(i)
    }
}
