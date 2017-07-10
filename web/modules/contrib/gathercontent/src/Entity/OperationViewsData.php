<?php

namespace Drupal\gathercontent\Entity;

use Drupal\views\EntityViewsData;
use Drupal\views\EntityViewsDataInterface;

/**
 * Provides Views data for Gathercontent operation entities.
 */
class OperationViewsData extends EntityViewsData implements EntityViewsDataInterface {

  /**
   * {@inheritdoc}
   */
  public function getViewsData() {
    $data = parent::getViewsData();

    $data['gathercontent_operation']['table']['base'] = array(
      'field' => 'id',
      'title' => $this->t('Gathercontent operation'),
      'help' => $this->t('The Gathercontent operation ID.'),
    );

    return $data;
  }

}
