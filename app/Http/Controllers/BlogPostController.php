<?php

namespace App\Http\Controllers;

use App\Models\BlogPost;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BlogPostController extends Controller
{
    public function index(){
        $blogPost = BlogPost::find(1);

        return Inertia::render('Blog/Posts', [
            'title' => [
                $blogPost->title
            ]
        ]);
    }
}
