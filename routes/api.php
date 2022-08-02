<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ImageController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//upload image
Route::post('/upload', [ImageController::class, 'store'])->name('upload');

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
