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
  function listItems(items) {
		// Clear the current results
		var itemList = $('item-list');
		itemList.innerHTML = '';

		for (var i = 0; i < items.length; i++) {
			addItem(itemList, items[i]);
		}
	}
  function addItem(itemList, item) {
		var item_id = item.item_id;

		// create the <li> tag and specify the id and class attributes
		var li = $('li', {
			id : 'item-' + item_id,
			className : 'item'
		});

		// set the data attribute
		li.dataset.item_id = item_id;
		li.dataset.favorite = item.favorite;

		// item image
		if (item.image_url) {
			li.appendChild($('img', {
				src : item.image_url
			}));
		} else {
			li.appendChild($('img', {
				src : 'https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png'
			}))
		}
		// section
		var section = $('div', {});

		// title
		var title = $('a', {
			href : item.url,
			target : '_blank',
			className : 'item-name'
		});
		title.innerHTML = item.name;
		section.appendChild(title);

		// category
		var category = $('p', {
			className : 'item-category'
		});
		category.innerHTML = 'Category: ' + item.categories.join(', ');
		section.appendChild(category);

		var stars = $('div', {
			className : 'stars'
		});
		
		for (var i = 0; i < item.rating; i++) {
			var star = $('i', {
				className : 'fa fa-star'
			});
			stars.appendChild(star);
		}

		if (('' + item.rating).match(/\.5$/)) {
			stars.appendChild($('i', {
				className : 'fa fa-star-half-o'
			}));
		}

		section.appendChild(stars);

		li.appendChild(section);

		// address
		var address = $('p', {
			className : 'item-address'
		});

		address.innerHTML = item.address.replace(/,/g, '<br/>').replace(/\"/g,
				'');
		li.appendChild(address);

		// favorite link
		var favLink = $('p', {
			className : 'fav-link'
		});

		favLink.onclick = function() {
			changeFavoriteItem(item_id);
		};

		favLink.appendChild($('i', {
			id : 'fav-icon-' + item_id,
			className : item.favorite ? 'fa fa-heart' : 'fa fa-heart-o'
		}));

		li.appendChild(favLink);

		itemList.appendChild(li);
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
