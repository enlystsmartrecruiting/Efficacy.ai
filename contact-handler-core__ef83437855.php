<?php
/**
 * Shared contact-form processing logic, included by each domain's
 * contact-handler.php with a $config array already defined.
 *
 * Expects $config = [
 *   'site'     => display name for the email subject,
 *   'to'       => destination inbox,
 *   'from'     => envelope/From address on the sending domain,
 *   'redirect' => page to send non-JS submitters back to,
 *   'fields'   => [ postKey => [label, required(bool)], ... ],
 * ]
 */

header('X-Content-Type-Options: nosniff');

$wantsJson = isset($_SERVER['HTTP_ACCEPT']) && strpos($_SERVER['HTTP_ACCEPT'], 'application/json') !== false;

function enlyst_respond($wantsJson, $redirect, $ok, $error = '') {
    if ($wantsJson) {
        header('Content-Type: application/json');
        http_response_code($ok ? 200 : 422);
        echo json_encode(['success' => $ok, 'error' => $error]);
    } else {
        $sep = (strpos($redirect, '?') === false) ? '?' : '&';
        header('Location: ' . $redirect . $sep . ($ok ? 'sent=1' : 'error=1'));
    }
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    enlyst_respond($wantsJson, $config['redirect'], false, 'Invalid request method.');
}

// Honeypot: real visitors never fill this hidden field in.
if (!empty($_POST['website'])) {
    enlyst_respond($wantsJson, $config['redirect'], true);
}

function enlyst_clean($value) {
    $value = is_string($value) ? $value : '';
    // Strip anything that could be used for header injection.
    return trim(preg_replace('/[\r\n]+/', ' ', $value));
}

$values = [];
$missing = [];
foreach ($config['fields'] as $key => [$label, $required]) {
    $val = enlyst_clean($_POST[$key] ?? '');
    if ($required && $val === '') {
        $missing[] = $label;
    }
    $values[$key] = $val;
}

if (!empty($missing)) {
    enlyst_respond($wantsJson, $config['redirect'], false, 'Please fill in: ' . implode(', ', $missing));
}

if (!filter_var($values['email'] ?? '', FILTER_VALIDATE_EMAIL)) {
    enlyst_respond($wantsJson, $config['redirect'], false, 'Please enter a valid email address.');
}

$subject = '[' . $config['site'] . '] New enquiry from ' . $values['name'];

$body = "New enquiry via " . $config['site'] . "\n\n";
foreach ($config['fields'] as $key => [$label, $required]) {
    $body .= $label . ": " . ($values[$key] !== '' ? $values[$key] : '-') . "\n";
}
$body .= "\nSubmitted: " . date('Y-m-d H:i:s') . " UTC\n";
$body .= "IP: " . enlyst_clean($_SERVER['REMOTE_ADDR'] ?? 'unknown') . "\n";

$headers   = [];
$headers[] = 'From: ' . $config['site'] . ' <' . $config['from'] . '>';
$headers[] = 'Reply-To: ' . $values['name'] . ' <' . $values['email'] . '>';
$headers[] = 'Content-Type: text/plain; charset=UTF-8';

$sent = @mail($config['to'], $subject, $body, implode("\r\n", $headers));

enlyst_respond($wantsJson, $config['redirect'], $sent, $sent ? '' : 'Message could not be sent — please email us directly.');
