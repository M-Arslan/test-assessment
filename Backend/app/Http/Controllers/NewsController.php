<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class NewsController extends Controller
{
    public function index(Request $request)
{
    $newsapi = new NewsApi(env('NEWSAPI_KEY'));

    $query = [
        'q' => $request->input('q', 'bitcoin'),
        'from' => $request->input('from', '2022-01-01'),
        'to' => $request->input('to', date('Y-m-d')),
        'sortBy' => $request->input('sortBy', 'publishedAt'),
        'language' => $request->input('language', 'en'),
        'pageSize' => $request->input('pageSize', 20)
    ];

    $articles = $newsapi->getEverything($query);

    return response()->json($articles);
}
}
