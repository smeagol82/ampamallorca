<?php

namespace Drupal\menjador\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Bloc per a link de menu del menjador
 *
 * @Block(
 *   id = "menjador",
 *   admin_label = @Translation("Menjador block"),
 *   category = @Translation("Menjador"),
 * )
 */
class MenjadorBlock extends BlockBase {

    /**
     * {@inheritdoc}
     */
    public function build() {
        return array(
            '#markup' => $this->t('Descarrega el menu del mes o accedeix al blog de menjador'),
        );
    }

}
