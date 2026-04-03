# WebhooksApi

All URIs are relative to *https://api.aqueduct.io:443*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**deleteDeadLetterEntry**](WebhooksApi.md#deletedeadletterentry) | **DELETE** /api/v1/webhooks/dead-letter/{entry_id} | Delete a dead-letter entry |
| [**getDelivery**](WebhooksApi.md#getdelivery) | **GET** /api/v1/webhooks/deliveries/{delivery_id} | Get delivery details |
| [**ingestWebhookEvent**](WebhooksApi.md#ingestwebhookevent) | **POST** /api/v1/webhooks/events | Ingest a webhook event |
| [**listDeadLetterEntries**](WebhooksApi.md#listdeadletterentries) | **GET** /api/v1/webhooks/dead-letter | List dead-letter entries |
| [**listSubscriptionDeliveries**](WebhooksApi.md#listsubscriptiondeliveries) | **GET** /api/v1/webhooks/subscriptions/{subscription_id}/deliveries | List deliveries for a subscription |
| [**replayDeadLetterEntry**](WebhooksApi.md#replaydeadletterentry) | **POST** /api/v1/webhooks/dead-letter/{entry_id}/replay | Replay a dead-letter entry |



## deleteDeadLetterEntry

> DeleteResponse deleteDeadLetterEntry(entryId)

Delete a dead-letter entry

Permanently removes a dead-letter entry.

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from '@aqueduct-ai/sdk';
import type { DeleteDeadLetterEntryRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WebhooksApi(config);

  const body = {
    // string
    entryId: entryId_example,
  } satisfies DeleteDeadLetterEntryRequest;

  try {
    const data = await api.deleteDeadLetterEntry(body);
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
| **entryId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**DeleteResponse**](DeleteResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Entry deleted. |  * X-Trace-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **404** | Resource not found (ERR-API-001-004). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDelivery

> Delivery getDelivery(deliveryId)

Get delivery details

Returns detailed information about a specific webhook delivery attempt.

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from '@aqueduct-ai/sdk';
import type { GetDeliveryRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WebhooksApi(config);

  const body = {
    // string
    deliveryId: deliveryId_example,
  } satisfies GetDeliveryRequest;

  try {
    const data = await api.getDelivery(body);
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
| **deliveryId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**Delivery**](Delivery.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Delivery details. |  * X-Trace-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **404** | Resource not found (ERR-API-001-004). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## ingestWebhookEvent

> WebhookEvent ingestWebhookEvent(ingestEventRequest)

Ingest a webhook event

Accepts an event payload for dispatch to matching subscriptions. Typically called by internal services when events occur. 

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from '@aqueduct-ai/sdk';
import type { IngestWebhookEventRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WebhooksApi(config);

  const body = {
    // IngestEventRequest
    ingestEventRequest: {"event_type":"dlp.alert","payload":{"rule_id":"pii-ssn","severity":"high","tenant_id":"tnt_acme-corp_a1b2c3","scan_id":"scan_01HQ3XYZDEF456"},"idempotency_key":"my-unique-key-123"},
  } satisfies IngestWebhookEventRequest;

  try {
    const data = await api.ingestWebhookEvent(body);
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
| **ingestEventRequest** | [IngestEventRequest](IngestEventRequest.md) |  | |

### Return type

[**WebhookEvent**](WebhookEvent.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **202** | Event accepted for delivery. Returns the stored WebhookEvent. |  * X-Trace-ID -  <br>  |
| **400** | Validation error (ERR-API-001-003). Request body or parameters failed validation. The &#x60;errors&#x60; array contains field-level details.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  * X-Request-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listDeadLetterEntries

> ListDeadLetterEntriesResponse listDeadLetterEntries(pageSize, cursor)

List dead-letter entries

Returns failed webhook deliveries that exhausted all retry attempts.

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from '@aqueduct-ai/sdk';
import type { ListDeadLetterEntriesRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WebhooksApi(config);

  const body = {
    // number | Maximum number of items to return per page. (optional)
    pageSize: 56,
    // string | Opaque cursor for pagination. Obtained from `next_cursor` in the previous response. (optional)
    cursor: cursor_example,
  } satisfies ListDeadLetterEntriesRequest;

  try {
    const data = await api.listDeadLetterEntries(body);
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
| **pageSize** | `number` | Maximum number of items to return per page. | [Optional] [Defaults to `20`] |
| **cursor** | `string` | Opaque cursor for pagination. Obtained from &#x60;next_cursor&#x60; in the previous response. | [Optional] [Defaults to `undefined`] |

### Return type

[**ListDeadLetterEntriesResponse**](ListDeadLetterEntriesResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Dead-letter entries. |  * X-Trace-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listSubscriptionDeliveries

> ListDeliveriesResponse listSubscriptionDeliveries(subscriptionId, pageSize, cursor, status)

List deliveries for a subscription

Returns paginated delivery attempts for a specific subscription.

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from '@aqueduct-ai/sdk';
import type { ListSubscriptionDeliveriesRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WebhooksApi(config);

  const body = {
    // string
    subscriptionId: subscriptionId_example,
    // number | Maximum number of items to return per page. (optional)
    pageSize: 56,
    // string | Opaque cursor for pagination. Obtained from `next_cursor` in the previous response. (optional)
    cursor: cursor_example,
    // 'pending' | 'delivered' | 'failed' | 'dead_lettered' (optional)
    status: status_example,
  } satisfies ListSubscriptionDeliveriesRequest;

  try {
    const data = await api.listSubscriptionDeliveries(body);
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
| **subscriptionId** | `string` |  | [Defaults to `undefined`] |
| **pageSize** | `number` | Maximum number of items to return per page. | [Optional] [Defaults to `20`] |
| **cursor** | `string` | Opaque cursor for pagination. Obtained from &#x60;next_cursor&#x60; in the previous response. | [Optional] [Defaults to `undefined`] |
| **status** | `pending`, `delivered`, `failed`, `dead_lettered` |  | [Optional] [Defaults to `undefined`] [Enum: pending, delivered, failed, dead_lettered] |

### Return type

[**ListDeliveriesResponse**](ListDeliveriesResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Delivery list. |  * X-Trace-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **404** | Resource not found (ERR-API-001-004). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## replayDeadLetterEntry

> DeleteResponse replayDeadLetterEntry(entryId)

Replay a dead-letter entry

Re-enqueues a dead-letter entry for another delivery attempt.

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from '@aqueduct-ai/sdk';
import type { ReplayDeadLetterEntryRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WebhooksApi(config);

  const body = {
    // string
    entryId: entryId_example,
  } satisfies ReplayDeadLetterEntryRequest;

  try {
    const data = await api.replayDeadLetterEntry(body);
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
| **entryId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**DeleteResponse**](DeleteResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Entry replayed. |  * X-Trace-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **404** | Resource not found (ERR-API-001-004). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

