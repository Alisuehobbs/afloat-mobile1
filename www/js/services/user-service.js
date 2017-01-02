app.factory("CorrelationService", function ($http) {
  var service = {}

  service.getMoods = function(id) {
    return $http.get(`https://alisuehobbs-afloat.herokuapp.com/moods/${id}`)
  }

  service.postMood = function(data) {
    return $http.post('https://alisuehobbs-afloat.herokuapp.com/moods/', data)
  }

  return service
})
