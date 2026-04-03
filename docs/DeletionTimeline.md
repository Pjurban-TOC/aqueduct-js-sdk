
# DeletionTimeline

Key milestones in the deletion process.

## Properties

Name | Type
------------ | -------------
`softDeleteAt` | Date
`hardDeleteAt` | Date
`completedAt` | Date

## Example

```typescript
import type { DeletionTimeline } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "softDeleteAt": 2025-01-18T14:30Z,
  "hardDeleteAt": 2025-02-15T14:30Z,
  "completedAt": null,
} satisfies DeletionTimeline

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeletionTimeline
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


