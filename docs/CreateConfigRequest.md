
# CreateConfigRequest

Request body for creating a new configuration entry. Matches `config.go` CreateConfigRequest struct.

## Properties

Name | Type
------------ | -------------
`key` | string
`value` | any
`type` | string
`description` | string

## Example

```typescript
import type { CreateConfigRequest } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "key": auth.session_timeout_minutes,
  "value": 30,
  "type": int,
  "description": Session timeout in minutes for all tenant users.,
} satisfies CreateConfigRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateConfigRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


