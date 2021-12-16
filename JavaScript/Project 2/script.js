// Create new list item
function addTodo() { 
  const li = document.createElement("li");
  const inputValue = document.querySelector("#task").value;
  const t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue.replace(/\s/g,"") == "") {
    $(`#liveToastAlert`).toast('show')
  } else {
    $(`#liveToast`).toast('show')
    document.querySelector("#list").appendChild(li);
  }
  document.querySelector("#task").value = "";

  const span = document.createElement("SPAN");
  const txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      const div = this.parentElement;
      div.style.display = "none";
    }
  }
}

// Create element with Enter key + Feature
document.querySelector("#task").addEventListener("keyup", function (event) {
  if (event.keyCode == 13) {
    document.querySelector("#liveToastBtn").click();
  }
});

// Delete list item
const close = document.getElementsByClassName("close");
let j;
for (j = 0; j < close.length; j++) {
  close[j].onclick = function() {
    const div = this.parentElement;
    div.style.display = "none";
  }
}

// Create close button and append it to each list item
const myNodelist = document.getElementsByTagName("LI");
let i;
for (i = 0; i < myNodelist.length; i++) {
  const span = document.createElement("SPAN");
  const txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Check list item
const list = document.querySelector('#list');
list.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('checked');
  }
}, false);