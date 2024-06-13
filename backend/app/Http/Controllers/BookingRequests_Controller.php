<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\BookingRequests; // Use the correct model

class BookingRequests_Controller extends Controller
{
    // Fetch all booking requests
    public function allBookingRequests()
    {
        $bookingRequests = BookingRequests::all();
        return response()->json($bookingRequests);
    }

    // Fetch a single booking request by ID
    public function getBookingRequest($id)
    {
        $bookingRequest = BookingRequests::find($id);
        if ($bookingRequest) {
            return response()->json($bookingRequest);
        } else {
            return response()->json(['message' => 'Booking request not found'], 404);
        }
    }

    // Create a new booking request
    public function createBookingRequest(Request $request)
    {
        $request->validate([
            'fullName' => 'required|string|max:255',
            'contactNumber' => 'required|string|max:20',
            'email' => 'required|email|max:255',
            'faculty' => 'required|string|max:255',
            'startingTime' => 'required|date_format:Y-m-d H:i:s',
            'endTime' => 'required|date_format:Y-m-d H:i:s|after:startingTime',
        ]);

        $bookingRequest = new BookingRequests();
        $bookingRequest->fullName = $request->input('fullName');
        $bookingRequest->contactNumber = $request->input('contactNumber');
        $bookingRequest->email = $request->input('email');
        $bookingRequest->faculty = $request->input('faculty');
        $bookingRequest->startingTime = $request->input('startingTime');
        $bookingRequest->endTime = $request->input('endTime');
        $bookingRequest->save();

        return response()->json($bookingRequest, 201);
    }

    // Update an existing booking request by ID
    public function updateBookingRequest(Request $request, $id)
    {
        $request->validate([
            'fullName' => 'sometimes|required|string|max:255',
            'contactNumber' => 'sometimes|required|string|max:20',
            'email' => 'sometimes|required|email|max:255',
            'faculty' => 'sometimes|required|string|max:255',
            'startingTime' => 'sometimes|required|date_format:Y-m-d H:i:s',
            'endTime' => 'sometimes|required|date_format:Y-m-d H:i:s|after:startingTime',
        ]);

        $bookingRequest = BookingRequests::find($id);
        if ($bookingRequest) {
            $bookingRequest->fill($request->all());
            $bookingRequest->save();
            return response()->json($bookingRequest);
        } else {
            return response()->json(['message' => 'Booking request not found'], 404);
        }
    }

    // Delete a booking request by ID
    public function deleteBookingRequest($id)
    {
        $bookingRequest = BookingRequests::find($id);
        if ($bookingRequest) {
            $bookingRequest->delete();
            return response()->json(['message' => 'Booking request deleted successfully']);
        } else {
            return response()->json(['message' => 'Booking request not found'], 404);
        }
    }
}
