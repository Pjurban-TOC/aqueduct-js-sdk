
# ThemePreference

Persisted theme preference for a user within a tenant. Matches `preferences.go` ThemePreference.

## Properties

Name | Type
------------ | -------------
`userId` | string
`tenantId` | string
`mode` | [ThemeMode](ThemeMode.md)
`reducedMotion` | boolean
`systemHighContrast` | boolean
`typographyScale` | number
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { ThemePreference } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "userId": usr_admin_xyz789,
  "tenantId": tnt_acme-corp_a1b2c3,
  "mode": null,
  "reducedMotion": false,
  "systemHighContrast": false,
  "typographyScale": 1,
  "createdAt": 2025-01-15T14:30Z,
  "updatedAt": 2025-01-15T15:00Z,
} satisfies ThemePreference

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ThemePreference
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


