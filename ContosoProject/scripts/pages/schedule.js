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



function createSessionElement(session) {
    
session.map((item) => {
    var list = document.getElementById("schedule")
        var li = document.createElement("li");
        var textTitle = document.createTextNode(item.title);
        li.appendChild(textTitle)
        list.appendChild(li);
    }
)}

createSessionElement(schedule)