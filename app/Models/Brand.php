<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Brand extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'nombre',
        'img_url',
    ];
    use HasFactory;

    public function product(){
        return $this->hasMany('App\Models\Product');
    }
}
