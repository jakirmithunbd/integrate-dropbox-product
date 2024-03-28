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

    console.log(iFrameIntro);
}

// function PriceAmountSite() {
//     const amountFillpricingAmount = document.querySelector(
//         ".pro-pricing-site-btn .site-amount-fill"
//     );
//     const amountFillDropdown = document.querySelectorAll(
//         ".pro-pricing-site-btn .amount-dropdown unstyle li"
//     );
//     amountFillDropdown.addEventListener("click", function () {
//         this.classList.add("active");
//     });

//     console.log(amountFillDropdown);
// }

function PriceAmountSite() {
    const amountFillpricingAmount = document.querySelector(
        ".pro-pricing-site-btn .site-amount-fill"
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
        });
    });
}

function codeConfigOnLoad() {
    Toggler();
    HeaderGutter();
    DropboxPopupSection();
    DropBoxSwitcher();
    PriceAmountSite();
}

window.addEventListener("load", codeConfigOnLoad);

// const LenthNumber = document.querySelectorAll(".direction-manual-part");

// document.querySelectorAll(".plan-pro .license-btn").forEach((button, index) => {
//     button.addEventListener("click", () => {
//         document
//             .querySelectorAll(".plan-pro .regular-price")
//             .forEach((price) => price.classList.remove("active"));
//         document
//             .querySelectorAll(".plan-pro .license-btn")
//             .forEach((btn) => btn.classList.remove("active"));
//         document
//             .querySelectorAll(".plan-pro .regular-price")
//             [index].classList.add("active");
//         button.classList.add("active");
//     });
// });

// // Initially show the first price
// document.querySelector(".plan-pro .regular-price").classList.add("active");
// document.querySelector(".plan-pro .license-btn").classList.add("active");

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
