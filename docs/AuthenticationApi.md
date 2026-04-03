# AuthenticationApi

All URIs are relative to *https://api.aqueduct.io:443*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**deleteSession**](AuthenticationApi.md#deletesession) | **DELETE** /api/v1/auth/sessions/{session_id} | Terminate a session |
| [**getJwks**](AuthenticationApi.md#getjwks) | **GET** /.well-known/jwks.json | Get JSON Web Key Set |
| [**listSessions**](AuthenticationApi.md#listsessions) | **GET** /api/v1/auth/sessions | List active sessions |
| [**refreshToken**](AuthenticationApi.md#refreshtokenoperation) | **POST** /api/v1/auth/token/refresh | Refresh an access token |
| [**revokeToken**](AuthenticationApi.md#revoketokenoperation) | **POST** /api/v1/auth/token/revoke | Revoke a token |
| [**validateToken**](AuthenticationApi.md#validatetokenoperation) | **POST** /api/v1/auth/validate | Validate an access token |



## deleteSession

> DeleteSession200Response deleteSession(sessionId)

Terminate a session

Terminates a specific session, revoking all associated tokens.

### Example

```ts
import {
  Configuration,
  AuthenticationApi,
} from '@aqueduct-ai/sdk';
import type { DeleteSessionRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AuthenticationApi(config);

  const body = {
    // string | Session identifier to terminate.
    sessionId: sessionId_example,
  } satisfies DeleteSessionRequest;

  try {
    const data = await api.deleteSession(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **sessionId** | `string` | Session identifier to terminate. | [Defaults to `undefined`] |

### Return type

[**DeleteSession200Response**](DeleteSession200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Session terminated. |  * X-Trace-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **404** | Resource not found (ERR-API-001-004). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getJwks

> JWKSet getJwks()

Get JSON Web Key Set

Returns the public keys used to verify JWT tokens issued by the auth service. Follows the [RFC 7517 (JWK)](https://www.rfc-editor.org/rfc/rfc7517) standard. Clients should cache this response and refresh periodically. 

### Example

```ts
import {
  Configuration,
  AuthenticationApi,
} from '@aqueduct-ai/sdk';
import type { GetJwksRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const api = new AuthenticationApi();

  try {
    const data = await api.getJwks();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**JWKSet**](JWKSet.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | JSON Web Key Set. |  * X-Trace-ID -  <br>  |
| **404** | Resource not found (ERR-API-001-004). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **500** | Unexpected server error (ERR-API-001-012). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listSessions

> ListSessionsResponse listSessions()

List active sessions

Returns all active sessions for the authenticated user.

### Example

```ts
import {
  Configuration,
  AuthenticationApi,
} from '@aqueduct-ai/sdk';
import type { ListSessionsRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AuthenticationApi(config);

  try {
    const data = await api.listSessions();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ListSessionsResponse**](ListSessionsResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Active sessions. |  * X-Trace-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## refreshToken

> RefreshTokenResponse refreshToken(refreshTokenRequest)

Refresh an access token

Exchange a refresh token for a new access token and rotated refresh token. The old refresh token is invalidated after use (one-time use). 

### Example

```ts
import {
  Configuration,
  AuthenticationApi,
} from '@aqueduct-ai/sdk';
import type { RefreshTokenOperationRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const api = new AuthenticationApi();

  const body = {
    // RefreshTokenRequest
    refreshTokenRequest: {"refresh_token":"dGhpcyBpcyBhIHJlZnJlc2ggdG9rZW4...","session_id":"ses_01HQ3XYZABC123"},
  } satisfies RefreshTokenOperationRequest;

  try {
    const data = await api.refreshToken(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **refreshTokenRequest** | [RefreshTokenRequest](RefreshTokenRequest.md) |  | |

### Return type

[**RefreshTokenResponse**](RefreshTokenResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | New token pair. |  * X-Trace-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## revokeToken

> RevokeToken200Response revokeToken(revokeTokenRequest)

Revoke a token

Revokes an access or refresh token. Supports explicit context destruction for session lifecycle management. 

### Example

```ts
import {
  Configuration,
  AuthenticationApi,
} from '@aqueduct-ai/sdk';
import type { RevokeTokenOperationRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AuthenticationApi(config);

  const body = {
    // RevokeTokenRequest
    revokeTokenRequest: {"token":"eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImFxdWVkdWN0LTIwMjUtMDEifQ.eyJzdWIiOiJ1c3Jfam9obmRvZV9hYmMxMjMifQ.signature","reason":"user_logout"},
  } satisfies RevokeTokenOperationRequest;

  try {
    const data = await api.revokeToken(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **revokeTokenRequest** | [RevokeTokenRequest](RevokeTokenRequest.md) |  | |

### Return type

[**RevokeToken200Response**](RevokeToken200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Token revoked. |  * X-Trace-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## validateToken

> ValidateTokenResponse validateToken(validateTokenRequest)

Validate an access token

Validates a JWT access token and returns decoded claims if valid.

### Example

```ts
import {
  Configuration,
  AuthenticationApi,
} from '@aqueduct-ai/sdk';
import type { ValidateTokenOperationRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AuthenticationApi(config);

  const body = {
    // ValidateTokenRequest
    validateTokenRequest: {"token":"eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImFxdWVkdWN0LTIwMjUtMDEifQ.eyJzdWIiOiJ1c3Jfam9obmRvZV9hYmMxMjMiLCJ0aWQiOiJ0bnRfYWNtZS1jb3JwX2ExYjJjMyJ9.signature"},
  } satisfies ValidateTokenOperationRequest;

  try {
    const data = await api.validateToken(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **validateTokenRequest** | [ValidateTokenRequest](ValidateTokenRequest.md) |  | |

### Return type

[**ValidateTokenResponse**](ValidateTokenResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Token validation result. |  * X-Trace-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

