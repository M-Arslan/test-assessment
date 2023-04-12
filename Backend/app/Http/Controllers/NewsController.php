<?php

namespace App\Http\Controllers;
use jcobhams\NewsApi\NewsApi;
use Illuminate\Http\Request;
use App\Providers\NewsApiServiceProvider;

class NewsController extends Controller
{

    protected $newsApiService;

    public function __construct(NewsApiServiceProvider $newsApiService)
    {
        $this->newsApiService = $newsApiService;
    }

    public function index(Request $request)
    {
    
        $params = [
            'q' =>$request->input('search',  'entertainment'),
            'language' => 'en',
            'sortBy' => 'publishedAt',
        ];

        $response = $this->newsApiService->getNews('everything', $params);

        return $response->articles;
        
    }
}
