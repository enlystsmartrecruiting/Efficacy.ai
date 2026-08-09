<?php
/**
 * Contact form handler — enlystnow.com
 * Receives the "Initiate Contact" form POST, emails it to the team,
 * and replies with JSON for the fetch-based JS in enlyst-contact.js
 * (falls back to a redirect if JS is unavailable).
 */

$config = [
    'site'      => 'enlystnow.com',
    'to'        => 'recruiter@enlystnow.com',
    'from'      => 'no-reply@enlystnow.com',
    'redirect'  => 'contact.html',
    'fields'    => [
        // POST key => human-readable label, required?
        'name'         => ['Full Name', true],
        'company'      => ['Organisation', false],
        'email'        => ['Email Address', true],
        'enquiry_type' => ['Nature of Enquiry', false],
        'message'      => ['Your Situation', false],
    ],
];

require __DIR__ . '/contact-handler-core.php';
