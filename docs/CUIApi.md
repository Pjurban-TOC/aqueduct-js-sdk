# CUIApi

All URIs are relative to *https://api.aqueduct.io:443*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**applyCUIMarking**](CUIApi.md#applycuimarking) | **POST** /api/v1/cui/markings | Apply a CUI marking |
| [**getCUIMarking**](CUIApi.md#getcuimarking) | **GET** /api/v1/cui/markings/{resourceID} | Get a CUI marking |
| [**listCUICategories**](CUIApi.md#listcuicategories) | **GET** /api/v1/cui/categories | List CUI categories |
| [**listCUIMarkings**](CUIApi.md#listcuimarkings) | **GET** /api/v1/cui/markings | List CUI markings for tenant |
| [**listDisseminationControls**](CUIApi.md#listdisseminationcontrols) | **GET** /api/v1/cui/dissemination-controls | List dissemination controls |
| [**removeCUIMarking**](CUIApi.md#removecuimarking) | **DELETE** /api/v1/cui/markings/{resourceID} | Remove a CUI marking (decontrol) |
| [**updateCUIMarking**](CUIApi.md#updatecuimarking) | **PUT** /api/v1/cui/markings/{resourceID} | Update a CUI marking |



## applyCUIMarking

> StoredMarking applyCUIMarking(applyMarkingRequest)

Apply a CUI marking

Applies a CUI marking to a data object. Validates categories against the NARA registry, enforces dissemination control rules (NOFORN/REL TO mutual exclusion), and rejects retired FOUO markings. 

### Example

```ts
import {
  Configuration,
  CUIApi,
} from '@aqueduct-ai/sdk';
import type { ApplyCUIMarkingRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CUIApi(config);

  const body = {
    // ApplyMarkingRequest
    applyMarkingRequest: ...,
  } satisfies ApplyCUIMarkingRequest;

  try {
    const data = await api.applyCUIMarking(body);
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
| **applyMarkingRequest** | [ApplyMarkingRequest](ApplyMarkingRequest.md) |  | |

### Return type

[**StoredMarking**](StoredMarking.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Marking applied. |  -  |
| **400** | Validation error (ERR-API-001-003). Request body or parameters failed validation. The &#x60;errors&#x60; array contains field-level details.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  * X-Request-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCUIMarking

> StoredMarking getCUIMarking(resourceID)

Get a CUI marking

Retrieves the CUI marking for a specific data object.

### Example

```ts
import {
  Configuration,
  CUIApi,
} from '@aqueduct-ai/sdk';
import type { GetCUIMarkingRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CUIApi(config);

  const body = {
    // string
    resourceID: resourceID_example,
  } satisfies GetCUIMarkingRequest;

  try {
    const data = await api.getCUIMarking(body);
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
| **resourceID** | `string` |  | [Defaults to `undefined`] |

### Return type

[**StoredMarking**](StoredMarking.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Marking found. |  -  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **404** | Resource not found (ERR-API-001-004). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listCUICategories

> ListCategoriesResponse listCUICategories()

List CUI categories

Returns all CUI categories from the NARA registry.

### Example

```ts
import {
  Configuration,
  CUIApi,
} from '@aqueduct-ai/sdk';
import type { ListCUICategoriesRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CUIApi(config);

  try {
    const data = await api.listCUICategories();
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

[**ListCategoriesResponse**](ListCategoriesResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | CUI category list. |  -  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listCUIMarkings

> ListMarkingsResponse listCUIMarkings()

List CUI markings for tenant

Returns all CUI markings for the authenticated tenant.

### Example

```ts
import {
  Configuration,
  CUIApi,
} from '@aqueduct-ai/sdk';
import type { ListCUIMarkingsRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CUIApi(config);

  try {
    const data = await api.listCUIMarkings();
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

[**ListMarkingsResponse**](ListMarkingsResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Marking list. |  -  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listDisseminationControls

> ListDisseminationControlsResponse listDisseminationControls()

List dissemination controls

Returns all CUI dissemination control types including legacy markers.

### Example

```ts
import {
  Configuration,
  CUIApi,
} from '@aqueduct-ai/sdk';
import type { ListDisseminationControlsRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CUIApi(config);

  try {
    const data = await api.listDisseminationControls();
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

[**ListDisseminationControlsResponse**](ListDisseminationControlsResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Dissemination control list. |  -  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## removeCUIMarking

> RemoveCUIMarking200Response removeCUIMarking(resourceID)

Remove a CUI marking (decontrol)

Removes a CUI marking from a data object. This is a decontrol action per 32 CFR Part 2002. Produces a high-severity audit event. 

### Example

```ts
import {
  Configuration,
  CUIApi,
} from '@aqueduct-ai/sdk';
import type { RemoveCUIMarkingRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CUIApi(config);

  const body = {
    // string
    resourceID: resourceID_example,
  } satisfies RemoveCUIMarkingRequest;

  try {
    const data = await api.removeCUIMarking(body);
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
| **resourceID** | `string` |  | [Defaults to `undefined`] |

### Return type

[**RemoveCUIMarking200Response**](RemoveCUIMarking200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Marking removed. |  -  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **404** | Resource not found (ERR-API-001-004). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateCUIMarking

> StoredMarking updateCUIMarking(resourceID, applyMarkingRequest)

Update a CUI marking

Updates the CUI marking on a data object. Detects reclassification (category changes) vs. control-only updates for audit purposes. 

### Example

```ts
import {
  Configuration,
  CUIApi,
} from '@aqueduct-ai/sdk';
import type { UpdateCUIMarkingRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CUIApi(config);

  const body = {
    // string
    resourceID: resourceID_example,
    // ApplyMarkingRequest
    applyMarkingRequest: ...,
  } satisfies UpdateCUIMarkingRequest;

  try {
    const data = await api.updateCUIMarking(body);
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
| **resourceID** | `string` |  | [Defaults to `undefined`] |
| **applyMarkingRequest** | [ApplyMarkingRequest](ApplyMarkingRequest.md) |  | |

### Return type

[**StoredMarking**](StoredMarking.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Marking updated. |  -  |
| **400** | Validation error (ERR-API-001-003). Request body or parameters failed validation. The &#x60;errors&#x60; array contains field-level details.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  * X-Request-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **404** | Resource not found (ERR-API-001-004). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

