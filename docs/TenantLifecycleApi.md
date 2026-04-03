# TenantLifecycleApi

All URIs are relative to *https://api.aqueduct.io:443*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**approveDeletion**](TenantLifecycleApi.md#approvedeletionoperation) | **POST** /api/v1/admin/tenants/{tenant_id}/deletion-request/{request_id}/approve | Approve a tenant deletion request |
| [**createDeletionRequest**](TenantLifecycleApi.md#createdeletionrequest) | **POST** /api/v1/tenants/{tenant_id}/deletion-request | Create a tenant deletion request |
| [**downloadTenantExport**](TenantLifecycleApi.md#downloadtenantexport) | **GET** /api/v1/tenants/{tenant_id}/export/{export_id} | Download tenant data export |
| [**getDeletionStatus**](TenantLifecycleApi.md#getdeletionstatus) | **GET** /api/v1/tenants/{tenant_id}/deletion-status | Get tenant deletion status |
| [**reactivateTenant**](TenantLifecycleApi.md#reactivatetenantoperation) | **POST** /api/v1/admin/tenants/{tenant_id}/reactivate | Reactivate a suspended tenant |
| [**suspendTenant**](TenantLifecycleApi.md#suspendtenantoperation) | **POST** /api/v1/admin/tenants/{tenant_id}/suspend | Suspend a tenant |



## approveDeletion

> ApproveDeletionResponse approveDeletion(tenantId, requestId, approveDeletionRequest)

Approve a tenant deletion request

Approves a pending deletion request. Enterprise and government tenants require multiple approvals. The &#x60;approval_confirmation&#x60; field must match &#x60;APPROVE DELETE {tenant_name}&#x60;. When all required approvals are collected, the deletion workflow proceeds automatically. 

### Example

```ts
import {
  Configuration,
  TenantLifecycleApi,
} from '@aqueduct-ai/sdk';
import type { ApproveDeletionOperationRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TenantLifecycleApi(config);

  const body = {
    // string | Tenant identifier matching the pattern `tnt_{slug}_{suffix}`.
    tenantId: tnt_acme-corp_a1b2c3,
    // string | Deletion request identifier.
    requestId: delreq_01HQ3XYZABC123,
    // ApproveDeletionRequest
    approveDeletionRequest: {"approval_confirmation":"APPROVE DELETE Acme Corp"},
  } satisfies ApproveDeletionOperationRequest;

  try {
    const data = await api.approveDeletion(body);
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
| **requestId** | `string` | Deletion request identifier. | [Defaults to `undefined`] |
| **approveDeletionRequest** | [ApproveDeletionRequest](ApproveDeletionRequest.md) |  | |

### Return type

[**ApproveDeletionResponse**](ApproveDeletionResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Deletion approval recorded. |  * X-Trace-ID -  <br>  |
| **400** | Validation error (ERR-API-001-003). Request body or parameters failed validation. The &#x60;errors&#x60; array contains field-level details.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  * X-Request-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **404** | Resource not found (ERR-API-001-004). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **409** | Resource conflict (ERR-API-001-014). The request could not be completed due to a conflict with the current state of the target resource.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **429** | Rate limit exceeded (ERR-API-001-001). Includes &#x60;Retry-After&#x60; header and IETF-standard rate limit headers.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  * Retry-After -  <br>  * RateLimit -  <br>  * RateLimit-Policy -  <br>  * X-RateLimit-Remaining-Tokens -  <br>  * X-RateLimit-Remaining-Requests -  <br>  |
| **500** | Unexpected server error (ERR-API-001-012). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createDeletionRequest

> DeletionRequestResponse createDeletionRequest(tenantId, deletionRequestRequest)

Create a tenant deletion request

Initiates the tenant deletion workflow per GDPR Art. 17 right to erasure. Enterprise and government tier tenants require multi-party approval before deletion proceeds. The &#x60;confirmation&#x60; field must match &#x60;DELETE {tenant_name}&#x60; to prevent accidental deletion. If &#x60;export_data&#x60; is true, a data export is generated before soft-delete begins. 

### Example

```ts
import {
  Configuration,
  TenantLifecycleApi,
} from '@aqueduct-ai/sdk';
import type { CreateDeletionRequestRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TenantLifecycleApi(config);

  const body = {
    // string | Tenant identifier matching the pattern `tnt_{slug}_{suffix}`.
    tenantId: tnt_acme-corp_a1b2c3,
    // DeletionRequestRequest
    deletionRequestRequest: {"reason":"customer_request","details":"Company is migrating to a different platform.","confirmation":"DELETE Acme Corp","export_data":true},
  } satisfies CreateDeletionRequestRequest;

  try {
    const data = await api.createDeletionRequest(body);
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
| **deletionRequestRequest** | [DeletionRequestRequest](DeletionRequestRequest.md) |  | |

### Return type

[**DeletionRequestResponse**](DeletionRequestResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Deletion request created. |  * X-Trace-ID -  <br>  |
| **400** | Validation error (ERR-API-001-003). Request body or parameters failed validation. The &#x60;errors&#x60; array contains field-level details.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  * X-Request-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **404** | Resource not found (ERR-API-001-004). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **409** | Resource conflict (ERR-API-001-014). The request could not be completed due to a conflict with the current state of the target resource.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **429** | Rate limit exceeded (ERR-API-001-001). Includes &#x60;Retry-After&#x60; header and IETF-standard rate limit headers.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  * Retry-After -  <br>  * RateLimit -  <br>  * RateLimit-Policy -  <br>  * X-RateLimit-Remaining-Tokens -  <br>  * X-RateLimit-Remaining-Requests -  <br>  |
| **500** | Unexpected server error (ERR-API-001-012). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## downloadTenantExport

> ExportDownloadResponse downloadTenantExport(tenantId, exportId)

Download tenant data export

Returns metadata and a signed download URL for a tenant data export. Exports include all tenant data, configuration, and audit logs per GDPR Art. 20 data portability requirements. 

### Example

```ts
import {
  Configuration,
  TenantLifecycleApi,
} from '@aqueduct-ai/sdk';
import type { DownloadTenantExportRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TenantLifecycleApi(config);

  const body = {
    // string | Tenant identifier matching the pattern `tnt_{slug}_{suffix}`.
    tenantId: tnt_acme-corp_a1b2c3,
    // string | Export identifier.
    exportId: export_01HQ3XYZABC123,
  } satisfies DownloadTenantExportRequest;

  try {
    const data = await api.downloadTenantExport(body);
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
| **exportId** | `string` | Export identifier. | [Defaults to `undefined`] |

### Return type

[**ExportDownloadResponse**](ExportDownloadResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Export download metadata. |  * X-Trace-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **404** | Resource not found (ERR-API-001-004). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **410** | Resource no longer available (ERR-API-001-015). Returned by the versioning middleware when a sunsetted endpoint is accessed (OWASP API9:2023), or when a resource has been permanently removed.  |  * API-Version -  <br>  * Deprecation -  <br>  * Sunset -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDeletionStatus

> DeletionStatusResponse getDeletionStatus(tenantId)

Get tenant deletion status

Returns the current status of any pending or completed deletion request for a tenant, including approval progress, timeline, and export status. 

### Example

```ts
import {
  Configuration,
  TenantLifecycleApi,
} from '@aqueduct-ai/sdk';
import type { GetDeletionStatusRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TenantLifecycleApi(config);

  const body = {
    // string | Tenant identifier matching the pattern `tnt_{slug}_{suffix}`.
    tenantId: tnt_acme-corp_a1b2c3,
  } satisfies GetDeletionStatusRequest;

  try {
    const data = await api.getDeletionStatus(body);
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

[**DeletionStatusResponse**](DeletionStatusResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Deletion status. |  * X-Trace-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **404** | Resource not found (ERR-API-001-004). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## reactivateTenant

> ReactivateTenantResponse reactivateTenant(tenantId, reactivateTenantRequest)

Reactivate a suspended tenant

Reactivates a previously suspended tenant. The tenant regains full access immediately. Optionally waives any outstanding balance. 

### Example

```ts
import {
  Configuration,
  TenantLifecycleApi,
} from '@aqueduct-ai/sdk';
import type { ReactivateTenantOperationRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TenantLifecycleApi(config);

  const body = {
    // string | Tenant identifier matching the pattern `tnt_{slug}_{suffix}`.
    tenantId: tnt_acme-corp_a1b2c3,
    // ReactivateTenantRequest
    reactivateTenantRequest: {"reason":"Payment received — INV-2025-0042 settled.","waive_outstanding_balance":false},
  } satisfies ReactivateTenantOperationRequest;

  try {
    const data = await api.reactivateTenant(body);
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
| **reactivateTenantRequest** | [ReactivateTenantRequest](ReactivateTenantRequest.md) |  | |

### Return type

[**ReactivateTenantResponse**](ReactivateTenantResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Tenant reactivated. |  * X-Trace-ID -  <br>  |
| **400** | Validation error (ERR-API-001-003). Request body or parameters failed validation. The &#x60;errors&#x60; array contains field-level details.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  * X-Request-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **404** | Resource not found (ERR-API-001-004). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **409** | Resource conflict (ERR-API-001-014). The request could not be completed due to a conflict with the current state of the target resource.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **429** | Rate limit exceeded (ERR-API-001-001). Includes &#x60;Retry-After&#x60; header and IETF-standard rate limit headers.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  * Retry-After -  <br>  * RateLimit -  <br>  * RateLimit-Policy -  <br>  * X-RateLimit-Remaining-Tokens -  <br>  * X-RateLimit-Remaining-Requests -  <br>  |
| **500** | Unexpected server error (ERR-API-001-012). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## suspendTenant

> SuspendTenantResponse suspendTenant(tenantId, suspendTenantRequest)

Suspend a tenant

Suspends a tenant for the specified reason. Suspension types include payment holds (reduced access) and full suspension (no access). A grace period allows the tenant to resolve the issue before deletion eligibility. Per NIST SP 800-207 zero-trust principles, suspended tenants have all active sessions revoked. 

### Example

```ts
import {
  Configuration,
  TenantLifecycleApi,
} from '@aqueduct-ai/sdk';
import type { SuspendTenantOperationRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TenantLifecycleApi(config);

  const body = {
    // string | Tenant identifier matching the pattern `tnt_{slug}_{suffix}`.
    tenantId: tnt_acme-corp_a1b2c3,
    // SuspendTenantRequest
    suspendTenantRequest: {"reason":"payment_failed","details":"Invoice INV-2025-0042 overdue by 30 days.","suspension_type":"payment_hold","grace_period_days":14},
  } satisfies SuspendTenantOperationRequest;

  try {
    const data = await api.suspendTenant(body);
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
| **suspendTenantRequest** | [SuspendTenantRequest](SuspendTenantRequest.md) |  | |

### Return type

[**SuspendTenantResponse**](SuspendTenantResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Tenant suspended. |  * X-Trace-ID -  <br>  |
| **400** | Validation error (ERR-API-001-003). Request body or parameters failed validation. The &#x60;errors&#x60; array contains field-level details.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  * X-Request-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **404** | Resource not found (ERR-API-001-004). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **409** | Resource conflict (ERR-API-001-014). The request could not be completed due to a conflict with the current state of the target resource.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **429** | Rate limit exceeded (ERR-API-001-001). Includes &#x60;Retry-After&#x60; header and IETF-standard rate limit headers.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  * Retry-After -  <br>  * RateLimit -  <br>  * RateLimit-Policy -  <br>  * X-RateLimit-Remaining-Tokens -  <br>  * X-RateLimit-Remaining-Requests -  <br>  |
| **500** | Unexpected server error (ERR-API-001-012). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

