
# ListSubscriptionsResponse

Paginated list of subscriptions. Handler returns: {\"subscriptions\":[], \"next_cursor\":\"\", \"has_more\":bool} 

## Properties

Name | Type
------------ | -------------
`subscriptions` | [Array&lt;Subscription&gt;](Subscription.md)
`nextCursor` | string
`hasMore` | boolean

## Example

```typescript
import type { ListSubscriptionsResponse } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "subscriptions": null,
  "nextCursor": 1711036800000000000_1,
  "hasMore": false,
} satisfies ListSubscriptionsResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ListSubscriptionsResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


