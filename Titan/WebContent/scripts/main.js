(function() {
  /**
   * Variables
   */
  var user_id = '1111';
  var lng = -122.08;
  var lat = 37.38;

  function $(tag, options) {
    if (!options) {
      return document.getElementById(tag);
    }

    var element = document.createElement(tag);

    for ( var option in options) {
      if (options.hasOwnProperty(option)) {
        element[option] = options[option];
      }
    }

    return element;
  }

  function showLoadingMessage(msg) {
    var itemList = $('item-list');
    itemList.innerHTML = '<p class="notice"><i class="fa fa-spinner fa-spin"></i> '+ msg + '</p>';
  }

  function showWarningMessage(msg) {
    var itemList = $('item-list');
    itemList.innerHTML = '<p class="notice"><i class="fa fa-exclamation-triangle"></i> ' + msg + '</p>';
  }

  function showErrorMessage(msg) {
    var itemList = $('item-list');
    itemList.innerHTML = '<p class="notice"><i class="fa fa-exclamation-circle"></i> ' + msg + '</p>';
  }

  function activeBtn(btnId) {
    var btns = document.getElementsByClassName('main-nav-btn');

    for (var i = 0; i < btns.length; i++) {
      btns[i].className =btns[i].className.replace(/\bactive\b/, '');
    }

    // active the one that has id = btnId
    var btn = $(btnId);
    
    btn.className += ' active';
  }
})();
