
# SetThemePreferenceRequest

Request body for creating or updating a user\'s theme preference.

## Properties

Name | Type
------------ | -------------
`mode` | [ThemeMode](ThemeMode.md)
`reducedMotion` | boolean
`systemHighContrast` | boolean
`typographyScale` | number

## Example

```typescript
import type { SetThemePreferenceRequest } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "mode": null,
  "reducedMotion": false,
  "systemHighContrast": false,
  "typographyScale": 1,
} satisfies SetThemePreferenceRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SetThemePreferenceRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


