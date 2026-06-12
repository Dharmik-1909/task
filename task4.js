console.log(document.getElementById("heading").innerHTML)
console.log(document.getElementById("paragraph").innerText)
console.log(document.getElementById("content").textContent)

// changing the content

document.querySelector('#heading').innerHTML = "Welcome to <span>JavaScript DOM</span>";
document.querySelector('#paragraph').innerHTML = "Learning Content Modification in JavaScript";
document.querySelector('#content').innerHTML = "Frontend Development with JavaScript";