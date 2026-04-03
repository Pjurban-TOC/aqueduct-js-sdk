
# AuditLogEntryPerformance

Performance metrics. TTFT, TBT per Metron [arXiv:2407.07000]. Prefill vs. decode tracked separately per Sarathi-Serve [OSDI 2024]. Raw latencies (not normalized) per LLM-Inference-Bench [arXiv:2411.00136]. 

## Properties

Name | Type
------------ | -------------
`totalLatencyMs` | number
`ttftMs` | number
`tbtMs` | number
`prefillLatencyMs` | number
`decodeLatencyMs` | number
`tokensPerSecond` | number
`queueTimeMs` | number

## Example

```typescript
import type { AuditLogEntryPerformance } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "totalLatencyMs": 1200,
  "ttftMs": 180,
  "tbtMs": 4.2,
  "prefillLatencyMs": 150,
  "decodeLatencyMs": 1050,
  "tokensPerSecond": 62.5,
  "queueTimeMs": 20,
} satisfies AuditLogEntryPerformance

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AuditLogEntryPerformance
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


