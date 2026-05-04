// ── CONTACT ACTIONS ──
  function doCall() {
    var modal = document.getElementById("callModal");
    if (modal) modal.style.display = "flex";
  }

  function closeCallModal() {
    var modal = document.getElementById("callModal");
    if (modal) modal.style.display = "none";
  }

  function doWhatsApp() {
    window.open("https://wa.me/260211227484", "_blank");
  }

  function doDirections() {
    window.open("https://www.google.com/maps/place/?q=place_id:0x19408df6aa77fb7d:0xd8bbdc9873646cd8", "_blank");
  }

  // WhatsApp enquiry for practice area cards
  function waEnquire(area) {
    var msg = encodeURIComponent("Hello Simeza, Sangwa & Associates,\n\nI would like to enquire about: " + area + "\n\nPlease get back to me at your earliest convenience.\nThank you.");
    window.open("https://wa.me/260211227484?text=" + msg, "_blank");
  }

  // WhatsApp message builder form
  function sendViaWhatsApp() {
    var name = document.getElementById("fname").value.trim();
    var phone = document.getElementById("fphone").value.trim();
    var service = document.getElementById("fservice").value;
    var message = document.getElementById("fmessage").value.trim();

    if (!name || !message) {
      alert("Please fill in your name and message before sending.");
      return;
    }

    var text = "Hello Simeza, Sangwa & Associates,\n\n";
    text += "Name: " + name + "\n";
    if (phone) text += "Phone: " + phone + "\n";
    if (service) text += "Practice Area: " + service + "\n";
    text += "\nMessage:\n" + message;
    text += "\n\n---\nSent via simezasangwa.com";

    var url = "https://wa.me/260211227484?text=" + encodeURIComponent(text);
    window.open(url, "_blank");
  }

  // ── SMOOTH SCROLL ──
  function scrollTo_(id) {
    var el = document.getElementById(id);
    if (!el) return;
    var offset = 116;
    var top = el.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: top, behavior: "smooth" });
  }

  // ── MOBILE MENU ──
  function toggleMenu() { document.getElementById("mobileMenu").classList.toggle("open"); }
  function closeMenu() { document.getElementById("mobileMenu").classList.remove("open"); }

  // ── NAV SCROLL BEHAVIOUR ──
  var sectionIds = ["home","about","practice","whyus","team","gallery","testimonials","location","contact"];
  window.addEventListener("scroll", function() {
    var nav = document.getElementById("mainNav");
    if (window.scrollY > 50) {
      nav.style.top = "0";
      nav.style.boxShadow = "0 2px 20px rgba(0,0,0,0.5)";
    } else {
      nav.style.top = "";
      nav.style.boxShadow = "";
    }
    // Highlight active nav link
    var current = "";
    sectionIds.forEach(function(id) {
      var el = document.getElementById(id);
      if (el && window.scrollY >= el.offsetTop - 140) current = id;
    });
    document.querySelectorAll(".nav-link-btn").forEach(function(btn) {
      var matches = btn.getAttribute("onclick") && btn.getAttribute("onclick").indexOf("scrollTo_('" + current + "')") !== -1;
      btn.classList.toggle("active", matches);
    });
  });

  // ── SCROLL ANIMATIONS ──
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) { if (e.isIntersecting) e.target.classList.add("visible"); });
  }, { threshold: 0.1 });
  document.querySelectorAll(".anim-el").forEach(function(el) { observer.observe(el); });

  // ── COUNTDOWN TIMER ──
  (function() {
    // Set deadline to end of week (Friday 23:59:59)
    var now = new Date();
    var deadline = new Date();
    deadline.setDate(now.getDate() + (5 - now.getDay() + 7) % 7 || 7);
    deadline.setHours(23, 59, 59, 0);

    function updateTimer() {
      var diff = deadline - new Date();
      if (diff <= 0) { diff = 0; }
      var days  = Math.floor(diff / (1000*60*60*24));
      var hours = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
      var mins  = Math.floor((diff % (1000*60*60)) / (1000*60));
      var secs  = Math.floor((diff % (1000*60)) / 1000);
      var pad = function(n) { return String(n).padStart(2,'0'); };
      var d = document.getElementById('tDays');
      var h = document.getElementById('tHours');
      var m = document.getElementById('tMins');
      var s = document.getElementById('tSecs');
      if (d) d.textContent = pad(days);
      if (h) h.textContent = pad(hours);
      if (m) m.textContent = pad(mins);
      if (s) s.textContent = pad(secs);
    }
    updateTimer();
    setInterval(updateTimer, 1000);

    // Slot countdown — simulate a slot being taken after 45s
    var slots = 3;
    setTimeout(function() {
      slots = 2;
      var el = document.getElementById('slotsLeft');
      if (el) el.textContent = slots + ' slots remaining';
      var lastBox = document.querySelector('.slot-box.last');
      if (lastBox) lastBox.textContent = slots;
    }, 45000);
  })();
