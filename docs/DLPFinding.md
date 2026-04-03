
# DLPFinding

Single PII detection finding. Multi-stage detection (pattern -> NER -> ML) per SafeGPT [arXiv:2601.06366] achieving 92% precision. 

## Properties

Name | Type
------------ | -------------
`infoType` | [InfoType](InfoType.md)
`likelihood` | string
`score` | number
`location` | [DLPFindingLocation](DLPFindingLocation.md)
`quote` | string
`detectionMethod` | string

## Example

```typescript
import type { DLPFinding } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "infoType": null,
  "likelihood": VERY_LIKELY,
  "score": 0.95,
  "location": null,
  "quote": 123-45-6789,
  "detectionMethod": ner,
} satisfies DLPFinding

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DLPFinding
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


