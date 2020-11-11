// we can use DOMContentLoaded event to keep JS code in the <head>

// THis will not work:
<!DOCTYPE html>
<html lang="en">
<head>
  <link rel="stylesheet" href="/css/styles.css" />
  <script>
    document.querySelector('footer').style.backgroundColor = 'purple';
  </script>

// But this will
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="/css/styles.css" />
    <script>
      document.addEventListener('DOMContentLoaded', function () {
          document.querySelector('footer').style.backgroundColor = 'purple';
      });
    </script>


// Many older developers use load in place of DOMContentLoaded as the latter wasn't
// supported by the very earliest browsers
// e.g. document.onload(...)
// load fires later than DOMContentLoaded -- load waits until all of the images, stylesheets,
// etc. have been loaded (everything referenced by the HTML.)

// JavaScript code in the <head> will run before JavaScript code in the <body>,
// so if you do have JavaScript code that needs to run as soon as possible,
// then you could put that code in the <head> and wrap it in a DOMContentLoaded event listener
