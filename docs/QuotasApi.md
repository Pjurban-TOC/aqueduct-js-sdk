# QuotasApi

All URIs are relative to *https://api.aqueduct.io:443*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**acknowledgeQuotaAlert**](QuotasApi.md#acknowledgequotaalert) | **POST** /api/v1/tenants/{tenant_id}/quotas/alerts/{alert_id}/acknowledge | Acknowledge a quota alert |
| [**getQuotaAlerts**](QuotasApi.md#getquotaalerts) | **GET** /api/v1/tenants/{tenant_id}/quotas/alerts | Get quota alerts |
| [**getQuotaStatus**](QuotasApi.md#getquotastatus) | **GET** /api/v1/tenants/{tenant_id}/quotas | Get tenant quota status |
| [**requestQuotaIncrease**](QuotasApi.md#requestquotaincrease) | **POST** /api/v1/tenants/{tenant_id}/quotas/increase-request | Request quota increase |
| [**updateQuotaConfig**](QuotasApi.md#updatequotaconfigoperation) | **PATCH** /api/v1/admin/tenants/{tenant_id}/quotas | Update tenant quota configuration |



## acknowledgeQuotaAlert

> AcknowledgeQuotaAlert200Response acknowledgeQuotaAlert(tenantId, alertId)

Acknowledge a quota alert

Marks a quota alert as acknowledged. Requires &#x60;tenant:admin&#x60; for own tenant or &#x60;system:admin&#x60;. 

### Example

```ts
import {
  Configuration,
  QuotasApi,
} from '@aqueduct-ai/sdk';
import type { AcknowledgeQuotaAlertRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new QuotasApi(config);

  const body = {
    // string | Tenant identifier matching the pattern `tnt_{slug}_{suffix}`.
    tenantId: tnt_acme-corp_a1b2c3,
    // string | Alert identifier.
    alertId: alertId_example,
  } satisfies AcknowledgeQuotaAlertRequest;

  try {
    const data = await api.acknowledgeQuotaAlert(body);
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
| **alertId** | `string` | Alert identifier. | [Defaults to `undefined`] |

### Return type

[**AcknowledgeQuotaAlert200Response**](AcknowledgeQuotaAlert200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Alert acknowledged. |  * X-Trace-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **404** | Resource not found (ERR-API-001-004). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getQuotaAlerts

> QuotaAlertsResponse getQuotaAlerts(tenantId, acknowledged)

Get quota alerts

Returns quota alerts for a tenant. Optionally filter by acknowledged status. Requires &#x60;tenant:admin&#x60; for own tenant or &#x60;system:admin&#x60;. 

### Example

```ts
import {
  Configuration,
  QuotasApi,
} from '@aqueduct-ai/sdk';
import type { GetQuotaAlertsRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new QuotasApi(config);

  const body = {
    // string | Tenant identifier matching the pattern `tnt_{slug}_{suffix}`.
    tenantId: tnt_acme-corp_a1b2c3,
    // boolean | Filter by acknowledged status. (optional)
    acknowledged: true,
  } satisfies GetQuotaAlertsRequest;

  try {
    const data = await api.getQuotaAlerts(body);
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
| **acknowledged** | `boolean` | Filter by acknowledged status. | [Optional] [Defaults to `undefined`] |

### Return type

[**QuotaAlertsResponse**](QuotaAlertsResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Quota alerts list. |  * X-Trace-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getQuotaStatus

> QuotaStatusResponse getQuotaStatus(tenantId)

Get tenant quota status

Returns current quota usage, limits, allowed models, and enabled features for a tenant. Users can view their own tenant\&#39;s quotas; system admins can view any tenant. 

### Example

```ts
import {
  Configuration,
  QuotasApi,
} from '@aqueduct-ai/sdk';
import type { GetQuotaStatusRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new QuotasApi(config);

  const body = {
    // string | Tenant identifier matching the pattern `tnt_{slug}_{suffix}`.
    tenantId: tnt_acme-corp_a1b2c3,
  } satisfies GetQuotaStatusRequest;

  try {
    const data = await api.getQuotaStatus(body);
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

[**QuotaStatusResponse**](QuotaStatusResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Quota status. |  * X-Trace-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **404** | Resource not found (ERR-API-001-004). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## requestQuotaIncrease

> QuotaIncreaseRequestResp requestQuotaIncrease(tenantId, quotaIncreaseRequestReq)

Request quota increase

Submit a self-service quota increase request with business justification (minimum 20 characters). Requires &#x60;tenant:admin&#x60; for own tenant or &#x60;system:admin&#x60;. Returns a tracking ID and expected response time. 

### Example

```ts
import {
  Configuration,
  QuotasApi,
} from '@aqueduct-ai/sdk';
import type { RequestQuotaIncreaseRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new QuotasApi(config);

  const body = {
    // string | Tenant identifier matching the pattern `tnt_{slug}_{suffix}`.
    tenantId: tnt_acme-corp_a1b2c3,
    // QuotaIncreaseRequestReq
    quotaIncreaseRequestReq: {"resource":"api_calls_per_hour","requested_limit":20000,"justification":"Launching new product feature that requires higher API throughput for our 50k users.","urgency":"normal"},
  } satisfies RequestQuotaIncreaseRequest;

  try {
    const data = await api.requestQuotaIncrease(body);
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
| **quotaIncreaseRequestReq** | [QuotaIncreaseRequestReq](QuotaIncreaseRequestReq.md) |  | |

### Return type

[**QuotaIncreaseRequestResp**](QuotaIncreaseRequestResp.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Quota increase request submitted. |  * X-Trace-ID -  <br>  |
| **400** | Validation error (ERR-API-001-003). Request body or parameters failed validation. The &#x60;errors&#x60; array contains field-level details.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  * X-Request-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateQuotaConfig

> UpdateQuotaConfigResponse updateQuotaConfig(tenantId, updateQuotaConfigRequest)

Update tenant quota configuration

Admin endpoint to update quota limits, allowed models, enabled features, and temporary increases. Requires &#x60;system:admin&#x60; scope. 

### Example

```ts
import {
  Configuration,
  QuotasApi,
} from '@aqueduct-ai/sdk';
import type { UpdateQuotaConfigOperationRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new QuotasApi(config);

  const body = {
    // string | Tenant identifier matching the pattern `tnt_{slug}_{suffix}`.
    tenantId: tnt_acme-corp_a1b2c3,
    // UpdateQuotaConfigRequest
    updateQuotaConfigRequest: {"limits":{"users":500,"requests_per_month":100000,"api_calls_per_hour":10000,"storage_gb":100},"models_allowed":["gpt-4","gpt-4o","claude-sonnet-4-20250514"],"features_enabled":["conversations","dlp_scanning","rag_retrieval"]},
  } satisfies UpdateQuotaConfigOperationRequest;

  try {
    const data = await api.updateQuotaConfig(body);
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
| **updateQuotaConfigRequest** | [UpdateQuotaConfigRequest](UpdateQuotaConfigRequest.md) |  | |

### Return type

[**UpdateQuotaConfigResponse**](UpdateQuotaConfigResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Quota configuration updated. |  * X-Trace-ID -  <br>  |
| **400** | Validation error (ERR-API-001-003). Request body or parameters failed validation. The &#x60;errors&#x60; array contains field-level details.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  * X-Request-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **404** | Resource not found (ERR-API-001-004). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

