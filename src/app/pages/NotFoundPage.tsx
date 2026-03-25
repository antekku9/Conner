<!DOCTYPE html>
<html lang="pl">
  <head>
    <meta charset="utf-8" />
    <title>Conner Sp. z o.o.</title>
    <script>
      // GitHub Pages SPA redirect hack
      // Dokumentacja: https://github.com/rafgraph/spa-github-pages
      
      // Pobierz aktualny URL
      var pathSegmentsToKeep = 1; // Ilość segmentów base path (dla /Conner/ = 1)
      
      var l = window.location;
      
      // Przekieruj do index.html z zakodowanym path w query string
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '/?/' +
        l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~') +
        (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
        l.hash
      );
    </script>
  </head>
  <body>
    <!-- GitHub Pages przekieruje automatycznie -->
  </body>
</html>
