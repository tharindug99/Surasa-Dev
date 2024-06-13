<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ReviewController;
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


// Route to fetch all reviews
Route::get('/reviews', [ReviewController::class, 'getReviews']);
// Route to fetch a review by ID
Route::get('/reviews/{id}', [ReviewController::class, 'getReviewById']);
// Route to add a new review
Route::post('/reviews', [ReviewController::class, 'addReview']);
// Route to update an existing review
Route::patch('/reviews/{id}', [ReviewController::class, 'updateReview']);
// Route to delete a review
Route::delete('/reviews/{id}', [ReviewController::class, 'deleteReview']);
