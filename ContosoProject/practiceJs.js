    const Welcome = document.getElementById("start")
// ===================================================================
letsReadFile = () => {
    const selectedFile = document.getElementById("file1")
    console.log(selectedFile.files)
    if (selectedFile.files.length != 0 && selectedFile.files[0].type.match(/image.*/)){
        // console.log(selectedFile.files + "im in")
        const readFile = new FileReader()
        try {
            readFile.onload = (e) => {
                const targetDiv = document.getElementById("drag1")
                targetDiv.src = e.target.result
                // console.log(targetDiv.src)
            }
            readFile.readAsDataURL(selectedFile.files[0])
        } catch (error) {
            console.log("Cannt read text file")
        }
    }
}

letsReadFile()
// ====================================================Drag&Drop===================================================
function allowDrop(ev) {
    ev.preventDefault();
}

letsDrag = (e) => {
    e.dataTransfer.effectAllowed = "copy";
    e.dataTransfer.setData("text", e.target.id);
}

HandleDrop = (ev) => {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

// =============================================GEOLOCATION==============================================================

const getGeo = document.getElementById('geo')

// console.log(navigator.geolocation.getCurrentPosition(coords))
function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
      getGeo.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
function showPosition(position) {
    console.log(position)
    getGeo.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;
}

getLocation()
// =========================Offline Data===========================

// console.log(sessionStorage)
// sessionStorage.setItem("token", "Dineo")
// console.log(sessionStorage.getItem("token"))

const studentData = {
    name: "Dineo",
    grade: 10,
    surname: "Modise"
}
console.log(localStorage)
localStorage.setItem("studentData", JSON.stringify(studentData))
const data = JSON.parse(localStorage.getItem("studentData"))
Welcome.appendChild(
Object.assign(document.createElement('h1'), {
    innerHTML: `Welcome ${data.name} ${data.surname} ` 
}))

var students = [
    {
        name: "dineo",
        surname: "mathibela"
    },
    {
        name: "Lebo",
        surname: "fox"
    },
    {
        name: "Bonolo",
        surname: "Themba"
    },
    {
        name: "love",
        surname: "Paul"
    }
]
// var db; // Reference to the database to use
// var openRequest = indexedDB.open("contosoDB");
// openRequest.onsuccess = function(event) {
//  db = event.target.result;
// };
// openRequest.onerror = function(event) {
//  alert("Error " + event.target.errorCode + " occurred while opening the database");
// };
// var attendee = {
//     id: "1",
//     name: "Rachel Valdez",
//     password: "Pa$$w0rd"
//    };
// var attendeeStore = db.createObjectStore("attendees", { keyPath: "id" });
   
// ===========================create circle canvas=========================

var c = document.getElementById("mycanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.fill()
ctx.arc(100, 75, 50, 0, 2 * Math.PI);
ctx.stroke();