
# FeatureFlagListResponse

List of all feature flags. Matches `config.go` FeatureFlagListResponse struct.

## Properties

Name | Type
------------ | -------------
`flags` | [Array&lt;FeatureFlag&gt;](FeatureFlag.md)

## Example

```typescript
import type { FeatureFlagListResponse } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "flags": null,
} satisfies FeatureFlagListResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FeatureFlagListResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


