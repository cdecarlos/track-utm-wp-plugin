// UTM Global
var utm = {
  source: null,
  medium: null,
  campaign: null
}

// Init
function init () {
  // Load values saved
  loadDataPermanent ()

  // Get params from url
  var data = getUrlVars()
  // check and save utm_source
  if (data['utm_source'])
    utm.source = data['utm_source']
  // check and save utm_medium
  if (data['utm_medium'])
    utm.medium = data['utm_medium']
  // check and save utm_campaign
  if (data['utm_campaign'])
    utm.campaign = data['utm_campaign']
  // Save data permanent
  saveDataPermanent ()
}

// Get params from url and return {}
function getUrlVars() {
  var vars = {}
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
    vars[key] = value
  })
  return vars
}

// Save data to loadStorage "utm"
function saveDataPermanent () {
  window.localStorage.setItem ("utm", JSON.stringify (utm))
}

// Load data from loadStorage "utm"
function loadDataPermanent () {
  var data = window.localStorage.getItem ("utm")
  if (data)
    utm = JSON.parse (data)
}

// Init on load
window.addEventListener ("load", init)
