# ActivityApi

All URIs are relative to *https://api.aqueduct.io:443*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**batchCreateActivityEvents**](ActivityApi.md#batchcreateactivityevents) | **POST** /admin/activity/events/batch | Batch create activity events |
| [**createActivityEvent**](ActivityApi.md#createactivityevent) | **POST** /admin/activity/events | Create an activity event |
| [**exportActivityEvents**](ActivityApi.md#exportactivityevents) | **POST** /admin/activity/export | Export activity events |
| [**exportActivityEventsCsv**](ActivityApi.md#exportactivityeventscsv) | **POST** /admin/activity/export/csv | Export activity events as CSV |
| [**exportActivityEventsJson**](ActivityApi.md#exportactivityeventsjson) | **POST** /admin/activity/export/json | Export activity events as JSON |
| [**getActivityAggregates**](ActivityApi.md#getactivityaggregates) | **GET** /admin/activity/dashboard/aggregates | Get activity aggregates |
| [**getActivityDashboard**](ActivityApi.md#getactivitydashboard) | **GET** /admin/activity/dashboard | Get activity dashboard |
| [**getActivityDashboardSummary**](ActivityApi.md#getactivitydashboardsummary) | **GET** /admin/activity/dashboard/summary | Get dashboard summary |
| [**getActivityEvent**](ActivityApi.md#getactivityevent) | **GET** /admin/activity/events/{event_id} | Get activity event by ID |
| [**getExportStatus**](ActivityApi.md#getexportstatus) | **GET** /admin/activity/export/status/{export_id} | Get export job status |
| [**getTenantDashboard**](ActivityApi.md#gettenantdashboard) | **GET** /admin/activity/dashboard/tenants/{tenant_id} | Get tenant-specific dashboard |
| [**listActivityEvents**](ActivityApi.md#listactivityevents) | **GET** /admin/activity/events | List activity events |
| [**listAnomalies**](ActivityApi.md#listanomalies) | **GET** /admin/activity/dashboard/anomalies | List detected anomalies |
| [**streamAdminActivity**](ActivityApi.md#streamadminactivity) | **GET** /ws/admin/activity | Real-time activity event stream (WebSocket) |



## batchCreateActivityEvents

> BatchEventResponse batchCreateActivityEvents(batchEventRequest)

Batch create activity events

Records multiple activity events in a single request.

### Example

```ts
import {
  Configuration,
  ActivityApi,
} from '@aqueduct-ai/sdk';
import type { BatchCreateActivityEventsRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ActivityApi(config);

  const body = {
    // BatchEventRequest
    batchEventRequest: {"events":[{"event_id":"evt_batch001","tenant_id":"tnt_acme-corp_a1b2c3","user_id":"usr_johndoe_abc123","timestamp":"2025-01-15T14:30:00Z","action":"document.view","resource_type":"document","resource_id":"doc_abc123","outcome":"success","hash_chain":"sha256:a3f2b8c1d4e5","storage_tier":"hot"},{"event_id":"evt_batch002","tenant_id":"tnt_acme-corp_a1b2c3","user_id":"usr_janedoe_def456","timestamp":"2025-01-15T14:31:00Z","action":"auth.login","resource_type":"session","resource_id":"ses_01HQ3XYZDEF456","outcome":"success","hash_chain":"sha256:b4g3c9d2e6f7","storage_tier":"hot"}]},
  } satisfies BatchCreateActivityEventsRequest;

  try {
    const data = await api.batchCreateActivityEvents(body);
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
| **batchEventRequest** | [BatchEventRequest](BatchEventRequest.md) |  | |

### Return type

[**BatchEventResponse**](BatchEventResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Batch result. |  * X-Trace-ID -  <br>  |
| **400** | Validation error (ERR-API-001-003). Request body or parameters failed validation. The &#x60;errors&#x60; array contains field-level details.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  * X-Request-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createActivityEvent

> SuccessResponse createActivityEvent(activityEvent)

Create an activity event

Records a single activity event.

### Example

```ts
import {
  Configuration,
  ActivityApi,
} from '@aqueduct-ai/sdk';
import type { CreateActivityEventRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ActivityApi(config);

  const body = {
    // ActivityEvent
    activityEvent: {"event_id":"evt_01HQ3XYZAB","tenant_id":"tnt_acme-corp_a1b2c3","user_id":"usr_johndoe_abc123","timestamp":"2025-01-15T14:30:00Z","action":"document.view","resource_type":"document","resource_id":"doc_abc123","ip_address":"192.168.1.100","user_agent":"aqueduct-sdk/1.0.0","outcome":"success","hash_chain":"sha256:a3f2b8c1d4e5","storage_tier":"hot"},
  } satisfies CreateActivityEventRequest;

  try {
    const data = await api.createActivityEvent(body);
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
| **activityEvent** | [ActivityEvent](ActivityEvent.md) |  | |

### Return type

[**SuccessResponse**](SuccessResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Event created. |  * X-Trace-ID -  <br>  |
| **400** | Validation error (ERR-API-001-003). Request body or parameters failed validation. The &#x60;errors&#x60; array contains field-level details.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  * X-Request-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## exportActivityEvents

> ExportResponse exportActivityEvents(exportRequest)

Export activity events

Exports activity events matching the given filters. Format is determined by the &#x60;format&#x60; field. Maximum 100,000 records per export. 

### Example

```ts
import {
  Configuration,
  ActivityApi,
} from '@aqueduct-ai/sdk';
import type { ExportActivityEventsRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ActivityApi(config);

  const body = {
    // ExportRequest
    exportRequest: {"tenant_id":"tnt_acme-corp_a1b2c3","start":"2025-01-01T00:00:00Z","end":"2025-01-31T23:59:59Z","format":"json","action":"document.view"},
  } satisfies ExportActivityEventsRequest;

  try {
    const data = await api.exportActivityEvents(body);
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
| **exportRequest** | [ExportRequest](ExportRequest.md) |  | |

### Return type

[**ExportResponse**](ExportResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Export data. |  * X-Trace-ID -  <br>  |
| **400** | Validation error (ERR-API-001-003). Request body or parameters failed validation. The &#x60;errors&#x60; array contains field-level details.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  * X-Request-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## exportActivityEventsCsv

> string exportActivityEventsCsv(exportRequest)

Export activity events as CSV

Exports activity events in CSV format. Maximum 100,000 records. Columns: event_id, tenant_id, user_id, timestamp, action, resource_type, resource_id, outcome, ip_address, user_agent. 

### Example

```ts
import {
  Configuration,
  ActivityApi,
} from '@aqueduct-ai/sdk';
import type { ExportActivityEventsCsvRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ActivityApi(config);

  const body = {
    // ExportRequest
    exportRequest: {"tenant_id":"tnt_acme-corp_a1b2c3","start":"2025-01-01T00:00:00Z","end":"2025-01-31T23:59:59Z","format":"csv"},
  } satisfies ExportActivityEventsCsvRequest;

  try {
    const data = await api.exportActivityEventsCsv(body);
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
| **exportRequest** | [ExportRequest](ExportRequest.md) |  | |

### Return type

**string**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `text/csv`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | CSV file. |  * X-Trace-ID -  <br>  |
| **400** | Validation error (ERR-API-001-003). Request body or parameters failed validation. The &#x60;errors&#x60; array contains field-level details.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  * X-Request-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## exportActivityEventsJson

> ExportResponse exportActivityEventsJson(exportRequest)

Export activity events as JSON

Exports activity events in JSON format. Maximum 100,000 records.

### Example

```ts
import {
  Configuration,
  ActivityApi,
} from '@aqueduct-ai/sdk';
import type { ExportActivityEventsJsonRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ActivityApi(config);

  const body = {
    // ExportRequest
    exportRequest: {"tenant_id":"tnt_acme-corp_a1b2c3","start":"2025-01-01T00:00:00Z","end":"2025-01-31T23:59:59Z","format":"json","user_id":"usr_johndoe_abc123"},
  } satisfies ExportActivityEventsJsonRequest;

  try {
    const data = await api.exportActivityEventsJson(body);
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
| **exportRequest** | [ExportRequest](ExportRequest.md) |  | |

### Return type

[**ExportResponse**](ExportResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | JSON export. |  * X-Trace-ID -  <br>  |
| **400** | Validation error (ERR-API-001-003). Request body or parameters failed validation. The &#x60;errors&#x60; array contains field-level details.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  * X-Request-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getActivityAggregates

> AggregatesResponse getActivityAggregates(tenantId, start, end, window)

Get activity aggregates

Returns activity aggregates grouped by time window.

### Example

```ts
import {
  Configuration,
  ActivityApi,
} from '@aqueduct-ai/sdk';
import type { GetActivityAggregatesRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ActivityApi(config);

  const body = {
    // string (optional)
    tenantId: tenantId_example,
    // Date (optional)
    start: 2013-10-20T19:20:30+01:00,
    // Date (optional)
    end: 2013-10-20T19:20:30+01:00,
    // 'hourly' | 'daily' | 'weekly' | 'monthly' | Aggregation window type. (optional)
    window: window_example,
  } satisfies GetActivityAggregatesRequest;

  try {
    const data = await api.getActivityAggregates(body);
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
| **tenantId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **start** | `Date` |  | [Optional] [Defaults to `undefined`] |
| **end** | `Date` |  | [Optional] [Defaults to `undefined`] |
| **window** | `hourly`, `daily`, `weekly`, `monthly` | Aggregation window type. | [Optional] [Defaults to `&#39;hourly&#39;`] [Enum: hourly, daily, weekly, monthly] |

### Return type

[**AggregatesResponse**](AggregatesResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Activity aggregates. |  * X-Trace-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getActivityDashboard

> DashboardResponse getActivityDashboard(tenantId, start, end)

Get activity dashboard

Returns the main dashboard view with summary, active anomalies, and time range context. 

### Example

```ts
import {
  Configuration,
  ActivityApi,
} from '@aqueduct-ai/sdk';
import type { GetActivityDashboardRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ActivityApi(config);

  const body = {
    // string | Filter to a specific tenant. Defaults to all tenants. (optional)
    tenantId: tenantId_example,
    // Date | Start time (RFC 3339). Defaults to 24 hours ago. (optional)
    start: 2013-10-20T19:20:30+01:00,
    // Date | End time (RFC 3339). Defaults to now. (optional)
    end: 2013-10-20T19:20:30+01:00,
  } satisfies GetActivityDashboardRequest;

  try {
    const data = await api.getActivityDashboard(body);
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
| **tenantId** | `string` | Filter to a specific tenant. Defaults to all tenants. | [Optional] [Defaults to `undefined`] |
| **start** | `Date` | Start time (RFC 3339). Defaults to 24 hours ago. | [Optional] [Defaults to `undefined`] |
| **end** | `Date` | End time (RFC 3339). Defaults to now. | [Optional] [Defaults to `undefined`] |

### Return type

[**DashboardResponse**](DashboardResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Dashboard data. |  * X-Trace-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getActivityDashboardSummary

> DashboardSummary getActivityDashboardSummary(tenantId, start, end)

Get dashboard summary

Returns aggregated summary metrics for the dashboard.

### Example

```ts
import {
  Configuration,
  ActivityApi,
} from '@aqueduct-ai/sdk';
import type { GetActivityDashboardSummaryRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ActivityApi(config);

  const body = {
    // string (optional)
    tenantId: tenantId_example,
    // Date (optional)
    start: 2013-10-20T19:20:30+01:00,
    // Date (optional)
    end: 2013-10-20T19:20:30+01:00,
  } satisfies GetActivityDashboardSummaryRequest;

  try {
    const data = await api.getActivityDashboardSummary(body);
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
| **tenantId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **start** | `Date` |  | [Optional] [Defaults to `undefined`] |
| **end** | `Date` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**DashboardSummary**](DashboardSummary.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Dashboard summary. |  * X-Trace-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getActivityEvent

> ActivityEvent getActivityEvent(eventId)

Get activity event by ID

Returns a single activity event by its ID.

### Example

```ts
import {
  Configuration,
  ActivityApi,
} from '@aqueduct-ai/sdk';
import type { GetActivityEventRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ActivityApi(config);

  const body = {
    // string | Activity event identifier.
    eventId: eventId_example,
  } satisfies GetActivityEventRequest;

  try {
    const data = await api.getActivityEvent(body);
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
| **eventId** | `string` | Activity event identifier. | [Defaults to `undefined`] |

### Return type

[**ActivityEvent**](ActivityEvent.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Activity event. |  * X-Trace-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **404** | Resource not found (ERR-API-001-004). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getExportStatus

> ExportStatusResponse getExportStatus(exportId)

Get export job status

Returns the status of an asynchronous export job.

### Example

```ts
import {
  Configuration,
  ActivityApi,
} from '@aqueduct-ai/sdk';
import type { GetExportStatusRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ActivityApi(config);

  const body = {
    // string | Export job identifier.
    exportId: exportId_example,
  } satisfies GetExportStatusRequest;

  try {
    const data = await api.getExportStatus(body);
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
| **exportId** | `string` | Export job identifier. | [Defaults to `undefined`] |

### Return type

[**ExportStatusResponse**](ExportStatusResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Export status. |  * X-Trace-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **404** | Resource not found (ERR-API-001-004). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getTenantDashboard

> TenantDashboardResponse getTenantDashboard(tenantId, start, end)

Get tenant-specific dashboard

Returns dashboard data filtered to a specific tenant.

### Example

```ts
import {
  Configuration,
  ActivityApi,
} from '@aqueduct-ai/sdk';
import type { GetTenantDashboardRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ActivityApi(config);

  const body = {
    // string | Tenant identifier matching the pattern `tnt_{slug}_{suffix}`.
    tenantId: tnt_acme-corp_a1b2c3,
    // Date (optional)
    start: 2013-10-20T19:20:30+01:00,
    // Date (optional)
    end: 2013-10-20T19:20:30+01:00,
  } satisfies GetTenantDashboardRequest;

  try {
    const data = await api.getTenantDashboard(body);
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
| **start** | `Date` |  | [Optional] [Defaults to `undefined`] |
| **end** | `Date` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**TenantDashboardResponse**](TenantDashboardResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Tenant dashboard data. |  * X-Trace-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **404** | Resource not found (ERR-API-001-004). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listActivityEvents

> PaginatedEventsResponse listActivityEvents(tenantId, userId, action, start, end, cursor, pageSize)

List activity events

Returns paginated activity events with filtering. Maximum query time range is 90 days. 

### Example

```ts
import {
  Configuration,
  ActivityApi,
} from '@aqueduct-ai/sdk';
import type { ListActivityEventsRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ActivityApi(config);

  const body = {
    // string (optional)
    tenantId: tenantId_example,
    // string (optional)
    userId: userId_example,
    // string | Filter by action (e.g., document.view, auth.login). (optional)
    action: action_example,
    // Date | Start time (RFC 3339). (optional)
    start: 2013-10-20T19:20:30+01:00,
    // Date | End time (RFC 3339). (optional)
    end: 2013-10-20T19:20:30+01:00,
    // string (optional)
    cursor: cursor_example,
    // number (optional)
    pageSize: 56,
  } satisfies ListActivityEventsRequest;

  try {
    const data = await api.listActivityEvents(body);
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
| **tenantId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **userId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **action** | `string` | Filter by action (e.g., document.view, auth.login). | [Optional] [Defaults to `undefined`] |
| **start** | `Date` | Start time (RFC 3339). | [Optional] [Defaults to `undefined`] |
| **end** | `Date` | End time (RFC 3339). | [Optional] [Defaults to `undefined`] |
| **cursor** | `string` |  | [Optional] [Defaults to `undefined`] |
| **pageSize** | `number` |  | [Optional] [Defaults to `100`] |

### Return type

[**PaginatedEventsResponse**](PaginatedEventsResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Paginated activity events. |  * X-Trace-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listAnomalies

> AnomaliesResponse listAnomalies(status)

List detected anomalies

Returns anomalies detected by the anomaly detection engine.

### Example

```ts
import {
  Configuration,
  ActivityApi,
} from '@aqueduct-ai/sdk';
import type { ListAnomaliesRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ActivityApi(config);

  const body = {
    // 'active' | 'resolved' | Filter by anomaly status. (optional)
    status: status_example,
  } satisfies ListAnomaliesRequest;

  try {
    const data = await api.listAnomalies(body);
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
| **status** | `active`, `resolved` | Filter by anomaly status. | [Optional] [Defaults to `undefined`] [Enum: active, resolved] |

### Return type

[**AnomaliesResponse**](AnomaliesResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Anomaly list. |  * X-Trace-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## streamAdminActivity

> streamAdminActivity(token)

Real-time activity event stream (WebSocket)

Upgrades to a WebSocket connection for real-time activity streaming. This is a WebSocket endpoint; clients must send an HTTP &#x60;Upgrade: websocket&#x60; request. After the connection is established, the client subscribes to channels by sending JSON messages.  **Authentication:** Provide a JWT token via one of the following (checked in order):   1. &#x60;Authorization: Bearer &lt;token&gt;&#x60; header   2. &#x60;admin_session&#x60; cookie   3. &#x60;token&#x60; query parameter  **Client -&gt; Server messages (JSON):** &#x60;&#x60;&#x60;json { \&quot;action\&quot;: \&quot;subscribe\&quot;,   \&quot;channel\&quot;: \&quot;&lt;channel_name&gt;\&quot; } { \&quot;action\&quot;: \&quot;unsubscribe\&quot;, \&quot;channel\&quot;: \&quot;&lt;channel_name&gt;\&quot; } &#x60;&#x60;&#x60;  **Available channels:** | Channel | Description | |---|---| | &#x60;activity_overview&#x60; | Platform-wide activity summary updates | | &#x60;anomalies&#x60; | Anomaly detection alerts and resolutions | | &#x60;tenant:{tenant_id}&#x60; | Activity updates scoped to a specific tenant |  **Server -&gt; Client messages (JSON):** &#x60;&#x60;&#x60;json {   \&quot;channel\&quot;: \&quot;activity_overview\&quot;,   \&quot;event\&quot;: \&quot;activity_update\&quot;,   \&quot;data\&quot;: { ... } } &#x60;&#x60;&#x60;  **Event types:** &#x60;activity_update&#x60;, &#x60;anomaly_detected&#x60;, &#x60;anomaly_resolved&#x60;, &#x60;subscribed&#x60;, &#x60;unsubscribed&#x60;, &#x60;error&#x60;.  Delivery target is &lt;500 ms (AC-PLAT-043-007). Anomaly alerts are delivered within 30 seconds (BR-PLAT-043-014). 

### Example

```ts
import {
  Configuration,
  ActivityApi,
} from '@aqueduct-ai/sdk';
import type { StreamAdminActivityRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ActivityApi(config);

  const body = {
    // string | JWT token for authentication. Use this when the WebSocket client cannot set an `Authorization` header (e.g., browser `new WebSocket()`).  (optional)
    token: token_example,
  } satisfies StreamAdminActivityRequest;

  try {
    const data = await api.streamAdminActivity(body);
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
| **token** | `string` | JWT token for authentication. Use this when the WebSocket client cannot set an &#x60;Authorization&#x60; header (e.g., browser &#x60;new WebSocket()&#x60;).  | [Optional] [Defaults to `undefined`] |

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

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

