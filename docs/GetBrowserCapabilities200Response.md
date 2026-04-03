
# GetBrowserCapabilities200Response


## Properties

Name | Type
------------ | -------------
`supportedFeatures` | Array&lt;string&gt;
`version` | string

## Example

```typescript
import type { GetBrowserCapabilities200Response } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "supportedFeatures": ["webgl","webrtc","websocket","service-worker"],
  "version": 1.0.0,
} satisfies GetBrowserCapabilities200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetBrowserCapabilities200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


