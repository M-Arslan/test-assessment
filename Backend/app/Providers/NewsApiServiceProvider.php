<?php

namespace App\Providers;
use GuzzleHttp\Client;

use Illuminate\Support\ServiceProvider;

class NewsApiServiceProvider extends ServiceProvider
{
    protected $client;
    protected $apiKey;

    public function __construct($apiKey)
    {
        $this->client = new Client([
            'base_uri' => 'https://newsapi.org/v2/',
            'timeout' => 10.0,
        ]);
        $this->apiKey = $apiKey;
    }

    public function getNews($endpoint, $params)
    {
        $response = $this->client->get($endpoint, [
            'query' => $params,
            'headers' => [
                'Authorization' => 'Bearer ' . $this->apiKey,
            ],
        ]);

        return json_decode($response->getBody()->getContents());
    }
}
