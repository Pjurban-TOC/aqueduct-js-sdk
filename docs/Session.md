
# Session

Active user session.

## Properties

Name | Type
------------ | -------------
`sessionId` | string
`userId` | string
`tenantId` | string
`accessTokenJti` | string
`refreshTokenHash` | string
`createdAt` | Date
`expiresAt` | Date
`lastActiveAt` | Date
`ipAddress` | string
`userAgent` | string
`mfaVerified` | boolean
`revoked` | boolean
`revokedReason` | string
`dpopKeyThumbprint` | string

## Example

```typescript
import type { Session } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "sessionId": ses_01HQ3XYZABC123,
  "userId": usr_johndoe_abc123,
  "tenantId": tnt_acme-corp_a1b2c3,
  "accessTokenJti": tok_01HQ3XYZABC123DEF456,
  "refreshTokenHash": sha256:a3f2b8c1d4e5...,
  "createdAt": 2025-01-15T08:00Z,
  "expiresAt": 2025-01-15T16:00Z,
  "lastActiveAt": 2025-01-15T14:30Z,
  "ipAddress": 192.168.1.100,
  "userAgent": Mozilla/5.0 (Windows NT 10.0; Win64; x64),
  "mfaVerified": true,
  "revoked": false,
  "revokedReason": admin_action,
  "dpopKeyThumbprint": 0ZcOCORZNYy-DWpqq30jZyJGHTN0d2HglBV3uiguA4I,
} satisfies Session

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Session
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


