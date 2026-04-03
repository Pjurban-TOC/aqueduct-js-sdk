
# ValidationError

Single field validation error. Matches `common/errors/rfc7807.go:51` ValidationError struct. 

## Properties

Name | Type
------------ | -------------
`field` | string
`message` | string
`code` | string

## Example

```typescript
import type { ValidationError } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "field": name,
  "message": Name is required,
  "code": required,
} satisfies ValidationError

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ValidationError
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


