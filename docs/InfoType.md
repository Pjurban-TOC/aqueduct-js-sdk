
# InfoType

PII entity type identifier. 18+ types from Microsoft Presidio. Per PRvL [arXiv:2508.05545], entity type-specific sensitivity controls are needed as NER struggles with contextual PII. 

## Properties

Name | Type
------------ | -------------

## Example

```typescript
import type { InfoType } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
} satisfies InfoType

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as InfoType
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


