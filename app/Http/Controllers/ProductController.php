<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Image;
use App\Models\ProductDetail;
use File;
use Illuminate\Support\Facades\View;
use Illuminate\Http\Request;

class ProductController extends Controller
{

    /**
     * Instantiate a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth')->except('show', 'index', 'search');
    }


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
            ->with('productDetail')
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
        //$cate = json_decode(json_encode($request->categories));
        //dd($request->categories);
        $product->save(); 
        $product->categories()->attach($request->categories);
        
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
        
        foreach ($request->product_detail as $detail){
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
    public function show($id)
    {
        $product = Product::select('id', 'nombre', 'codigo', 'descripcion','precio', 'venta', 'alquiler', 'brand_id')
            ->with('brand')
            ->with('image:img_url,product_id')
            ->with('categories')
            ->with('productDetail')
            ->find($id);
        return view ('showProduct')->with('product',$product);
        //return View::make('home', ['product' => 'holaa']) ;
        //return view('home', ['product' => 'holaa']);;
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
