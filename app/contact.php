<?php

declare(strict_types=1);

require_once './../vendor/autoload.php';

use JetBrains\PhpStorm\NoReturn;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;
use Symfony\Component\Mailer\Mailer;
use Symfony\Component\Mailer\Transport;
use Symfony\Component\Mime\Email;
use Valitron\Validator;

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: https://nebojsha.com');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    return;
}

$_POST = json_decode(file_get_contents('php://input'), true);

main();

#[NoReturn]
function jsonResponse(array $data, int $statusCode = 200): noreturn
{
    http_response_code($statusCode);
    echo json_encode($data);
    exit();
}

function validateInput(): void
{
    $v = new Validator([
        'name' => $_POST['name'] ?? null,
        'email' => $_POST['email'] ?? null,
        'subject' => $_POST['subject'] ?? null,
        'message' => $_POST['message'] ?? null
    ]);

    $v->rule('required', ['name', 'email', 'subject', 'message']);
    $v->rule('email', ['email']);

    if (! $v->validate()) {
        jsonResponse(['errors' => $v->errors()], 400);
    }
}

function sendMail(): void
{
    $email = (new Email())
        ->from($_ENV['SENDER_EMAIL'])
        ->to($_ENV['SENDER_EMAIL'])
        ->subject('[Portfolio Contact]: ' . $_POST['subject'])
        ->html(
            '<b>Name: </b>' . $_POST['name'] . '<br><br>' .
            '<b>Email: </b>' . $_POST['email'] . '<br><br>' .
            '<b>Subject: </b>' . $_POST['subject'] . '<br><br>' .
            '<b>Message: </b>' . $_POST['message']
        );

    $transport = Transport::fromDsn($_ENV['DSN']);

    $mailer = new Mailer($transport);

    try {
        $mailer->send($email);
        jsonResponse(['message' => 'Your message has been successfully sent! Thank you for reaching out.']);
    } catch (TransportExceptionInterface | Exception $e) {
        jsonResponse(['message' => 'Unexpected error. Please try again.'], 500);
    }
}

function main(): void
{
    validateInput();
    sendMail();
}

