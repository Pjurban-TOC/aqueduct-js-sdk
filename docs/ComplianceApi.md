# ComplianceApi

All URIs are relative to *https://api.aqueduct.io:443*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getComplianceEvidence**](ComplianceApi.md#getcomplianceevidence) | **GET** /api/v1/compliance/evidence | List compliance evidence |
| [**getComplianceGapReport**](ComplianceApi.md#getcompliancegapreport) | **GET** /api/v1/compliance/gap-report | Get compliance gap analysis report |
| [**getComplianceStatus**](ComplianceApi.md#getcompliancestatus) | **GET** /api/v1/compliance/status | Get overall compliance status |
| [**getFrameworkControls**](ComplianceApi.md#getframeworkcontrols) | **GET** /api/v1/frameworks/{frameworkID}/controls | Get controls for a compliance framework |
| [**listComplianceFrameworks**](ComplianceApi.md#listcomplianceframeworks) | **GET** /api/v1/frameworks | List compliance frameworks |
| [**runComplianceCheck**](ComplianceApi.md#runcompliancecheckoperation) | **POST** /api/v1/compliance/check | Run a compliance check |
| [**setComplianceTenants**](ComplianceApi.md#setcompliancetenants) | **POST** /api/v1/compliance/tenants | Set tenants for compliance scheduler |



## getComplianceEvidence

> EvidenceListResponse getComplianceEvidence(tenantId, controlId, pageSize, cursor)

List compliance evidence

Returns paginated compliance evidence records. Evidence is collected automatically from configuration checks, audit logs, and security scans per CISA Secure by Design (2024-2025) requirements. 

### Example

```ts
import {
  Configuration,
  ComplianceApi,
} from '@aqueduct-ai/sdk';
import type { GetComplianceEvidenceRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ComplianceApi(config);

  const body = {
    // string | Filter or scope results to a specific tenant. (optional)
    tenantId: tnt_acme-corp_a1b2c3,
    // string | Filter by control ID. (optional)
    controlId: controlId_example,
    // number | Maximum number of items to return per page. (optional)
    pageSize: 56,
    // string | Opaque cursor for pagination. Obtained from `next_cursor` in the previous response. (optional)
    cursor: cursor_example,
  } satisfies GetComplianceEvidenceRequest;

  try {
    const data = await api.getComplianceEvidence(body);
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
| **tenantId** | `string` | Filter or scope results to a specific tenant. | [Optional] [Defaults to `undefined`] |
| **controlId** | `string` | Filter by control ID. | [Optional] [Defaults to `undefined`] |
| **pageSize** | `number` | Maximum number of items to return per page. | [Optional] [Defaults to `20`] |
| **cursor** | `string` | Opaque cursor for pagination. Obtained from &#x60;next_cursor&#x60; in the previous response. | [Optional] [Defaults to `undefined`] |

### Return type

[**EvidenceListResponse**](EvidenceListResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Compliance evidence list. |  * X-Trace-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getComplianceGapReport

> GapAnalysisReport getComplianceGapReport(frameworkId, tenantId)

Get compliance gap analysis report

Returns a gap analysis report for a specific framework and tenant, showing which controls are met, unmet, or partial. Supports ISpec [arXiv:2512.17259] policy evaluation workflow. 

### Example

```ts
import {
  Configuration,
  ComplianceApi,
} from '@aqueduct-ai/sdk';
import type { GetComplianceGapReportRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ComplianceApi(config);

  const body = {
    // string | Framework to analyse.
    frameworkId: soc2-2024,
    // string | Tenant to evaluate.
    tenantId: tnt_acme-corp_a1b2c3,
  } satisfies GetComplianceGapReportRequest;

  try {
    const data = await api.getComplianceGapReport(body);
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
| **frameworkId** | `string` | Framework to analyse. | [Defaults to `undefined`] |
| **tenantId** | `string` | Tenant to evaluate. | [Defaults to `undefined`] |

### Return type

[**GapAnalysisReport**](GapAnalysisReport.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Gap analysis report. |  * X-Trace-ID -  <br>  |
| **400** | Validation error (ERR-API-001-003). Request body or parameters failed validation. The &#x60;errors&#x60; array contains field-level details.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  * X-Request-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getComplianceStatus

> OverallComplianceStatus getComplianceStatus(tenantId)

Get overall compliance status

Returns the overall compliance posture for a tenant across all registered frameworks, including per-framework compliance percentages. 

### Example

```ts
import {
  Configuration,
  ComplianceApi,
} from '@aqueduct-ai/sdk';
import type { GetComplianceStatusRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ComplianceApi(config);

  const body = {
    // string | Tenant to evaluate.
    tenantId: tnt_acme-corp_a1b2c3,
  } satisfies GetComplianceStatusRequest;

  try {
    const data = await api.getComplianceStatus(body);
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
| **tenantId** | `string` | Tenant to evaluate. | [Defaults to `undefined`] |

### Return type

[**OverallComplianceStatus**](OverallComplianceStatus.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Overall compliance status. |  * X-Trace-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getFrameworkControls

> ControlListResponse getFrameworkControls(frameworkID, tenantId)

Get controls for a compliance framework

Returns all controls within a specific compliance framework, optionally scoped to a tenant to include control assessment status. 

### Example

```ts
import {
  Configuration,
  ComplianceApi,
} from '@aqueduct-ai/sdk';
import type { GetFrameworkControlsRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ComplianceApi(config);

  const body = {
    // string | Compliance framework identifier.
    frameworkID: soc2-2024,
    // string | Filter or scope results to a specific tenant. (optional)
    tenantId: tnt_acme-corp_a1b2c3,
  } satisfies GetFrameworkControlsRequest;

  try {
    const data = await api.getFrameworkControls(body);
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
| **frameworkID** | `string` | Compliance framework identifier. | [Defaults to `undefined`] |
| **tenantId** | `string` | Filter or scope results to a specific tenant. | [Optional] [Defaults to `undefined`] |

### Return type

[**ControlListResponse**](ControlListResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Framework controls. |  * X-Trace-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **404** | Resource not found (ERR-API-001-004). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listComplianceFrameworks

> FrameworkListResponse listComplianceFrameworks()

List compliance frameworks

Returns all supported compliance frameworks. Aqueduct supports SOC 2, HIPAA, FedRAMP, GDPR, and ISO 27001 per NIST AI RMF 1.0 Govern/Map/Measure/Manage functions. 

### Example

```ts
import {
  Configuration,
  ComplianceApi,
} from '@aqueduct-ai/sdk';
import type { ListComplianceFrameworksRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ComplianceApi(config);

  try {
    const data = await api.listComplianceFrameworks();
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

[**FrameworkListResponse**](FrameworkListResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Compliance framework list. |  * X-Trace-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## runComplianceCheck

> CheckResult runComplianceCheck(runComplianceCheckRequest)

Run a compliance check

Executes a compliance check for a given framework and tenant. If &#x60;control_id&#x60; is omitted, all controls in the framework are checked. Per AEGIS [arXiv:2603.12621], results include evidence references for audit trail. 

### Example

```ts
import {
  Configuration,
  ComplianceApi,
} from '@aqueduct-ai/sdk';
import type { RunComplianceCheckOperationRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ComplianceApi(config);

  const body = {
    // RunComplianceCheckRequest
    runComplianceCheckRequest: {"framework_id":"soc2-2024","tenant_id":"tnt_acme-corp_a1b2c3","control_id":"soc2-cc6.1"},
  } satisfies RunComplianceCheckOperationRequest;

  try {
    const data = await api.runComplianceCheck(body);
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
| **runComplianceCheckRequest** | [RunComplianceCheckRequest](RunComplianceCheckRequest.md) |  | |

### Return type

[**CheckResult**](CheckResult.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Compliance check result. |  * X-Trace-ID -  <br>  |
| **400** | Validation error (ERR-API-001-003). Request body or parameters failed validation. The &#x60;errors&#x60; array contains field-level details.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  * X-Request-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **404** | Resource not found (ERR-API-001-004). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **429** | Rate limit exceeded (ERR-API-001-001). Includes &#x60;Retry-After&#x60; header and IETF-standard rate limit headers.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  * Retry-After -  <br>  * RateLimit -  <br>  * RateLimit-Policy -  <br>  * X-RateLimit-Remaining-Tokens -  <br>  * X-RateLimit-Remaining-Requests -  <br>  |
| **500** | Unexpected server error (ERR-API-001-012). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## setComplianceTenants

> SetTenantsResponse setComplianceTenants(setTenantsRequest)

Set tenants for compliance scheduler

Configures which tenants are included in the automated compliance check scheduler. The scheduler runs periodic assessments for all configured tenants. 

### Example

```ts
import {
  Configuration,
  ComplianceApi,
} from '@aqueduct-ai/sdk';
import type { SetComplianceTenantsRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ComplianceApi(config);

  const body = {
    // SetTenantsRequest
    setTenantsRequest: {"tenant_ids":["tnt_acme-corp_a1b2c3","tnt_globex-inc_d4e5f6","tnt_initech_g7h8i9"]},
  } satisfies SetComplianceTenantsRequest;

  try {
    const data = await api.setComplianceTenants(body);
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
| **setTenantsRequest** | [SetTenantsRequest](SetTenantsRequest.md) |  | |

### Return type

[**SetTenantsResponse**](SetTenantsResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Scheduler tenants updated. |  * X-Trace-ID -  <br>  |
| **400** | Validation error (ERR-API-001-003). Request body or parameters failed validation. The &#x60;errors&#x60; array contains field-level details.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  * X-Request-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **429** | Rate limit exceeded (ERR-API-001-001). Includes &#x60;Retry-After&#x60; header and IETF-standard rate limit headers.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  * Retry-After -  <br>  * RateLimit -  <br>  * RateLimit-Policy -  <br>  * X-RateLimit-Remaining-Tokens -  <br>  * X-RateLimit-Remaining-Requests -  <br>  |
| **500** | Unexpected server error (ERR-API-001-012). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

