<?php

namespace Drupal\calendar\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a 'Calendar' Block.
 *
 * @Block(
 *   id = "calendar",
 *   admin_label = @Translation("Calendar block"),
 *   category = @Translation("Calendar"),
 * )
 */
class CalendarBlock extends BlockBase {

    /**
     * {@inheritdoc}
     */
    public function build() {
        return array(
            '#markup' => $this->t('Hello, World!'),
        );
    }

    /**
     * {@inheritdoc}
     */
    protected function getEvents() {
        $client = new Google_Client();
        $client->setApplicationName("My Application");
        $client->setDeveloperKey("AIzaSyCwy-s3wXj69PliTQuz4FUdNgjCq3Ob5Qc");

        $service = new Google_Service_Books($client);

        $event = $service->events->get('primary', "eventId");

echo $event->getSummary();
    }

}
