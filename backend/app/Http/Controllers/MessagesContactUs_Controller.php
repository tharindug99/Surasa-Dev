<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ContactUs;
use Illuminate\Support\Facades\Validator;

class MessagesContactUs_Controller extends Controller
{
    /**
     * Get all messages from the MessagesContactUs model.
     *
     * @return \Illuminate\Http\Response
     */
    public function getAllMsgs()
    {
        $messages = ContactUs::all();
        return response()->json(['messages' => $messages], 200);
    }

    /**
     * Store a newly created message in MessagesContactUs model.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function storeMsg(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'message' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }

        $message = new ContactUs();
        $message->name = $request->input('name');
        $message->email = $request->input('email');
        $message->message = $request->input('message');
        $message->save();

        return response()->json(['message' => 'Message stored successfully'], 201);
    }

    /**
     * Get a specific message from MessagesContactUs model by ID.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function getMsg($id)
    {
        $message = ContactUs::find($id);

        if (!$message) {
            return response()->json(['error' => 'Message not found'], 404);
        }

        return response()->json(['message' => $message], 200);
    }

    /**
     * Update a message in MessagesContactUs model by ID.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function updateMsg(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'string|max:255',
            'email' => 'email|max:255',
            'message' => 'string',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }

        $message = ContactUs::find($id);

        if (!$message) {
            return response()->json(['error' => 'Message not found'], 404);
        }

        $message->name = $request->input('name', $message->name);
        $message->email = $request->input('email', $message->email);
        $message->message = $request->input('message', $message->message);
        $message->save();

        return response()->json(['message' => 'Message updated successfully'], 200);
    }

    /**
     * Delete a message from MessagesContactUs model by ID.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function deleteMsg($id)
    {
        $message = ContactUs::find($id);

        if (!$message) {
            return response()->json(['error' => 'Message not found'], 404);
        }

        $message->delete();

        return response()->json(['message' => 'Message deleted successfully'], 200);
    }
}
