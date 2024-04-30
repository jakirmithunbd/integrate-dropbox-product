function basicUsagePage() {
    const userManualHeaders = document.querySelectorAll(
        ".user-manuals .manual-header"
    );
    const manualContents = document.querySelectorAll(
        ".user-manuals .manual-content"
    );

    userManualHeaders.forEach((header, index) => {
        header.addEventListener("click", function () {
            const content = manualContents[index];

            // Slide up all other manual contents except for the clicked one
            manualContents.forEach((manualContent, i) => {
                if (i !== index && manualContent.style.display !== "none") {
                    $(manualContent).slideUp();
                    $(manualContent).parent().removeClass("answer-slideshow");
                }
            });

            // Slide toggle the clicked manual content
            $(content).slideToggle();
            $(content).parent().toggleClass("answer-slideshow");
        });
    });
}

function gettingTopBar() {
    const tabsMenuOption = document.querySelectorAll(".tab-wrapper .tabs");

    // Default to open the first tab
    tabsMenuOption[0].classList.add("tab-active");

    tabsMenuOption.forEach((header, index) => {
        header.addEventListener("click", function () {
            // Toggle the "hello" class for the clicked tab
            this.classList.add("tab-active");

            // Close other tabs and remove the "hello" class
            tabsMenuOption.forEach((tab, i) => {
                if (i !== index && tab.classList.contains("tab-active")) {
                    tab.classList.remove("tab-active");
                }
            });
        });
    });
}

function askingQuestion() {
    const frequentlyQs = document.querySelectorAll(
        ".questions-wrapper .single-questions"
    );

    const questionTitle = document.querySelectorAll(
        ".single-questions .single-questions-title"
    );

    const answerTitle = document.querySelectorAll(".single-questions h5");

    frequentlyQs.forEach((item, i) => {
        $(questionTitle[i]).click(function () {
            // Slide up all answers first
            answerTitle.forEach((answer, index) => {
                if (i !== index && $(answer).is(":visible")) {
                    $(answer).slideUp(300);
                    $(frequentlyQs[index]).removeClass("open-answer");
                }
            });

            // Slide down the selected answer
            if ($(answerTitle[i]).is(":hidden")) {
                $(answerTitle[i]).slideDown(300);
                $(item).addClass("open-answer");
            } else {
                $(answerTitle[i]).slideUp(300);
                $(item).removeClass("open-answer");
            }
        });
    });
}

function dropBoxGettingOnLoad() {
    gettingTopBar();
    askingQuestion();
    basicUsagePage();
}

window.addEventListener("load", dropBoxGettingOnLoad);
