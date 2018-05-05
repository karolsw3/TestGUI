var testGUI = function () {
  var settings = []
  var panel = document.createElement('div')
  panel.className = 'testGUI'

  function show () {
    panel.style.display = 'block'
  }

  function create (newSettings) {
    settings = newSettings
    for (var i = 0; i < settings.gui.length; i++) {
      var settingDiv = ''
      switch (settings.gui[i].type) {
        case 'slider':
          settingDiv = _createSlider(settings[i])
          break
        case 'switch':
          settingDiv = _createSwitch(settings[i])
          break
        case 'label':
          settingDiv = _createLabel(settings[i])
          break
        default:
          console.error(`${settings[i].type} is not a valid setting type.`)
          break
      }
      panel.appendChild(settingDiv)
    }
  }

  function _createSlider (option) {
    var div = document.createElement('div')
    return div
  }

  function _createSwitch (option) {
    var div = document.createElement('div')
    return div
  }

  function _createLabel (option) {
    var div = document.createElement('div')
    return div
  }
}
