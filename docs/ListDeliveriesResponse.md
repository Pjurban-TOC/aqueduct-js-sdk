
# ListDeliveriesResponse

Paginated list of delivery attempts. Handler returns: {\"deliveries\":[], \"next_cursor\":\"\", \"has_more\":bool} 

## Properties

Name | Type
------------ | -------------
`deliveries` | [Array&lt;Delivery&gt;](Delivery.md)
`nextCursor` | string
`hasMore` | boolean

## Example

```typescript
import type { ListDeliveriesResponse } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "deliveries": null,
  "nextCursor": 1711036800100000000_2,
  "hasMore": true,
} satisfies ListDeliveriesResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ListDeliveriesResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


