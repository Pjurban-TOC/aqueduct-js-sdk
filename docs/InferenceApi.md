# InferenceApi

All URIs are relative to *https://api.aqueduct.io:443*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createChatCompletion**](InferenceApi.md#createchatcompletion) | **POST** /v1/chat/completions | Create chat completion |
| [**createEmbedding**](InferenceApi.md#createembedding) | **POST** /v1/embeddings | Create embeddings |
| [**listModels**](InferenceApi.md#listmodels) | **GET** /v1/models | List available models |



## createChatCompletion

> ChatCompletionResponse createChatCompletion(chatCompletionRequest, xModelOverride, xRouteConfig, xProviderOverride, xCacheControl)

Create chat completion

OpenAI-compatible chat completion endpoint. Supports both synchronous (JSON) and streaming (SSE) responses based on the &#x60;stream&#x60; parameter.  This is the primary AI inference endpoint. Requests are routed to the appropriate upstream provider based on tenant configuration, model availability, and routing policy.  **Streaming:** When &#x60;stream: true&#x60;, the response uses &#x60;text/event-stream&#x60; content type with &#x60;ChatCompletionChunk&#x60; objects. The stream terminates with &#x60;data: [DONE]&#x60;. 

### Example

```ts
import {
  Configuration,
  InferenceApi,
} from '@aqueduct-ai/sdk';
import type { CreateChatCompletionRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new InferenceApi(config);

  const body = {
    // ChatCompletionRequest
    chatCompletionRequest: {"model":"gpt-4o","messages":[{"role":"system","content":"You are a helpful assistant."},{"role":"user","content":"Explain quantum computing in simple terms."}],"temperature":0.7,"max_tokens":1024},
    // string | Override the model selection for this request, bypassing the routing policy. Requires `model:invoke` scope and the model must be in the tenant\'s `models_allowed` list. (optional)
    xModelOverride: gpt-4o,
    // string | Named routing configuration to apply (e.g., `low-latency`, `cost-optimized`). Configured per-tenant. (optional)
    xRouteConfig: xRouteConfig_example,
    // 'openai' | 'anthropic' | 'azure' | 'google' | 'aws-bedrock' | 'cohere' | Force routing to a specific provider backend (e.g., `openai`, `anthropic`, `azure`). Follows the Portkey routing header pattern. (optional)
    xProviderOverride: xProviderOverride_example,
    // 'no-cache' | 'no-store' | Controls response cache behavior for this request. - `no-cache`: Skip cache read (force fresh LLM call), but still store the   new response in cache for subsequent requests. - `no-store`: Skip cache read AND write. The response is neither served from   cache nor stored. Use for sensitive queries that should never be cached. Omitting this header (default) enables normal cache behavior. Per Key Collision Attack [arXiv:2601.23088], caches are strictly tenant-isolated to prevent cross-tenant poisoning.  (optional)
    xCacheControl: xCacheControl_example,
  } satisfies CreateChatCompletionRequest;

  try {
    const data = await api.createChatCompletion(body);
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
| **chatCompletionRequest** | [ChatCompletionRequest](ChatCompletionRequest.md) |  | |
| **xModelOverride** | `string` | Override the model selection for this request, bypassing the routing policy. Requires &#x60;model:invoke&#x60; scope and the model must be in the tenant\&#39;s &#x60;models_allowed&#x60; list. | [Optional] [Defaults to `undefined`] |
| **xRouteConfig** | `string` | Named routing configuration to apply (e.g., &#x60;low-latency&#x60;, &#x60;cost-optimized&#x60;). Configured per-tenant. | [Optional] [Defaults to `undefined`] |
| **xProviderOverride** | `openai`, `anthropic`, `azure`, `google`, `aws-bedrock`, `cohere` | Force routing to a specific provider backend (e.g., &#x60;openai&#x60;, &#x60;anthropic&#x60;, &#x60;azure&#x60;). Follows the Portkey routing header pattern. | [Optional] [Defaults to `undefined`] [Enum: openai, anthropic, azure, google, aws-bedrock, cohere] |
| **xCacheControl** | `no-cache`, `no-store` | Controls response cache behavior for this request. - &#x60;no-cache&#x60;: Skip cache read (force fresh LLM call), but still store the   new response in cache for subsequent requests. - &#x60;no-store&#x60;: Skip cache read AND write. The response is neither served from   cache nor stored. Use for sensitive queries that should never be cached. Omitting this header (default) enables normal cache behavior. Per Key Collision Attack [arXiv:2601.23088], caches are strictly tenant-isolated to prevent cross-tenant poisoning.  | [Optional] [Defaults to `undefined`] [Enum: no-cache, no-store] |

### Return type

[**ChatCompletionResponse**](ChatCompletionResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `text/event-stream`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Chat completion response. Content type depends on the &#x60;stream&#x60; parameter: - &#x60;stream: false&#x60; (default): &#x60;application/json&#x60; with &#x60;ChatCompletionResponse&#x60; - &#x60;stream: true&#x60;: &#x60;text/event-stream&#x60; with &#x60;ChatCompletionChunk&#x60; objects  |  * X-Trace-ID -  <br>  * X-Request-ID -  <br>  * X-Tenant-ID -  <br>  * RateLimit -  <br>  * RateLimit-Policy -  <br>  * X-RateLimit-Remaining-Tokens -  <br>  * X-RateLimit-Remaining-Requests -  <br>  * X-RateLimit-Reset-Tokens -  <br>  * X-RateLimit-Reset-Requests -  <br>  * X-Cache-Status -  <br>  * X-Cache-Age -  <br>  |
| **400** | Validation error (ERR-API-001-003). Request body or parameters failed validation. The &#x60;errors&#x60; array contains field-level details.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  * X-Request-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **413** | Request body exceeds maximum size (ERR-API-001-013). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **429** | Rate limit exceeded (ERR-API-001-001). Includes &#x60;Retry-After&#x60; header and IETF-standard rate limit headers.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  * Retry-After -  <br>  * RateLimit -  <br>  * RateLimit-Policy -  <br>  * X-RateLimit-Remaining-Tokens -  <br>  * X-RateLimit-Remaining-Requests -  <br>  |
| **500** | Unexpected server error (ERR-API-001-012). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **502** | Upstream LLM provider returned an error (ERR-API-001-009). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **503** | Service unavailable due to circuit breaker open (ERR-API-001-011). Includes &#x60;Retry-After&#x60; header.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  * Retry-After -  <br>  |
| **504** | Upstream service timed out (ERR-API-001-010). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createEmbedding

> EmbeddingResponse createEmbedding(embeddingRequest)

Create embeddings

OpenAI-compatible embedding endpoint. Generates vector representations of input text for similarity search, clustering, and RAG retrieval. 

### Example

```ts
import {
  Configuration,
  InferenceApi,
} from '@aqueduct-ai/sdk';
import type { CreateEmbeddingRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new InferenceApi(config);

  const body = {
    // EmbeddingRequest
    embeddingRequest: {"model":"text-embedding-3-small","input":"The food was delicious and the waiter was friendly."},
  } satisfies CreateEmbeddingRequest;

  try {
    const data = await api.createEmbedding(body);
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
| **embeddingRequest** | [EmbeddingRequest](EmbeddingRequest.md) |  | |

### Return type

[**EmbeddingResponse**](EmbeddingResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Embedding response. |  * X-Trace-ID -  <br>  * RateLimit -  <br>  * X-RateLimit-Remaining-Tokens -  <br>  |
| **400** | Validation error (ERR-API-001-003). Request body or parameters failed validation. The &#x60;errors&#x60; array contains field-level details.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  * X-Request-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **429** | Rate limit exceeded (ERR-API-001-001). Includes &#x60;Retry-After&#x60; header and IETF-standard rate limit headers.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  * Retry-After -  <br>  * RateLimit -  <br>  * RateLimit-Policy -  <br>  * X-RateLimit-Remaining-Tokens -  <br>  * X-RateLimit-Remaining-Requests -  <br>  |
| **502** | Upstream LLM provider returned an error (ERR-API-001-009). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listModels

> ListModelsResponse listModels()

List available models

Returns models available to the authenticated tenant based on their plan tier and allowed models configuration. 

### Example

```ts
import {
  Configuration,
  InferenceApi,
} from '@aqueduct-ai/sdk';
import type { ListModelsRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new InferenceApi(config);

  try {
    const data = await api.listModels();
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

[**ListModelsResponse**](ListModelsResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Model list. |  * X-Trace-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

