# CacheApi

All URIs are relative to *https://api.aqueduct.io:443*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getCacheEvents**](CacheApi.md#getcacheevents) | **GET** /api/v1/cache/events | Get recent cache events |
| [**getCacheStats**](CacheApi.md#getcachestats) | **GET** /api/v1/cache/stats | Get cache statistics |
| [**invalidateCache**](CacheApi.md#invalidatecacheoperation) | **POST** /api/v1/cache/invalidate | Invalidate cache entries |
| [**invalidateCacheByPattern**](CacheApi.md#invalidatecachebypatternoperation) | **POST** /api/v1/cache/invalidate/pattern | Invalidate cache by pattern |
| [**invalidateResponseCache**](CacheApi.md#invalidateresponsecache) | **DELETE** /v1/cache | Invalidate LLM response cache |
| [**invalidateTenantCache**](CacheApi.md#invalidatetenantcache) | **POST** /api/v1/cache/invalidate/tenant/{tenant_id} | Invalidate all cache for a tenant |
| [**streamCacheInvalidations**](CacheApi.md#streamcacheinvalidations) | **GET** /api/v1/cache/ws/invalidations | Real-time cache invalidation event stream (WebSocket) |



## getCacheEvents

> GetCacheEvents200Response getCacheEvents(limit)

Get recent cache events

Returns recent cache invalidation events for monitoring and debugging.

### Example

```ts
import {
  Configuration,
  CacheApi,
} from '@aqueduct-ai/sdk';
import type { GetCacheEventsRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CacheApi(config);

  const body = {
    // number | Maximum number of events to return. (optional)
    limit: 56,
  } satisfies GetCacheEventsRequest;

  try {
    const data = await api.getCacheEvents(body);
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
| **limit** | `number` | Maximum number of events to return. | [Optional] [Defaults to `50`] |

### Return type

[**GetCacheEvents200Response**](GetCacheEvents200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Cache events. |  * X-Trace-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCacheStats

> GetCacheStats200Response getCacheStats()

Get cache statistics

Returns cache utilization statistics including hit rates, size, and eviction counts.

### Example

```ts
import {
  Configuration,
  CacheApi,
} from '@aqueduct-ai/sdk';
import type { GetCacheStatsRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CacheApi(config);

  try {
    const data = await api.getCacheStats();
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

[**GetCacheStats200Response**](GetCacheStats200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Cache statistics. |  * X-Trace-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## invalidateCache

> InvalidateCache200Response invalidateCache(invalidateCacheRequest)

Invalidate cache entries

Invalidates cache entries matching the specified pattern or keys. Tenant cache isolation is strictly enforced. 

### Example

```ts
import {
  Configuration,
  CacheApi,
} from '@aqueduct-ai/sdk';
import type { InvalidateCacheOperationRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CacheApi(config);

  const body = {
    // InvalidateCacheRequest
    invalidateCacheRequest: {"pattern":"tenant:tnt_acme-corp_a1b2c3:*","keys":["tenant:tnt_acme-corp_a1b2c3:model:gpt-4o:config"],"tags":["inference","model-config"]},
  } satisfies InvalidateCacheOperationRequest;

  try {
    const data = await api.invalidateCache(body);
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
| **invalidateCacheRequest** | [InvalidateCacheRequest](InvalidateCacheRequest.md) |  | |

### Return type

[**InvalidateCache200Response**](InvalidateCache200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Invalidation result. |  * X-Trace-ID -  <br>  |
| **400** | Validation error (ERR-API-001-003). Request body or parameters failed validation. The &#x60;errors&#x60; array contains field-level details.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  * X-Request-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## invalidateCacheByPattern

> InvalidateCacheByPattern200Response invalidateCacheByPattern(invalidateCacheByPatternRequest)

Invalidate cache by pattern

Invalidates cache entries matching a glob pattern.

### Example

```ts
import {
  Configuration,
  CacheApi,
} from '@aqueduct-ai/sdk';
import type { InvalidateCacheByPatternOperationRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CacheApi(config);

  const body = {
    // InvalidateCacheByPatternRequest
    invalidateCacheByPatternRequest: {"pattern":"model:gpt-4o:*"},
  } satisfies InvalidateCacheByPatternOperationRequest;

  try {
    const data = await api.invalidateCacheByPattern(body);
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
| **invalidateCacheByPatternRequest** | [InvalidateCacheByPatternRequest](InvalidateCacheByPatternRequest.md) |  | |

### Return type

[**InvalidateCacheByPattern200Response**](InvalidateCacheByPattern200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Pattern invalidation result. |  * X-Trace-ID -  <br>  |
| **400** | Validation error (ERR-API-001-003). Request body or parameters failed validation. The &#x60;errors&#x60; array contains field-level details.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  * X-Request-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## invalidateResponseCache

> InvalidateResponseCache200Response invalidateResponseCache(model)

Invalidate LLM response cache

Clears cached LLM responses for the caller\&#39;s tenant. The tenant is always derived from the caller\&#39;s JWT — callers cannot clear another tenant\&#39;s cache.  Use the optional &#x60;model&#x60; query parameter to scope invalidation to a specific model (e.g., clear only &#x60;gpt-4o&#x60; cache entries while keeping others).  This endpoint operates on the model-router\&#39;s in-memory response cache, not the distributed cache-invalidator service. 

### Example

```ts
import {
  Configuration,
  CacheApi,
} from '@aqueduct-ai/sdk';
import type { InvalidateResponseCacheRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CacheApi(config);

  const body = {
    // string | Only invalidate cache entries for this model. If omitted, all models for the caller\'s tenant are cleared. (optional)
    model: gpt-4o,
  } satisfies InvalidateResponseCacheRequest;

  try {
    const data = await api.invalidateResponseCache(body);
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
| **model** | `string` | Only invalidate cache entries for this model. If omitted, all models for the caller\&#39;s tenant are cleared. | [Optional] [Defaults to `undefined`] |

### Return type

[**InvalidateResponseCache200Response**](InvalidateResponseCache200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Invalidation result. |  * X-Trace-ID -  <br>  |
| **400** | Validation error (ERR-API-001-003). Request body or parameters failed validation. The &#x60;errors&#x60; array contains field-level details.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  * X-Request-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **405** | Method not allowed. Only DELETE is supported. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## invalidateTenantCache

> InvalidateTenantCache200Response invalidateTenantCache(tenantId)

Invalidate all cache for a tenant

Invalidates all cache entries scoped to a specific tenant. Tenant cache isolation prevents cross-tenant cache poisoning. 

### Example

```ts
import {
  Configuration,
  CacheApi,
} from '@aqueduct-ai/sdk';
import type { InvalidateTenantCacheRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CacheApi(config);

  const body = {
    // string | Tenant identifier matching the pattern `tnt_{slug}_{suffix}`.
    tenantId: tnt_acme-corp_a1b2c3,
  } satisfies InvalidateTenantCacheRequest;

  try {
    const data = await api.invalidateTenantCache(body);
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

[**InvalidateTenantCache200Response**](InvalidateTenantCache200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Tenant cache invalidated. |  * X-Trace-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **404** | Resource not found (ERR-API-001-004). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## streamCacheInvalidations

> streamCacheInvalidations()

Real-time cache invalidation event stream (WebSocket)

Upgrades to a WebSocket connection for real-time cache invalidation event streaming. This is a WebSocket endpoint; clients must send an HTTP &#x60;Upgrade: websocket&#x60; request.  **Status:** This endpoint is registered but not yet fully implemented (returns 501 until WebSocket support is wired up).  Once implemented, the server will push invalidation events as they occur:  **Server -&gt; Client messages (JSON):** &#x60;&#x60;&#x60;json {   \&quot;event_type\&quot;: \&quot;invalidation\&quot;,   \&quot;pattern\&quot;: \&quot;tenant:tnt_acme-corp_a1b2c3:*\&quot;,   \&quot;keys_affected\&quot;: 42,   \&quot;tenant_id\&quot;: \&quot;tnt_acme-corp_a1b2c3\&quot;,   \&quot;timestamp\&quot;: \&quot;2026-03-19T12:00:00Z\&quot; } &#x60;&#x60;&#x60;  **Event types:** &#x60;invalidation&#x60;, &#x60;eviction&#x60;, &#x60;expiration&#x60;.  This allows dashboards and monitoring tools to react to cache state changes in real time without polling the &#x60;/api/v1/cache/events&#x60; REST endpoint. 

### Example

```ts
import {
  Configuration,
  CacheApi,
} from '@aqueduct-ai/sdk';
import type { StreamCacheInvalidationsRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CacheApi(config);

  try {
    const data = await api.streamCacheInvalidations();
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

`void` (Empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **101** | Switching Protocols. WebSocket connection established. |  -  |
| **200** | WebSocket connection active (upgrade succeeded). This status is not returned directly; the connection upgrades via 101. |  -  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **501** | WebSocket support not yet implemented. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

