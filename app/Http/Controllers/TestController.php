<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class TestController extends Controller
{
    public function index(){
        return Inertia::render('home/index', [
            'user' => [
                'id' => rand(0, 100),
                'name' => 'ColorKat'
            ]
        ]);
    }
}
