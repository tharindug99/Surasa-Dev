<?php

namespace App\Http\Controllers;

use App\Models\Orders;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class OrderController extends Controller
{
    /**
     * Display a listing of the orders.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $orders = Orders::with('user')->get();

        // Transforming orders to match custom JSON structure
        $transformedOrders = $orders->map(function ($order) {
            $totalPrice = $order->price * $order->quantity;

            $orderDetails = [
                'user_id' => $order->user->id,
                'item_name' => $order->item_name,
                'quantity' => $order->quantity,
                'price' => number_format($order->price, 2),
                'full_name' => $order->user->full_name,
                'mobile_no' => $order->user->mobile_no,
                'created_at' => $order->created_at->toIso8601String(),
                'updated_at' => $order->updated_at->toIso8601String(),
            ];

            return [
                'order_id' => $order->id,
                'total_price' => number_format($totalPrice, 2),
                'order_details' => $orderDetails,
            ];
        });

        return response()->json(['orders' => $transformedOrders], 200);
    }

    /**
     * Display the orders for a specific user.
     *
     * @param int $userId
     * @return \Illuminate\Http\Response
     */
    public function show($userId)
    {
        $orders = Orders::with(['user'])->where('user_id', $userId)->get();

        // Transforming orders to match custom JSON structure
        $transformedOrders = $orders->map(function ($order) {
            $totalPrice = $order->price * $order->quantity;

            $orderDetails = [
                'user_id' => $order->user->id,
                'item_name' => $order->item_name,
                'quantity' => $order->quantity,
                'price' => number_format($order->price, 2),
                'full_name' => $order->user->full_name,
                'mobile_no' => $order->user->mobile_no,
                'created_at' => $order->created_at->toIso8601String(),
                'updated_at' => $order->updated_at->toIso8601String(),
            ];

            return [
                'order_id' => $order->id,
                'total_price' => number_format($totalPrice, 2),
                'order_details' => $orderDetails,
            ];
        });

        return response()->json(['orders' => $transformedOrders], 200);
    }

    /**
     * Store a newly created order in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
{
    $validator = Validator::make($request->all(), [
        'user_id' => 'required|exists:users,id',
        'orders' => 'required|array',
        'orders.*.item_name' => 'required',
        'orders.*.quantity' => 'required|integer|min:1',
        'orders.*.price' => 'required|numeric|min:0',
    ]);

    if ($validator->fails()) {
        return response()->json(['error' => $validator->errors()], 400);
    }

    $createdOrders = [];

    foreach ($request->input('orders') as $orderData) {
        $order = Orders::create([
            'user_id' => $request->input('user_id'),
            'item_name' => $orderData['item_name'],
            'quantity' => $orderData['quantity'],
            'price' => $orderData['price'],
        ]);

        // Transform the order details for response
        $totalPrice = $order->price * $order->quantity;

        $orderDetails = [
            'user_id' => $order->user->id,
            'item_name' => $order->item_name,
            'quantity' => $order->quantity,
            'price' => number_format($order->price, 2),
            'full_name' => $order->user->full_name,
            'mobile_no' => $order->user->mobile_no,
            'created_at' => $order->created_at->toIso8601String(),
            'updated_at' => $order->updated_at->toIso8601String(),
        ];

        $transformedOrder = [
            'order_id' => $order->id,
            'total_price' => number_format($totalPrice, 2),
            'order_details' => $orderDetails,
        ];

        $createdOrders[] = $transformedOrder;
    }

    return response()->json(['orders' => $createdOrders], 201);
}



    public function destroy($id)
{
    $order = Orders::find($id);

    if (!$order) {
        return response()->json(['error' => 'Order not found'], 404);
    }

    

    $order->delete();

    return response()->json(['message' => 'Order deleted successfully'], 200);
}

}
