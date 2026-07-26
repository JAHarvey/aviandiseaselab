/* Harvey Lab — shared site behavior. No dependencies, no build step. */
(function () {
  "use strict";

  /* --- Mobile nav --- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("primary-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.style.overflow = open && window.innerWidth <= 940 ? "hidden" : "";
    });
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      }
    });
  }

  /* --- Sticky header shadow --- */
  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("is-stuck", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* --- Reveal on scroll --- */
  var revealables = document.querySelectorAll(".reveal");
  if (revealables.length && "IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    revealables.forEach(function (el) { io.observe(el); });
  } else {
    revealables.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* --- Hero headline rotator --- */
  var rotator = document.querySelector("[data-rotate]");
  if (rotator) {
    var phrases;
    try { phrases = JSON.parse(rotator.getAttribute("data-rotate")); } catch (e) { phrases = null; }
    if (phrases && phrases.length > 1 && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      var i = 0;
      setInterval(function () {
        i = (i + 1) % phrases.length;
        rotator.innerHTML = "<span>" + phrases[i] + "</span>";
      }, 4200);
    }
  }

  /* --- Email addresses ---
     Addresses are written as name_at_uri.edu in the HTML so scrapers reading
     the raw page never see a valid address. This assembles a working mailto:
     link at runtime. Markup: <a class="email" data-u="name" data-d="uri.edu">
     To add a new one, copy that pattern — never write a plain mailto: link. */
  document.querySelectorAll("a.email[data-u][data-d]").forEach(function (a) {
    var addr = a.getAttribute("data-u") + String.fromCharCode(64) + a.getAttribute("data-d");
    a.setAttribute("href", "mailto:" + addr);
    a.setAttribute("title", "Email " + addr);
  });

  /* --- Team photos: use the photo if the file exists, else show initials ---
     Each .person__photo has data-photo="assets/img/team/name.jpg".
     Drop a file at that path and it appears automatically — no HTML editing. */
  document.querySelectorAll(".person__photo[data-photo]").forEach(function (el) {
    var src = el.getAttribute("data-photo");
    if (!src) return;
    var probe = new Image();
    probe.onload = function () {
      el.style.backgroundImage = "url('" + src + "')";
      el.classList.add("has-photo");
    };
    probe.src = src;
  });

  /* --- Current year in footer --- */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* ==========================================================
     Publications list (only runs on publications page)
     Data lives in assets/js/publications.js
     ========================================================== */
  var pubRoot = document.getElementById("pub-list");
  if (!pubRoot || !window.PUBLICATIONS) return;

  var pubs = window.PUBLICATIONS.slice().sort(function (a, b) { return b.year - a.year; });
  var searchInput = document.getElementById("pub-search");
  var chipRow = document.getElementById("pub-chips");
  var countEl = document.getElementById("pub-count");
  var activeTopic = "All";

  function highlightAuthors(authors) {
    return authors.replace(/(Harvey,?\s*J\.?\s*A\.?|J\.\s*A\.\s*Harvey|Johanna A\.? Harvey)/g,
      '<span class="me">$1</span>');
  }

  function render() {
    var q = (searchInput && searchInput.value || "").trim().toLowerCase();
    var list = pubs.filter(function (p) {
      var topicOk = activeTopic === "All" || (p.topics || []).indexOf(activeTopic) !== -1;
      if (!topicOk) return false;
      if (!q) return true;
      return (p.title + " " + p.authors + " " + p.journal + " " + p.year).toLowerCase().indexOf(q) !== -1;
    });

    if (countEl) {
      countEl.textContent = list.length + (list.length === 1 ? " publication" : " publications");
    }

    if (!list.length) {
      pubRoot.innerHTML = '<p class="pub__empty">No publications match that search. Try a different term.</p>';
      return;
    }

    var html = "";
    var currentYear = null;
    list.forEach(function (p) {
      if (p.year !== currentYear) {
        currentYear = p.year;
        /* year 9999 = manuscripts in preparation or in review */
        html += '<h2 class="pub-year">' +
          (currentYear >= 9000 ? "In preparation &amp; in review" : currentYear) + "</h2>";
      }
      var titleHtml = p.doi
        ? '<a href="https://doi.org/' + p.doi + '" target="_blank" rel="noopener">' + p.title + "</a>"
        : p.title;
      html += '<article class="pub">' +
        '<h3 class="pub__title">' + titleHtml + "</h3>" +
        '<p class="pub__authors">' + highlightAuthors(p.authors) + "</p>" +
        '<p class="pub__meta"><span class="pub__journal">' + p.journal + "</span>" +
        (p.volume ? "<span>" + p.volume + "</span>" : "") +
        (p.note ? '<span class="pub__tag">' + p.note + "</span>" : "") +
        (p.doi ? '<a href="https://doi.org/' + p.doi + '" target="_blank" rel="noopener">DOI</a>' : "") +
        "</p></article>";
    });
    pubRoot.innerHTML = html;
  }

  /* Build topic chips from the data */
  if (chipRow) {
    var topics = ["All"];
    pubs.forEach(function (p) {
      (p.topics || []).forEach(function (t) { if (topics.indexOf(t) === -1) topics.push(t); });
    });
    chipRow.innerHTML = topics
      .map(function (t, idx) {
        return '<button type="button" class="chip' + (idx === 0 ? " is-active" : "") + '" data-topic="' + t + '">' + t + "</button>";
      })
      .join("");
    chipRow.addEventListener("click", function (e) {
      var btn = e.target.closest(".chip");
      if (!btn) return;
      activeTopic = btn.getAttribute("data-topic");
      chipRow.querySelectorAll(".chip").forEach(function (c) { c.classList.remove("is-active"); });
      btn.classList.add("is-active");
      render();
    });
  }

  if (searchInput) searchInput.addEventListener("input", render);
  render();
})();
