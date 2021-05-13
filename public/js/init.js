//selecting all required elements
const start_form = document.querySelector("form.start");
const code_box = document.querySelector(".code_box ");
const info_box = document.querySelector(".info_box");
const shortcut_box = document.getElementById("shortcut_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_area = document.querySelector(".quiz_area");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");
const header = document.querySelector("header");

var questions;

// fetch function
var fetchData = async (url, data) => {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json();
}

// if startQuiz button clicked
start_form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetchData('/api/get-code', {code: document.getElementById('code_input').value})
    .then(userCode => {
        if (!userCode || userCode.count <= 0) {
            alert("Có vẻ code bạn vừa nhập đã hết hạn.");
            return;
        }
        code_box.style.display = "none";
        info_box.classList.add("activeInfo"); //show info box
        document.getElementById('turn_count').textContent = userCode.count;
        marqueefy(info_box.querySelector('.marquee'));
        // document.getElementById('mCQue').textContent = mCQuestions.length;
        // document.getElementById('cRTest').textContent = cRTests.length;
    })

})

// if exitQuiz button clicked
exit_btn.onclick = () => {
    info_box.classList.remove("activeInfo"); //hide info box
}


let timeValue = 0;
let que_count = 0;
let que_total = 0;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

// if restartQuiz button clicked
restart_quiz.onclick = () => {
    quiz_area.classList.add("activeQuiz"); //show quiz box
    result_box.classList.remove("activeResult"); //hide result box
    widthValue = 0;
    header.innerHTML = "";
    showQuestions(0); //calling showQestions function
    queCounter(1); //passing que_numb value to queCounter
}

// if quitQuiz button clicked
quit_quiz.onclick = () => {
    window.location.href = "/"; //reload the current window
}

const next_btn = document.querySelector(".next_btn");
const previous_btn = document.querySelector(".previous_btn");
const submit_btn = document.querySelector(".submit_btn");
const mark_btn = document.querySelector(".mark_btn");
const home_btn = document.querySelector("#home_btn");
const bottom_ques_counter = document.querySelector(".total_que");

// if Next Que button clicked
next_btn.onclick = () => {
    if (que_count < questions.length - 1) { //if question count is less than total question length
        showQuestions(que_count + 1); //calling showQestions function
    }
}

previous_btn.onclick = () => {
    if (que_count > 0) { //if question count is less than total question length
        showQuestions(que_count - 1); //calling showQestions function
    }
}

submit_btn.onclick = () => {
    let userCF = confirm('Xác nhận nộp bài.');
    if (userCF) {
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        showResult(); //calling showResult function
    }
}

mark_btn.onclick = () => {
    let btnQue = document.getElementById("btn-que-" + que_count);
    btnQue.classList.toggle("btn-marked");
}

home_btn.onclick = () => {
    let userCF = confirm("Quay trở lại trang chủ, bạn sẽ mất lượt thi này?");
    if (userCF) {
        window.location.href = '/';
    }
}

// creating the new div tags which for icons
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';
let selectIconTag = '<div class="icon select"><i class="fas fa-circle"></i></div>';

// function helper
function startTimer(time) {
    counter = setInterval(timer, 1000);
    function timer() {
        timeCount.textContent = time; //changing the value of timeCount with time value
        time--; //decrement the time value
        if (time < 9) { //if timer is less than 9
            let addZero = timeCount.textContent;
            timeCount.textContent = "0" + addZero; //add a 0 before time value
        }
        if (time < 0) { //if timer is less than 0
            clearInterval(counter); //clear counter
            timeText.textContent = "Time Off"; //change the time text to time off
            showResult();
        }
    }
}

function startTimerLine(time) {
    counterLine = setInterval(timer, 10);
    function timer() {
        time += 0.01; //upgrading time value with 1
        time_line.style.width = time / timeValue * 100 + "%"; //increasing width of time_line with px by time value
        if (time > timeValue) { //if time value is greater than 549
            clearInterval(counterLine); //clear counterLine
        }
    }
}

function queCounter(index) {
    //creating a new span tag and passing the question number and total question
    let totalQueCounTag = '<span><p>' + index + '</p> trên <p>' + (questions.length) + '</p> câu hỏi.</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;  //adding new span tag inside bottom_ques_counter
}
