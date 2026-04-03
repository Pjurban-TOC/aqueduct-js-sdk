# ConfigurationApi

All URIs are relative to *https://api.aqueduct.io:443*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createConfig**](ConfigurationApi.md#createconfigoperation) | **POST** /api/v1/config | Create a configuration entry |
| [**deleteConfig**](ConfigurationApi.md#deleteconfig) | **DELETE** /api/v1/config/{key} | Delete a configuration entry |
| [**deleteTenantConfigOverride**](ConfigurationApi.md#deletetenantconfigoverride) | **DELETE** /api/v1/tenants/{tenant_id}/config/{key} | Delete a tenant configuration override |
| [**evaluateFlag**](ConfigurationApi.md#evaluateflag) | **GET** /api/v1/flags/{flag} | Evaluate a feature flag |
| [**getConfig**](ConfigurationApi.md#getconfig) | **GET** /api/v1/config/{key} | Get configuration entry by key |
| [**getTenantMergedConfig**](ConfigurationApi.md#gettenantmergedconfig) | **GET** /api/v1/tenants/{tenant_id}/config | Get merged tenant configuration |
| [**listConfigAudit**](ConfigurationApi.md#listconfigaudit) | **GET** /api/v1/audit | List configuration audit log |
| [**listConfigVersions**](ConfigurationApi.md#listconfigversions) | **GET** /api/v1/config/{key}/versions | List version history for a configuration entry |
| [**listConfigs**](ConfigurationApi.md#listconfigs) | **GET** /api/v1/config | List configuration entries |
| [**listFlags**](ConfigurationApi.md#listflags) | **GET** /api/v1/flags | List all feature flags |
| [**rollbackConfig**](ConfigurationApi.md#rollbackconfig) | **POST** /api/v1/config/{key}/rollback | Rollback configuration to a previous version |
| [**setGlobalFlag**](ConfigurationApi.md#setglobalflag) | **PUT** /api/v1/flags/{flag} | Set global feature flag value |
| [**setTenantConfigOverride**](ConfigurationApi.md#settenantconfigoverride) | **PUT** /api/v1/tenants/{tenant_id}/config/{key} | Set a tenant configuration override |
| [**setTenantFlagOverride**](ConfigurationApi.md#settenantflagoverride) | **PUT** /api/v1/flags/{flag}/tenant/{tenant_id} | Set tenant-specific feature flag override |
| [**updateConfig**](ConfigurationApi.md#updateconfig) | **PUT** /api/v1/config/{key} | Update a configuration entry |



## createConfig

> ConfigEntry createConfig(createConfigRequest)

Create a configuration entry

Creates a new configuration entry with versioning. The initial version is 1. All changes are recorded in the config audit log per ISpec [arXiv:2512.17259] policy-as-code requirements. 

### Example

```ts
import {
  Configuration,
  ConfigurationApi,
} from '@aqueduct-ai/sdk';
import type { CreateConfigOperationRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ConfigurationApi(config);

  const body = {
    // CreateConfigRequest
    createConfigRequest: {"key":"auth.session_timeout_minutes","value":30,"type":"int","description":"Session timeout in minutes for all tenants"},
  } satisfies CreateConfigOperationRequest;

  try {
    const data = await api.createConfig(body);
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
| **createConfigRequest** | [CreateConfigRequest](CreateConfigRequest.md) |  | |

### Return type

[**ConfigEntry**](ConfigEntry.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Configuration entry created. |  * X-Trace-ID -  <br>  |
| **400** | Validation error (ERR-API-001-003). Request body or parameters failed validation. The &#x60;errors&#x60; array contains field-level details.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  * X-Request-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **409** | Resource conflict (ERR-API-001-014). The request could not be completed due to a conflict with the current state of the target resource.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **429** | Rate limit exceeded (ERR-API-001-001). Includes &#x60;Retry-After&#x60; header and IETF-standard rate limit headers.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  * Retry-After -  <br>  * RateLimit -  <br>  * RateLimit-Policy -  <br>  * X-RateLimit-Remaining-Tokens -  <br>  * X-RateLimit-Remaining-Requests -  <br>  |
| **500** | Unexpected server error (ERR-API-001-012). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteConfig

> deleteConfig(key)

Delete a configuration entry

Permanently removes a configuration entry and all its version history.

### Example

```ts
import {
  Configuration,
  ConfigurationApi,
} from '@aqueduct-ai/sdk';
import type { DeleteConfigRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ConfigurationApi(config);

  const body = {
    // string | Configuration key matching `^[a-zA-Z0-9._-]+$`.
    key: auth.session_timeout_minutes,
  } satisfies DeleteConfigRequest;

  try {
    const data = await api.deleteConfig(body);
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
| **key** | `string` | Configuration key matching &#x60;^[a-zA-Z0-9._-]+$&#x60;. | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Configuration entry deleted. |  * X-Trace-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **404** | Resource not found (ERR-API-001-004). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **429** | Rate limit exceeded (ERR-API-001-001). Includes &#x60;Retry-After&#x60; header and IETF-standard rate limit headers.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  * Retry-After -  <br>  * RateLimit -  <br>  * RateLimit-Policy -  <br>  * X-RateLimit-Remaining-Tokens -  <br>  * X-RateLimit-Remaining-Requests -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteTenantConfigOverride

> deleteTenantConfigOverride(tenantId, key)

Delete a tenant configuration override

Removes a tenant-specific override, reverting to the global default.

### Example

```ts
import {
  Configuration,
  ConfigurationApi,
} from '@aqueduct-ai/sdk';
import type { DeleteTenantConfigOverrideRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ConfigurationApi(config);

  const body = {
    // string | Tenant identifier matching the pattern `tnt_{slug}_{suffix}`.
    tenantId: tnt_acme-corp_a1b2c3,
    // string | Configuration key matching `^[a-zA-Z0-9._-]+$`.
    key: auth.session_timeout_minutes,
  } satisfies DeleteTenantConfigOverrideRequest;

  try {
    const data = await api.deleteTenantConfigOverride(body);
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
| **tenantId** | `string` | Tenant identifier matching the pattern &#x60;tnt_{slug}_{suffix}&#x60;. | [Defaults to `undefined`] |
| **key** | `string` | Configuration key matching &#x60;^[a-zA-Z0-9._-]+$&#x60;. | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Override deleted. |  * X-Trace-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **404** | Resource not found (ERR-API-001-004). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **429** | Rate limit exceeded (ERR-API-001-001). Includes &#x60;Retry-After&#x60; header and IETF-standard rate limit headers.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  * Retry-After -  <br>  * RateLimit -  <br>  * RateLimit-Policy -  <br>  * X-RateLimit-Remaining-Tokens -  <br>  * X-RateLimit-Remaining-Requests -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## evaluateFlag

> FlagEvaluationResponse evaluateFlag(flag, tenantId)

Evaluate a feature flag

Evaluates a feature flag, optionally for a specific tenant. Tenant overrides take precedence over global flag values. 

### Example

```ts
import {
  Configuration,
  ConfigurationApi,
} from '@aqueduct-ai/sdk';
import type { EvaluateFlagRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ConfigurationApi(config);

  const body = {
    // string | Feature flag name.
    flag: enable-rag-v2,
    // string | Filter or scope results to a specific tenant. (optional)
    tenantId: tnt_acme-corp_a1b2c3,
  } satisfies EvaluateFlagRequest;

  try {
    const data = await api.evaluateFlag(body);
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
| **flag** | `string` | Feature flag name. | [Defaults to `undefined`] |
| **tenantId** | `string` | Filter or scope results to a specific tenant. | [Optional] [Defaults to `undefined`] |

### Return type

[**FlagEvaluationResponse**](FlagEvaluationResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Flag evaluation result. |  * X-Trace-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **404** | Resource not found (ERR-API-001-004). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getConfig

> ConfigEntry getConfig(key)

Get configuration entry by key

Returns a single configuration entry by its key.

### Example

```ts
import {
  Configuration,
  ConfigurationApi,
} from '@aqueduct-ai/sdk';
import type { GetConfigRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ConfigurationApi(config);

  const body = {
    // string | Configuration key matching `^[a-zA-Z0-9._-]+$`.
    key: auth.session_timeout_minutes,
  } satisfies GetConfigRequest;

  try {
    const data = await api.getConfig(body);
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
| **key** | `string` | Configuration key matching &#x60;^[a-zA-Z0-9._-]+$&#x60;. | [Defaults to `undefined`] |

### Return type

[**ConfigEntry**](ConfigEntry.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Configuration entry. |  * X-Trace-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **404** | Resource not found (ERR-API-001-004). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getTenantMergedConfig

> ConfigListResponse getTenantMergedConfig(tenantId)

Get merged tenant configuration

Returns the effective configuration for a tenant by merging global defaults with tenant-specific overrides. Overrides take precedence. 

### Example

```ts
import {
  Configuration,
  ConfigurationApi,
} from '@aqueduct-ai/sdk';
import type { GetTenantMergedConfigRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ConfigurationApi(config);

  const body = {
    // string | Tenant identifier matching the pattern `tnt_{slug}_{suffix}`.
    tenantId: tnt_acme-corp_a1b2c3,
  } satisfies GetTenantMergedConfigRequest;

  try {
    const data = await api.getTenantMergedConfig(body);
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
| **tenantId** | `string` | Tenant identifier matching the pattern &#x60;tnt_{slug}_{suffix}&#x60;. | [Defaults to `undefined`] |

### Return type

[**ConfigListResponse**](ConfigListResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Merged tenant configuration. |  * X-Trace-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **404** | Resource not found (ERR-API-001-004). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listConfigAudit

> ConfigAuditListResponse listConfigAudit(key, tenantId, limit, cursor)

List configuration audit log

Returns the audit trail for configuration changes. Tracks create, update, delete, and rollback operations across all config entries. 

### Example

```ts
import {
  Configuration,
  ConfigurationApi,
} from '@aqueduct-ai/sdk';
import type { ListConfigAuditRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ConfigurationApi(config);

  const body = {
    // string | Filter by configuration key. (optional)
    key: key_example,
    // string | Filter or scope results to a specific tenant. (optional)
    tenantId: tnt_acme-corp_a1b2c3,
    // number | Maximum entries to return. (optional)
    limit: 56,
    // string | Opaque cursor for pagination. Obtained from `next_cursor` in the previous response. (optional)
    cursor: cursor_example,
  } satisfies ListConfigAuditRequest;

  try {
    const data = await api.listConfigAudit(body);
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
| **key** | `string` | Filter by configuration key. | [Optional] [Defaults to `undefined`] |
| **tenantId** | `string` | Filter or scope results to a specific tenant. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Maximum entries to return. | [Optional] [Defaults to `20`] |
| **cursor** | `string` | Opaque cursor for pagination. Obtained from &#x60;next_cursor&#x60; in the previous response. | [Optional] [Defaults to `undefined`] |

### Return type

[**ConfigAuditListResponse**](ConfigAuditListResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Configuration audit log. |  * X-Trace-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listConfigVersions

> ConfigVersionListResponse listConfigVersions(key, pageSize, cursor)

List version history for a configuration entry

Returns the full version history for a configuration key, ordered by version number descending. Supports audit trail requirements per TRiSM [arXiv:2506.04133] model lineage tracking. 

### Example

```ts
import {
  Configuration,
  ConfigurationApi,
} from '@aqueduct-ai/sdk';
import type { ListConfigVersionsRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ConfigurationApi(config);

  const body = {
    // string | Configuration key matching `^[a-zA-Z0-9._-]+$`.
    key: auth.session_timeout_minutes,
    // number | Maximum number of items to return per page. (optional)
    pageSize: 56,
    // string | Opaque cursor for pagination. Obtained from `next_cursor` in the previous response. (optional)
    cursor: cursor_example,
  } satisfies ListConfigVersionsRequest;

  try {
    const data = await api.listConfigVersions(body);
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
| **key** | `string` | Configuration key matching &#x60;^[a-zA-Z0-9._-]+$&#x60;. | [Defaults to `undefined`] |
| **pageSize** | `number` | Maximum number of items to return per page. | [Optional] [Defaults to `20`] |
| **cursor** | `string` | Opaque cursor for pagination. Obtained from &#x60;next_cursor&#x60; in the previous response. | [Optional] [Defaults to `undefined`] |

### Return type

[**ConfigVersionListResponse**](ConfigVersionListResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Version history list. |  * X-Trace-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **404** | Resource not found (ERR-API-001-004). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listConfigs

> ConfigListResponse listConfigs(prefix, pageSize, cursor)

List configuration entries

Returns a paginated list of all configuration entries, optionally filtered by key prefix.

### Example

```ts
import {
  Configuration,
  ConfigurationApi,
} from '@aqueduct-ai/sdk';
import type { ListConfigsRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ConfigurationApi(config);

  const body = {
    // string | Filter by key prefix (e.g., `auth.` returns all auth-related config). (optional)
    prefix: auth.,
    // number | Maximum number of items to return per page. (optional)
    pageSize: 56,
    // string | Opaque cursor for pagination. Obtained from `next_cursor` in the previous response. (optional)
    cursor: cursor_example,
  } satisfies ListConfigsRequest;

  try {
    const data = await api.listConfigs(body);
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
| **prefix** | `string` | Filter by key prefix (e.g., &#x60;auth.&#x60; returns all auth-related config). | [Optional] [Defaults to `undefined`] |
| **pageSize** | `number` | Maximum number of items to return per page. | [Optional] [Defaults to `20`] |
| **cursor** | `string` | Opaque cursor for pagination. Obtained from &#x60;next_cursor&#x60; in the previous response. | [Optional] [Defaults to `undefined`] |

### Return type

[**ConfigListResponse**](ConfigListResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Paginated configuration list. |  * X-Trace-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **429** | Rate limit exceeded (ERR-API-001-001). Includes &#x60;Retry-After&#x60; header and IETF-standard rate limit headers.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  * Retry-After -  <br>  * RateLimit -  <br>  * RateLimit-Policy -  <br>  * X-RateLimit-Remaining-Tokens -  <br>  * X-RateLimit-Remaining-Requests -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listFlags

> FeatureFlagListResponse listFlags()

List all feature flags

Returns all registered feature flags with their current global state.

### Example

```ts
import {
  Configuration,
  ConfigurationApi,
} from '@aqueduct-ai/sdk';
import type { ListFlagsRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ConfigurationApi(config);

  try {
    const data = await api.listFlags();
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

[**FeatureFlagListResponse**](FeatureFlagListResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Feature flag list. |  * X-Trace-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## rollbackConfig

> ConfigEntry rollbackConfig(key, rollbackRequest)

Rollback configuration to a previous version

Rolls back a configuration entry to the specified version number. Creates a new version with the rolled-back value. 

### Example

```ts
import {
  Configuration,
  ConfigurationApi,
} from '@aqueduct-ai/sdk';
import type { RollbackConfigRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ConfigurationApi(config);

  const body = {
    // string | Configuration key matching `^[a-zA-Z0-9._-]+$`.
    key: auth.session_timeout_minutes,
    // RollbackRequest
    rollbackRequest: {"version":2},
  } satisfies RollbackConfigRequest;

  try {
    const data = await api.rollbackConfig(body);
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
| **key** | `string` | Configuration key matching &#x60;^[a-zA-Z0-9._-]+$&#x60;. | [Defaults to `undefined`] |
| **rollbackRequest** | [RollbackRequest](RollbackRequest.md) |  | |

### Return type

[**ConfigEntry**](ConfigEntry.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Configuration rolled back successfully. |  * X-Trace-ID -  <br>  |
| **400** | Validation error (ERR-API-001-003). Request body or parameters failed validation. The &#x60;errors&#x60; array contains field-level details.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  * X-Request-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **404** | Resource not found (ERR-API-001-004). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **429** | Rate limit exceeded (ERR-API-001-001). Includes &#x60;Retry-After&#x60; header and IETF-standard rate limit headers.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  * Retry-After -  <br>  * RateLimit -  <br>  * RateLimit-Policy -  <br>  * X-RateLimit-Remaining-Tokens -  <br>  * X-RateLimit-Remaining-Requests -  <br>  |
| **500** | Unexpected server error (ERR-API-001-012). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## setGlobalFlag

> FeatureFlag setGlobalFlag(flag, setFlagRequest)

Set global feature flag value

Sets the global (default) value for a feature flag.

### Example

```ts
import {
  Configuration,
  ConfigurationApi,
} from '@aqueduct-ai/sdk';
import type { SetGlobalFlagRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ConfigurationApi(config);

  const body = {
    // string | Feature flag name.
    flag: enable-rag-v2,
    // SetFlagRequest
    setFlagRequest: {"enabled":true,"description":"Enable RAG v2 hybrid search globally"},
  } satisfies SetGlobalFlagRequest;

  try {
    const data = await api.setGlobalFlag(body);
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
| **flag** | `string` | Feature flag name. | [Defaults to `undefined`] |
| **setFlagRequest** | [SetFlagRequest](SetFlagRequest.md) |  | |

### Return type

[**FeatureFlag**](FeatureFlag.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Flag updated. |  * X-Trace-ID -  <br>  |
| **400** | Validation error (ERR-API-001-003). Request body or parameters failed validation. The &#x60;errors&#x60; array contains field-level details.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  * X-Request-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **404** | Resource not found (ERR-API-001-004). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **429** | Rate limit exceeded (ERR-API-001-001). Includes &#x60;Retry-After&#x60; header and IETF-standard rate limit headers.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  * Retry-After -  <br>  * RateLimit -  <br>  * RateLimit-Policy -  <br>  * X-RateLimit-Remaining-Tokens -  <br>  * X-RateLimit-Remaining-Requests -  <br>  |
| **500** | Unexpected server error (ERR-API-001-012). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## setTenantConfigOverride

> SetTenantConfigOverride200Response setTenantConfigOverride(tenantId, key, setOverrideRequest)

Set a tenant configuration override

Sets a tenant-specific override for a configuration key. The override takes precedence over the global value when the merged config is read. 

### Example

```ts
import {
  Configuration,
  ConfigurationApi,
} from '@aqueduct-ai/sdk';
import type { SetTenantConfigOverrideRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ConfigurationApi(config);

  const body = {
    // string | Tenant identifier matching the pattern `tnt_{slug}_{suffix}`.
    tenantId: tnt_acme-corp_a1b2c3,
    // string | Configuration key matching `^[a-zA-Z0-9._-]+$`.
    key: auth.session_timeout_minutes,
    // SetOverrideRequest
    setOverrideRequest: {"value":15,"type":"int","description":"Stricter session timeout for this tenant"},
  } satisfies SetTenantConfigOverrideRequest;

  try {
    const data = await api.setTenantConfigOverride(body);
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
| **tenantId** | `string` | Tenant identifier matching the pattern &#x60;tnt_{slug}_{suffix}&#x60;. | [Defaults to `undefined`] |
| **key** | `string` | Configuration key matching &#x60;^[a-zA-Z0-9._-]+$&#x60;. | [Defaults to `undefined`] |
| **setOverrideRequest** | [SetOverrideRequest](SetOverrideRequest.md) |  | |

### Return type

[**SetTenantConfigOverride200Response**](SetTenantConfigOverride200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Override set. |  * X-Trace-ID -  <br>  |
| **400** | Validation error (ERR-API-001-003). Request body or parameters failed validation. The &#x60;errors&#x60; array contains field-level details.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  * X-Request-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **404** | Resource not found (ERR-API-001-004). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **429** | Rate limit exceeded (ERR-API-001-001). Includes &#x60;Retry-After&#x60; header and IETF-standard rate limit headers.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  * Retry-After -  <br>  * RateLimit -  <br>  * RateLimit-Policy -  <br>  * X-RateLimit-Remaining-Tokens -  <br>  * X-RateLimit-Remaining-Requests -  <br>  |
| **500** | Unexpected server error (ERR-API-001-012). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## setTenantFlagOverride

> SetTenantFlagOverride200Response setTenantFlagOverride(flag, tenantId, setFlagRequest)

Set tenant-specific feature flag override

Overrides a feature flag value for a specific tenant. The override takes precedence over the global flag value during evaluation. 

### Example

```ts
import {
  Configuration,
  ConfigurationApi,
} from '@aqueduct-ai/sdk';
import type { SetTenantFlagOverrideRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ConfigurationApi(config);

  const body = {
    // string | Feature flag name.
    flag: enable-rag-v2,
    // string | Tenant identifier matching the pattern `tnt_{slug}_{suffix}`.
    tenantId: tnt_acme-corp_a1b2c3,
    // SetFlagRequest
    setFlagRequest: {"enabled":false,"description":"Disable RAG v2 for this tenant pending migration"},
  } satisfies SetTenantFlagOverrideRequest;

  try {
    const data = await api.setTenantFlagOverride(body);
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
| **flag** | `string` | Feature flag name. | [Defaults to `undefined`] |
| **tenantId** | `string` | Tenant identifier matching the pattern &#x60;tnt_{slug}_{suffix}&#x60;. | [Defaults to `undefined`] |
| **setFlagRequest** | [SetFlagRequest](SetFlagRequest.md) |  | |

### Return type

[**SetTenantFlagOverride200Response**](SetTenantFlagOverride200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Tenant flag override set. |  * X-Trace-ID -  <br>  |
| **400** | Validation error (ERR-API-001-003). Request body or parameters failed validation. The &#x60;errors&#x60; array contains field-level details.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  * X-Request-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **404** | Resource not found (ERR-API-001-004). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **429** | Rate limit exceeded (ERR-API-001-001). Includes &#x60;Retry-After&#x60; header and IETF-standard rate limit headers.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  * Retry-After -  <br>  * RateLimit -  <br>  * RateLimit-Policy -  <br>  * X-RateLimit-Remaining-Tokens -  <br>  * X-RateLimit-Remaining-Requests -  <br>  |
| **500** | Unexpected server error (ERR-API-001-012). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateConfig

> ConfigEntry updateConfig(key, configUpdateConfigRequest)

Update a configuration entry

Updates an existing configuration entry. A new version is created automatically. The previous version is preserved in the version history. 

### Example

```ts
import {
  Configuration,
  ConfigurationApi,
} from '@aqueduct-ai/sdk';
import type { UpdateConfigRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ConfigurationApi(config);

  const body = {
    // string | Configuration key matching `^[a-zA-Z0-9._-]+$`.
    key: auth.session_timeout_minutes,
    // ConfigUpdateConfigRequest
    configUpdateConfigRequest: {"value":60,"type":"int","description":"Increased session timeout to 60 minutes"},
  } satisfies UpdateConfigRequest;

  try {
    const data = await api.updateConfig(body);
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
| **key** | `string` | Configuration key matching &#x60;^[a-zA-Z0-9._-]+$&#x60;. | [Defaults to `undefined`] |
| **configUpdateConfigRequest** | [ConfigUpdateConfigRequest](ConfigUpdateConfigRequest.md) |  | |

### Return type

[**ConfigEntry**](ConfigEntry.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Configuration entry updated. |  * X-Trace-ID -  <br>  |
| **400** | Validation error (ERR-API-001-003). Request body or parameters failed validation. The &#x60;errors&#x60; array contains field-level details.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  * X-Request-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **404** | Resource not found (ERR-API-001-004). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **429** | Rate limit exceeded (ERR-API-001-001). Includes &#x60;Retry-After&#x60; header and IETF-standard rate limit headers.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  * Retry-After -  <br>  * RateLimit -  <br>  * RateLimit-Policy -  <br>  * X-RateLimit-Remaining-Tokens -  <br>  * X-RateLimit-Remaining-Requests -  <br>  |
| **500** | Unexpected server error (ERR-API-001-012). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

