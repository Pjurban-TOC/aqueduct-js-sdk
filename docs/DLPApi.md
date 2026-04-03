# DLPApi

All URIs are relative to *https://api.aqueduct.io:443*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createDLPPolicy**](DLPApi.md#createdlppolicyoperation) | **POST** /v1/dlp/policies | Create a DLP policy |
| [**deidentifyContent**](DLPApi.md#deidentifycontent) | **POST** /v1/dlp/deidentify | De-identify content |
| [**deleteDLPPolicy**](DLPApi.md#deletedlppolicy) | **DELETE** /v1/dlp/policies/{policy_id} | Delete a DLP policy |
| [**getDLPPolicy**](DLPApi.md#getdlppolicy) | **GET** /v1/dlp/policies/{policy_id} | Get DLP policy |
| [**listDLPPolicies**](DLPApi.md#listdlppolicies) | **GET** /v1/dlp/policies | List DLP policies |
| [**scanContent**](DLPApi.md#scancontent) | **POST** /v1/dlp/scan | Scan content for PII |
| [**updateDLPPolicy**](DLPApi.md#updatedlppolicy) | **PUT** /v1/dlp/policies/{policy_id} | Update a DLP policy |



## createDLPPolicy

> DLPPolicy createDLPPolicy(createDLPPolicyRequest)

Create a DLP policy

Creates a new DLP enforcement policy with rules for specific info types.

### Example

```ts
import {
  Configuration,
  DLPApi,
} from '@aqueduct-ai/sdk';
import type { CreateDLPPolicyOperationRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DLPApi(config);

  const body = {
    // CreateDLPPolicyRequest
    createDLPPolicyRequest: {"name":"PCI-DSS Credit Card Protection","enabled":true,"scope":"both","rules":[{"info_type":"CREDIT_CARD","action":"redact","min_score":0.8},{"info_type":"US_SSN","action":"block","min_score":0.9}],"applies_to_models":["gpt-4o"]},
  } satisfies CreateDLPPolicyOperationRequest;

  try {
    const data = await api.createDLPPolicy(body);
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
| **createDLPPolicyRequest** | [CreateDLPPolicyRequest](CreateDLPPolicyRequest.md) |  | |

### Return type

[**DLPPolicy**](DLPPolicy.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Policy created. |  * X-Trace-ID -  <br>  |
| **400** | Validation error (ERR-API-001-003). Request body or parameters failed validation. The &#x60;errors&#x60; array contains field-level details.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  * X-Request-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deidentifyContent

> DLPDeidentifyResponse deidentifyContent(dLPDeidentifyRequest)

De-identify content

Removes or transforms PII in content according to the specified de-identification configuration. Supports per-info-type operators (redact, replace, mask, hash, encrypt, tokenize). 

### Example

```ts
import {
  Configuration,
  DLPApi,
} from '@aqueduct-ai/sdk';
import type { DeidentifyContentRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DLPApi(config);

  const body = {
    // DLPDeidentifyRequest
    dLPDeidentifyRequest: {"content":"Contact john.doe@acme.com for details. SSN is 123-45-6789.","deidentify_config":{"default_operator":{"type":"redact"},"info_type_operators":{"EMAIL_ADDRESS":{"type":"replace","replacement":"[EMAIL]"},"US_SSN":{"type":"mask","masking_char":"*","chars_to_mask":5}}},"content_type":"prompt"},
  } satisfies DeidentifyContentRequest;

  try {
    const data = await api.deidentifyContent(body);
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
| **dLPDeidentifyRequest** | [DLPDeidentifyRequest](DLPDeidentifyRequest.md) |  | |

### Return type

[**DLPDeidentifyResponse**](DLPDeidentifyResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | De-identified content. |  * X-Trace-ID -  <br>  |
| **400** | Validation error (ERR-API-001-003). Request body or parameters failed validation. The &#x60;errors&#x60; array contains field-level details.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  * X-Request-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteDLPPolicy

> deleteDLPPolicy(policyId)

Delete a DLP policy

Permanently removes a DLP policy.

### Example

```ts
import {
  Configuration,
  DLPApi,
} from '@aqueduct-ai/sdk';
import type { DeleteDLPPolicyRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DLPApi(config);

  const body = {
    // string
    policyId: policyId_example,
  } satisfies DeleteDLPPolicyRequest;

  try {
    const data = await api.deleteDLPPolicy(body);
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
| **policyId** | `string` |  | [Defaults to `undefined`] |

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
| **204** | Policy deleted. |  -  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **404** | Resource not found (ERR-API-001-004). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDLPPolicy

> DLPPolicy getDLPPolicy(policyId)

Get DLP policy

Returns details for a specific DLP policy.

### Example

```ts
import {
  Configuration,
  DLPApi,
} from '@aqueduct-ai/sdk';
import type { GetDLPPolicyRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DLPApi(config);

  const body = {
    // string
    policyId: policyId_example,
  } satisfies GetDLPPolicyRequest;

  try {
    const data = await api.getDLPPolicy(body);
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
| **policyId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**DLPPolicy**](DLPPolicy.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Policy details. |  * X-Trace-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **404** | Resource not found (ERR-API-001-004). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listDLPPolicies

> ListDLPPolicies200Response listDLPPolicies()

List DLP policies

Returns all DLP policies for the authenticated tenant.

### Example

```ts
import {
  Configuration,
  DLPApi,
} from '@aqueduct-ai/sdk';
import type { ListDLPPoliciesRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DLPApi(config);

  try {
    const data = await api.listDLPPolicies();
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

[**ListDLPPolicies200Response**](ListDLPPolicies200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Policy list. |  * X-Trace-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## scanContent

> DLPScanResponse scanContent(dLPScanRequest)

Scan content for PII

Scans content for PII and sensitive data. Supports bidirectional scanning (prompts AND responses). Returns findings with confidence scores and locations. Per PII-Scope [arXiv:2410.06704], scanning both directions is mandatory as existing evaluations underestimate leakage by 5x. 

### Example

```ts
import {
  Configuration,
  DLPApi,
} from '@aqueduct-ai/sdk';
import type { ScanContentRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DLPApi(config);

  const body = {
    // DLPScanRequest
    dLPScanRequest: {"content":"Please send the invoice to john.doe@acme.com at 123 Main St, SSN 123-45-6789.","content_type":"prompt","score_threshold":0.7},
  } satisfies ScanContentRequest;

  try {
    const data = await api.scanContent(body);
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
| **dLPScanRequest** | [DLPScanRequest](DLPScanRequest.md) |  | |

### Return type

[**DLPScanResponse**](DLPScanResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Scan results. |  * X-Trace-ID -  <br>  |
| **400** | Validation error (ERR-API-001-003). Request body or parameters failed validation. The &#x60;errors&#x60; array contains field-level details.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  * X-Request-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **429** | Rate limit exceeded (ERR-API-001-001). Includes &#x60;Retry-After&#x60; header and IETF-standard rate limit headers.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  * Retry-After -  <br>  * RateLimit -  <br>  * RateLimit-Policy -  <br>  * X-RateLimit-Remaining-Tokens -  <br>  * X-RateLimit-Remaining-Requests -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateDLPPolicy

> DLPPolicy updateDLPPolicy(policyId, createDLPPolicyRequest)

Update a DLP policy

Replaces a DLP policy configuration.

### Example

```ts
import {
  Configuration,
  DLPApi,
} from '@aqueduct-ai/sdk';
import type { UpdateDLPPolicyRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DLPApi(config);

  const body = {
    // string
    policyId: policyId_example,
    // CreateDLPPolicyRequest
    createDLPPolicyRequest: {"name":"Updated PCI-DSS Protection","enabled":true,"scope":"both","rules":[{"info_type":"CREDIT_CARD","action":"redact","min_score":0.85},{"info_type":"US_SSN","action":"block","min_score":0.9},{"info_type":"EMAIL_ADDRESS","action":"mask","min_score":0.8}],"applies_to_models":["gpt-4o","claude-sonnet-4-20250514"]},
  } satisfies UpdateDLPPolicyRequest;

  try {
    const data = await api.updateDLPPolicy(body);
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
| **policyId** | `string` |  | [Defaults to `undefined`] |
| **createDLPPolicyRequest** | [CreateDLPPolicyRequest](CreateDLPPolicyRequest.md) |  | |

### Return type

[**DLPPolicy**](DLPPolicy.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Policy updated. |  * X-Trace-ID -  <br>  |
| **400** | Validation error (ERR-API-001-003). Request body or parameters failed validation. The &#x60;errors&#x60; array contains field-level details.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  * X-Request-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **404** | Resource not found (ERR-API-001-004). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

