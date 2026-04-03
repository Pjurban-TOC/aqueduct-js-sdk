# SecurityApi

All URIs are relative to *https://api.aqueduct.io:443*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**deactivateHSMKey**](SecurityApi.md#deactivatehsmkey) | **POST** /api/v1/hsm/keys/{keyID}/deactivate | Deactivate an HSM key |
| [**destroyHSMKey**](SecurityApi.md#destroyhsmkey) | **DELETE** /api/v1/hsm/keys/{keyID} | Destroy an HSM key |
| [**generateHSMKey**](SecurityApi.md#generatehsmkey) | **POST** /api/v1/hsm/keys | Generate a new HSM key |
| [**getHSMHealth**](SecurityApi.md#gethsmhealth) | **GET** /api/v1/hsm/health | Get HSM health and FIPS self-test status |
| [**getHSMKeyAttestation**](SecurityApi.md#gethsmkeyattestation) | **GET** /api/v1/hsm/keys/{keyID}/attestation | Get key attestation evidence |
| [**getHSMKeyMetadata**](SecurityApi.md#gethsmkeymetadata) | **GET** /api/v1/hsm/keys/{keyID} | Get HSM key metadata |
| [**hsmDecrypt**](SecurityApi.md#hsmdecrypt) | **POST** /api/v1/hsm/decrypt | Decrypt data |
| [**hsmEncrypt**](SecurityApi.md#hsmencrypt) | **POST** /api/v1/hsm/encrypt | Encrypt data |
| [**hsmSign**](SecurityApi.md#hsmsign) | **POST** /api/v1/hsm/sign | Sign data |
| [**hsmUnwrapKey**](SecurityApi.md#hsmunwrapkey) | **POST** /api/v1/hsm/unwrap | Unwrap a key |
| [**hsmVerify**](SecurityApi.md#hsmverify) | **POST** /api/v1/hsm/verify | Verify a signature |
| [**hsmWrapKey**](SecurityApi.md#hsmwrapkey) | **POST** /api/v1/hsm/wrap | Wrap a key |
| [**listHSMKeys**](SecurityApi.md#listhsmkeys) | **GET** /api/v1/hsm/keys | List HSM keys |
| [**rotateHSMKey**](SecurityApi.md#rotatehsmkey) | **POST** /api/v1/hsm/keys/{keyID}/rotate | Rotate an HSM key |



## deactivateHSMKey

> DeactivateKeyResponse deactivateHSMKey(keyID)

Deactivate an HSM key

Transitions a key from active to deactivated state per NIST SP 800-57. Deactivated keys can still be used for decryption but not encryption. 

### Example

```ts
import {
  Configuration,
  SecurityApi,
} from '@aqueduct-ai/sdk';
import type { DeactivateHSMKeyRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SecurityApi(config);

  const body = {
    // string | HSM key identifier.
    keyID: key_01HQ3XYZABC123,
  } satisfies DeactivateHSMKeyRequest;

  try {
    const data = await api.deactivateHSMKey(body);
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
| **keyID** | `string` | HSM key identifier. | [Defaults to `undefined`] |

### Return type

[**DeactivateKeyResponse**](DeactivateKeyResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Key deactivated. |  * X-Trace-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **404** | Resource not found (ERR-API-001-004). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **429** | Rate limit exceeded (ERR-API-001-001). Includes &#x60;Retry-After&#x60; header and IETF-standard rate limit headers.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  * Retry-After -  <br>  * RateLimit -  <br>  * RateLimit-Policy -  <br>  * X-RateLimit-Remaining-Tokens -  <br>  * X-RateLimit-Remaining-Requests -  <br>  |
| **500** | Unexpected server error (ERR-API-001-012). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## destroyHSMKey

> DestroyKeyResponse destroyHSMKey(keyID)

Destroy an HSM key

Permanently destroys an HSM key with FIPS 140-3 zeroization. Key must be in deactivated state. This action is irreversible. 

### Example

```ts
import {
  Configuration,
  SecurityApi,
} from '@aqueduct-ai/sdk';
import type { DestroyHSMKeyRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SecurityApi(config);

  const body = {
    // string | HSM key identifier.
    keyID: key_01HQ3XYZABC123,
  } satisfies DestroyHSMKeyRequest;

  try {
    const data = await api.destroyHSMKey(body);
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
| **keyID** | `string` | HSM key identifier. | [Defaults to `undefined`] |

### Return type

[**DestroyKeyResponse**](DestroyKeyResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Key destroyed. |  * X-Trace-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **404** | Resource not found (ERR-API-001-004). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **409** | Resource conflict (ERR-API-001-014). The request could not be completed due to a conflict with the current state of the target resource.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **429** | Rate limit exceeded (ERR-API-001-001). Includes &#x60;Retry-After&#x60; header and IETF-standard rate limit headers.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  * Retry-After -  <br>  * RateLimit -  <br>  * RateLimit-Policy -  <br>  * X-RateLimit-Remaining-Tokens -  <br>  * X-RateLimit-Remaining-Requests -  <br>  |
| **500** | Unexpected server error (ERR-API-001-012). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## generateHSMKey

> GenerateKeyResponse generateHSMKey(generateKeyRequest)

Generate a new HSM key

Generates a new cryptographic key in the HSM. Supports classical (AES-256, RSA, ECDSA, Ed25519) and post-quantum (ML-KEM, ML-DSA, SLH-DSA) key types per NIST IR 8547 PQC readiness timeline. New keys start in pre-operational state per NIST SP 800-57. 

### Example

```ts
import {
  Configuration,
  SecurityApi,
} from '@aqueduct-ai/sdk';
import type { GenerateHSMKeyRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SecurityApi(config);

  const body = {
    // GenerateKeyRequest
    generateKeyRequest: {"key_type":"AES-256","label":"tenant-dek-acme-corp"},
  } satisfies GenerateHSMKeyRequest;

  try {
    const data = await api.generateHSMKey(body);
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
| **generateKeyRequest** | [GenerateKeyRequest](GenerateKeyRequest.md) |  | |

### Return type

[**GenerateKeyResponse**](GenerateKeyResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Key generated. |  * X-Trace-ID -  <br>  |
| **400** | Validation error (ERR-API-001-003). Request body or parameters failed validation. The &#x60;errors&#x60; array contains field-level details.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  * X-Request-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **429** | Rate limit exceeded (ERR-API-001-001). Includes &#x60;Retry-After&#x60; header and IETF-standard rate limit headers.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  * Retry-After -  <br>  * RateLimit -  <br>  * RateLimit-Policy -  <br>  * X-RateLimit-Remaining-Tokens -  <br>  * X-RateLimit-Remaining-Requests -  <br>  |
| **500** | Unexpected server error (ERR-API-001-012). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getHSMHealth

> HSMHealthResponse getHSMHealth()

Get HSM health and FIPS self-test status

Returns HSM connectivity, FIPS 140-3 self-test results, session availability, and active key count. Used for operational monitoring. 

### Example

```ts
import {
  Configuration,
  SecurityApi,
} from '@aqueduct-ai/sdk';
import type { GetHSMHealthRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SecurityApi(config);

  try {
    const data = await api.getHSMHealth();
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

[**HSMHealthResponse**](HSMHealthResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | HSM health status. |  * X-Trace-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **503** | Service unavailable due to circuit breaker open (ERR-API-001-011). Includes &#x60;Retry-After&#x60; header.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  * Retry-After -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getHSMKeyAttestation

> AttestationResponse getHSMKeyAttestation(keyID)

Get key attestation evidence

Returns cryptographic attestation evidence proving the key was generated and is stored within a FIPS 140-3 validated HSM. Follows IETF RATS (RFC 9334) remote attestation pattern. 

### Example

```ts
import {
  Configuration,
  SecurityApi,
} from '@aqueduct-ai/sdk';
import type { GetHSMKeyAttestationRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SecurityApi(config);

  const body = {
    // string | HSM key identifier.
    keyID: key_01HQ3XYZABC123,
  } satisfies GetHSMKeyAttestationRequest;

  try {
    const data = await api.getHSMKeyAttestation(body);
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
| **keyID** | `string` | HSM key identifier. | [Defaults to `undefined`] |

### Return type

[**AttestationResponse**](AttestationResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Attestation evidence. |  * X-Trace-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **404** | Resource not found (ERR-API-001-004). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getHSMKeyMetadata

> HSMKeyMetadata getHSMKeyMetadata(keyID)

Get HSM key metadata

Returns metadata for a specific HSM key. Does not expose key material.

### Example

```ts
import {
  Configuration,
  SecurityApi,
} from '@aqueduct-ai/sdk';
import type { GetHSMKeyMetadataRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SecurityApi(config);

  const body = {
    // string | HSM key identifier.
    keyID: key_01HQ3XYZABC123,
  } satisfies GetHSMKeyMetadataRequest;

  try {
    const data = await api.getHSMKeyMetadata(body);
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
| **keyID** | `string` | HSM key identifier. | [Defaults to `undefined`] |

### Return type

[**HSMKeyMetadata**](HSMKeyMetadata.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Key metadata. |  * X-Trace-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **404** | Resource not found (ERR-API-001-004). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## hsmDecrypt

> DecryptResponse hsmDecrypt(decryptRequest)

Decrypt data

Decrypts data previously encrypted with &#x60;hsmEncrypt&#x60;.

### Example

```ts
import {
  Configuration,
  SecurityApi,
} from '@aqueduct-ai/sdk';
import type { HsmDecryptRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SecurityApi(config);

  const body = {
    // DecryptRequest
    decryptRequest: {"key_id":"key_01HQ3XYZABC123","ciphertext":"kJ3nF8gH2mPq...base64...","nonce":"dW5pcXVlX25vbmNl","aad":"dGVuYW50X2FjbWU="},
  } satisfies HsmDecryptRequest;

  try {
    const data = await api.hsmDecrypt(body);
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
| **decryptRequest** | [DecryptRequest](DecryptRequest.md) |  | |

### Return type

[**DecryptResponse**](DecryptResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Decrypted data. |  * X-Trace-ID -  <br>  |
| **400** | Validation error (ERR-API-001-003). Request body or parameters failed validation. The &#x60;errors&#x60; array contains field-level details.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  * X-Request-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **404** | Resource not found (ERR-API-001-004). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **429** | Rate limit exceeded (ERR-API-001-001). Includes &#x60;Retry-After&#x60; header and IETF-standard rate limit headers.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  * Retry-After -  <br>  * RateLimit -  <br>  * RateLimit-Policy -  <br>  * X-RateLimit-Remaining-Tokens -  <br>  * X-RateLimit-Remaining-Requests -  <br>  |
| **500** | Unexpected server error (ERR-API-001-012). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## hsmEncrypt

> EncryptResponse hsmEncrypt(encryptRequest)

Encrypt data

Encrypts data using AES-256-GCM with a 96-bit nonce per NIST SP 800-38D. Supports additional authenticated data (AAD) for authenticated encryption. 

### Example

```ts
import {
  Configuration,
  SecurityApi,
} from '@aqueduct-ai/sdk';
import type { HsmEncryptRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SecurityApi(config);

  const body = {
    // EncryptRequest
    encryptRequest: {"key_id":"key_01HQ3XYZABC123","plaintext":"SGVsbG8gV29ybGQ=","aad":"dGVuYW50X2FjbWU="},
  } satisfies HsmEncryptRequest;

  try {
    const data = await api.hsmEncrypt(body);
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
| **encryptRequest** | [EncryptRequest](EncryptRequest.md) |  | |

### Return type

[**EncryptResponse**](EncryptResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Encrypted data. |  * X-Trace-ID -  <br>  |
| **400** | Validation error (ERR-API-001-003). Request body or parameters failed validation. The &#x60;errors&#x60; array contains field-level details.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  * X-Request-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **404** | Resource not found (ERR-API-001-004). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **429** | Rate limit exceeded (ERR-API-001-001). Includes &#x60;Retry-After&#x60; header and IETF-standard rate limit headers.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  * Retry-After -  <br>  * RateLimit -  <br>  * RateLimit-Policy -  <br>  * X-RateLimit-Remaining-Tokens -  <br>  * X-RateLimit-Remaining-Requests -  <br>  |
| **500** | Unexpected server error (ERR-API-001-012). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## hsmSign

> SignResponse hsmSign(signRequest)

Sign data

Creates a digital signature over a digest using an asymmetric key (RSA, ECDSA, Ed25519, ML-DSA). The caller provides a pre-computed digest (SHA-256 or SHA-384). 

### Example

```ts
import {
  Configuration,
  SecurityApi,
} from '@aqueduct-ai/sdk';
import type { HsmSignRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SecurityApi(config);

  const body = {
    // SignRequest
    signRequest: {"key_id":"key_01HQ3ECDSA_P256","digest":"n4bQgYhMfWWaL+qgxVrQFaO/TxsrC4Is0V1sFbDwCgg="},
  } satisfies HsmSignRequest;

  try {
    const data = await api.hsmSign(body);
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
| **signRequest** | [SignRequest](SignRequest.md) |  | |

### Return type

[**SignResponse**](SignResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Signature. |  * X-Trace-ID -  <br>  |
| **400** | Validation error (ERR-API-001-003). Request body or parameters failed validation. The &#x60;errors&#x60; array contains field-level details.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  * X-Request-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **404** | Resource not found (ERR-API-001-004). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **429** | Rate limit exceeded (ERR-API-001-001). Includes &#x60;Retry-After&#x60; header and IETF-standard rate limit headers.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  * Retry-After -  <br>  * RateLimit -  <br>  * RateLimit-Policy -  <br>  * X-RateLimit-Remaining-Tokens -  <br>  * X-RateLimit-Remaining-Requests -  <br>  |
| **500** | Unexpected server error (ERR-API-001-012). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## hsmUnwrapKey

> UnwrapKeyResponse hsmUnwrapKey(unwrapKeyRequest)

Unwrap a key

Unwraps (decrypts) a wrapped DEK using the specified KEK via AES-KWP per RFC 5649 / NIST SP 800-38F. 

### Example

```ts
import {
  Configuration,
  SecurityApi,
} from '@aqueduct-ai/sdk';
import type { HsmUnwrapKeyRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SecurityApi(config);

  const body = {
    // UnwrapKeyRequest
    unwrapKeyRequest: {"kek_id":"key_01HQ3KEK_MASTER","wrapped_dek":"oL2nPq7Rs8Tu...wrapped-base64..."},
  } satisfies HsmUnwrapKeyRequest;

  try {
    const data = await api.hsmUnwrapKey(body);
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
| **unwrapKeyRequest** | [UnwrapKeyRequest](UnwrapKeyRequest.md) |  | |

### Return type

[**UnwrapKeyResponse**](UnwrapKeyResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Unwrapped key. |  * X-Trace-ID -  <br>  |
| **400** | Validation error (ERR-API-001-003). Request body or parameters failed validation. The &#x60;errors&#x60; array contains field-level details.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  * X-Request-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **404** | Resource not found (ERR-API-001-004). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **429** | Rate limit exceeded (ERR-API-001-001). Includes &#x60;Retry-After&#x60; header and IETF-standard rate limit headers.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  * Retry-After -  <br>  * RateLimit -  <br>  * RateLimit-Policy -  <br>  * X-RateLimit-Remaining-Tokens -  <br>  * X-RateLimit-Remaining-Requests -  <br>  |
| **500** | Unexpected server error (ERR-API-001-012). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## hsmVerify

> VerifyResponse hsmVerify(verifyRequest)

Verify a signature

Verifies a digital signature against a digest using the corresponding public key.

### Example

```ts
import {
  Configuration,
  SecurityApi,
} from '@aqueduct-ai/sdk';
import type { HsmVerifyRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SecurityApi(config);

  const body = {
    // VerifyRequest
    verifyRequest: {"key_id":"key_01HQ3ECDSA_P256","digest":"n4bQgYhMfWWaL+qgxVrQFaO/TxsrC4Is0V1sFbDwCgg=","signature":"MEUCIQDx...base64-signature..."},
  } satisfies HsmVerifyRequest;

  try {
    const data = await api.hsmVerify(body);
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
| **verifyRequest** | [VerifyRequest](VerifyRequest.md) |  | |

### Return type

[**VerifyResponse**](VerifyResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Verification result. |  * X-Trace-ID -  <br>  |
| **400** | Validation error (ERR-API-001-003). Request body or parameters failed validation. The &#x60;errors&#x60; array contains field-level details.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  * X-Request-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **404** | Resource not found (ERR-API-001-004). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **429** | Rate limit exceeded (ERR-API-001-001). Includes &#x60;Retry-After&#x60; header and IETF-standard rate limit headers.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  * Retry-After -  <br>  * RateLimit -  <br>  * RateLimit-Policy -  <br>  * X-RateLimit-Remaining-Tokens -  <br>  * X-RateLimit-Remaining-Requests -  <br>  |
| **500** | Unexpected server error (ERR-API-001-012). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## hsmWrapKey

> WrapKeyResponse hsmWrapKey(wrapKeyRequest)

Wrap a key

Wraps (encrypts) a data encryption key (DEK) using a key encryption key (KEK) via AES-KWP per RFC 5649 / NIST SP 800-38F. Used for secure key transport in the envelope encryption hierarchy. 

### Example

```ts
import {
  Configuration,
  SecurityApi,
} from '@aqueduct-ai/sdk';
import type { HsmWrapKeyRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SecurityApi(config);

  const body = {
    // WrapKeyRequest
    wrapKeyRequest: {"kek_id":"key_01HQ3KEK_MASTER","dek":"AQIDBAUGBwgJCgsMDQ4PEA=="},
  } satisfies HsmWrapKeyRequest;

  try {
    const data = await api.hsmWrapKey(body);
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
| **wrapKeyRequest** | [WrapKeyRequest](WrapKeyRequest.md) |  | |

### Return type

[**WrapKeyResponse**](WrapKeyResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Wrapped key. |  * X-Trace-ID -  <br>  |
| **400** | Validation error (ERR-API-001-003). Request body or parameters failed validation. The &#x60;errors&#x60; array contains field-level details.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  * X-Request-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **404** | Resource not found (ERR-API-001-004). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **429** | Rate limit exceeded (ERR-API-001-001). Includes &#x60;Retry-After&#x60; header and IETF-standard rate limit headers.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  * Retry-After -  <br>  * RateLimit -  <br>  * RateLimit-Policy -  <br>  * X-RateLimit-Remaining-Tokens -  <br>  * X-RateLimit-Remaining-Requests -  <br>  |
| **500** | Unexpected server error (ERR-API-001-012). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listHSMKeys

> ListKeysResponse listHSMKeys(state, keyType, label, limit)

List HSM keys

Returns HSM key metadata filtered by state, type, or label. Does not expose key material — only metadata per NIST SP 800-57. 

### Example

```ts
import {
  Configuration,
  SecurityApi,
} from '@aqueduct-ai/sdk';
import type { ListHSMKeysRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SecurityApi(config);

  const body = {
    // HSMKeyState | Filter by key state (NIST SP 800-57 lifecycle). (optional)
    state: ...,
    // HSMKeyType | Filter by key type. (optional)
    keyType: ...,
    // string | Filter by label prefix. (optional)
    label: label_example,
    // number | Maximum keys to return. (optional)
    limit: 56,
  } satisfies ListHSMKeysRequest;

  try {
    const data = await api.listHSMKeys(body);
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
| **state** | `HSMKeyState` | Filter by key state (NIST SP 800-57 lifecycle). | [Optional] [Defaults to `undefined`] [Enum: pre-operational, active, deactivated, compromised, destroyed] |
| **keyType** | `HSMKeyType` | Filter by key type. | [Optional] [Defaults to `undefined`] [Enum: AES-256, RSA-2048, RSA-3072, RSA-4096, ECDSA-P256, ECDSA-P384, Ed25519, ML-KEM-768, ML-KEM-1024, ML-DSA-65, ML-DSA-87, SLH-DSA-SHA2-128s, SLH-DSA-SHA2-256s] |
| **label** | `string` | Filter by label prefix. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Maximum keys to return. | [Optional] [Defaults to `20`] |

### Return type

[**ListKeysResponse**](ListKeysResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Key metadata list. |  * X-Trace-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## rotateHSMKey

> RotateKeyResponse rotateHSMKey(keyID)

Rotate an HSM key

Creates a new version of the key. The previous version is deactivated per NIST SP 800-57 crypto-period management. Existing ciphertext encrypted with the old version remains decryptable. 

### Example

```ts
import {
  Configuration,
  SecurityApi,
} from '@aqueduct-ai/sdk';
import type { RotateHSMKeyRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SecurityApi(config);

  const body = {
    // string | HSM key identifier.
    keyID: key_01HQ3XYZABC123,
  } satisfies RotateHSMKeyRequest;

  try {
    const data = await api.rotateHSMKey(body);
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
| **keyID** | `string` | HSM key identifier. | [Defaults to `undefined`] |

### Return type

[**RotateKeyResponse**](RotateKeyResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Key rotated. |  * X-Trace-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **404** | Resource not found (ERR-API-001-004). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **429** | Rate limit exceeded (ERR-API-001-001). Includes &#x60;Retry-After&#x60; header and IETF-standard rate limit headers.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  * Retry-After -  <br>  * RateLimit -  <br>  * RateLimit-Policy -  <br>  * X-RateLimit-Remaining-Tokens -  <br>  * X-RateLimit-Remaining-Requests -  <br>  |
| **500** | Unexpected server error (ERR-API-001-012). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

