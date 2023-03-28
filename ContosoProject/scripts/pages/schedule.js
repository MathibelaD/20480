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
];


const list = document.getElementById("schedule")
function createSessionElement(session) {    
session.map((item) => {
        var li = document.createElement("li");
        // var textTitle = document.createTextNode(item.title);
        li.textContent = item.title
        // li.appendChild(textTitle)
        list.appendChild(li);
    }
)}

createSessionElement(schedule)
function displaySchedule(){
    // clearList();
    for (var i = 0; i < schedule.length; i++){
        const li = createSessionElement(schedule);
        list.appendChild(li);
    }
}
// displaySchedule();