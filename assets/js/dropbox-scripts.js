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

function DuskySwitcher() {
    const duskyCheckbox = document.querySelector(
        ".pricing-checkbox .dusky-checkbox-button"
    );

    if (duskyCheckbox) {
        duskyCheckbox.addEventListener("click", function () {
            this.parentElement.classList.toggle("active-switcher");
        });
    }
}

function DropboxPopupSection() {
    const popupIframe = document.querySelector(
        ".hero-canvas-dropbox .canvas-dropbox .play-button .icon"
    );
    const parentElement = document.querySelector(".cc-dropbox-hero");

    const closeElement = document.querySelector(
        ".cc-dropbox-hero .db-popup-wrapper .db-hero-popup .close-logo"
    );

    const iFrameIntro = document.querySelector(
        ".cc-dropbox-hero .db-popup-wrapper .db-hero-popup .popup-content iframe"
    );

    popupIframe.addEventListener("click", function () {
        parentElement.classList.add("active-popup");
        window.scroll(0, 0);
    });

    closeElement.addEventListener("click", function () {
        parentElement.classList.remove("active-popup");

        if (iFrameIntro) {
            iFrameIntro.src = iFrameIntro.src;
        }
    });

    console.log(iFrameIntro);
}

function codeConfigOnLoad() {
    Toggler();
    HeaderGutter();
    DuskySwitcher();
    DropboxPopupSection();
}

window.addEventListener("load", codeConfigOnLoad);

const LenthNumber = document.querySelectorAll(".direction-manual-part");

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
