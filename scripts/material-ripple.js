/*!
 * Ripple
 * Created by Andy Tran (http://andytran.me)
 * Copyright 2016 Andy Tran.
 * Licensed under GPL (https://github.com/andyhqtran/material-ripple/blob/master/LICENSE)
 */

jQuery(document).ready(function ($) {
  $('.et_pb_button').on('mousedown', function (e) {
    console.log('down');

    var $posX,
      $posY,
      $ripple,
      $rippleColor,
      $rippleDuration,
      $rippleSize;

    $ripple = $('<div />', {
      'class': 'ripple-effect'
    });

    $rippleColor = $(this).attr('ripple-color');
    $rippleSize = $(this).attr('ripple-size');

    if ($rippleSize) {
      $rippleSize = $rippleSize;
    } else {
      $rippleSize = 200;
    }

    // $rippleDuration = $(this).attr('ripple-duration');
    $rippleDuration = 1;
    $posX = $(this).offset().left + $rippleSize / 2;
    $posY = $(this).offset().top + $rippleSize / 2;
    $ripple.appendTo(this);

    $ripple.css({
      'background': $rippleColor,
      'top': e.pageY - $posY,
      'left': e.pageX - $posX,
      'width': $rippleSize,
      'height': $rippleSize,
      'animation-duration': $rippleDuration + 's'
    });

    return setTimeout(function () {
      return $ripple.remove();
    }, $rippleDuration * 1000);
  });
});