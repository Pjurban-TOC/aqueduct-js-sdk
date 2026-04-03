
# GetCacheEvents200ResponseEventsInner


## Properties

Name | Type
------------ | -------------
`eventType` | string
`pattern` | string
`keysAffected` | number
`tenantId` | string
`timestamp` | Date

## Example

```typescript
import type { GetCacheEvents200ResponseEventsInner } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "eventType": null,
  "pattern": null,
  "keysAffected": null,
  "tenantId": null,
  "timestamp": null,
} satisfies GetCacheEvents200ResponseEventsInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetCacheEvents200ResponseEventsInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


