(function() {
  'use strict';

  var morphSearch = document.getElementById( 'morphsearch' ),
    input = morphSearch.querySelector( 'input.search-input' ),
    ctrlClose = morphSearch.querySelector( 'span.search-close' ),
    isOpen = false,
  // show/hide search area
    toggleSearch = function(evt) {
      // return if open and the input gets focused
      if( evt.type.toLowerCase() === 'focus' && isOpen ) return false;

      var offsets = morphsearch.getBoundingClientRect();
      if( isOpen ) {
        morphSearch.classList.remove('open');


        // trick to hide input text once the search overlay closes
        // todo: hardcoded times, should be done after transition ends
        if( input.value !== '' ) {
          setTimeout(function() {
            morphSearch.classList.add('hideInput');
            setTimeout(function() {
              morphSearch.classList.remove('hideInput');
              input.value = '';
            }, 300 );
          }, 500);
        }

        input.blur();
      }
      else {
        morphSearch.classList.add('open');
      }
      isOpen = !isOpen;
    };

  // events
  input.addEventListener( 'focus', toggleSearch );
  ctrlClose.addEventListener( 'click', toggleSearch );
  // esc key closes search overlay
  // keyboard navigation events
  document.addEventListener( 'keydown', function( ev ) {
    var keyCode = ev.keyCode || ev.which;
    if( keyCode === 27 && isOpen ) {
      toggleSearch(ev);
    }
  } );

})();