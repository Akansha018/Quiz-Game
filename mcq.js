let q = 0;
let ans = 0;
let wrong = 0;
let ans1 = document.getElementsByName("qus1");
let ans2 = document.getElementsByName("qus2");
let ans3 = document.getElementsByName("qus3");
let ans4 = document.getElementsByName("qus4");
let ans5 = document.getElementsByName("qus5");

function solution() {
    q++;
    switch (q) {
        case 1:
            document.getElementById("one").style.display = "none";
            document.getElementById("first").style.display = "block";
            document.getElementById("btn").value = "Next";
            break;
        case 2:
            document.getElementById("first").style.display = "none";
            document.getElementById("second").style.display = "block";
            document.getElementById("btn").value = "Next";
            if ((get_value(ans1)) == 'a1') {
                ans++;
            }
            break;
        case 3:
            document.getElementById("second").style.display = "none";
            document.getElementById("third").style.display = "block";
            document.getElementById("btn").value = "Next";
            if ((get_value(ans2)) == 'b2') {
                ans++;
            }
            break;

        case 4:
            document.getElementById("third").style.display = "none";
            document.getElementById("fourth").style.display = "block";
            document.getElementById("btn").value = "Next";
            if ((get_value(ans3)) == 'a3') {
                ans++;
            }
            break;
        case 5:
            document.getElementById("fourth").style.display = "none";
            document.getElementById("fifth").style.display = "block";
            document.getElementById("btn").value = "Submit";
            document.getElementById("btn").style.backgroundColor = "green";
           // document.getElementById("btn").style.boxShadow = " 1px 1px 2px black, 0 0 25px rgb(30, 250, 77), 0 0 5px rgb(60, 245, 4);";

            if ((get_value(ans4)) == 'c3') {
                ans++;
            }
            break;
        case 6:
            document.getElementById("fifth").style.display = "none";
            document.getElementById("results").style.display = "block";
            document.getElementById("btn").style.display = "none";

            if ((get_value(ans5)) == 'a5') {
                ans++;
            }
    }

    // worng = ;
    document.getElementById("correct").innerText = ` ${ans}`;
    wrong = 5 - parseInt(ans);
    document.getElementById("wrong").innerText = ` ${wrong}`;
}

function get_value(name) {
    var i;
    for (i = 0; i < name.length; i++) {
        if (name[i].checked) {
            return name[i].value;
        }
    }
}

