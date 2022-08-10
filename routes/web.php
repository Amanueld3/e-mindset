<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\CoursesController;
use App\Models\User;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/', function () {

    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
        'AppName' => env('APP_NAME'),
    ]);
});

Route::get('/courses', function () {

    return Inertia::render('Courses');
});

Route::get('/gallery', function () {

    return Inertia::render('Gallery');
});

Route::get('/contact', function () {

    return Inertia::render('Contact');
});

Route::middleware('auth')->group(function () {
    Route::get('/dashboard', [AdminController::class, 'index'])
        ->name('admin.dashboard');

    Route::get('admin/users', [AdminController::class, 'users'])
        ->name('admin.users');

    Route::resource('admin/courses', CoursesController::class);
});



require __DIR__ . '/auth.php';
