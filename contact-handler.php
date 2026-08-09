<?php
/**
 * Contact form handler — enlybiz.com
 */

$config = [
    'site'      => 'enlybiz.com',
    'to'        => 'recruiter@enlystnow.com',
    'from'      => 'no-reply@enlybiz.com',
    'redirect'  => 'contact.html',
    'fields'    => [
        'name'    => ['Name', true],
        'company' => ['Company', false],
        'email'   => ['Email', true],
        'message' => ['What are you trying to grow?', false],
    ],
];

require __DIR__ . '/contact-handler-core.php';
