@extends('layouts.product')
@section('meta_head')
    <meta name="og:site_name" property="og:site_name" content="Catalogo">
    <meta name="title" content="{{$product->nombre}}">
    <meta name="description" content="{{$product->descripcion}}">
    <meta property="og:title" content="{{$product->nombre}}">
    <meta property="og:image" content="{{count($product->image)>0? url('/'). '/' .$product->image[0]->img_url : '' }}">
    <meta property="og:description" content="{{$product->descripcion}}">
    <meta property="og:image_link" content="{{count($product->image)>0? url('/'). '/' .$product->image[0]->img_url : '' }}">
    <meta property="og:url" content="{{url('/')}}/products/{{$product->id}}">
    <meta data-n-property="og:image:alt" content="{{$product->nombre}}">
    <meta property="og:type" content="article" />
    <title>{{$product->nombre}}</title>
@endsection
@section('content')    
    <mostrar-producto :product="{{$product}}"></mostrar-producto>
@endsection