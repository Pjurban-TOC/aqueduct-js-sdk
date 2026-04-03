
# ConfigVersion

A single version record from the configuration version history. Matches `config.go` ConfigVersion struct.

## Properties

Name | Type
------------ | -------------
`key` | string
`version` | number
`value` | any
`timestamp` | Date
`changedBy` | string
`reason` | string

## Example

```typescript
import type { ConfigVersion } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "key": auth.session_timeout_minutes,
  "version": 2,
  "value": 30,
  "timestamp": 2025-06-09T08:00Z,
  "changedBy": usr_admin_xyz789,
  "reason": Increased timeout per security review recommendation.,
} satisfies ConfigVersion

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ConfigVersion
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


