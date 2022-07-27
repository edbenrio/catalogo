<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Image;
use App\Models\ProductDetail;
use File;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $product = Product::select('id','nombre','codigo', 'descripcion','brand_id','venta','alquiler','precio')
            ->with( 'brand:id,nombre')
            ->with('image')
            ->with('categories')
          //  ->with('productDetail')
            ->get();
        return $product;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $product = new Product();
        $data = $request->only($product->getFillable());        
        $product->fill($data);
        $product->save(); 
        foreach($request->media as $image){     
            //dd();
            $image = json_decode(json_encode( $image));
            $from = public_path('tmp/uploads/'.$image->name);
            $to = public_path('images/products/'.$image->name);
        
            File::move($from, $to);
            $productImage = new Image();
            $productImage->img_url = 'images/products/'.$image->name;
            $productImage->product_id = $product->id;
            $productImage->save();
        }
        foreach ($request->product_details as $detail){
            $detail = json_decode(json_encode( $detail));
            $detalle = new ProductDetail();
           
            $detalle->campo_detalle = $detail->campo_detalle;
            $detalle->campo_nombre = $detail->campo_nombre;
            $detalle->product_id = $product->id;
            $detalle->save();

        }
        
        return $product;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        $product = Product::select('products.id', 'products.nombre', 'products.codigo', 'products.descripcion', 'brands.nombre as marca')
            ->join('brands','brands.id','products.brand_id')
            
            ->find($id);
        return $product;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {
        $data = $request->only($product->getFillable());        
        $product->fill($data);    
        $product->save(); 
        return $product;
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $product = Product::find($id);
        return $product->delete();
    }

    public function search(Request $request){
        $filtro = $request->buscador;
        if ($filtro==""){
            $products = Product::select('id','nombre','codigo', 'descripcion','brand_id','venta','alquiler','precio')
                ->with( 'brand:id,nombre')
                ->with('image')
                ->with('categories')
                ->get();
        }else{
            $products = Product::select('id','nombre','codigo', 'descripcion','brand_id','venta','alquiler','precio')
                ->with( 'brand:id,nombre')
                ->with('image')
                ->with('categories')
                ->where('nombre', 'LIKE', '%' .$filtro.'%')
                ->orWhere('descripcion', 'LIKE', '%' .$filtro.'%')
                ->orWhere('codigo', 'LIKE', '%' .$filtro.'%')
                ->get();
        }
        return $products;
    }
}
