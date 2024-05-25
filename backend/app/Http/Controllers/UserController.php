<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    //-------------------------------------->SIGN UP<-----------------------------------//
    public function register(Request $request)
{
    // Validate the request data
    $validator = Validator::make($request->all(), [
        'full_name' => 'required|string|max:255',
        'email' => 'required|string|email|max:255|unique:users',
        'password' => 'required|string|min:8',
        'mobile_no' => 'required|string|max:15|unique:users',
    ]);

    if ($validator->fails()) {
        return response()->json($validator->errors(), 422);
    }

    // Create a new user
    $user = new User;
    $user->full_name = $request->input('full_name');
    $user->email = $request->input('email');
    $user->password = Hash::make($request->input('password'));
    $user->mobile_no = $request->input('mobile_no');
    $user->save();

    return response()->json($user, 201);
}


    //-------------------------------------->LOGIN<-----------------------------------//
    public function login(Request $request)
{
    $request->validate([
        'mobile_no' => 'required',
        'password' => 'required',
    ]);

    $user = User::where('mobile_no', $request->mobile_no)->first();

    if ($user && Hash::check($request->password, $user->password)) {
        return response()->json($user, 200);
    }

    return response()->json(['error' => 'Invalid credentials'], 401);
}

}
