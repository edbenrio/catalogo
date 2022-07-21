<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ProductDetail extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable= [
        'campo_nombre',
        'campo_detalle',
        'product_id'
    ];

    public function products(){
        return $this->belongsTo('App\Models\Product');
    }
    
}
