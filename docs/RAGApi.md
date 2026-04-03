# RAGApi

All URIs are relative to *https://api.aqueduct.io:443*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addDocument**](RAGApi.md#adddocument) | **POST** /v1/knowledge-bases/{kb_id}/documents | Add a document |
| [**createKnowledgeBase**](RAGApi.md#createknowledgebaseoperation) | **POST** /v1/knowledge-bases | Create a knowledge base |
| [**deleteDocument**](RAGApi.md#deletedocument) | **DELETE** /v1/knowledge-bases/{kb_id}/documents/{document_id} | Delete a document |
| [**deleteKnowledgeBase**](RAGApi.md#deleteknowledgebase) | **DELETE** /v1/knowledge-bases/{kb_id} | Delete a knowledge base |
| [**getDocument**](RAGApi.md#getdocument) | **GET** /v1/knowledge-bases/{kb_id}/documents/{document_id} | Get document details |
| [**getKnowledgeBase**](RAGApi.md#getknowledgebase) | **GET** /v1/knowledge-bases/{kb_id} | Get knowledge base |
| [**listDocuments**](RAGApi.md#listdocuments) | **GET** /v1/knowledge-bases/{kb_id}/documents | List documents in a knowledge base |
| [**listKnowledgeBases**](RAGApi.md#listknowledgebases) | **GET** /v1/knowledge-bases | List knowledge bases |
| [**retrieveFromKnowledgeBase**](RAGApi.md#retrievefromknowledgebase) | **POST** /v1/rag/retrieve | Retrieve from knowledge base |
| [**updateKnowledgeBase**](RAGApi.md#updateknowledgebaseoperation) | **PATCH** /v1/knowledge-bases/{kb_id} | Update a knowledge base |



## addDocument

> Document addDocument(kbId, createDocumentRequest)

Add a document

Adds a document to a knowledge base for indexing.

### Example

```ts
import {
  Configuration,
  RAGApi,
} from '@aqueduct-ai/sdk';
import type { AddDocumentRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RAGApi(config);

  const body = {
    // string
    kbId: kbId_example,
    // CreateDocumentRequest
    createDocumentRequest: {"name":"api-reference-v2.pdf","source":{"type":"s3","uri":"s3://aqueduct-docs/api-reference-v2.pdf"},"metadata":{"category":"api","version":"2.0","department":"engineering"}},
  } satisfies AddDocumentRequest;

  try {
    const data = await api.addDocument(body);
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
| **kbId** | `string` |  | [Defaults to `undefined`] |
| **createDocumentRequest** | [CreateDocumentRequest](CreateDocumentRequest.md) |  | |

### Return type

[**Document**](Document.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Document added and queued for indexing. |  * X-Trace-ID -  <br>  |
| **400** | Validation error (ERR-API-001-003). Request body or parameters failed validation. The &#x60;errors&#x60; array contains field-level details.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  * X-Request-ID -  <br>  |
| **404** | Resource not found (ERR-API-001-004). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createKnowledgeBase

> KnowledgeBase createKnowledgeBase(createKnowledgeBaseRequest)

Create a knowledge base

Creates a new knowledge base for RAG retrieval with configurable chunking and embedding.

### Example

```ts
import {
  Configuration,
  RAGApi,
} from '@aqueduct-ai/sdk';
import type { CreateKnowledgeBaseOperationRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RAGApi(config);

  const body = {
    // CreateKnowledgeBaseRequest
    createKnowledgeBaseRequest: {"name":"Product Documentation","description":"Internal product docs and API references","embedding_model":"text-embedding-3-small","chunking_config":{"strategy":"semantic","max_chunk_size":512,"chunk_overlap":50},"vector_store_config":{"provider":"pgvector"},"privacy_config":{"dp_enabled":false,"access_control":"document_level"}},
  } satisfies CreateKnowledgeBaseOperationRequest;

  try {
    const data = await api.createKnowledgeBase(body);
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
| **createKnowledgeBaseRequest** | [CreateKnowledgeBaseRequest](CreateKnowledgeBaseRequest.md) |  | |

### Return type

[**KnowledgeBase**](KnowledgeBase.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Knowledge base created. |  * X-Trace-ID -  <br>  |
| **400** | Validation error (ERR-API-001-003). Request body or parameters failed validation. The &#x60;errors&#x60; array contains field-level details.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  * X-Request-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteDocument

> deleteDocument(kbId, documentId)

Delete a document

Removes a document and its indexed chunks from a knowledge base.

### Example

```ts
import {
  Configuration,
  RAGApi,
} from '@aqueduct-ai/sdk';
import type { DeleteDocumentRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RAGApi(config);

  const body = {
    // string
    kbId: kbId_example,
    // string
    documentId: documentId_example,
  } satisfies DeleteDocumentRequest;

  try {
    const data = await api.deleteDocument(body);
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
| **kbId** | `string` |  | [Defaults to `undefined`] |
| **documentId** | `string` |  | [Defaults to `undefined`] |

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
| **204** | Document deleted. |  -  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **404** | Resource not found (ERR-API-001-004). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteKnowledgeBase

> deleteKnowledgeBase(kbId)

Delete a knowledge base

Permanently removes a knowledge base and all its documents.

### Example

```ts
import {
  Configuration,
  RAGApi,
} from '@aqueduct-ai/sdk';
import type { DeleteKnowledgeBaseRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RAGApi(config);

  const body = {
    // string
    kbId: kbId_example,
  } satisfies DeleteKnowledgeBaseRequest;

  try {
    const data = await api.deleteKnowledgeBase(body);
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
| **kbId** | `string` |  | [Defaults to `undefined`] |

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
| **204** | Knowledge base deleted. |  -  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **404** | Resource not found (ERR-API-001-004). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDocument

> Document getDocument(kbId, documentId)

Get document details

Returns details and indexing status for a specific document.

### Example

```ts
import {
  Configuration,
  RAGApi,
} from '@aqueduct-ai/sdk';
import type { GetDocumentRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RAGApi(config);

  const body = {
    // string
    kbId: kbId_example,
    // string
    documentId: documentId_example,
  } satisfies GetDocumentRequest;

  try {
    const data = await api.getDocument(body);
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
| **kbId** | `string` |  | [Defaults to `undefined`] |
| **documentId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**Document**](Document.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Document details. |  * X-Trace-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **404** | Resource not found (ERR-API-001-004). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getKnowledgeBase

> KnowledgeBase getKnowledgeBase(kbId)

Get knowledge base

Returns details for a specific knowledge base.

### Example

```ts
import {
  Configuration,
  RAGApi,
} from '@aqueduct-ai/sdk';
import type { GetKnowledgeBaseRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RAGApi(config);

  const body = {
    // string
    kbId: kbId_example,
  } satisfies GetKnowledgeBaseRequest;

  try {
    const data = await api.getKnowledgeBase(body);
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
| **kbId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**KnowledgeBase**](KnowledgeBase.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Knowledge base details. |  * X-Trace-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **404** | Resource not found (ERR-API-001-004). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listDocuments

> ListDocuments200Response listDocuments(kbId, pageSize, cursor, status)

List documents in a knowledge base

Returns all documents in a knowledge base with their indexing status.

### Example

```ts
import {
  Configuration,
  RAGApi,
} from '@aqueduct-ai/sdk';
import type { ListDocumentsRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RAGApi(config);

  const body = {
    // string
    kbId: kbId_example,
    // number | Maximum number of items to return per page. (optional)
    pageSize: 56,
    // string | Opaque cursor for pagination. Obtained from `next_cursor` in the previous response. (optional)
    cursor: cursor_example,
    // 'pending' | 'processing' | 'indexed' | 'error' (optional)
    status: status_example,
  } satisfies ListDocumentsRequest;

  try {
    const data = await api.listDocuments(body);
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
| **kbId** | `string` |  | [Defaults to `undefined`] |
| **pageSize** | `number` | Maximum number of items to return per page. | [Optional] [Defaults to `20`] |
| **cursor** | `string` | Opaque cursor for pagination. Obtained from &#x60;next_cursor&#x60; in the previous response. | [Optional] [Defaults to `undefined`] |
| **status** | `pending`, `processing`, `indexed`, `error` |  | [Optional] [Defaults to `undefined`] [Enum: pending, processing, indexed, error] |

### Return type

[**ListDocuments200Response**](ListDocuments200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Document list. |  * X-Trace-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **404** | Resource not found (ERR-API-001-004). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listKnowledgeBases

> ListKnowledgeBases200Response listKnowledgeBases(pageSize, cursor)

List knowledge bases

Returns all knowledge bases for the authenticated tenant.

### Example

```ts
import {
  Configuration,
  RAGApi,
} from '@aqueduct-ai/sdk';
import type { ListKnowledgeBasesRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RAGApi(config);

  const body = {
    // number | Maximum number of items to return per page. (optional)
    pageSize: 56,
    // string | Opaque cursor for pagination. Obtained from `next_cursor` in the previous response. (optional)
    cursor: cursor_example,
  } satisfies ListKnowledgeBasesRequest;

  try {
    const data = await api.listKnowledgeBases(body);
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

[**ListKnowledgeBases200Response**](ListKnowledgeBases200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Knowledge base list. |  * X-Trace-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## retrieveFromKnowledgeBase

> RetrievalResponse retrieveFromKnowledgeBase(retrievalRequest)

Retrieve from knowledge base

Queries a knowledge base and returns relevant document chunks. Supports hybrid dense/sparse retrieval per DAT [arXiv:2503.23013], configurable re-ranking per TREC 2025 [arXiv:2603.09891], and trust/confidence scores per Engineering RAG Stack [arXiv:2601.05264]. 

### Example

```ts
import {
  Configuration,
  RAGApi,
} from '@aqueduct-ai/sdk';
import type { RetrieveFromKnowledgeBaseRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RAGApi(config);

  const body = {
    // RetrievalRequest
    retrievalRequest: {"knowledge_base_id":"kb_01HQ3XYZABC123","query":"How do I configure rate limiting?","top_k":5,"score_threshold":0.5,"search_type":"hybrid"},
  } satisfies RetrieveFromKnowledgeBaseRequest;

  try {
    const data = await api.retrieveFromKnowledgeBase(body);
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
| **retrievalRequest** | [RetrievalRequest](RetrievalRequest.md) |  | |

### Return type

[**RetrievalResponse**](RetrievalResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Retrieval results. |  * X-Trace-ID -  <br>  |
| **400** | Validation error (ERR-API-001-003). Request body or parameters failed validation. The &#x60;errors&#x60; array contains field-level details.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  * X-Request-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **404** | Resource not found (ERR-API-001-004). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateKnowledgeBase

> KnowledgeBase updateKnowledgeBase(kbId, updateKnowledgeBaseRequest)

Update a knowledge base

Updates knowledge base configuration.

### Example

```ts
import {
  Configuration,
  RAGApi,
} from '@aqueduct-ai/sdk';
import type { UpdateKnowledgeBaseOperationRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RAGApi(config);

  const body = {
    // string
    kbId: kbId_example,
    // UpdateKnowledgeBaseRequest
    updateKnowledgeBaseRequest: {"name":"Product Documentation v2","description":"Updated internal product docs with new API v2 references","chunking_config":{"strategy":"contextual","max_chunk_size":1024,"chunk_overlap":100}},
  } satisfies UpdateKnowledgeBaseOperationRequest;

  try {
    const data = await api.updateKnowledgeBase(body);
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
| **kbId** | `string` |  | [Defaults to `undefined`] |
| **updateKnowledgeBaseRequest** | [UpdateKnowledgeBaseRequest](UpdateKnowledgeBaseRequest.md) |  | |

### Return type

[**KnowledgeBase**](KnowledgeBase.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Knowledge base updated. |  * X-Trace-ID -  <br>  |
| **400** | Validation error (ERR-API-001-003). Request body or parameters failed validation. The &#x60;errors&#x60; array contains field-level details.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  * X-Request-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **404** | Resource not found (ERR-API-001-004). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

