
# ValidateTokenResponse

Token validation result with decoded claims.

## Properties

Name | Type
------------ | -------------
`valid` | boolean
`sub` | string
`tid` | string
`roles` | Array&lt;string&gt;
`scopes` | Array&lt;string&gt;
`jti` | string

## Example

```typescript
import type { ValidateTokenResponse } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "valid": true,
  "sub": usr_johndoe_abc123,
  "tid": tnt_acme-corp_a1b2c3,
  "roles": ["tenant:admin","api:write"],
  "scopes": ["openid","profile","api:read"],
  "jti": tok_01HQ3XYZABC123DEF456,
} satisfies ValidateTokenResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ValidateTokenResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


