// https://developers.google.com/speed/articles/reflow
// https://developers.google.com/web/fundamentals/performance/rendering/avoid-large-complex-layouts-and-layout-thrashing
// https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/reference#rendering
// http://www.stubbornella.org/content/2009/03/27/reflows-repaints-css-performance-making-your-javascript-slow/

// Reflow is the process of the browser laying out the page
// It happens when you first display the DOM (generally after the DOM and CSS have been loaded),
// and happens again every time something could change the layout. This is a fairly expensive (slow) process

// Repaint happens after reflow as the browser draws the new layout to the screen.
// This is fairly quick, but you still want to limit how often it happens.
