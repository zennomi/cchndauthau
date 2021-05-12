timeValue = 90 * 60;

// if continueQuiz button clicked
continue_btn.onclick = () => {
    fetchData('/api/get-mcq/' + testId, { code: document.getElementById('code_input').value })
        .then(res => {
            questions = res;
            info_box.classList.remove("activeInfo"); //hide info box
            quiz_area.classList.add("activeQuiz"); //show quiz box
            questions.forEach((q, i) => {
                shortcut_box.innerHTML += `<button class="btn btn-question mx-1 my-1" id=btn-que-${i} onclick='showQuestions(${i})'>${i + 1}</button>`
            })
            showQuestions(0); //calling showQestions function
            queCounter(1); //passing 1 parameter to queCounter
            startTimer(timeValue); //calling startTimer function
            startTimerLine(0); //calling startTimerLine function
        })
}

// getting questions and options from array
var showQuestions = (index) => {
    timeText.scrollIntoView();
    que_count = index;
    queCounter(index + 1);
    const que_text = document.querySelector(".que_text");
    //creating a new span and div tag for question and option and passing the value using array index
    let que_tag = '<span>' + (index + 1) + ". " + questions[index].question + '</span>';
    let option_tag = '';
    questions[index].options.forEach((o, i) => {
        option_tag += `<div class="option"><span>${o.content}</span></div>`
    })
    que_text.innerHTML = que_tag; //adding new span tag inside que_tag
    option_list.innerHTML = option_tag; //adding new div tag inside option_tag

    const option = option_list.querySelectorAll(".option");

    // set onclick attribute to all available options
    for (i = 0; i < option.length; i++) {
        if (questions[index].select == i) {
            option[i].setAttribute("class", "option select");
            option[i].insertAdjacentHTML("beforeend", selectIconTag);
        }
        option[i].setAttribute("onclick", `optionSelected(${i})`);
    }
}

// var showCRTests = (index) => {
//     queCounter(index + 1 + questions.length);
//     const que_text = document.querySelector(".que_text");
//     let que_tag = '<span>' + (index + 1) + ". " + cRTests[index].question + '</span>';
//     let input_tag = `
//     <div class="form-floating">
//         <textarea class="form-control" placeholder="Gõ bài làm vào đây" id="floatingTextarea" onkeyup="inputTyped(${index})" style="height: 100px">${cRTests[index].type || ""}</textarea>
//         <label for="floatingTextarea">Bài làm</label>
//     </div>`;
//     que_text.innerHTML = que_tag;
//     option_list.innerHTML = input_tag;
// }



//if user clicked on option
function optionSelected(index) {
    let btnQue = document.getElementById("btn-que-" + que_count);
    btnQue.classList.add("btn-selected");
    if (questions[que_count].select != undefined) {
        option_list.children[questions[que_count].select].setAttribute("class", "option");
        option_list.children[questions[que_count].select].lastElementChild.remove();
    }
    questions[que_count].select = index;
    option_list.children[index].setAttribute("class", "option select");
    option_list.children[index].insertAdjacentHTML("beforeend", selectIconTag);
}

function showResult() {
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_area.classList.remove("activeQuiz"); //hide quiz box
    result_box.classList.add("activeResult"); //show result box
    submit_btn.remove();
    const scoreText = result_box.querySelector(".score_text");
    questions.forEach((q, i) => {
        if (q.select != undefined && q.options[q.select].isTrue) {
            userScore++;
            document.getElementById("btn-que-" + i).setAttribute("class", "btn btn-success mx-1 my-1");
        } else {
            document.getElementById("btn-que-" + i).setAttribute("class", "btn btn-danger mx-1 my-1");
        }
    })
    scoreText.innerHTML = `<span>Phần trắc nghiệm bạn đã làm đúng ${userScore} trên tổng số ${questions.length} câu trắc nghiệm.</span>`
    showQuestions = (index) => {
        timeText.scrollIntoView();
        que_count = index;
        queCounter(index + 1);
        const que_text = document.querySelector(".que_text");
        //creating a new span and div tag for question and option and passing the value using array index
        let que_tag = '<span>' + questions[index].numb + ". " + questions[index].question + '</span>';
        let option_tag = '';
        questions[index].options.forEach((o, i) => {
            option_tag += `<div class="option"><span>${o.content}</span></div>`
        })
        que_text.innerHTML = que_tag; //adding new span tag inside que_tag
        option_list.innerHTML = option_tag; //adding new div tag inside option_tag

        const option = option_list.querySelectorAll(".option");

        // set onclick attribute to all available options
        if (typeof questions[index].select === 'undefined') {
            header.innerHTML = 'Bạn chưa chọn đáp án.';
        } else if (!(questions[index].options[questions[index].select].isTrue)) {
            option[questions[index].select].setAttribute("class", "option incorrect");
            option[questions[index].select].insertAdjacentHTML("beforeend", crossIconTag);
            header.innerHTML = 'Bạn đã chọn đáp án sai.';
        } else {
            header.innerHTML = 'Bạn đã chọn đáp án đúng.';
        }

        for (i = 0; i < option.length; i++) {
            if (questions[index].options[i].isTrue) {
                option[i].setAttribute("class", "option correct");
                option[i].insertAdjacentHTML("beforeend", tickIconTag);
            }
        }
    }

    // showCRTests = (index) => {
    //     queCounter(index + 1 + questions.length);
    //     const que_text = document.querySelector(".que_text");
    //     let que_tag = '<span>' + (index + 1) + ". " + cRTests[index].question + '</span>';
    //     let input_tag = `
    //     <div class="form-floating">
    //         <textarea class="form-control mb-2" id="floatingTextarea" onkeyup="inputTyped(${index})" style="height: 100px" disabled>${cRTests[index].type || ""}</textarea>
    //         <label for="floatingTextarea">Bài làm</label>
    //     </div>
    //     <div class="card">
    //         <div class="card-body">
    //         <div class="card-title">Đáp án</div>
    //             ${cRTests[index].answer}
    //         </div>
    //     </div>
    //     `;
    //     que_text.innerHTML = que_tag;
    //     option_list.innerHTML = input_tag;
    //     header.innerHTML = "Đáp án phần tự luận"
    // }
}

