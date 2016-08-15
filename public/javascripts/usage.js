callbackMulti = function(data) {
      alert(JSON.stringify(data));
};

failCallbackMulti = function(url) {
  alert(url + ' failed');
};

function myCall(res){
  var urls = 'http://api.openweathermap.org/data/2.5/forecast' + res;

  AjaxRequestsMulti(urls, callbackMulti, failCallbackMulti);
}
