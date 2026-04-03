# BreakpointsApi

All URIs are relative to *https://api.aqueduct.io:443*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**approvePausedRequest**](BreakpointsApi.md#approvepausedrequest) | **POST** /api/v1/admin/breakpoints/paused/{id}/approve | Approve a paused request |
| [**createBreakpoint**](BreakpointsApi.md#createbreakpointoperation) | **POST** /api/v1/admin/breakpoints | Create a breakpoint |
| [**deleteBreakpoint**](BreakpointsApi.md#deletebreakpoint) | **DELETE** /api/v1/admin/breakpoints/{id} | Delete a breakpoint |
| [**disableBreakpoint**](BreakpointsApi.md#disablebreakpoint) | **POST** /api/v1/admin/breakpoints/{id}/disable | Disable a breakpoint |
| [**enableBreakpoint**](BreakpointsApi.md#enablebreakpoint) | **POST** /api/v1/admin/breakpoints/{id}/enable | Enable a breakpoint |
| [**getBreakpoint**](BreakpointsApi.md#getbreakpoint) | **GET** /api/v1/admin/breakpoints/{id} | Get breakpoint details |
| [**getBreakpointHistory**](BreakpointsApi.md#getbreakpointhistory) | **GET** /api/v1/admin/breakpoints/{id}/history | Get breakpoint activation history |
| [**getPausedRequest**](BreakpointsApi.md#getpausedrequest) | **GET** /api/v1/admin/breakpoints/paused/{id} | Get paused request details |
| [**getQueueStats**](BreakpointsApi.md#getqueuestats) | **GET** /api/v1/admin/breakpoints/queue/stats | Get breakpoint queue statistics |
| [**listBreakpoints**](BreakpointsApi.md#listbreakpoints) | **GET** /api/v1/admin/breakpoints | List breakpoints |
| [**listPausedRequests**](BreakpointsApi.md#listpausedrequests) | **GET** /api/v1/admin/breakpoints/paused | List paused requests |
| [**modifyPausedRequest**](BreakpointsApi.md#modifypausedrequest) | **POST** /api/v1/admin/breakpoints/paused/{id}/modify | Modify and approve a paused request |
| [**rejectPausedRequest**](BreakpointsApi.md#rejectpausedrequest) | **POST** /api/v1/admin/breakpoints/paused/{id}/reject | Reject a paused request |
| [**streamBreakpointEvents**](BreakpointsApi.md#streambreakpointevents) | **GET** /ws/admin/breakpoints | Real-time breakpoint event stream (WebSocket) |
| [**testBreakpoint**](BreakpointsApi.md#testbreakpointoperation) | **POST** /api/v1/admin/breakpoints/{id}/test | Test a breakpoint against sample fields |
| [**updateBreakpoint**](BreakpointsApi.md#updatebreakpointoperation) | **PUT** /api/v1/admin/breakpoints/{id} | Update a breakpoint |



## approvePausedRequest

> ReviewResultResponse approvePausedRequest(id, approveRequestBody)

Approve a paused request

Approves a paused request, allowing it to continue through the pipeline. Requires &#x60;breakpoint:operator&#x60; or higher. 

### Example

```ts
import {
  Configuration,
  BreakpointsApi,
} from '@aqueduct-ai/sdk';
import type { ApprovePausedRequestRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new BreakpointsApi(config);

  const body = {
    // string | Paused request ID.
    id: id_example,
    // ApproveRequestBody (optional)
    approveRequestBody: {"notes":"Approved after confirming business justification"},
  } satisfies ApprovePausedRequestRequest;

  try {
    const data = await api.approvePausedRequest(body);
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
| **id** | `string` | Paused request ID. | [Defaults to `undefined`] |
| **approveRequestBody** | [ApproveRequestBody](ApproveRequestBody.md) |  | [Optional] |

### Return type

[**ReviewResultResponse**](ReviewResultResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Request approved. |  * X-Trace-ID -  <br>  |
| **404** | Resource not found (ERR-API-001-004). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **409** | Request has already been reviewed. |  -  |
| **410** | Request has expired. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createBreakpoint

> BreakpointResponse createBreakpoint(createBreakpointRequest)

Create a breakpoint

Creates a new request breakpoint for intercepting AI gateway requests at a specific pipeline stage. Requires &#x60;breakpoint:admin&#x60; or &#x60;system:admin&#x60;. 

### Example

```ts
import {
  Configuration,
  BreakpointsApi,
} from '@aqueduct-ai/sdk';
import type { CreateBreakpointOperationRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new BreakpointsApi(config);

  const body = {
    // CreateBreakpointRequest
    createBreakpointRequest: {"tenant_id":"tnt_acme-corp_a1b2c3","name":"Flag large token requests","description":"Pause requests exceeding 4000 tokens for manual review","stage":"PRE_MODEL_CALL","mode":"pause","conditions":[{"field":"token_count","operator":"gt","value":4000}],"priority":"high"},
  } satisfies CreateBreakpointOperationRequest;

  try {
    const data = await api.createBreakpoint(body);
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
| **createBreakpointRequest** | [CreateBreakpointRequest](CreateBreakpointRequest.md) |  | |

### Return type

[**BreakpointResponse**](BreakpointResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Breakpoint created. |  * X-Trace-ID -  <br>  |
| **400** | Validation error (ERR-API-001-003). Request body or parameters failed validation. The &#x60;errors&#x60; array contains field-level details.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  * X-Request-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteBreakpoint

> deleteBreakpoint(id)

Delete a breakpoint

Permanently removes a breakpoint. Requires &#x60;breakpoint:admin&#x60;.

### Example

```ts
import {
  Configuration,
  BreakpointsApi,
} from '@aqueduct-ai/sdk';
import type { DeleteBreakpointRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new BreakpointsApi(config);

  const body = {
    // string | Breakpoint ID.
    id: id_example,
  } satisfies DeleteBreakpointRequest;

  try {
    const data = await api.deleteBreakpoint(body);
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
| **id** | `string` | Breakpoint ID. | [Defaults to `undefined`] |

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
| **204** | Breakpoint deleted. |  -  |
| **404** | Resource not found (ERR-API-001-004). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## disableBreakpoint

> BreakpointResponse disableBreakpoint(id)

Disable a breakpoint

Deactivates a breakpoint without deleting it. Requires &#x60;breakpoint:admin&#x60;.

### Example

```ts
import {
  Configuration,
  BreakpointsApi,
} from '@aqueduct-ai/sdk';
import type { DisableBreakpointRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new BreakpointsApi(config);

  const body = {
    // string | Breakpoint ID.
    id: id_example,
  } satisfies DisableBreakpointRequest;

  try {
    const data = await api.disableBreakpoint(body);
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
| **id** | `string` | Breakpoint ID. | [Defaults to `undefined`] |

### Return type

[**BreakpointResponse**](BreakpointResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Breakpoint disabled. Returns the updated breakpoint. |  * X-Trace-ID -  <br>  |
| **404** | Resource not found (ERR-API-001-004). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## enableBreakpoint

> BreakpointResponse enableBreakpoint(id)

Enable a breakpoint

Activates a disabled breakpoint. Requires &#x60;breakpoint:admin&#x60;.

### Example

```ts
import {
  Configuration,
  BreakpointsApi,
} from '@aqueduct-ai/sdk';
import type { EnableBreakpointRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new BreakpointsApi(config);

  const body = {
    // string | Breakpoint ID.
    id: id_example,
  } satisfies EnableBreakpointRequest;

  try {
    const data = await api.enableBreakpoint(body);
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
| **id** | `string` | Breakpoint ID. | [Defaults to `undefined`] |

### Return type

[**BreakpointResponse**](BreakpointResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Breakpoint enabled. Returns the updated breakpoint. |  * X-Trace-ID -  <br>  |
| **404** | Resource not found (ERR-API-001-004). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getBreakpoint

> BreakpointResponse getBreakpoint(id)

Get breakpoint details

Returns details for a specific breakpoint. Requires &#x60;breakpoint:viewer&#x60; or higher.

### Example

```ts
import {
  Configuration,
  BreakpointsApi,
} from '@aqueduct-ai/sdk';
import type { GetBreakpointRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new BreakpointsApi(config);

  const body = {
    // string | Breakpoint ID.
    id: id_example,
  } satisfies GetBreakpointRequest;

  try {
    const data = await api.getBreakpoint(body);
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
| **id** | `string` | Breakpoint ID. | [Defaults to `undefined`] |

### Return type

[**BreakpointResponse**](BreakpointResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Breakpoint details. |  * X-Trace-ID -  <br>  |
| **404** | Resource not found (ERR-API-001-004). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getBreakpointHistory

> ActivationHistoryResponse getBreakpointHistory(id, limit)

Get breakpoint activation history

Returns the activation history for a breakpoint. Requires &#x60;breakpoint:viewer&#x60; or higher. 

### Example

```ts
import {
  Configuration,
  BreakpointsApi,
} from '@aqueduct-ai/sdk';
import type { GetBreakpointHistoryRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new BreakpointsApi(config);

  const body = {
    // string | Breakpoint ID.
    id: id_example,
    // number | Maximum number of history records (1-100, default 50). (optional)
    limit: 56,
  } satisfies GetBreakpointHistoryRequest;

  try {
    const data = await api.getBreakpointHistory(body);
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
| **id** | `string` | Breakpoint ID. | [Defaults to `undefined`] |
| **limit** | `number` | Maximum number of history records (1-100, default 50). | [Optional] [Defaults to `50`] |

### Return type

[**ActivationHistoryResponse**](ActivationHistoryResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Activation history. |  * X-Trace-ID -  <br>  |
| **404** | Resource not found (ERR-API-001-004). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPausedRequest

> PausedRequestDetailResponse getPausedRequest(id)

Get paused request details

Returns full details for a specific paused request, including the request snapshot for operator review. Requires &#x60;breakpoint:operator&#x60; or higher. 

### Example

```ts
import {
  Configuration,
  BreakpointsApi,
} from '@aqueduct-ai/sdk';
import type { GetPausedRequestRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new BreakpointsApi(config);

  const body = {
    // string | Paused request ID.
    id: id_example,
  } satisfies GetPausedRequestRequest;

  try {
    const data = await api.getPausedRequest(body);
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
| **id** | `string` | Paused request ID. | [Defaults to `undefined`] |

### Return type

[**PausedRequestDetailResponse**](PausedRequestDetailResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Paused request details with full request snapshot. |  * X-Trace-ID -  <br>  |
| **404** | Resource not found (ERR-API-001-004). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getQueueStats

> QueueStatsResponse getQueueStats(tenantId)

Get breakpoint queue statistics

Returns aggregate statistics for the breakpoint review queue. System admins may pass &#x60;tenant_id&#x60; to view stats for a specific tenant. Requires &#x60;breakpoint:viewer&#x60; or higher. 

### Example

```ts
import {
  Configuration,
  BreakpointsApi,
} from '@aqueduct-ai/sdk';
import type { GetQueueStatsRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new BreakpointsApi(config);

  const body = {
    // string | View stats for a specific tenant (system admin only). (optional)
    tenantId: tenantId_example,
  } satisfies GetQueueStatsRequest;

  try {
    const data = await api.getQueueStats(body);
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
| **tenantId** | `string` | View stats for a specific tenant (system admin only). | [Optional] [Defaults to `undefined`] |

### Return type

[**QueueStatsResponse**](QueueStatsResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Queue statistics. |  * X-Trace-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listBreakpoints

> BreakpointListResponse listBreakpoints(stage, mode, enabled, limit, cursor, allTenants)

List breakpoints

Returns a paginated list of breakpoints for the caller\&#39;s tenant. System admins may pass &#x60;all_tenants&#x3D;true&#x60; to list across tenants. Requires &#x60;breakpoint:viewer&#x60; or higher. 

### Example

```ts
import {
  Configuration,
  BreakpointsApi,
} from '@aqueduct-ai/sdk';
import type { ListBreakpointsRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new BreakpointsApi(config);

  const body = {
    // 'PRE_DLP_SCAN' | 'POST_DLP_SCAN' | 'POST_POLICY_EVAL' | 'PRE_MODEL_CALL' | 'POST_MODEL_RESPONSE' | 'PRE_USER_DELIVERY' | Filter by pipeline stage. (optional)
    stage: stage_example,
    // 'pause' | 'log' | 'alert' | 'block' | Filter by breakpoint mode. (optional)
    mode: mode_example,
    // boolean | Filter by enabled status. (optional)
    enabled: true,
    // number | Maximum number of results (1-100, default 50). (optional)
    limit: 56,
    // string | Cursor for pagination (value from `next_cursor` in a previous response). (optional)
    cursor: cursor_example,
    // boolean | When `true`, list breakpoints across all tenants (system admin only). (optional)
    allTenants: true,
  } satisfies ListBreakpointsRequest;

  try {
    const data = await api.listBreakpoints(body);
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
| **stage** | `PRE_DLP_SCAN`, `POST_DLP_SCAN`, `POST_POLICY_EVAL`, `PRE_MODEL_CALL`, `POST_MODEL_RESPONSE`, `PRE_USER_DELIVERY` | Filter by pipeline stage. | [Optional] [Defaults to `undefined`] [Enum: PRE_DLP_SCAN, POST_DLP_SCAN, POST_POLICY_EVAL, PRE_MODEL_CALL, POST_MODEL_RESPONSE, PRE_USER_DELIVERY] |
| **mode** | `pause`, `log`, `alert`, `block` | Filter by breakpoint mode. | [Optional] [Defaults to `undefined`] [Enum: pause, log, alert, block] |
| **enabled** | `boolean` | Filter by enabled status. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Maximum number of results (1-100, default 50). | [Optional] [Defaults to `50`] |
| **cursor** | `string` | Cursor for pagination (value from &#x60;next_cursor&#x60; in a previous response). | [Optional] [Defaults to `undefined`] |
| **allTenants** | `boolean` | When &#x60;true&#x60;, list breakpoints across all tenants (system admin only). | [Optional] [Defaults to `undefined`] |

### Return type

[**BreakpointListResponse**](BreakpointListResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Breakpoint list. |  * X-Trace-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listPausedRequests

> PausedRequestListResponse listPausedRequests(status, priority, stage, breakpointId, limit, cursor, allTenants)

List paused requests

Returns a paginated list of requests paused by breakpoints and awaiting review. Defaults to &#x60;status&#x3D;pending&#x60;. Requires &#x60;breakpoint:operator&#x60; or higher. 

### Example

```ts
import {
  Configuration,
  BreakpointsApi,
} from '@aqueduct-ai/sdk';
import type { ListPausedRequestsRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new BreakpointsApi(config);

  const body = {
    // 'pending' | 'approved' | 'rejected' | 'modified_approved' | 'expired' | Filter by review status. Defaults to `pending`. (optional)
    status: status_example,
    // 'low' | 'normal' | 'high' | 'critical' | Filter by priority level. (optional)
    priority: priority_example,
    // 'PRE_DLP_SCAN' | 'POST_DLP_SCAN' | 'POST_POLICY_EVAL' | 'PRE_MODEL_CALL' | 'POST_MODEL_RESPONSE' | 'PRE_USER_DELIVERY' | Filter by pipeline stage. (optional)
    stage: stage_example,
    // string | Filter by the breakpoint that caused the pause. (optional)
    breakpointId: breakpointId_example,
    // number | Maximum number of results (1-100, default 50). (optional)
    limit: 56,
    // string | Cursor for pagination. (optional)
    cursor: cursor_example,
    // boolean | When `true`, list across all tenants (system admin only). (optional)
    allTenants: true,
  } satisfies ListPausedRequestsRequest;

  try {
    const data = await api.listPausedRequests(body);
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
| **status** | `pending`, `approved`, `rejected`, `modified_approved`, `expired` | Filter by review status. Defaults to &#x60;pending&#x60;. | [Optional] [Defaults to `&#39;pending&#39;`] [Enum: pending, approved, rejected, modified_approved, expired] |
| **priority** | `low`, `normal`, `high`, `critical` | Filter by priority level. | [Optional] [Defaults to `undefined`] [Enum: low, normal, high, critical] |
| **stage** | `PRE_DLP_SCAN`, `POST_DLP_SCAN`, `POST_POLICY_EVAL`, `PRE_MODEL_CALL`, `POST_MODEL_RESPONSE`, `PRE_USER_DELIVERY` | Filter by pipeline stage. | [Optional] [Defaults to `undefined`] [Enum: PRE_DLP_SCAN, POST_DLP_SCAN, POST_POLICY_EVAL, PRE_MODEL_CALL, POST_MODEL_RESPONSE, PRE_USER_DELIVERY] |
| **breakpointId** | `string` | Filter by the breakpoint that caused the pause. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Maximum number of results (1-100, default 50). | [Optional] [Defaults to `50`] |
| **cursor** | `string` | Cursor for pagination. | [Optional] [Defaults to `undefined`] |
| **allTenants** | `boolean` | When &#x60;true&#x60;, list across all tenants (system admin only). | [Optional] [Defaults to `undefined`] |

### Return type

[**PausedRequestListResponse**](PausedRequestListResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Paused request list. |  * X-Trace-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## modifyPausedRequest

> ReviewResultResponse modifyPausedRequest(id, modifyRequestBody)

Modify and approve a paused request

Applies modifications to a paused request and then approves it for continued processing. Requires &#x60;breakpoint:operator&#x60; or higher. 

### Example

```ts
import {
  Configuration,
  BreakpointsApi,
} from '@aqueduct-ai/sdk';
import type { ModifyPausedRequestRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new BreakpointsApi(config);

  const body = {
    // string | Paused request ID.
    id: id_example,
    // ModifyRequestBody
    modifyRequestBody: {"modifications":{"model":"gpt-3.5-turbo","max_tokens":2000},"notes":"Downgraded model to reduce cost and risk"},
  } satisfies ModifyPausedRequestRequest;

  try {
    const data = await api.modifyPausedRequest(body);
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
| **id** | `string` | Paused request ID. | [Defaults to `undefined`] |
| **modifyRequestBody** | [ModifyRequestBody](ModifyRequestBody.md) |  | |

### Return type

[**ReviewResultResponse**](ReviewResultResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Request modified and approved. |  * X-Trace-ID -  <br>  |
| **400** | Validation error (ERR-API-001-003). Request body or parameters failed validation. The &#x60;errors&#x60; array contains field-level details.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  * X-Request-ID -  <br>  |
| **404** | Resource not found (ERR-API-001-004). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **409** | Request has already been reviewed. |  -  |
| **410** | Request has expired. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## rejectPausedRequest

> ReviewResultResponse rejectPausedRequest(id, rejectRequestBody)

Reject a paused request

Rejects a paused request. The original caller receives an error. A &#x60;reason&#x60; is required. Requires &#x60;breakpoint:operator&#x60; or higher. 

### Example

```ts
import {
  Configuration,
  BreakpointsApi,
} from '@aqueduct-ai/sdk';
import type { RejectPausedRequestRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new BreakpointsApi(config);

  const body = {
    // string | Paused request ID.
    id: id_example,
    // RejectRequestBody
    rejectRequestBody: {"reason":"Request contains unapproved PII that violates compliance policy"},
  } satisfies RejectPausedRequestRequest;

  try {
    const data = await api.rejectPausedRequest(body);
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
| **id** | `string` | Paused request ID. | [Defaults to `undefined`] |
| **rejectRequestBody** | [RejectRequestBody](RejectRequestBody.md) |  | |

### Return type

[**ReviewResultResponse**](ReviewResultResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Request rejected. |  * X-Trace-ID -  <br>  |
| **400** | Validation error (ERR-API-001-003). Request body or parameters failed validation. The &#x60;errors&#x60; array contains field-level details.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  * X-Request-ID -  <br>  |
| **404** | Resource not found (ERR-API-001-004). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **409** | Request has already been reviewed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## streamBreakpointEvents

> streamBreakpointEvents(tenantId)

Real-time breakpoint event stream (WebSocket)

Upgrades to a WebSocket connection for real-time breakpoint notifications. This is a WebSocket endpoint; clients must send an HTTP &#x60;Upgrade: websocket&#x60; request.  **Authentication / tenant identification:** The server reads tenant and user context from request headers or query parameters:   - &#x60;X-Tenant-ID&#x60; header (or &#x60;tenant_id&#x60; query parameter)   - &#x60;X-User-ID&#x60; header   - &#x60;X-User-Scopes&#x60; header (comma-separated)  The caller must hold one of the following scopes: &#x60;breakpoint:viewer&#x60;, &#x60;breakpoint:operator&#x60;, &#x60;breakpoint:admin&#x60;, or &#x60;system:admin&#x60;.  **Server -&gt; Client messages (JSON):** &#x60;&#x60;&#x60;json {   \&quot;channel\&quot;: \&quot;breakpoint:paused\&quot;,   \&quot;event\&quot;: \&quot;request_paused\&quot;,   \&quot;data\&quot;: {     \&quot;request_id\&quot;: \&quot;...\&quot;,     \&quot;breakpoint_id\&quot;: \&quot;...\&quot;,     \&quot;breakpoint_name\&quot;: \&quot;...\&quot;,     \&quot;tenant_id\&quot;: \&quot;...\&quot;,     \&quot;user_id\&quot;: \&quot;...\&quot;,     \&quot;stage\&quot;: \&quot;PRE_MODEL_CALL\&quot;,     \&quot;priority\&quot;: \&quot;high\&quot;,     \&quot;sanitized_preview\&quot;: \&quot;...\&quot;,     \&quot;paused_at\&quot;: \&quot;2026-03-19T12:00:00Z\&quot;,     \&quot;expires_at\&quot;: \&quot;2026-03-19T12:05:00Z\&quot;   },   \&quot;timestamp\&quot;: \&quot;2026-03-19T12:00:00Z\&quot; } &#x60;&#x60;&#x60;  **Channels:** | Channel | Event | Description | |---|---|---| | &#x60;breakpoint:paused&#x60; | &#x60;request_paused&#x60; | A request was paused by a breakpoint | | &#x60;breakpoint:reviewed&#x60; | &#x60;request_reviewed&#x60; | A paused request was approved/rejected | | &#x60;breakpoint:expired&#x60; | &#x60;request_expired&#x60; | A paused request expired without review | | &#x60;breakpoint:config&#x60; | &#x60;config_changed&#x60; | A breakpoint was created, updated, deleted, enabled, or disabled |  Messages are scoped to the caller\&#39;s tenant. Global breakpoints (&#x60;tenant_id: \&quot;*\&quot;&#x60;) broadcast to all connected tenants.  **Client -&gt; Server messages (JSON):** &#x60;&#x60;&#x60;json { \&quot;type\&quot;: \&quot;ping\&quot; } &#x60;&#x60;&#x60; The server replies with &#x60;{ \&quot;type\&quot;: \&quot;pong\&quot;, \&quot;timestamp\&quot;: \&quot;...\&quot; }&#x60;. 

### Example

```ts
import {
  Configuration,
  BreakpointsApi,
} from '@aqueduct-ai/sdk';
import type { StreamBreakpointEventsRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new BreakpointsApi(config);

  const body = {
    // string | Tenant identifier. Falls back to `X-Tenant-ID` header when not provided. Required for connection to be accepted.  (optional)
    tenantId: tenantId_example,
  } satisfies StreamBreakpointEventsRequest;

  try {
    const data = await api.streamBreakpointEvents(body);
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
| **tenantId** | `string` | Tenant identifier. Falls back to &#x60;X-Tenant-ID&#x60; header when not provided. Required for connection to be accepted.  | [Optional] [Defaults to `undefined`] |

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
| **400** | Tenant ID is required but was not provided. |  -  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## testBreakpoint

> TestBreakpointResponse testBreakpoint(id, testBreakpointRequest)

Test a breakpoint against sample fields

Evaluates a breakpoint\&#39;s conditions against the provided field map without actually triggering the breakpoint. Requires &#x60;breakpoint:viewer&#x60; or higher. 

### Example

```ts
import {
  Configuration,
  BreakpointsApi,
} from '@aqueduct-ai/sdk';
import type { TestBreakpointOperationRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new BreakpointsApi(config);

  const body = {
    // string | Breakpoint ID.
    id: id_example,
    // TestBreakpointRequest
    testBreakpointRequest: {"fields":{"token_count":5200,"model":"gpt-4","user_id":"usr_johndoe_abc123"}},
  } satisfies TestBreakpointOperationRequest;

  try {
    const data = await api.testBreakpoint(body);
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
| **id** | `string` | Breakpoint ID. | [Defaults to `undefined`] |
| **testBreakpointRequest** | [TestBreakpointRequest](TestBreakpointRequest.md) |  | |

### Return type

[**TestBreakpointResponse**](TestBreakpointResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Test result. |  * X-Trace-ID -  <br>  |
| **404** | Resource not found (ERR-API-001-004). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateBreakpoint

> BreakpointResponse updateBreakpoint(id, updateBreakpointRequest)

Update a breakpoint

Updates a breakpoint configuration. The &#x60;version&#x60; field is required for optimistic locking — it must match the current server-side version. Requires &#x60;breakpoint:admin&#x60;. 

### Example

```ts
import {
  Configuration,
  BreakpointsApi,
} from '@aqueduct-ai/sdk';
import type { UpdateBreakpointOperationRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new BreakpointsApi(config);

  const body = {
    // string | Breakpoint ID.
    id: id_example,
    // UpdateBreakpointRequest
    updateBreakpointRequest: {"name":"Flag very large token requests","description":"Pause requests exceeding 8000 tokens","conditions":[{"field":"token_count","operator":"gt","value":8000}],"priority":"critical","version":3},
  } satisfies UpdateBreakpointOperationRequest;

  try {
    const data = await api.updateBreakpoint(body);
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
| **id** | `string` | Breakpoint ID. | [Defaults to `undefined`] |
| **updateBreakpointRequest** | [UpdateBreakpointRequest](UpdateBreakpointRequest.md) |  | |

### Return type

[**BreakpointResponse**](BreakpointResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Breakpoint updated. |  * X-Trace-ID -  <br>  |
| **400** | Validation error (ERR-API-001-003). Request body or parameters failed validation. The &#x60;errors&#x60; array contains field-level details.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  * X-Request-ID -  <br>  |
| **404** | Resource not found (ERR-API-001-004). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **409** | Version conflict — the breakpoint was modified since last read. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

