<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;
use CloudinaryLabs\CloudinaryLaravel\CloudinaryEngine;

class ProductController extends Controller
{
    public function addProduct(Request $request)
    {
        // Validate the request inputs
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'type' => 'required|string|max:255',
            'price' => 'required|numeric',
            'description' => 'required|string',
            'file' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048'
        ]);

        // Store the image on Cloudinary
        $uploadedFile = Cloudinary::upload($request->file('file')->getRealPath(), [
            'folder' => 'product'
        ]);

        // Ensure the upload response is of type CloudinaryEngine
        if ($uploadedFile instanceof CloudinaryEngine) {
            // Get the secure URL of the uploaded image
            $secureUrl = $uploadedFile->getSecurePath();

            // Create a new Product instance
            $product = new Product;
            $product->name = $request->input('name');
            $product->type = $request->input('type');
            $product->price = $request->input('price');
            $product->description = $request->input('description');
            $product->img_path = $secureUrl; // Store the Cloudinary image URL
            $product->save();

            return response()->json($product, 201);
        } else {
            return response()->json(['error' => 'Failed to upload image to Cloudinary'], 500);
        }
    }


    function list()
    {
        return Product::all();
    }

    function delete($id)
    {   
        $result = Product::where('id',$id)->delete();
        if($result)
        {
            return["result"=>"product has been deleted successfully"];
        }
        else {
            return["result"=>"Error in deleting"];
        }
        
    }

    function getProduct($id)
    {
        return Product::find($id);
    }

    function edit($id, Request $request)
    {
        $product = Product::find($id);
    
        if ($request->has('name')) {
            $request->validate([
                'name' => 'required|string',
            ]);
            $product->name = $request->input('name');
        }
    
        if ($request->has('price')) {
            $request->validate([
                'price' => 'required|numeric',
            ]);
            $product->price = $request->input('price');
        }
    
        if ($request->has('description')) {
            $request->validate([
                'description' => 'required|string',
            ]);
            $product->description = $request->input('description');
        }
    
        if ($request->file('file')) {
            $request->validate([
                'file' => 'nullable|file|mimes:jpg,jpeg,png|max:2048',
            ]);
            $fileName = time(). '.'. $request->file('file')->getClientOriginalExtension();
            $request->file('file')->move(public_path('products'), $fileName);
            $product->img_path = 'products/'. $fileName;    
        }
    
        $product->save();
        return $product;
    }

}
