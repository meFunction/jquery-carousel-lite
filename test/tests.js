/*global test:false,equal:false,asyncTest:false,start:false,stop:false */
jQuery(document).ready(function($) {

  module('carousels', {
    setup: function() {

      $('.slideshow').jCarouselLite({
        visible: 2,
        speed: 2
      });
      this.slideshow = $('div.slideshow');
      this.slides = $('ul.slides');
    }
  });

  test('starting position', function() {

    equal($('ul.slides').eq(0).css('left'), '-800px', 'first carousel starts at correct position');
    equal($('ul.slides').eq(1).css('left'), '-800px', 'second carousel starts at correct position');
  });

  asyncTest('go', function() {
    var s = this.slides;
    s.eq(1).trigger('go', 1);

    setTimeout(function() {
      equal(s.eq(1).css('left'), '-1200px', 'second carousel went to index 1 (2nd item)');
      start();
    }, 250);
  });

  asyncTest('go to 0', function() {
    var s = this.slides;
    this.slideshow.eq(1).trigger('go', 0);

    setTimeout(function() {
      equal(s.eq(1).css('left'), '-800px', 'second carousel went back to index 0 (1st item)');
      start();
    }, 250);

  });

  module('directional option', {
    setup: function() {

      this.slideshow = $('div.slideshow');
      this.slides = $('ul.slides');

      this.slideshow.jCarouselLite({
        auto: true,
        visible: 2,
        speed: 2,
        timeout: 200,
        directional: true,

        btnPrev: function() {
          return $(this).find('.prev');
        },
        btnNext: function() {
          return $(this).find('.next');
        }
      });
    }
  });

  asyncTest('change directions on prevBtn click', function() {
    var s = this.slides;
    this.slideshow.eq(1).find('.prev').trigger('click');

    setTimeout(function() {
      equal(s.eq(0).css('left'), '-800px', 'first carousel stays at initial position');
      equal(s.eq(1).css('left'), '-400px', 'second carousel goes to previous slide (last slide because circular)');

    }, 50);

    setTimeout(function() {
      equal(s.eq(0).css('left'), '-1200px', 'first carousel autoscrolls forward');
      equal(s.eq(1).css('left'), '0px', 'second carousel autoscrolls reverse');
      start();
    }, 250);
  });


  module('activeClass option', {
    setup: function() {
      this.slideshow = $('div.slideshow').eq(0);
      this.slides = this.slideshow.find('ul.slides');
      var btns = '';
      var l = this.slides.children().length;

      for (var i = 0; i < l; i++) {
        btns += '<a class="go" href="#">' + (i+1) + '</a>';
      }

      this.slideshow.append('<div class="gonav">' + btns + '</div>');

      this.slideshow.jCarouselLite({
        auto: true,
        visible: 2,
        speed: 2,
        timeout: 200,
        directional: true,
        btnGo: $('a.go')
      });
    }
  });

  asyncTest('active class correct when carousel auto-transitions', function() {
    equal($('a.go.active').index(), 0, 'first "go button" is initially active');
    setTimeout(function() {
      equal($('a.go.active').index(), 1, 'second "go button" active after autoscrolling forward once');
      start();
    }, 300);

  });

  asyncTest('correct carousel position after go button clicked', function() {
    var s = this.slides;
    $('a.go').eq(2).triggerHandler('click');
    setTimeout(function() {
      equal(s.css('left'), '-1600px', 'clicked on button index 2, left prop accounts for 2 prepended slides');
      $('a.go').eq(1).triggerHandler('click');
      setTimeout(function() {
        equal(s.css('left'), '-1200px', 'clicked on button index 1, left prop accounts for 2 prepended slides');
        start();
      }, 100);
    }, 100);
  });


});