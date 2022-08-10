<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">


    <!-- Fonts -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap">

    <!-- Styles -->
    {{-- <link rel="stylesheet" href="{{ mix('css/app.css') }}"> --}}


    <link rel="stylesheet" href="{{asset('custom/vendor/css/jquery.fancybox.min.css')}}">
    <!-- Favicon -->

    <!-- Bundle -->
    <link rel="stylesheet" href="{{asset('custom/vendor/css/bundle.min.css')}}">
    <!-- Plugin Css -->
    <link rel="stylesheet" href="{{asset('custom/vendor/css/jquery.fancybox.min.css')}}">
    <link rel="stylesheet" href="{{asset('custom/vendor/css/cubeportfolio.min.css')}}">
    <link rel="stylesheet" href="{{asset('custom/css/animate.min.css')}}">
    <link rel="stylesheet" href="{{asset('custom/css/line-awesome.min.css')}}">
    <!-- Style Sheet -->
    <link rel="stylesheet" href="{{asset('custom/css/owl.carousel.min.css')}}">
    <link rel="stylesheet" href="{{asset('custom/css/style.css')}}">

    <!-- Scripts -->
    @routes
    <script>
        window._asset = '{{ asset('') }}';
    </script>
    @inertiaHead
</head>

<body class="font-sans antialiased" data-spy="scroll" data-target=".navbar" data-offset="150">
    @inertia


    @env ('local')

    <script src="{{ mix('js/app.js') }}" defer></script>
    <script src="{{ mix('js/manifest.js') }}" defer></script>
    <script src="{{ mix('js/vendor.js') }}" defer></script>
    <!-- JavaScript -->
    <script src="{{asset('custom/vendor/js/bundle.min.js')}}"></script>

    <!-- Plugin Js -->
    <script src="{{asset('custom/vendor/js/jquery.fancybox.min.js')}}"></script>
    <script src="{{asset('custom/vendor/js/jquery.cubeportfolio.min.js')}}"></script>

    <!-- custom script -->
    <script src="{{asset('custom/js/mediaelement-and-player.min.js')}}"></script>
    <script src="{{asset('custom/js/wow.min.js')}}"></script>
    <script src="{{asset('custom/vendor/js/owl.carousel.min.js')}}"></script>
    <script src="{{asset('custom/vendor/js/parallaxie.min.js')}}"></script>
    <script src="{{asset('custom/vendor/js/contact_us.js')}}"></script>
    <script src="{{asset('custom/js/script.js')}}"></script>
    @endenv
</body>

</html>