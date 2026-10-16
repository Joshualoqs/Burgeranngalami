<?php

namespace App\Http\Controllers;

use App\Models\Restaurant;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RestaurantController extends Controller
{
    public function index()
    {
        $restaurants = Restaurant::latest()->get();
        return Inertia::render('Restaurants/Index', ['restaurants' => $restaurants]);
    }

    public function create()
    {
        return Inertia::render('Restaurants/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'category' => 'required|string|max:255',
            'rating' => 'required|numeric|min:0|max:5',
            'delivery_time' => 'required|string|max:255',
            'image_url' => 'nullable|url',
        ]);

        Restaurant::create($request->all());
        return redirect()->route('restaurants.index')->with('success', 'Restaurant created successfully.');
    }

    public function edit(Restaurant $restaurant)
    {
        return Inertia::render('Restaurants/Edit', ['restaurant' => $restaurant]);
    }

    public function update(Request $request, Restaurant $restaurant)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'category' => 'required|string|max:255',
            'rating' => 'required|numeric|min:0|max:5',
            'delivery_time' => 'required|string|max:255',
            'image_url' => 'nullable|url',
        ]);

        $restaurant->update($request->all());
        return redirect()->route('restaurants.index')->with('success', 'Restaurant updated successfully.');
    }

    public function destroy(Restaurant $restaurant)
    {
        $restaurant->delete();
        return redirect()->route('restaurants.index')->with('success', 'Restaurant deleted successfully.');
    }
}