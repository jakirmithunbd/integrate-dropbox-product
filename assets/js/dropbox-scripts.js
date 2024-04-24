window.addEventListener("scroll", function () {
    if (window.pageYOffset > 0) {
        document.querySelector(".cc-dropbox-header").classList.add("sticky");
    } else {
        document.querySelector(".cc-dropbox-header").classList.remove("sticky");
    }
});

function Toggler() {
    const headerToggle = document.querySelector(".mobile-togger");
    const headerMainMenu = document.querySelector(".header-menu-wrap");
    headerToggle.addEventListener("click", function () {
        this.classList.toggle("bar-active");
        headerMainMenu.classList.toggle("show-menu");
    });
}

// Header gutter for adjusting header height
function HeaderGutter() {
    const header = document.querySelector(".cc-dropbox-header");
    const headerGutter = document.querySelector(".header_gutter");
    headerGutter.style.height = header.clientHeight + "px";
}

function DropBoxSwitcher() {
    const priceClass = document.querySelector(".pricing-checkbox");

    const dropBoxCheckbox = document.querySelector(
        ".pricing-checkbox .dropbox-checkbox-button"
    );
    const dropBoxCheckBefore = document.querySelector(
        ".pricing-checkbox .dropbox-checkbox-button .checkbox-label-before"
    );
    const dropBoxCheckAfter = document.querySelector(
        ".pricing-checkbox .dropbox-checkbox-button .checkbox-label-after"
    );

    if (dropBoxCheckbox) {
        dropBoxCheckAfter.addEventListener("click", function () {
            priceClass.classList.add("active-switcher");
        });
        dropBoxCheckBefore.addEventListener("click", function () {
            priceClass.classList.remove("active-switcher");
        });
    }
}

function DropboxPopupSection() {
    const popUpIframe = document.getElementById("icon");
    const parentElement = document.querySelector(".cc-dropbox-hero");
    const closeElement = document.querySelector(".cc-dropbox-hero .close-logo");
    const iFrameIntro = document.querySelector(
        ".cc-dropbox-hero .popup-content iframe"
    );

    if (!popUpIframe || !parentElement || !closeElement || !iFrameIntro) {
        console.error("One or more required elements not found.");
        return;
    }

    popUpIframe.addEventListener("click", function () {
        parentElement.classList.add("active-popup");
        window.scrollTo(0, 0);
    });

    closeElement.addEventListener("click", function () {
        parentElement.classList.remove("active-popup");

        if (iFrameIntro) {
            iFrameIntro.src = iFrameIntro.src;
        }
    });
}

function PriceAmountSite() {
    const amountFillpricingAmount = document.querySelector(
        ".pro-pricing-site-btn .site-amount-fill h6"
    );
    const amountFillDropdownItems = document.querySelectorAll(
        ".pro-pricing-site-btn .amount-dropdown ul.unstyle li"
    );
    amountFillDropdownItems.forEach((item) => {
        item.addEventListener("click", function () {
            // Remove 'active' class from all dropdown items
            amountFillDropdownItems.forEach((item) => {
                item.classList.remove("active");
            });
            // Add 'active' class to the clicked item
            this.classList.add("active");
            amountFillpricingAmount.innerHTML = `${this.innerText}`;
        });
    });
}

function scrollSection() {
    const pricingSelect = document.getElementById("checkbox-button");
    const proPlanCard = document.getElementById("live-demo-btn");

    pricingSelect.addEventListener("click", function () {
        if (window.innerWidth <= 770) {
            proPlanCard.scrollIntoView({
                block: "start",
                inline: "nearest",
            });
        }
    });
}

function basicUsegePage() {
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

function codeConfigOnLoad() {
    basicUsegePage();
    gettingTopBar();
    Toggler();
    HeaderGutter();
    DropboxPopupSection();
    DropBoxSwitcher();
    PriceAmountSite();
    calculatePrice(0);
    askingQuestion();
    scrollSection();
}

window.addEventListener("load", codeConfigOnLoad);

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

const cards = document.querySelectorAll(
    ".compare-feature-wrap .features-title"
);
const cardDetails = document.querySelectorAll(".compare-feature-wrap h5");

cards.forEach((card, i) => {
    $(card).click(function () {
        $(cardDetails[i]).slideToggle();
        $(this).parent().toggleClass("actives");
    });
});

(function ($) {
    $(document).ready(function () {
        $(".dropbox-review-wrapper").slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            Infinity: true,
            responsive: [
                {
                    breakpoint: 980,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                    },
                },
            ],
        });
    });
})(jQuery);

function calculatePrice(packageIndex) {
    // Get selected package, discount percentage, and plan options
    let discount = 30;
    const pricing = document
        .querySelector(".pricing-checkbox")
        .classList.contains("active-switcher");
    const packages = document.querySelector(
        ".amount-dropdown .unstyle"
    ).children;

    // Calculate discounted price based on selected plan
    let price;
    switch (packageIndex) {
        case 0:
            price = 14.99;
            break;
        case 1:
            price = 49.99;
            break;
        case 2:
            price = 89.99;
            break;
        default:
            price = 0;
    }

    function calculateDiscountedPrice(price) {
        let discountedPrice;
        let regularPrice;
        if (pricing) {
            // Lifetime plan selected
            discountedPrice = price * 5;
            regularPrice = price * 5;
        } else {
            // No plan selected, use original price
            discountedPrice = price;
            regularPrice = price;
        }

        // Apply discount
        discountedPrice -= discountedPrice * (discount / 100);

        // Display the result
        document.querySelector(".regular-price h3").innerText =
            "$" + regularPrice.toFixed(2);
        document.querySelector(".offer-price h2").innerText =
            "$" + discountedPrice.toFixed(2);
        console.log(discountedPrice);
    }

    // Reset all packages to remove "active" class
    for (let j = 0; j < packages.length; j++) {
        packages[j].classList.remove("active");
    }
    // Add "active" class to the clicked package
    packages[packageIndex].classList.add("active");

    // Calculate and display the discounted price
    calculateDiscountedPrice(price);
}

const packages = document.querySelector(".amount-dropdown .unstyle").children;
for (let i = 0; i < packages.length; i++) {
    packages[i].addEventListener("click", () => {
        calculatePrice(i);
    });
}
const pricingBox = document.querySelector(".pricing-checkbox");
pricingBox.addEventListener("click", () => {
    calculatePrice(0);
});
