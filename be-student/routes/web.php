<?php

use Illuminate\Support\Facades\Route;

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


Route::get('students', 'App\Http\Controllers\StudentController@index');

Route::get('students/show', 'App\Http\Controllers\StudentController@show');

Route::post('/students/store', 'App\Http\Controllers\StudentController@store');

Route::put('/students/{AR}', 'App\Http\Controllers\StudentController@update');

Route::delete('/students/{AR}', 'App\Http\Controllers\StudentController@destroy');

Route::get('/', function () {
    return view('welcome');
});
