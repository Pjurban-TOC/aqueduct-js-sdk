# AuditApi

All URIs are relative to *https://api.aqueduct.io:443*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getAuditLogEntry**](AuditApi.md#getauditlogentry) | **GET** /v1/audit/logs/{log_id} | Get a single audit log entry |
| [**getAuditStats**](AuditApi.md#getauditstats) | **GET** /v1/audit/stats | Get audit log statistics |
| [**queryAuditLogs**](AuditApi.md#queryauditlogs) | **GET** /v1/audit/logs | Query audit logs |



## getAuditLogEntry

> AuditLogEntry getAuditLogEntry(logId)

Get a single audit log entry

Returns the full audit log entry for a specific event ID, including all request/response metadata, model info, usage, performance metrics, DLP results, safety results, RAG context, and compliance evaluation. 

### Example

```ts
import {
  Configuration,
  AuditApi,
} from '@aqueduct-ai/sdk';
import type { GetAuditLogEntryRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AuditApi(config);

  const body = {
    // string | Audit log entry event ID.
    logId: logId_example,
  } satisfies GetAuditLogEntryRequest;

  try {
    const data = await api.getAuditLogEntry(body);
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
| **logId** | `string` | Audit log entry event ID. | [Defaults to `undefined`] |

### Return type

[**AuditLogEntry**](AuditLogEntry.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Full audit log entry. |  * X-Trace-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **404** | Resource not found (ERR-API-001-004). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAuditStats

> GetAuditStats200Response getAuditStats(startTime, endTime, tenantId, groupBy)

Get audit log statistics

Returns aggregated statistics across audit logs for a given time range and optional filters. Useful for compliance dashboards and SLO tracking. Includes request counts, token usage, cost, latency percentiles, and error rates per ISpec [arXiv:2512.17259] observability requirements. 

### Example

```ts
import {
  Configuration,
  AuditApi,
} from '@aqueduct-ai/sdk';
import type { GetAuditStatsRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AuditApi(config);

  const body = {
    // Date | Start of time range (ISO 8601).
    startTime: 2013-10-20T19:20:30+01:00,
    // Date | End of time range (ISO 8601).
    endTime: 2013-10-20T19:20:30+01:00,
    // string | Filter by tenant ID. (optional)
    tenantId: tenantId_example,
    // 'model' | 'tenant' | 'path' | 'hour' | 'day' | Dimension to group statistics by. (optional)
    groupBy: groupBy_example,
  } satisfies GetAuditStatsRequest;

  try {
    const data = await api.getAuditStats(body);
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
| **startTime** | `Date` | Start of time range (ISO 8601). | [Defaults to `undefined`] |
| **endTime** | `Date` | End of time range (ISO 8601). | [Defaults to `undefined`] |
| **tenantId** | `string` | Filter by tenant ID. | [Optional] [Defaults to `undefined`] |
| **groupBy** | `model`, `tenant`, `path`, `hour`, `day` | Dimension to group statistics by. | [Optional] [Defaults to `undefined`] [Enum: model, tenant, path, hour, day] |

### Return type

[**GetAuditStats200Response**](GetAuditStats200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Aggregated audit statistics. |  * X-Trace-ID -  <br>  |
| **400** | Validation error (ERR-API-001-003). Request body or parameters failed validation. The &#x60;errors&#x60; array contains field-level details.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  * X-Request-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## queryAuditLogs

> AuditLogQueryResponse queryAuditLogs(tenantId, userId, startTime, endTime, path, statusCode, modelId, hasDlpFindings, hasSafetyFindings, minLatencyMs, pageSize, cursor)

Query audit logs

Searches and filters audit log entries with support for time ranges, tenant filtering, model filtering, DLP/safety finding filters, and latency thresholds. Returns paginated results with optional aggregations. Per AEGIS [arXiv:2603.12621], every API call is logged with full request/response metadata for compliance and observability. 

### Example

```ts
import {
  Configuration,
  AuditApi,
} from '@aqueduct-ai/sdk';
import type { QueryAuditLogsRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AuditApi(config);

  const body = {
    // string | Filter by tenant ID. (optional)
    tenantId: tenantId_example,
    // string | Filter by user ID. (optional)
    userId: userId_example,
    // Date | Start of time range (ISO 8601). (optional)
    startTime: 2013-10-20T19:20:30+01:00,
    // Date | End of time range (ISO 8601). (optional)
    endTime: 2013-10-20T19:20:30+01:00,
    // string | Filter by request path (supports wildcard `*`). (optional)
    path: /v1/chat/*,
    // number | Filter by HTTP response status code. (optional)
    statusCode: 56,
    // string | Filter by model identifier. (optional)
    modelId: modelId_example,
    // boolean | Filter to requests with DLP findings. (optional)
    hasDlpFindings: true,
    // boolean | Filter to requests with safety findings. (optional)
    hasSafetyFindings: true,
    // number | Filter to requests exceeding this latency threshold. (optional)
    minLatencyMs: 56,
    // number | Maximum number of items to return per page. (optional)
    pageSize: 56,
    // string | Opaque cursor for pagination. Obtained from `next_cursor` in the previous response. (optional)
    cursor: cursor_example,
  } satisfies QueryAuditLogsRequest;

  try {
    const data = await api.queryAuditLogs(body);
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
| **tenantId** | `string` | Filter by tenant ID. | [Optional] [Defaults to `undefined`] |
| **userId** | `string` | Filter by user ID. | [Optional] [Defaults to `undefined`] |
| **startTime** | `Date` | Start of time range (ISO 8601). | [Optional] [Defaults to `undefined`] |
| **endTime** | `Date` | End of time range (ISO 8601). | [Optional] [Defaults to `undefined`] |
| **path** | `string` | Filter by request path (supports wildcard &#x60;*&#x60;). | [Optional] [Defaults to `undefined`] |
| **statusCode** | `number` | Filter by HTTP response status code. | [Optional] [Defaults to `undefined`] |
| **modelId** | `string` | Filter by model identifier. | [Optional] [Defaults to `undefined`] |
| **hasDlpFindings** | `boolean` | Filter to requests with DLP findings. | [Optional] [Defaults to `undefined`] |
| **hasSafetyFindings** | `boolean` | Filter to requests with safety findings. | [Optional] [Defaults to `undefined`] |
| **minLatencyMs** | `number` | Filter to requests exceeding this latency threshold. | [Optional] [Defaults to `undefined`] |
| **pageSize** | `number` | Maximum number of items to return per page. | [Optional] [Defaults to `20`] |
| **cursor** | `string` | Opaque cursor for pagination. Obtained from &#x60;next_cursor&#x60; in the previous response. | [Optional] [Defaults to `undefined`] |

### Return type

[**AuditLogQueryResponse**](AuditLogQueryResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Audit log query results. |  * X-Trace-ID -  <br>  |
| **400** | Validation error (ERR-API-001-003). Request body or parameters failed validation. The &#x60;errors&#x60; array contains field-level details.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  * X-Request-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

