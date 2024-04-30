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

function dropBoxOnLoad() {
    DropBoxSwitcher();
    Toggler();
    HeaderGutter();
    DropboxPopupSection();
}

window.addEventListener("load", dropBoxOnLoad);

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
