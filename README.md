# depapi
A Dependency API - Separate your script and style dependencies into a separate service with an API

## Status: proposal

## Setup and Configuration
TODO

## API
The API accepts requests and returns requests in JSON.

### Basic Example 
Posting to `/api/bundle`
```json
{
  "environment": "dev",
  "uglify": true,
  "entry_points": [
    {
      "path": "app/lib/util/util.js",
      "level": "app"
    },
    {
      "path": "app/view/login/index.js",
      "level": "view"
    }
  ]
}
```
Will return 
```json
{
  "bundles": [
    {
      "path": "http://depapi.mydomain.com/resource/a0ab3aeca60d4a71f6f3377de1a3a931.js",
      "map": "http://depapi.mydomain.com/resource/a0ab3aeca60d4a71f6f3377de1a3a931.js.map",
      "contents": [
        {
          "path": "app/lib/util/util.js"
        }
      ],
    }
  ]
}
```
