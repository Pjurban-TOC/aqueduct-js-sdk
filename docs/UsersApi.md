# UsersApi

All URIs are relative to *https://api.aqueduct.io:443*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getUserThemePreference**](UsersApi.md#getuserthemepreference) | **GET** /api/v1/users/{userID}/preferences/theme | Get user theme preference |
| [**setUserThemePreference**](UsersApi.md#setuserthemepreference) | **PUT** /api/v1/users/{userID}/preferences/theme | Set user theme preference |
| [**streamUserThemePreference**](UsersApi.md#streamuserthemepreference) | **GET** /api/v1/users/{userID}/preferences/theme/sse | Stream theme preference updates via SSE |



## getUserThemePreference

> ThemePreferenceResponse getUserThemePreference(userID)

Get user theme preference

Returns the theme preference for a user, including mode (light/dark/auto), accessibility settings (reduced motion, high contrast), and typography scale per WCAG 2.2 (2024) requirements. 

### Example

```ts
import {
  Configuration,
  UsersApi,
} from '@aqueduct-ai/sdk';
import type { GetUserThemePreferenceRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new UsersApi(config);

  const body = {
    // string | User identifier.
    userID: usr_admin_xyz789,
  } satisfies GetUserThemePreferenceRequest;

  try {
    const data = await api.getUserThemePreference(body);
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
| **userID** | `string` | User identifier. | [Defaults to `undefined`] |

### Return type

[**ThemePreferenceResponse**](ThemePreferenceResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | User theme preference. |  * X-Trace-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **404** | Resource not found (ERR-API-001-004). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## setUserThemePreference

> ThemePreferenceResponse setUserThemePreference(userID, setThemePreferenceRequest)

Set user theme preference

Updates the theme preference for a user. Changes are propagated to all connected devices via the SSE endpoint for cross-device synchronization. 

### Example

```ts
import {
  Configuration,
  UsersApi,
} from '@aqueduct-ai/sdk';
import type { SetUserThemePreferenceRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new UsersApi(config);

  const body = {
    // string | User identifier.
    userID: usr_admin_xyz789,
    // SetThemePreferenceRequest
    setThemePreferenceRequest: {"mode":"dark","reduced_motion":true,"system_high_contrast":false,"typography_scale":1.25},
  } satisfies SetUserThemePreferenceRequest;

  try {
    const data = await api.setUserThemePreference(body);
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
| **userID** | `string` | User identifier. | [Defaults to `undefined`] |
| **setThemePreferenceRequest** | [SetThemePreferenceRequest](SetThemePreferenceRequest.md) |  | |

### Return type

[**ThemePreferenceResponse**](ThemePreferenceResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Theme preference updated. |  * X-Trace-ID -  <br>  |
| **400** | Validation error (ERR-API-001-003). Request body or parameters failed validation. The &#x60;errors&#x60; array contains field-level details.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  * X-Request-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **404** | Resource not found (ERR-API-001-004). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **429** | Rate limit exceeded (ERR-API-001-001). Includes &#x60;Retry-After&#x60; header and IETF-standard rate limit headers.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  * Retry-After -  <br>  * RateLimit -  <br>  * RateLimit-Policy -  <br>  * X-RateLimit-Remaining-Tokens -  <br>  * X-RateLimit-Remaining-Requests -  <br>  |
| **500** | Unexpected server error (ERR-API-001-012). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## streamUserThemePreference

> string streamUserThemePreference(userID, deviceId, tenantId)

Stream theme preference updates via SSE

Opens a Server-Sent Events (SSE) connection for real-time cross-device theme synchronization. When a user updates their theme on one device, all other connected devices receive the update immediately.  **Event format:** &#x60;&#x60;&#x60; event: theme-update data: {\&quot;mode\&quot;:\&quot;dark\&quot;,\&quot;reduced_motion\&quot;:true,...} &#x60;&#x60;&#x60; 

### Example

```ts
import {
  Configuration,
  UsersApi,
} from '@aqueduct-ai/sdk';
import type { StreamUserThemePreferenceRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new UsersApi(config);

  const body = {
    // string | User identifier.
    userID: usr_admin_xyz789,
    // string | Unique device identifier to deduplicate update sources.
    deviceId: device_macbook_abc123,
    // string | Tenant context for the SSE connection. (optional)
    tenantId: tnt_acme-corp_a1b2c3,
  } satisfies StreamUserThemePreferenceRequest;

  try {
    const data = await api.streamUserThemePreference(body);
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
| **userID** | `string` | User identifier. | [Defaults to `undefined`] |
| **deviceId** | `string` | Unique device identifier to deduplicate update sources. | [Defaults to `undefined`] |
| **tenantId** | `string` | Tenant context for the SSE connection. | [Optional] [Defaults to `undefined`] |

### Return type

**string**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `text/event-stream`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | SSE stream of theme preference updates. |  * X-Trace-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **404** | Resource not found (ERR-API-001-004). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

