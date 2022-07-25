<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::resource('brands', App\Http\Controllers\BrandController::class);
Route::resource('categories', App\Http\Controllers\CategoryController::class);
Route::resource('products', App\Http\Controllers\ProductController::class);
Route::resource('product_details', App\Http\Controllers\ProductDetailController::class);



Auth::routes();



Route::middleware(['auth'])->group(function(){
    Route::get('/', [App\Http\Controllers\HomeController::class, 'index'])->name('welcome');
    
    Route::get('/{vuerouter}', function () {
        return view('welcome');
    })->where( "vuerouter",  ".*");
});