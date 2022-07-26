<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class Product extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable=[
        'nombre',
        'descripcion',
        'venta',
        'alquiler',
        'codigo',
        'precio',
        'brand_id',
        'category_id'        
    ];

    public function brand(){
        return $this->belongsTo('App\Models\Brand');
    }

    public function categories(){
        return $this->belongsToMany('App\Models\Category');
    }
    
    public function image(){
        return $this->hasMany('App\Models\Image');
    }

    public function productDetail(){
        return $this->hasMany('App\Models\ProductDetail');
    }
}
