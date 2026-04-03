
# ProblemDetail

RFC 7807 Problem Details response. All error responses from the Aqueduct API use this format with `application/problem+json` content type. Matches `common/errors/rfc7807.go:34` ProblemDetail struct. 

## Properties

Name | Type
------------ | -------------
`type` | string
`title` | string
`status` | number
`detail` | string
`instance` | string
`code` | string
`traceId` | string
`timestamp` | Date
`retryAfter` | number
`errors` | [Array&lt;ValidationError&gt;](ValidationError.md)

## Example

```typescript
import type { ProblemDetail } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "type": https://aqueduct.ai/errors/validation-error,
  "title": Validation Error,
  "status": 400,
  "detail": Request validation failed,
  "instance": /api/v1/tenants,
  "code": ERR-API-001-003,
  "traceId": 01HQVXYZ89ABCDEFGHJKMNPQRS,
  "timestamp": 2025-01-15T14:30Z,
  "retryAfter": 60,
  "errors": null,
} satisfies ProblemDetail

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ProblemDetail
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


