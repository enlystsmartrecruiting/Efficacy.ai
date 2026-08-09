/* Generic contact-form submit handler, shared by every contact.html.
   Each <form> declares data-success-id / data-error-id pointing at its
   own message boxes; the PHP endpoint is set via the form's action=. */
function submitEnlystContact(event, form) {
  event.preventDefault();

  var honeypot = form.querySelector('input[name="website"]');
  if (honeypot && honeypot.value) {
    return false; // bot filled the hidden field — drop silently, no request
  }

  var successEl = document.getElementById(form.dataset.successId || 'ty');
  var errorEl = document.getElementById(form.dataset.errorId || '');
  var submitBtn = form.querySelector('button[type="submit"]');

  if (errorEl) errorEl.style.display = 'none';
  if (submitBtn) submitBtn.disabled = true;

  fetch(form.getAttribute('action'), {
    method: 'POST',
    body: new FormData(form),
    headers: { 'Accept': 'application/json' }
  })
    .then(function (res) {
      return res.json().catch(function () { return { success: false }; });
    })
    .then(function (data) {
      if (data && data.success) {
        form.style.opacity = '.4';
        form.style.pointerEvents = 'none';
        if (successEl) successEl.style.display = 'block';
      } else {
        if (submitBtn) submitBtn.disabled = false;
        if (errorEl) {
          errorEl.textContent = (data && data.error) || 'Something went wrong — please email us directly.';
          errorEl.style.display = 'block';
        }
      }
    })
    .catch(function () {
      if (submitBtn) submitBtn.disabled = false;
      if (errorEl) {
        errorEl.textContent = 'Network error — please email us directly.';
        errorEl.style.display = 'block';
      }
    });

  return false;
}
