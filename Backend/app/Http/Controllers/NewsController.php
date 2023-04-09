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
            'q' => 'trump',
            'language' => 'en',
            'sortBy' => 'publishedAt',
        ];

        $response = $this->newsApiService->getNews('everything', $params);

        return $response->articles;
        // $newsapi = new NewsApi(env('NEWSAPI_KEY'));

        // $query = [
        //     'q' => 'apple',
        //     'from' => '2023-04-08',
        //     'to' =>'2023-04-08',
        //     'sortBy' => 'publishedAt',
        //     'language' => 'en',
        //     'pageSize' => 20,
        //     'sources' => 'ANSA.it',
        //     'domains' => 'bbc.co.uk, techcrunch.com, engadget.com'
        // ];
        // $q = 'apple';
        // // https://newsapi.org/v2/everything?q=apple&from=2023-04-08&to=&sortBy=popularity&apiKey=7e5bf26bfcc2421993802b32cf376f13
        // $articles = $newsapi->getEverything($q);

        // return response()->json($articles);
    }
}
