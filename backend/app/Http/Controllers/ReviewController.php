<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Review;
use Illuminate\Support\Facades\Validator;

class ReviewController extends Controller
{
    // Fetch all reviews with user names
    public function getReviews()
    {
        $reviews = Review::join('users', 'reviews.user_id', '=', 'users.id')
                         ->select('reviews.id as review_id', 'reviews.review_msg', 'reviews.no_stars', 'users.full_name')
                         ->get();

        return response()->json($reviews);
    }

    // Fetch a single review by ID
    public function getReviewById($id)
    {
        $review = Review::join('users', 'reviews.user_id', '=', 'users.id')
                        ->select('reviews.id as review_id', 'reviews.review_msg', 'reviews.no_stars', 'users.full_name')
                        ->where('reviews.id', $id)
                        ->first();

        if ($review) {
            return response()->json($review);
        } else {
            return response()->json(['message' => 'Review not found'], 404);
        }
    }

    // Add a new review
    public function addReview(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'review_msg' => 'required|string|max:150',
            'no_stars' => 'required|integer|between:1,5',
            'user_id' => 'required|exists:users,id'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $review = Review::create($request->all());

        return response()->json($review, 201);
    }

    // Update an existing review
    public function updateReview(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'review_msg' => 'string|max:150',
            'no_stars' => 'integer|between:1,5'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $review = Review::find($id);

        if ($review) {
            $review->update($request->all());
            return response()->json($review);
        } else {
            return response()->json(['message' => 'Review not found'], 404);
        }
    }

    // Delete a review
    public function deleteReview($id)
    {
        $review = Review::find($id);

        if ($review) {
            $review->delete();
            return response()->json(['message' => 'Review deleted']);
        } else {
            return response()->json(['message' => 'Review not found'], 404);
        }
    }
}
