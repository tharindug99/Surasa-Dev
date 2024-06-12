<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    function addProduct(Request $request)
    {   
        $product = new Product;

        $product->name=$request->input('name');
        $product->type=$request->input('type');
        $product->price=$request->input('price');
        $product->description=$request->input('description');
        $product->img_path=$request->file('file')->store('products');
        $product->save();

        return $product;
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
