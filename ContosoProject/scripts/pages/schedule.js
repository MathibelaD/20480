const schedule = [
    {
        "id": "session-1",
        "title": "Registration",
        "tracks": [1, 2]
    },
    {
        "id": "session-2",
        "title": "Moving the Web forward with HTML5",
        "tracks": [1, 2]
    },
    {
        "id": "session-3",
        "title": "Diving in at the deep end with Canvas",
        "tracks": [1]
    },
    {
        "id": "session-4",
        "title": "New Technologies in Enterprise",
        "tracks": [2]
    },
    {
        "id": "session-5",
        "title": "WebSockets and You",
        "tracks": [1]
    },
    {
        "id": "session-6",
        "title": "Coffee and Cake Break",
        "tracks": [1, 2]
    },
    {
        "id": "session-7",
        "title": "Building Responsive UIs",
        "tracks": [1]
    },
    {
        "id": "session-8",
        "title": "Fun with Forms (no, really!)",
        "tracks": [2]
    },
    {
        "id": "session-9",
        "title": "A Fresh Look at Layouts",
        "tracks": [1]
    },
    {
        "id": "session-10",
        "title": "Real-world Applications of HTML5 APIs",
        "tracks": [2]
    },
    {
        "id": "session-11",
        "title": "Lunch",
        "tracks": [1, 2]
    },
    {
        "id": "session-12",
        "title": "Getting to Grips with JavaScript",
        "tracks": [1]
    },
    {
        "id": "session-13",
        "title": "Transforms and Animations",
        "tracks": [2]
    },
    {
        "id": "session-14",
        "title": "Web Design Adventures with CSS3",
        "tracks": [1]
    },
    {
        "id": "session-15",
        "title": "Introducing Data Access and Caching",
        "tracks": [2]
    },
    {
        "id": "session-16",
        "title": "Closing Thanks and Prizes",
        "tracks": [1, 2]
    }
];


const list = document.getElementById("schedule")
const track1Checkbox = document.getElementById("show-track-1")
const track2Checkbox = document.getElementById("show-track-2")

function clearList() {
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
}

function createSessionElement(session) {    
        var li = document.createElement("li");
        li.textContent = session.title;
        return li;
    }

// createSessionElement(schedule)
function displaySchedule(){
    clearList();
    for (var i = 0; i < schedule.length; i++){
        const li = createSessionElement(schedule[i]);
        if(track1Checkbox.checked && track2Checkbox.checked) {
            list.appendChild(li);
        }
        if(schedule[i].tracks.indexOf(1) >= 0 && track1Checkbox.checked) {
             list.appendChild(li);
            // console.log(schedule[i].tracks);
        }
        if(schedule[i].tracks.indexOf(2) >= 0 && track2Checkbox.checked) {
             list.appendChild(li);
            // console.log(schedule[i].tracks);
        }
        
}
}

track1Checkbox.addEventListener('click', displaySchedule)
track2Checkbox.addEventListener('click', displaySchedule)
