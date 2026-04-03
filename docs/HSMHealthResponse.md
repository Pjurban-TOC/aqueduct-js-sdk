
# HSMHealthResponse

HSM subsystem health and FIPS 140-3 self-test status.

## Properties

Name | Type
------------ | -------------
`connected` | boolean
`selfTestPassed` | boolean
`providerId` | string
`availableSessions` | number
`activeKeyCount` | number
`latencyMs` | number
`firmwareVersion` | string

## Example

```typescript
import type { HSMHealthResponse } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "connected": true,
  "selfTestPassed": true,
  "providerId": hsm-partition-us-east-1a,
  "availableSessions": 8,
  "activeKeyCount": 42,
  "latencyMs": 2.5,
  "firmwareVersion": 7.4.0,
} satisfies HSMHealthResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as HSMHealthResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


