<?php

namespace App\Http\Controllers;

use App\Models\Image;
use Illuminate\Http\Request;

class ImageController extends Controller
{

    /**
     * Instantiate a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth')->except('show', 'index');
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
        $path = public_path('tmp/uploads');

        if (!file_exists($path)) {
            mkdir($path, 0777, true);
        }

        $file = $request->file('image');

        $name = uniqid() . '_' . trim($file->getClientOriginalName());

        $file->move($path, $name);

        return ['name'=>$name];

        /*$ruta='images'. parse_url($request->header('referer'), PHP_URL_PATH) .'/'; 
        if ($request->hasFile('image')) {
            $img = $request->file('image');

            $filename = uniqid().'.'.$img->getClientOriginalExtension();
            $img->move(public_path($ruta), $filename);

            $path = $ruta. $filename;

            $image = new Image();
            $data = $request->only($image->getFillable());        
            $image->fill($data);
            $image->img_url = $path;

            //return $path;
        }*/
    }

    public function storeImage(Request $request){
        $ruta='images'. parse_url($request->header('referer'), PHP_URL_PATH) .'/'; 
        if ($request->hasFile('image')) {
            $img = $request->file('image');

            $filename = uniqid().'.'.$img->getClientOriginalExtension();
            $img->move(public_path($ruta), $filename);

            $path = $ruta. $filename;
            return $path;
        }else{
            abort(response('No hay archivo de Imagen',500));        
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Image  $image
     * @return \Illuminate\Http\Response
     */
    public function show(Image $image)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Image  $image
     * @return \Illuminate\Http\Response
     */
    public function edit(Image $image)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Image  $image
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Image $image)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Image  $image
     * @return \Illuminate\Http\Response
     */
    public function destroy(Image $image)
    {
        //
    }
}
