
# ThemePreferenceResponse

Wrapper following SuccessResponse pattern. Contains the resolved theme preference.

## Properties

Name | Type
------------ | -------------
`data` | [ThemePreference](ThemePreference.md)

## Example

```typescript
import type { ThemePreferenceResponse } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "data": null,
} satisfies ThemePreferenceResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ThemePreferenceResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


