
# InvalidateCacheRequest


## Properties

Name | Type
------------ | -------------
`pattern` | string
`keys` | Array&lt;string&gt;
`tags` | Array&lt;string&gt;

## Example

```typescript
import type { InvalidateCacheRequest } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "pattern": tenant:tnt_acme-corp_a1b2c3:*,
  "keys": null,
  "tags": null,
} satisfies InvalidateCacheRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as InvalidateCacheRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


