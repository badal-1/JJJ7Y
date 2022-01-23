a = localStorage.getItem("name");
document.getElementById("name_holder").innerHTML = a;
function b(){
window.alert("Your name is "+ a);
}

t = ["1", "2", "3", "4", "5" , "6", "7", "8", "9", "10 Images", "10 Images", "10 Images", "10 Images", "10 Images", "10 Images", "10 Images", "10 Images", "10 Images", "10 Images", "10 Images", "10 Images", "10 Images", "10 Images", "10 Images", "10 Images", "10 Images", "10 Images", "10 Images", "10 Images", "10 Images", "10 Images", "10 Images", "10 Images", "10 Images", "10 Images", "10 Images", "10 Images", "10 Images", "10 Images", "10 Images", "10 Images", "10 Images", "10 Images", "10 Images", "10 Images", "10 Images", "10 Images", "10 Images", "10 Images", "10 Images", "10 Images", "10 Images", "10 Images", "10 Images", "10 Images"];
l = ["1", "2", "3", "4", "5" , "6", "7", "8", "9", "10 Correctly", "10 Correctly", "10 Correctly", "10 Correctly", "10 Correctly", "10 Correctly", "10 Correctly", "10 Correctly", "10 Correctly", "10 Correctly", "10 Correctly", "10 Correctly", "10 Correctly", "10 Correctly", "10 Correctly", "10 Correctly", "10 Correctly", "10 Correctly", "10 Correctly", "10 Correctly", "10 Correctly", "10 Correctly", "10 Correctly", "10 Correctly", "10 Correctly", "10 Correctly", "10 Correctly", "10 Correctly", "10 Correctly", "10 Correctly", "10 Correctly", "10 Correctly", "10 Correctly", "10 Correctly", "10 Correctly", "10 Correctly", "10 Correctly", "10 Correctly", "10 Correctly", "10 Correctly", "10 Correctly", "10 Correctly", "10 Correctly", "10 Correctly", "10 Correctly", "10 Correctly", "10 Correctly", "10 Correctly", "10 Correctly"];
c = 0;
e = document.getElementById("a");
u = document.getElementById("t");
i = setInterval(change, 50);
function change() {
    e.innerHTML = t[c];
    u.innerHTML = l[c];
    c++;
    if (c >= t.length) {
      c = 0;
    }
  }
