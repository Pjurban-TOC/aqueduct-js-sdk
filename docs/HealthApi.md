# HealthApi

All URIs are relative to *https://api.aqueduct.io:443*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getLiveness**](HealthApi.md#getliveness) | **GET** /healthz | Liveness probe |
| [**getReadiness**](HealthApi.md#getreadiness) | **GET** /readyz | Readiness probe |



## getLiveness

> HealthResponse getLiveness()

Liveness probe

Returns 200 if the service process is running. Used by Kubernetes liveness probes.

### Example

```ts
import {
  Configuration,
  HealthApi,
} from '@aqueduct-ai/sdk';
import type { GetLivenessRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const api = new HealthApi();

  try {
    const data = await api.getLiveness();
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

[**HealthResponse**](HealthResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Service is alive. |  * X-Trace-ID -  <br>  |
| **404** | Resource not found (ERR-API-001-004). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **503** | Service unavailable due to circuit breaker open (ERR-API-001-011). Includes &#x60;Retry-After&#x60; header.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  * Retry-After -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getReadiness

> ReadinessResponse getReadiness()

Readiness probe

Returns 200 if the service and all dependencies are ready to accept traffic. Used by Kubernetes readiness probes.

### Example

```ts
import {
  Configuration,
  HealthApi,
} from '@aqueduct-ai/sdk';
import type { GetReadinessRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const api = new HealthApi();

  try {
    const data = await api.getReadiness();
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

[**ReadinessResponse**](ReadinessResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Service is ready. |  * X-Trace-ID -  <br>  |
| **404** | Resource not found (ERR-API-001-004). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **503** | Service unavailable due to circuit breaker open (ERR-API-001-011). Includes &#x60;Retry-After&#x60; header.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  * Retry-After -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

