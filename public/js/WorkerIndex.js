// Register the ServiceWorker limiting its action to those URL starting
// by `controlled`. The scope is not a path but a prefix. First, it is
// converted into an absolute URL, then used to determine if a page is
// controlled by testing it is a prefix of the request URL.
// Service Worker is part of the global Navigator object, which is part of the BOM 
// (Browser Object Model), the built-in JS API for manipulating app in response to browser actions

navigator.serviceWorker.register('CacheJSON.js');