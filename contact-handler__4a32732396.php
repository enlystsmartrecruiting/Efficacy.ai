<?php
/**
 * Contact form handler — enlysum.com
 */

$config = [
    'site'      => 'enlysum.com',
    'to'        => 'recruiter@enlystnow.com',
    'from'      => 'no-reply@enlysum.com',
    'redirect'  => 'contact.html',
    'fields'    => [
        'name'    => ['Name', true],
        'company' => ['Organisation', false],
        'email'   => ['Email', true],
        'message' => ['Your financial situation', false],
    ],
];

require __DIR__ . '/contact-handler-core.php';
