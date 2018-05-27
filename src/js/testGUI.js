var testGUI = function (settings) {
  var panel = document.createElement('div')
  panel.className = 'testGUI'
  init()

  function show () {
    panel.style.display = 'block'
  }

  function hide () {
    panel.style.display = 'none'
  }

  function init () {
    for (var i = 0; i < settings.gui.length; i++) {
      var settingDiv = ''
      switch (settings.gui[i].type) {
        case 'slider':
          settingDiv = _createSlider(settings[i])
          break
        case 'switch':
          settingDiv = _createSwitch(settings[i])
          break
        case 'button':
          settingDiv = _createButton(settings[i])
          break
        case 'label':
          settingDiv = _createLabel(settings[i])
          break
        default:
          console.error(`${settings[i].type} is not a valid setting type.`)
          break
      }
      var settingRow = document.createElement('div')
      settingRow.className = 'testGUI__setting'
      settingRow.appendChild(settingDiv)
      panel.appendChild(settingRow)
    }
  }

  function _createSlider (setting) {
    var div = document.createElement('div')
    div.className = 'testGUI__input'
    div.type = 'range'
    return div
  }

  function _createSwitch (setting) {
    var div = document.createElement('div')
    return div
  }

  function _createButton (setting) {
    var div = document.createElement('div')
    div.className = 'testGUI__button'
    var p = document.createElement('p')
    p.innerText = setting.name
    div.appendChild(p)
    return div
  }

  function _createLabel (setting) {
    var div = document.createElement('div')
    return div
  }
}
