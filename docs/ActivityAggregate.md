
# ActivityAggregate

Activity aggregate. Matches domain/event.go ActivityAggregate struct.

## Properties

Name | Type
------------ | -------------
`tenantId` | string
`windowType` | string
`windowStart` | Date
`windowEnd` | Date
`eventCount` | number
`uniqueUsers` | number
`errorCount` | number
`errorRate` | number
`actionDistribution` | { [key: string]: number; }
`resourceDistribution` | { [key: string]: number; }
`outcomeDistribution` | { [key: string]: number; }
`topUsers` | [Array&lt;ActivityAggregateTopUsersInner&gt;](ActivityAggregateTopUsersInner.md)
`topResources` | [Array&lt;ActivityAggregateTopResourcesInner&gt;](ActivityAggregateTopResourcesInner.md)
`topActions` | [Array&lt;ActivityAggregateTopActionsInner&gt;](ActivityAggregateTopActionsInner.md)
`computedAt` | Date

## Example

```typescript
import type { ActivityAggregate } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "tenantId": tnt_acme-corp_a1b2c3,
  "windowType": hourly,
  "windowStart": null,
  "windowEnd": null,
  "eventCount": 5000,
  "uniqueUsers": 150,
  "errorCount": 25,
  "errorRate": 0.005,
  "actionDistribution": {"document.view":3000,"auth.login":500},
  "resourceDistribution": null,
  "outcomeDistribution": {"success":4975,"failure":25},
  "topUsers": null,
  "topResources": null,
  "topActions": null,
  "computedAt": null,
} satisfies ActivityAggregate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ActivityAggregate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


