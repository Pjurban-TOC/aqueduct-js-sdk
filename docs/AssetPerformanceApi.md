# AssetPerformanceApi

All URIs are relative to *https://api.aqueduct.io:443*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**acknowledgePerformanceAlert**](AssetPerformanceApi.md#acknowledgeperformancealert) | **PUT** /api/v1/admin/assets/alerts/{alert_id}/acknowledge | Acknowledge a performance alert |
| [**getAssetTimeSeries**](AssetPerformanceApi.md#getassettimeseries) | **GET** /api/v1/admin/assets/timeseries | Get asset metric time series |
| [**getCacheHitRate**](AssetPerformanceApi.md#getcachehitrate) | **GET** /api/v1/admin/assets/cache-hit-rate | Get cache hit rate statistics |
| [**getCdnLatency**](AssetPerformanceApi.md#getcdnlatency) | **GET** /api/v1/admin/assets/cdn-latency | Get CDN latency statistics |
| [**getWebVitalsReport**](AssetPerformanceApi.md#getwebvitalsreport) | **GET** /api/v1/admin/assets/web-vitals-report | Get Web Vitals report |
| [**ingestAssetMetrics**](AssetPerformanceApi.md#ingestassetmetrics) | **POST** /api/v1/metrics/assets | Ingest asset performance metrics |
| [**listAlertThresholds**](AssetPerformanceApi.md#listalertthresholds) | **GET** /api/v1/admin/assets/thresholds | List alert thresholds |
| [**listPerformanceAlerts**](AssetPerformanceApi.md#listperformancealerts) | **GET** /api/v1/admin/assets/alerts | List performance alerts |
| [**setAlertThreshold**](AssetPerformanceApi.md#setalertthreshold) | **PUT** /api/v1/admin/assets/thresholds/{metric} | Set alert threshold for a metric |



## acknowledgePerformanceAlert

> AcknowledgePerformanceAlert200Response acknowledgePerformanceAlert(alertId, acknowledgeAlertRequest)

Acknowledge a performance alert

Marks a performance alert as acknowledged with an optional note.

### Example

```ts
import {
  Configuration,
  AssetPerformanceApi,
} from '@aqueduct-ai/sdk';
import type { AcknowledgePerformanceAlertRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AssetPerformanceApi(config);

  const body = {
    // string | Alert identifier.
    alertId: alertId_example,
    // AcknowledgeAlertRequest
    acknowledgeAlertRequest: {"acknowledged_by":"usr_admin_xyz789","note":"Investigating CDN configuration in IAD region."},
  } satisfies AcknowledgePerformanceAlertRequest;

  try {
    const data = await api.acknowledgePerformanceAlert(body);
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
| **alertId** | `string` | Alert identifier. | [Defaults to `undefined`] |
| **acknowledgeAlertRequest** | [AcknowledgeAlertRequest](AcknowledgeAlertRequest.md) |  | |

### Return type

[**AcknowledgePerformanceAlert200Response**](AcknowledgePerformanceAlert200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Alert acknowledged. |  * X-Trace-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **404** | Resource not found (ERR-API-001-004). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAssetTimeSeries

> AssetTimeSeries getAssetTimeSeries(tenantId, metricType, granularity)

Get asset metric time series

Returns time series data points for a specified asset metric type and granularity.

### Example

```ts
import {
  Configuration,
  AssetPerformanceApi,
} from '@aqueduct-ai/sdk';
import type { GetAssetTimeSeriesRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AssetPerformanceApi(config);

  const body = {
    // string | Filter to a specific tenant. (optional)
    tenantId: tenantId_example,
    // string | Metric type to chart. (optional)
    metricType: load_time,
    // 'minute' | 'hour' | 'day' | Time bucket granularity. (optional)
    granularity: granularity_example,
  } satisfies GetAssetTimeSeriesRequest;

  try {
    const data = await api.getAssetTimeSeries(body);
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
| **tenantId** | `string` | Filter to a specific tenant. | [Optional] [Defaults to `undefined`] |
| **metricType** | `string` | Metric type to chart. | [Optional] [Defaults to `&#39;load_time&#39;`] |
| **granularity** | `minute`, `hour`, `day` | Time bucket granularity. | [Optional] [Defaults to `&#39;hour&#39;`] [Enum: minute, hour, day] |

### Return type

[**AssetTimeSeries**](AssetTimeSeries.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Time series data. |  * X-Trace-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCacheHitRate

> CacheHitRateResponse getCacheHitRate(tenantId)

Get cache hit rate statistics

Returns cache hit rate statistics broken down by asset type and CDN PoP. Target: &gt;99% for returning users (AC-UI-045-014). 

### Example

```ts
import {
  Configuration,
  AssetPerformanceApi,
} from '@aqueduct-ai/sdk';
import type { GetCacheHitRateRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AssetPerformanceApi(config);

  const body = {
    // string | Filter to a specific tenant. (optional)
    tenantId: tenantId_example,
  } satisfies GetCacheHitRateRequest;

  try {
    const data = await api.getCacheHitRate(body);
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
| **tenantId** | `string` | Filter to a specific tenant. | [Optional] [Defaults to `undefined`] |

### Return type

[**CacheHitRateResponse**](CacheHitRateResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Cache hit rate statistics. |  * X-Trace-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCdnLatency

> CdnLatencyResponse getCdnLatency(tenantId, cdnPop)

Get CDN latency statistics

Returns CDN latency percentile statistics (P50-P99) broken down by PoP and asset type. Target: P95 &lt;50ms (AC-UI-045-011). 

### Example

```ts
import {
  Configuration,
  AssetPerformanceApi,
} from '@aqueduct-ai/sdk';
import type { GetCdnLatencyRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AssetPerformanceApi(config);

  const body = {
    // string | Filter to a specific tenant. (optional)
    tenantId: tenantId_example,
    // string | Filter to a specific CDN point of presence. (optional)
    cdnPop: cdnPop_example,
  } satisfies GetCdnLatencyRequest;

  try {
    const data = await api.getCdnLatency(body);
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
| **tenantId** | `string` | Filter to a specific tenant. | [Optional] [Defaults to `undefined`] |
| **cdnPop** | `string` | Filter to a specific CDN point of presence. | [Optional] [Defaults to `undefined`] |

### Return type

[**CdnLatencyResponse**](CdnLatencyResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | CDN latency statistics. |  * X-Trace-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getWebVitalsReport

> WebVitalsReport getWebVitalsReport(tenantId)

Get Web Vitals report

Returns a comprehensive Web Vitals report including FCP, LCP, FID, CLS, TTFB, INP, and TTI with ratings and target compliance (AC-UI-045-020). 

### Example

```ts
import {
  Configuration,
  AssetPerformanceApi,
} from '@aqueduct-ai/sdk';
import type { GetWebVitalsReportRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AssetPerformanceApi(config);

  const body = {
    // string | Filter to a specific tenant. (optional)
    tenantId: tenantId_example,
  } satisfies GetWebVitalsReportRequest;

  try {
    const data = await api.getWebVitalsReport(body);
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
| **tenantId** | `string` | Filter to a specific tenant. | [Optional] [Defaults to `undefined`] |

### Return type

[**WebVitalsReport**](WebVitalsReport.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Web Vitals report. |  * X-Trace-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## ingestAssetMetrics

> IngestMetricsResponse ingestAssetMetrics(assetMetricBatch)

Ingest asset performance metrics

Accepts a batch of frontend asset performance metrics for storage and analysis. Returns any triggered alerts based on configured thresholds (AC-UI-045-019). 

### Example

```ts
import {
  Configuration,
  AssetPerformanceApi,
} from '@aqueduct-ai/sdk';
import type { IngestAssetMetricsRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AssetPerformanceApi(config);

  const body = {
    // AssetMetricBatch
    assetMetricBatch: {"session_id":"ses_01HQ3XYZABC123","tenant_id":"tnt_acme-corp_a1b2c3","user_id":"usr_johndoe_abc123","user_agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64)","page_url":"https://app.acme.example.com/dashboard","metrics":[{"id":"metric_001","asset_url":"https://cdn.acme.example.com/app.js","type":"script","size_bytes":150000,"transfer_bytes":45000,"load_time_ms":120.5,"ttfb_ms":45,"cache_hit":true,"cdn_pop":"iad-1"}],"timestamp":"2025-01-15T14:30:00Z","connection_type":"4g","rtt_ms":50},
  } satisfies IngestAssetMetricsRequest;

  try {
    const data = await api.ingestAssetMetrics(body);
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
| **assetMetricBatch** | [AssetMetricBatch](AssetMetricBatch.md) |  | |

### Return type

[**IngestMetricsResponse**](IngestMetricsResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Metrics ingested successfully. |  * X-Trace-ID -  <br>  |
| **400** | Validation error (ERR-API-001-003). Request body or parameters failed validation. The &#x60;errors&#x60; array contains field-level details.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  * X-Request-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **413** | Request body exceeds maximum size (ERR-API-001-013). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listAlertThresholds

> Array&lt;AlertThreshold&gt; listAlertThresholds(tenantId)

List alert thresholds

Returns all configured alert thresholds for performance metrics.

### Example

```ts
import {
  Configuration,
  AssetPerformanceApi,
} from '@aqueduct-ai/sdk';
import type { ListAlertThresholdsRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AssetPerformanceApi(config);

  const body = {
    // string | Filter to a specific tenant. (optional)
    tenantId: tenantId_example,
  } satisfies ListAlertThresholdsRequest;

  try {
    const data = await api.listAlertThresholds(body);
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
| **tenantId** | `string` | Filter to a specific tenant. | [Optional] [Defaults to `undefined`] |

### Return type

[**Array&lt;AlertThreshold&gt;**](AlertThreshold.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Alert thresholds. |  * X-Trace-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listPerformanceAlerts

> ListAlertsResponse listPerformanceAlerts(tenantId, status)

List performance alerts

Returns performance alerts, optionally filtered by status. Alerts are triggered when metrics exceed configured thresholds (AC-UI-045-021). 

### Example

```ts
import {
  Configuration,
  AssetPerformanceApi,
} from '@aqueduct-ai/sdk';
import type { ListPerformanceAlertsRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AssetPerformanceApi(config);

  const body = {
    // string | Filter to a specific tenant. (optional)
    tenantId: tenantId_example,
    // 'active' | 'acknowledged' | 'resolved' | Filter by alert status. (optional)
    status: status_example,
  } satisfies ListPerformanceAlertsRequest;

  try {
    const data = await api.listPerformanceAlerts(body);
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
| **tenantId** | `string` | Filter to a specific tenant. | [Optional] [Defaults to `undefined`] |
| **status** | `active`, `acknowledged`, `resolved` | Filter by alert status. | [Optional] [Defaults to `undefined`] [Enum: active, acknowledged, resolved] |

### Return type

[**ListAlertsResponse**](ListAlertsResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Performance alerts. |  * X-Trace-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## setAlertThreshold

> SetAlertThreshold200Response setAlertThreshold(metric, alertThreshold)

Set alert threshold for a metric

Creates or updates the alert threshold configuration for a specific metric.

### Example

```ts
import {
  Configuration,
  AssetPerformanceApi,
} from '@aqueduct-ai/sdk';
import type { SetAlertThresholdRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AssetPerformanceApi(config);

  const body = {
    // 'FCP' | 'LCP' | 'FID' | 'CLS' | 'TTFB' | 'INP' | 'TTI' | Metric name (FCP, LCP, FID, CLS, TTFB, INP, TTI).
    metric: metric_example,
    // AlertThreshold
    alertThreshold: {"metric_name":"LCP","warning_threshold":2500,"critical_threshold":4000,"min_affected_pct":10,"enabled":true,"tenant_id":"tnt_acme-corp_a1b2c3"},
  } satisfies SetAlertThresholdRequest;

  try {
    const data = await api.setAlertThreshold(body);
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
| **metric** | `FCP`, `LCP`, `FID`, `CLS`, `TTFB`, `INP`, `TTI` | Metric name (FCP, LCP, FID, CLS, TTFB, INP, TTI). | [Defaults to `undefined`] [Enum: FCP, LCP, FID, CLS, TTFB, INP, TTI] |
| **alertThreshold** | [AlertThreshold](AlertThreshold.md) |  | |

### Return type

[**SetAlertThreshold200Response**](SetAlertThreshold200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Threshold set. |  * X-Trace-ID -  <br>  |
| **400** | Validation error (ERR-API-001-003). Request body or parameters failed validation. The &#x60;errors&#x60; array contains field-level details.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  * X-Request-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

