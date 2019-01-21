smooth-scroller
===============

A jQuery's smooth scroller plugin

## Requirements

* jQuery v1.11.1 (The only one I have tested but previous ones should also work)
  

## Installation

Load the smooth-scroller plugin
```html
<script src="src/smooth-scroller.min.js"></script>
```
(Make sure that jQuery have been loaded before)


## Usage

The plug-in has to be initialized this way:

```javascript
$("a.menu-item").smoothScroller();
```
By doing this the plugin will perform a smooth scroll to the link's target you have clicked.

## Options

Name | Type | Default | Description
-----|------|---------|------------
`duration` | integer | 1000 | The animation's duration (millisecond)
`activeClass` | string | `"active"` | The active class to append to the active menu's item 

**Usage with options:**
```javascript
$("a.menu-item").smoothScroller({
  duration: 500,
  activeClass: "my-active-class"
});
```
