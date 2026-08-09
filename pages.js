/**
 * Shared chrome helpers for Enlystnow mother pages.
 * Static HTML embeds the same markup; this file only handles mobile drawer if present
 * and contact form submit (mailto + local status).
 */
(function () {
  "use strict";

  var form = document.getElementById("enquiry-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var status = document.getElementById("form-status");
      var name = (form.elements.namedItem("name") || {}).value || "";
      var email = (form.elements.namedItem("email") || {}).value || "";
      var org = (form.elements.namedItem("organisation") || {}).value || "";
      var phone = (form.elements.namedItem("phone") || {}).value || "";
      var door = (form.elements.namedItem("door") || {}).value || "";
      var role = (form.elements.namedItem("role") || {}).value || "";
      var message = (form.elements.namedItem("message") || {}).value || "";
      var consent = form.elements.namedItem("consent");

      if (!name.trim() || !email.trim() || !door || !message.trim()) {
        if (status) {
          status.textContent = "Please complete name, email, door, and message.";
          status.className = "form-status error show";
        }
        return;
      }
      if (consent && !consent.checked) {
        if (status) {
          status.textContent = "Please confirm we may contact you about this enquiry.";
          status.className = "form-status error show";
        }
        return;
      }

      var subject = encodeURIComponent("Enlystnow enquiry · " + door + (org ? " · " + org : ""));
      var body = encodeURIComponent(
        [
          "Name: " + name,
          "Email: " + email,
          "Phone: " + phone,
          "Organisation: " + org,
          "I am: " + role,
          "Door / interest: " + door,
          "",
          "Message:",
          message,
          "",
          "— Sent from enlystnow.com enquiry form"
        ].join("\n")
      );

      if (status) {
        status.textContent = "Opening your mail client… If nothing opens, email admin@enlystnow.com directly.";
        status.className = "form-status show";
      }

      window.location.href = "mailto:admin@enlystnow.com?subject=" + subject + "&body=" + body;
    });
  }
})();
