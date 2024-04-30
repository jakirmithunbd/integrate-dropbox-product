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
            regularPrice = price;
        } else {
            // Single time plan selected
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

function pricingSectionDropdown() {
    const packages = document.querySelector(
        ".amount-dropdown .unstyle"
    ).children;
    for (let i = 0; i < packages.length; i++) {
        packages[i].addEventListener("click", function () {
            calculatePrice(i);
        });
    }

    const pricingBox = document.querySelector(".pricing-checkbox");
    pricingBox.addEventListener("click", function () {
        calculatePrice(0); // Reset to the default package when the checkbox is clicked
    });

    const checkSwitchLifeTime = document.querySelector(
        ".pricing-checkbox .checkbox-label-after"
    );
    const checkSwitchSingleTime = document.querySelector(
        ".pricing-checkbox .checkbox-label-before"
    );

    checkSwitchLifeTime.addEventListener("click", function () {
        pricingBox.classList.add("active-switcher");
        calculatePrice(0); // Reset to the default package when switching between lifetime and single-time plans
    });

    checkSwitchSingleTime.addEventListener("click", function () {
        pricingBox.classList.remove("active-switcher");
        calculatePrice(0); // Reset to the default package when switching between lifetime and single-time plans
    });
}

function compareFeatures() {
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

function dropBoxPricingOnLoad() {
    Toggler();
    HeaderGutter();
    compareFeatures();
    askingQuestion();
    PriceAmountSite();
    calculatePrice(0);
    pricingSectionDropdown();
    scrollSection();
}

window.addEventListener("load", dropBoxPricingOnLoad);
