<?php

declare(strict_types=1);

require_once './../vendor/autoload.php';

use Symfony\Component\Mailer\Exception\TransportExceptionInterface;
use Symfony\Component\Mailer\Mailer;
use Symfony\Component\Mailer\Transport;
use Symfony\Component\Mime\Email;

$email = (new Email())
    ->from('nebojsha.97.mitikj@gmail.com')
    ->to('nebojsha.97.mitikj@gmail.com')
    ->subject('Testing Symfony Mailer')
    ->text('Hello');

$dsn = 'smtp://nebojsha.97.mitikj@gmail.com:qgcowvsymqstldsb@smtp.gmail.com:25';

$transport = Transport::fromDsn($dsn);

$mailer = new Mailer($transport);

try {
    $mailer->send($email);
} catch (TransportExceptionInterface $e) {
    var_dump($e->getMessage());
}