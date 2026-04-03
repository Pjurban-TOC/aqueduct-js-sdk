
# ConfigUpdateConfigRequest

Request body for updating an existing configuration entry. Matches `config.go` UpdateConfigRequest struct.

## Properties

Name | Type
------------ | -------------
`value` | any
`type` | string
`description` | string

## Example

```typescript
import type { ConfigUpdateConfigRequest } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "value": 60,
  "type": int,
  "description": Session timeout in minutes (updated from 30 to 60).,
} satisfies ConfigUpdateConfigRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ConfigUpdateConfigRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


