(function(){
  'use strict';

  //Access-Control-Allow-Origin: http:github.com, http:localhost:9999;
  var baseUrl = "https://api.github.com/users/bhoskins";
  var urlApi = "?access_token=" + window.token;

  $(document).ready(function() {

    console.log('Welcome to my code!');
    console.log('Please note that the top nav is an image for display purposes only.');

    var userDataUrl = baseUrl + urlApi;
    var userData;
    var userTemplate = _.template($('[data-template-name=userInfo]').text());
    var $userUl = $('.userInfoUl');
    var repoTemplateString = $('[data-template-name=repo]').text();
    var repoTemplate = _.template(repoTemplateString);
    var $repoUl = $('.repositories');

// ajax call for user info
    $.ajax({
      url: userDataUrl,
      type: "GET"
    }).done(function(userInfo){

      $userUl.append(userTemplate(userInfo));
      });

// ajax call for repo data below

      $.ajax({
        url: "https://api.github.com/users/bhoskins/" + "repos",
        type: "GET"
      }).done(function(repos){
        _.each(repos, function(repo) {
          $repoUl.append(repoTemplate(repo));
        });
      });

  });
})();
