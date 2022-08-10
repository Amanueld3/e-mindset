<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{

    public function index()
    {
        return Inertia::render('Admin/Dashboard');
    }
    public function users(Request $request)
    {

       
        return Inertia::render('Admin/Users', [

            'users' => User::query()
                ->when($request->search, function ($query, $search) {
                    $query->where('firstName', 'like', "%{$search}%")->orWhere('lastName', 'like', "%{$search}%");
                })
                ->select('id', 'firstName', 'lastName', 'phone', 'email', 'created_at')
                ->paginate(10),
            'filters' => $request->only(['search']),
        ]);
    }
}
