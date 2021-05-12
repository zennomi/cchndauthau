timeValue = 120 * 60;

// if continueQuiz button clicked
continue_btn.onclick = () => {
    fetchData('/api/get-crt/' + testId, { code: document.getElementById('code_input').value })
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

var showQuestions = (index) => {
    timeText.scrollIntoView();
    que_count = index;
    queCounter(index + 1);
    const que_text = document.querySelector(".que_text");
    let que_tag = '<span>' + (index + 1) + ". " + questions[index].question + '</span>';
    let input_tag = `
    <div class="form-floating">
        <textarea class="form-control" placeholder="Gõ bài làm vào đây" id="floatingTextarea" onkeyup="inputTyped(${index})" style="height: 100px">${questions[index].type || ""}</textarea>
        <label for="floatingTextarea">Bài làm</label>
    </div>`;
    que_text.innerHTML = que_tag;
    option_list.innerHTML = input_tag;
}

function showResult() {
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_area.classList.remove("activeQuiz"); //hide quiz box
    result_box.classList.add("activeResult"); //show result box
    submit_btn.remove();
    submit_btn.remove();
    const scoreText = result_box.querySelector(".score_text");
    scoreText.innerHTML = `<span>Đây là bài thi tự luận nên bạn hãy xem đáp án và tự chấm cho mình nhé.</span>`

    showQuestions = (index) => {
        timeText.scrollIntoView();
        que_count = index;
        queCounter(index + 1);
        const que_text = document.querySelector(".que_text");
        let que_tag = '<span>' + (index + 1) + ". " + questions[index].question + '</span>';
        let input_tag = `
        <div class="form-floating">
            <textarea class="form-control mb-2" id="floatingTextarea" onkeyup="inputTyped(${index})" style="height: 100px" disabled>${questions[index].type || ""}</textarea>
            <label for="floatingTextarea">Bài làm</label>
        </div>
        <div class="card">
            <div class="card-body">
            <div class="card-title">Đáp án</div>
                ${questions[index].answer}
            </div>
        </div>
        `;
        que_text.innerHTML = que_tag;
        option_list.innerHTML = input_tag;
        header.innerHTML = "Đáp án phần tự luận"
    }
}


// if user typed
function inputTyped(index) {
    questions[index].type = document.querySelector('textarea').value;
}