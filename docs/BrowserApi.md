# BrowserApi

All URIs are relative to *https://api.aqueduct.io:443*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**classifyBrowser**](BrowserApi.md#classifybrowseroperation) | **POST** /api/browser/v1/classify | Classify browser capabilities |
| [**getBrowserCapabilities**](BrowserApi.md#getbrowsercapabilities) | **GET** /api/browser/v1/capabilities | Get browser capabilities |
| [**reportBrowserUsage**](BrowserApi.md#reportbrowserusageoperation) | **POST** /api/browser/v1/usage | Report browser usage telemetry |



## classifyBrowser

> ClassifyBrowser200Response classifyBrowser(classifyBrowserRequest)

Classify browser capabilities

Analyzes a User-Agent string and returns browser classification details.

### Example

```ts
import {
  Configuration,
  BrowserApi,
} from '@aqueduct-ai/sdk';
import type { ClassifyBrowserOperationRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new BrowserApi(config);

  const body = {
    // ClassifyBrowserRequest
    classifyBrowserRequest: {"user_agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"},
  } satisfies ClassifyBrowserOperationRequest;

  try {
    const data = await api.classifyBrowser(body);
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
| **classifyBrowserRequest** | [ClassifyBrowserRequest](ClassifyBrowserRequest.md) |  | |

### Return type

[**ClassifyBrowser200Response**](ClassifyBrowser200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Classification result. |  * X-Trace-ID -  <br>  |
| **400** | Validation error (ERR-API-001-003). Request body or parameters failed validation. The &#x60;errors&#x60; array contains field-level details.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  * X-Request-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getBrowserCapabilities

> GetBrowserCapabilities200Response getBrowserCapabilities()

Get browser capabilities

Returns supported browser feature detection capabilities.

### Example

```ts
import {
  Configuration,
  BrowserApi,
} from '@aqueduct-ai/sdk';
import type { GetBrowserCapabilitiesRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new BrowserApi(config);

  try {
    const data = await api.getBrowserCapabilities();
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

[**GetBrowserCapabilities200Response**](GetBrowserCapabilities200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Capability list. |  * X-Trace-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## reportBrowserUsage

> ReportBrowserUsage202Response reportBrowserUsage(reportBrowserUsageRequest)

Report browser usage telemetry

Accepts browser usage telemetry data for analytics.

### Example

```ts
import {
  Configuration,
  BrowserApi,
} from '@aqueduct-ai/sdk';
import type { ReportBrowserUsageOperationRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new BrowserApi(config);

  const body = {
    // ReportBrowserUsageRequest
    reportBrowserUsageRequest: {"session_id":"ses_01HQ3XYZABC123","user_agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36","features_used":["webgl","websocket"],"page_views":12,"duration_seconds":340},
  } satisfies ReportBrowserUsageOperationRequest;

  try {
    const data = await api.reportBrowserUsage(body);
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
| **reportBrowserUsageRequest** | [ReportBrowserUsageRequest](ReportBrowserUsageRequest.md) |  | |

### Return type

[**ReportBrowserUsage202Response**](ReportBrowserUsage202Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **202** | Telemetry accepted. |  * X-Trace-ID -  <br>  |
| **400** | Validation error (ERR-API-001-003). Request body or parameters failed validation. The &#x60;errors&#x60; array contains field-level details.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  * X-Request-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

