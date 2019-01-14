var mainUrl = 'https://tutorials.webduino.io/zh-tw/docs/';
var utmUrl = '?utm_source=cloud-blockly&utm_medium=contextMenu&utm_campaign=tutorials';

Blockly.Blocks['servo_new_bit'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_SERVO_BIT, "Servo ,  pin:")
      .appendField(new Blockly.FieldDropdown([
        ["0~", "0"],
        ["1~ ( A4 )", "1"],
        ["2~ ( A5 )", "2"],
        ["3~", "3"],
        ["4~", "4"],
        ["10~", "10"]
      ]), "pin_");
    this.setOutput(true);
    this.setTooltip('');
    this.setColour(230);
    this.setHelpUrl(mainUrl + 'basic/component/servo.html' + utmUrl);
  }
};

Blockly.Blocks['servo_angle'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("servo"), "var_")
      .appendField(Blockly.Msg.WEBDUINO_SERVO_ANGLE, "旋轉角度：")
      .appendField(new Blockly.FieldAngle("90"), "angle_");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(65);
    this.setHelpUrl(mainUrl + 'basic/component/servo.html' + utmUrl);
  }
};

Blockly.Blocks['servo_angle_set'] = {
  init: function () {
    this.appendValueInput("angle_")
      .appendField(new Blockly.FieldVariable("servo"), "var_")
      .appendField(Blockly.Msg.WEBDUINO_SERVO_ANGLE, "旋轉角度：");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(65);
    this.setHelpUrl(mainUrl + 'basic/component/servo.html' + utmUrl);
  }
};