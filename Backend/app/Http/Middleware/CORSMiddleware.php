<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class CORSMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        //Intercepts OPTIONS requests
        if($request->isMethod('OPTIONS')){
              $response = \response('', 200);
        }else{
          //Pass the request to the next middleware
          $response = $next($request);
        }
        
        $response->header('Access-Control-Allow-Origin',"*");
        $response->header('Access-Control-Allow-Methods','PUT, GET, POST, DELETE, OPTIONS, PATCH');
        $response->header('Access-Control-Allow-Headers','*');
        $response->header('Accept','application/json');
        
        return $response;
    }
}
