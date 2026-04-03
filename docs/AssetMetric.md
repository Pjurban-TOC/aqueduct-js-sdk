
# AssetMetric

Individual asset performance metric.

## Properties

Name | Type
------------ | -------------
`id` | string
`assetUrl` | string
`type` | string
`sizeBytes` | number
`transferBytes` | number
`loadTimeMs` | number
`dnsTimeMs` | number
`connectTimeMs` | number
`tlsTimeMs` | number
`ttfbMs` | number
`downloadTimeMs` | number
`cacheHit` | boolean
`cdnPop` | string
`encoding` | string
`protocol` | string
`initiatorType` | string
`serviceWorkerUsed` | boolean

## Example

```typescript
import type { AssetMetric } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "assetUrl": https://cdn.acme.example.com/app.js,
  "type": script,
  "sizeBytes": 150000,
  "transferBytes": 45000,
  "loadTimeMs": 120.5,
  "dnsTimeMs": 5.2,
  "connectTimeMs": 10.1,
  "tlsTimeMs": 15.3,
  "ttfbMs": 45,
  "downloadTimeMs": 65,
  "cacheHit": true,
  "cdnPop": iad-1,
  "encoding": br,
  "protocol": h2,
  "initiatorType": script,
  "serviceWorkerUsed": false,
} satisfies AssetMetric

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AssetMetric
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


