# jCarouselLite

By [Karl Swedberg](http://www.learningjquery.com/), based on the original by [Ganeshji Marwaha](gmarwaha.com).

This jQuery plugin creates a carousel-style navigation widget for images, or any content, from simple HTML markup. Check out a [bare-bones demo](http://plugins.learningjquery.com/jcarousellite/demo/).

The HTML markup to build the carousel can be as simple as the following:

```html
<div class="carousel">
   <ul>
       <li><img src="image/1.jpg" alt="1"></li>
       <li><img src="image/2.jpg" alt="2"></li>
       <li><img src="image/3.jpg" alt="3"></li>
   </ul>
</div>
```

This snippet is nothing but a simple div containing an unordered list of images.
The "carousel" class for the div here is **just for the sake of explanation**.
You can use any class — or none at all — for any of the elements.

To manually navigate the elements of the carousel, you can include some kind of navigation buttons.
For example, you can have a "previous" button to go backward and a "next" button to go forward.
They need not be part of the carousel `div` itself; they can be any element in your document.
For example, let's assume you want the following elements to be used as prev and next buttons:

```html
<button class='prev'> &raquo; </button>
<button class='next'> &laquo; </button>
```

All you need to do is call the carousel component on the `div` element that represents it and pass in the
navigation buttons as options.

```javascript
$('div.carousel').jCarouselLite({
  btnNext: '.next',
  btnPrev: '.prev'
});
```

There are quite a few other options that you can use to customize it. Each will be explained with an example below.

## Options

You can specify all the options shown below as an options object parameters.

### `btnPrev`, `btnNext` : string - no defaults

example:

```javascript
$('div.carousel').jCarouselLite({
  btnNext: '.next',
  btnPrev: '.prev'
});
```

Creates a basic carousel. Clicking "btnPrev" navigates backwards and "btnNext" navigates forward.

### `btnGo` - array | jQuery object - no defaults

example

```javascript
$('div.carousel').jCarouselLite({
  btnNext: '.next',
  btnPrev: '.prev',
  btnGo: ['.one', '.two', '.three']
});
```

You can use the `btnGo` option along with the btnNext/btnPrev buttons or instead of them.
the item number within the carousel, you can use this option.
If you supply an array, the index of each item in the array represents the index of the element in the carousel.
In other words, if the first element in the array is ".one," then clicking the element represented by ".one"
will slide the carousel to the first element.

example

```javascript
$('div.carousel').jCarouselLite({
  btnGo: $('#carousel-nav a')
});
```

In this example, clicking a link within `#carousel-nav` will slide the carousel to the slide with an index matching the link's index among the other links.

### `mouseWheel` : boolean - default is false

example

```javascript
$('div.carousel').jCarouselLite({
  mouseWheel: true
});
```

The carousel can also be navigated using the mouse wheel interface of a scroll mouse instead of using buttons. To get this feature working, you have to do 2 things.

* you have to include the mouse-wheel plugin from Brandon Aaron (http://github.com/brandonaaron/).
* you will have to set the option "mouseWheel" to true. That's it, now you will be able to navigate your carousel using the mouse wheel. Using buttons and mouseWheel or not mutually exclusive. You can still have buttons for navigation as well. They complement each other. To use both together, just supply the options required for both as shown below.

example

```javascript
$('div.carousel').jCarouselLite({
  btnNext: '.next',
  btnPrev: '.prev',
  mouseWheel: true
});
```

### `auto` : Boolean | Number - default is false, meaning automatic scrolling is disabled by default

example

```javascript
$('div.carousel').jCarouselLite({
  auto: true,
  speed: 500
});
```
example

```javascript
$('div.carousel').jCarouselLite({
  auto: 2,
  scroll: 1,
  visible: 2,
  btnNext: '.next',
  btnPrev: '.prev'
});
```


The carousel will navigate by itself if this option is set to `true` or a number greater than 0. If `true`, the carousel will scroll by the number of slides indicated by the `scroll` option (default is 1). If a positive number, it will auto-scroll by that number instead, although clicks on the previous/next button will still cause it to scroll by the `scroll` option's number.

### `timeout` : number - default is 4000

example

```javascript
$('div.carousel').jCarouselLite({
  auto: true,
  timeout: 8000
});
```

When the `auto` option is set to `true` (or a number greater than 0), the carousel automatically transitions after the amount of time specified by the `timeout` option.

### `speed` : number - default is 200

example

```javascript
$('div.carousel').jCarouselLite({
  btnNext: '.next',
  btnPrev: '.prev',
  speed: 800
});
```

Specifying a speed will slow-down or speed-up the sliding speed of your carousel. Try it out with
different speeds like 800, 600, 1500 etc. Providing 0, will remove the slide effect.

### `easing` : string - no easing effects by default.

example

```javascript
$('div.carousel').jCarouselLite({
  btnNext: '.next',
  btnPrev: '.prev',
  easing: 'bounceout'
});
```

You can specify any easing effect. Note: You need easing plugin for that. Once specified,
the carousel will slide based on the provided easing effect.

### `vertical` : boolean - default is false

example

```javascript
$('div.carousel').jCarouselLite({
  btnNext: '.next',
  btnPrev: '.prev',
  vertical: true
});
```

Determines the direction of the carousel. true, means the carousel will display vertically. The next and
prev buttons will slide the items vertically as well. The default is false, which means that the carousel will
display horizontally. The next and prev items will slide the items from left-right in this case.

### `circular` : boolean - default is true

example

```javascript
$('div.carousel').jCarouselLite({
  btnNext: '.next',
  btnPrev: '.prev',
  circular: false
});
```

Setting it to `true` enables circular navigation. This means, if you click "next" after you reach the last
element, you will automatically slide to the first element and vice versa. If you set circular to false, then
if you click on the "next" button after you reach the last element, you will stay in the last element itself
and similarly for "previous" button and first element.

### `visible` : number - default is 3

example

```javascript
$('div.carousel').jCarouselLite({
  btnNext: '.next',
  btnPrev: '.prev',
  visible: 4
});
```

This specifies the number of items visible at all times within the carousel. The default is 3.
You are even free to experiment with real numbers. Eg: "3.5" will have 3 items fully visible and the
last item half visible. This gives you the effect of showing the user that there are more images to the right.

### `start` : number - default is 0

example

```javascript
$('div.carousel').jCarouselLite({
  btnNext: '.next',
  btnPrev: '.prev',
  // start on the *third* item
  start: 2
});
```

You can specify from which item the carousel should start. Remember, the first item in the carousel
has a start of 0, and so on.

### `scroll` : number - default is 1

example

```javascript
$('div.carousel').jCarouselLite({
  btnNext: '.next',
  btnPrev: '.prev',
  scroll: 2
});
```

The number of items that should scroll/slide when you click the next/prev navigation buttons. By
default, only one item is scrolled, but you may set it to any number. Eg: setting it to "2" will scroll
2 items when you click the next or previous buttons.

### `beforeStart`, `afterEnd` : function - callbacks

example

```javascript
$('div.carousel').jCarouselLite({
  btnNext: '.next',
  btnPrev: '.prev',
  beforeStart: function(a, direction) {
    alert('Before animation starts:' + a);
  },
  afterEnd: function(a, , direction) {
    alert('After animation ends:' + a);
  }
});
```

If you want to do some logic before the slide starts and after the slide ends, you can
register these 2 callbacks. The functions will be passed two arguments. The first represents an array of elements that are visible at the time of callback. The second is a Boolean indicating whether the direction is forward (`true`) or backward (`false`);

## Advanced Options

### `childrenSelector` : string - default is 'li'

example

```javascript
$('div.carousel').jCarouselLite({
  childrenSelector: 'li.awesome';
});
```

Use a custom selector to use for the carousel content. By default it grabs the children (only 1 level deep) li elements of the first ul. A custom selector like above would only use children li elements with the class 'awesome' for carousel content.

### `useFindSelector` : boolean - default is false

example

```javascript
$('div.carousel').jCarouselLite({
  useFindSelector = true;
  // findSelector = 'li'; //default
});
```

Change the default behavior for selecting the content items. Use a find() method instead of a children() method. The default selector is still 'li'.

### `findSelector` : string - default is 'li'

example

```javascript
$('div.carousel').jCarouselLite({
  useFindSelector = true;
  findSelector = 'li.chunky, li.bacon';
});
```

Use a custom selector to find the carousel content. Use in conjunction with the option useFindSelector set to true. If useFindSelector is left at the default of false, the findSelector option does nothing.

## Events

The plugin binds a few custom event handlers to the wrapping `div` element. They can be triggered at any time by using jQuery's event triggering mechanism. If other custom events are bound to the same elements, you may wish to trigger these using the `.jc` namespace. For example, instead of `.trigger("pauseCarousel")`, you could write `.trigger("pauseCarousel.jc")`.

### `pauseCarousel`

example

```javascript
$('div.carousel').trigger('pauseCarousel')
```

Pauses an autoscrolling carousel until `resumeCarousel` is triggered. Note: if the `pause` option is set to `true`, then the `resumeCarousel` event is automatically triggered when the mouse leaves the carousel div.

###  `resumeCarousel`

example

```javascript
$('div.carousel').trigger('resumeCarousel')
```

Resumes an autoscrolling carousel after having been paused.

### `endCarousel`

example

```javascript
$('div.carousel').trigger('endCarousel')
```

Stops the carousel from functioning and removes all events and data bound by the plugin.

### `go`

example

```javascript
$('div.carousel').trigger('go', 3)
```

```javascript
$('div.carousel').trigger('go', '+=2')
```
When triggering the `go` custom event, you can pass in a number or a string representing a relative number ("+=n" or "-=n") to specify which item in the carousel to go to. The default is "+=1" (i.e. the next item).
