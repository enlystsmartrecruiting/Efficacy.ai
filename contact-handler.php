<?php
/**
 * Contact form handler — enlysoft.net
 */

$config = [
    'site'      => 'enlysoft.net',
    'to'        => 'recruiter@enlystnow.com',
    'from'      => 'no-reply@enlysoft.net',
    'redirect'  => 'contact.html',
    'fields'    => [
        'name'    => ['Name', true],
        'stack'   => ['Stack', false],
        'email'   => ['Email', true],
        'message' => ['Project brief', false],
    ],
];

require __DIR__ . '/contact-handler-core.php';
