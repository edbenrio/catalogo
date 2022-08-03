<!DOCTYPE html>
<html lang="es">
    <head>
        @yield('meta_head')
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

        <!-- Styles -->
        <link href="{{ mix('css/app.css') }}" rel="stylesheet">

    </head>
    <body>
        <div id="app2">
            @yield('content')
        </div>
        <script src="/js/product.js"></script>
    </body>
</html>