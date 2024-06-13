<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Review;

class ReviewController extends Controller
{
    public function getReviews()
    {
        // Fetch reviews with user names
        $reviews = Review::join('users', 'reviews.user_id', '=', 'users.id')
                         ->select('reviews.id as review_id', 'reviews.review_msg', 'reviews.no_stars', 'users.full_name')
                         ->get();

        // Return reviews as JSON
        return response()->json($reviews);
    }
}
