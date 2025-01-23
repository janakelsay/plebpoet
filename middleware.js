export default function middleware(req) {
    const response = new Response();
    
    // Add CORS headers
    response.headers.set('Access-Control-Allow-Credentials', 'true');
    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Access-Control-Allow-Methods', 'GET,OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', '*');
    
    return response;
  }
  
  export const config = {
    matcher: '/.well-known/nostr.json',
  }