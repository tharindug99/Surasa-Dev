<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\MenuItem;

class MenuItemController extends Controller
{   

    public function getAllMenuItems()
    {
        try {
            $menuItem = MenuItem::all();

            return response()->json($menuItem, 200);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to retrieve menu items', 'details' => $e->getMessage()], 500);
        }
    }

    public function addMenuItem(Request $request)
    {
        $productName = $request->input('productName'); // Get the product name from the request

        try {
            DB::insert(
                'INSERT INTO menu_item (product_id, name, type, price, description, img_path, created_at, updated_at)
                 SELECT id, name, type, price, description, img_path, created_at, updated_at 
                 FROM products 
                 WHERE name = ?', 
                [$productName]
            );

            return response()->json(['message' => 'Menu item added successfully'], 200);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to add menu item', 'details' => $e->getMessage()], 500);
        }
    }


    public function deleteMenuItem($id)
    {
        try {
            $menuItem = MenuItem::findOrFail($id);
            $menuItem->delete();

            return response()->json(['message' => 'Menu item deleted successfully'], 200);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to delete menu item', 'details' => $e->getMessage()], 500);
        }
    }
}
