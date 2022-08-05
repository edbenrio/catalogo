@extends('layouts.product')
@section('meta_head')
    <meta property="og:url" content="DA QD">
    <meta property="og:image" content="holaaa">
    <meta property="og:description" content="{{ $product->descripcion }}"/>

    <meta name="og:site_name" property="og:site_name" content="Itapua Medical, Oxigeno medicinal">
    <meta name="title" content="{{$product->nombre}}">
    <meta name="description" content="{{$product->descripcion}}">
    <meta property="og:title" content="{{$product->nombre}}">
    <meta property="og:image" content="{{count($product->image)>0? url('/'). '/' .$product->image[0]->img_url : '' }}">
    <meta property="og:description" content="{{$product->descripcion}}">
    <meta property="og:image_link" content="{{count($product->image)>0? url('/'). '/' .$product->image[0]->img_url : '' }}">
    <meta property="og:url" content="{{url('/')}}/products/{{$product->id}}">
    <meta data-n-property="og:image:alt" content="{{$product->nombre}}">

    <title>{{$product->nombre}}</title>
@endsection
@section('content')    
    <mostrar-producto :product="{{$product}}"></mostrar-producto>
@endsection