+(function (window, webduino) {

  'use strict';

  window.getServo = function (board, pin) {
    return new webduino.module.Servo(board, board.getDigitalPin(pin));
  };

}(window, window.webduino));
