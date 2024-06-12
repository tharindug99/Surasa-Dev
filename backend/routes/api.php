<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProductController;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('register', [UserController::class,'register']);
Route::post('login', [UserController::class,'login']);
Route::get('getAllUsers', [UserController::class,'getAllUsers']);
Route::get('getUserByID/{id}', [UserController::class,'getUserByID']);
Route::patch('editUser/{id}', [UserController::class,'editUser']);
Route::delete('deleteUser/{id}', [UserController::class,'deleteUser']);


Route::post('addproduct', [ProductController::class,'addProduct']);
Route::get('list', [ProductController::class,'list']);
Route::delete('delete/{id}', [ProductController::class,'delete']);
Route::patch('edit/{id}', [ProductController::class,'edit']);
Route::get('product/{id}', [ProductController::class,'getProduct']);
