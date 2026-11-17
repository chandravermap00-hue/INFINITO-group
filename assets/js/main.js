(function () {
  var burger = document.getElementById('burger');
  var menu = document.getElementById('menu');
  var megaBtn = document.getElementById('mega-toggle');
  var mega = document.getElementById('mega');

  function closeMega() {
    if (!megaBtn) return;
    megaBtn.setAttribute('aria-expanded', 'false');
    mega.hidden = true;
  }
  if (burger) {
    burger.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
  if (megaBtn) {
    megaBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = megaBtn.getAttribute('aria-expanded') === 'true';
      megaBtn.setAttribute('aria-expanded', open ? 'false' : 'true');
      mega.hidden = open;
    });
    document.addEventListener('click', function (e) {
      if (!mega.contains(e.target)) closeMega();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { closeMega(); megaBtn.focus(); }
    });
  }
  var form = document.getElementById('enquiry-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      document.getElementById('form-ok').style.display = 'block';
    });
  }
})();
