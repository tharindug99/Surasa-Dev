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
}
