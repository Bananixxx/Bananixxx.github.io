let i = 0;

window.addEventListener("DOMContentLoaded", (event) => {
    var button = document.getElementById("button");
    button.addEventListener("click", function (e) {
        const val = document.getElementById("text").value;
        if (val != 0) {
            let text = document.createElement("p");
            text.appendChild(document.createTextNode(val));
            let delbtn = document.createElement("button");
            delbtn.classList.add("delbtn")
            delbtn.setAttribute("id", "del-btn"+i);
            let elem = document.createElement("div");
            elem.classList.add("task-bar");
            elem.setAttribute("id", "task"+i);
            elem.appendChild(text);
            elem.appendChild(delbtn);
            delbtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
            
            document.getElementById('output').appendChild(elem);
            document.getElementById('text').value = "";
            document.getElementById("text").placeholder = "Task to be done...";
            i++;
            delbtn.addEventListener("click", function(e) {
                let id = e.currentTarget.id;
                id = id.slice(7);
                id = "task"+id;
                var target = document.getElementById(id);
                target.remove();
            });
        }
  });
});






