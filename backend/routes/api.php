<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\MessagesContactUs_Controller;
use App\Http\Controllers\BookingRequests_Controller;
use App\Http\Controllers\MenuItemController;
use App\Http\Controllers\OrderController;
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

//-------------------------------USER ROUTES---------------------------------\\

Route::post('register', [UserController::class,'register']);
Route::post('login', [UserController::class,'login']);
Route::get('getAllUsers', [UserController::class,'getAllUsers']);
Route::get('getUserByID/{id}', [UserController::class,'getUserByID']);
Route::patch('editUser/{id}', [UserController::class,'editUser']);
Route::delete('deleteUser/{id}', [UserController::class,'deleteUser']);


//-------------------------------PRODUCT ROUTES---------------------------------\\

Route::post('addproduct', [ProductController::class,'addProduct']);
Route::get('list', [ProductController::class,'list']);
Route::delete('delete/{id}', [ProductController::class,'delete']);
Route::patch('edit/{id}', [ProductController::class,'edit']);
Route::get('product/{id}', [ProductController::class,'getProduct']);

//-------------------------------REVIEW ROUTES---------------------------------\\

Route::get('/reviews', [ReviewController::class, 'getReviews']); // Route to fetch all reviews
Route::get('/reviews/{id}', [ReviewController::class, 'getReviewById']); // Route to fetch a review by ID
Route::post('/reviews', [ReviewController::class, 'addReview']); // Route to add a new review
Route::patch('/reviews/{id}', [ReviewController::class, 'updateReview']); // Route to update an existing review
Route::delete('/reviews/{id}', [ReviewController::class, 'deleteReview']); // Route to delete a review


//-------------------------------CONTACT US MSGS -------------------------------\\\

Route::get('/messages', [MessagesContactUs_Controller::class, 'getAllMsgs']);
Route::post('/messages', [MessagesContactUs_Controller::class, 'storeMsg']);
Route::get('/messages/{id}', [MessagesContactUs_Controller::class, 'getMsg']);
Route::put('/messages/{id}', [MessagesContactUs_Controller::class, 'updateMsg']);
Route::delete('/messages/{id}', [MessagesContactUs_Controller::class, 'deleteMsg']);



//-------------------------------DELIVERY ORDERS -------------------------------\\\

Route::get('/orders', [OrderController::class, 'index']);
Route::get('/orders/{userId}', [OrderController::class, 'show']);
Route::post('/orders', [OrderController::class, 'store']);
Route::delete('/orders/{id}', [OrderController::class, 'destroy']);


//-------------------------------BOOKING REQUESTS -------------------------------\\\

Route::get('/booking-requests', [BookingRequests_Controller::class, 'allBookingRequests']); // Get all booking requests
Route::get('/booking-requests/{id}', [BookingRequests_Controller::class, 'getBookingRequest']); // Get a single booking request by ID
Route::post('/booking-requests', [BookingRequests_Controller::class, 'createBookingRequest']); // Create a new booking request
Route::put('/booking-requests/{id}', [BookingRequests_Controller::class, 'updateBookingRequest']); // Update an existing booking request by ID
Route::delete('/booking-requests/{id}', [BookingRequests_Controller::class, 'deleteBookingRequest']); // Delete a booking request by ID


//-------------------------------Menu Items (Displayed on website) -------------------------------\\\

Route::post('/add-menu-item', [MenuItemController::class, 'addMenuItem']);
Route::get('/menu-items', [MenuItemController::class, 'getAllMenuItems']);
Route::delete('/menu-items/{id}', [MenuItemController::class, 'deleteMenuItem']);
