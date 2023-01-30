(function () {
  ("use strict");

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    if (all) {
      select(el, all).forEach((e) => e.addEventListener(type, listener));
    } else {
      select(el, all).addEventListener(type, listener);
    }
  };

  /**
   * Easy on scroll event listener
   */
  const onscroll = (el, listener) => {
    el.addEventListener("scroll", listener);
  };

  /**
   * Sidebar toggle
   */
  if (select(".toggle-sidebar-btn")) {
    on("click", ".toggle-sidebar-btn", function (e) {
      select("body").classList.toggle("toggle-sidebar");
    });
  }

  /**
   * Search bar toggle
   */
  if (select(".search-bar-toggle")) {
    on("click", ".search-bar-toggle", function (e) {
      select(".search-bar").classList.toggle("search-bar-show");
    });
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select("#navbar .scrollto", true);
  const navbarlinksActive = () => {
    let position = window.scrollY + 200;
    navbarlinks.forEach((navbarlink) => {
      if (!navbarlink.hash) return;
      let section = select(navbarlink.hash);
      if (!section) return;
      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        navbarlink.classList.add("active");
      } else {
        navbarlink.classList.remove("active");
      }
    });
  };
  window.addEventListener("load", navbarlinksActive);
  onscroll(document, navbarlinksActive);

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select("#header");
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add("header-scrolled");
      } else {
        selectHeader.classList.remove("header-scrolled");
      }
    };
    window.addEventListener("load", headerScrolled);
    onscroll(document, headerScrolled);
  }

  /**
   * Back to top button
   */
  let backtotop = select(".back-to-top");
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add("active");
      } else {
        backtotop.classList.remove("active");
      }
    };
    window.addEventListener("load", toggleBacktotop);
    onscroll(document, toggleBacktotop);
  }

  /**
   *  const toggle = document.getElementById("toggledark");
  const body = document.querySelector("body");

  toggle.addEventListener("click", function () {
    this.classList.toggle("bi-moon-fill");
    if (this.classList.toggle("bi-brightness-high-fill")) {
      body.style.background = "white";
      body.style.color = "black";
      body.style.transition = "2s";
    } else {
      body.style.background = "black";
      body.style.color = "white";
      body.style.transition = "2s";
    }
  });
   */

  (function () {
    var darkSwitch = document.getElementById("darkSwitch");
    if (darkSwitch) {
      initTheme();
      darkSwitch.addEventListener("change", function (event) {
        resetTheme();
      });
      function initTheme() {
        var darkThemeSelected =
          localStorage.getItem("darkSwitch") !== null &&
          localStorage.getItem("darkSwitch") === "dark";
        darkSwitch.checked = darkThemeSelected;
        darkThemeSelected
          ? document.body.setAttribute("data-theme", "dark")
          : document.body.removeAttribute("data-theme");
      }
      function resetTheme() {
        if (darkSwitch.checked) {
          document.body.setAttribute("data-theme", "dark");
          localStorage.setItem("darkSwitch", "dark");
        } else {
          document.body.removeAttribute("data-theme");
          localStorage.removeItem("darkSwitch");
        }
      }
    }
  })();

  !(function () {
    var t,
      e = document.getElementById("darkSwitch");
    if (e) {
      (t =
        null !== localStorage.getItem("darkSwitch") &&
        "dark" === localStorage.getItem("darkSwitch")),
        (e.checked = t)
          ? document.body.setAttribute("data-theme", "dark")
          : document.body.removeAttribute("data-theme"),
        e.addEventListener("change", function (t) {
          e.checked
            ? (document.body.setAttribute("data-theme", "dark"),
              localStorage.setItem("darkSwitch", "dark"))
            : (document.body.removeAttribute("data-theme"),
              localStorage.removeItem("darkSwitch"));
        });
    }
  })();
})();
