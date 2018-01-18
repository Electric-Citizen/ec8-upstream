<?php

//ADD REMOTE ALIASES

$aliases['<SITENAME>.local'] = array(
  'uri' => '<SITENAME>.local',
  'root' => '/var/www/drupalvm/web',
  'remote-host' => '<SITENAME>.local',
  'remote-user' => 'vagrant',
  'ssh-options' => '-o "SendEnv PHP_IDE_CONFIG PHP_OPTIONS XDEBUG_CONFIG" -o PasswordAuthentication=no -i "' . (getenv('VAGRANT_HOME') ?: drush_server_home() . '/.vagrant.d') . '/insecure_private_key"',
  'path-aliases' => array(
    '%drush-script' => '/var/www/drupalvm/vendor/drush/drush/drush',
  ),
);


$aliases['ec8-upstream.local'] = array(
  'uri' => 'ec8-upstream.local',
  'root' => '/var/www/drupalvm/web',
  'remote-host' => 'ec8-upstream.local',
  'remote-user' => 'vagrant',
  'ssh-options' => '-o "SendEnv PHP_IDE_CONFIG PHP_OPTIONS XDEBUG_CONFIG" -o PasswordAuthentication=no -i "' . (getenv('VAGRANT_HOME') ?: drush_server_home() . '/.vagrant.d') . '/insecure_private_key"',
  'path-aliases' => array(
    '%drush-script' => '/var/www/drupalvm/vendor/drush/drush/drush',
  ),
);

