@extends('layouts.product')
@section('meta_head')
    <meta property="og:url" content="DA QD">
    <meta property="og:image" content="holaaa">
    <meta property="og:description" content="{{ $product->descripcion }}"/>
    <title>{{$product->nombre}}</title>
@endsection
@section('content')    
    <mostrar-producto :product="{{$product}}"></mostrar-producto>
@endsection