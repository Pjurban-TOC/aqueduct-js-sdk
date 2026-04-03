
# ToolDefinitionFunction


## Properties

Name | Type
------------ | -------------
`name` | string
`description` | string
`parameters` | object

## Example

```typescript
import type { ToolDefinitionFunction } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "name": get_weather,
  "description": Get the current weather for a location,
  "parameters": null,
} satisfies ToolDefinitionFunction

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ToolDefinitionFunction
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


