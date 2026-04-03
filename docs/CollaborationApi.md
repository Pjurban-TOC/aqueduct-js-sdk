# CollaborationApi

All URIs are relative to *https://api.aqueduct.io:443*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addWorkspaceMember**](CollaborationApi.md#addworkspacemember) | **POST** /api/v1/workspaces/{workspace_id}/members | Add a member to a workspace |
| [**createAnnotation**](CollaborationApi.md#createannotation) | **POST** /api/v1/conversations/{conversation_id}/turns/{turn_index}/annotations | Create an annotation on a conversation turn |
| [**deleteAnnotation**](CollaborationApi.md#deleteannotation) | **DELETE** /api/v1/conversations/{conversation_id}/turns/{turn_index}/annotations/{annotation_id} | Delete an annotation |
| [**listAnnotations**](CollaborationApi.md#listannotations) | **GET** /api/v1/conversations/{conversation_id}/turns/{turn_index}/annotations | List annotations for a conversation turn |
| [**listCollabActivity**](CollaborationApi.md#listcollabactivity) | **GET** /api/v1/activity | List collaboration activity records |
| [**listConversationShares**](CollaborationApi.md#listconversationshares) | **GET** /api/v1/conversations/{conversation_id}/shares | List shares for a conversation |
| [**listPresence**](CollaborationApi.md#listpresence) | **GET** /api/v1/presence | List active presence records for a conversation |
| [**listWorkspaceMembers**](CollaborationApi.md#listworkspacemembers) | **GET** /api/v1/workspaces/{workspace_id}/members | List workspace members |
| [**presenceWebSocket**](CollaborationApi.md#presencewebsocket) | **GET** /api/v1/presence/ws | Subscribe to real-time presence events via WebSocket |
| [**removeWorkspaceMember**](CollaborationApi.md#removeworkspacemember) | **DELETE** /api/v1/workspaces/{workspace_id}/members/{user_id} | Remove a member from a workspace |
| [**revokeConversationShare**](CollaborationApi.md#revokeconversationshare) | **DELETE** /api/v1/conversations/{conversation_id}/shares/{share_id} | Revoke a share |
| [**shareConversation**](CollaborationApi.md#shareconversation) | **POST** /api/v1/conversations/{conversation_id}/shares | Share a conversation with a user, role, or team |
| [**updateAnnotation**](CollaborationApi.md#updateannotation) | **PUT** /api/v1/conversations/{conversation_id}/turns/{turn_index}/annotations/{annotation_id} | Update an annotation body |
| [**updateWorkspaceMemberRole**](CollaborationApi.md#updateworkspacememberrole) | **PUT** /api/v1/workspaces/{workspace_id}/members/{user_id} | Update a workspace member\&#39;s role |



## addWorkspaceMember

> WorkspaceMemberRecord addWorkspaceMember(workspaceId, workspaceMemberAddRequest)

Add a member to a workspace

Grants a user membership in the specified workspace with the given role.

### Example

```ts
import {
  Configuration,
  CollaborationApi,
} from '@aqueduct-ai/sdk';
import type { AddWorkspaceMemberRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CollaborationApi(config);

  const body = {
    // string
    workspaceId: workspaceId_example,
    // WorkspaceMemberAddRequest
    workspaceMemberAddRequest: ...,
  } satisfies AddWorkspaceMemberRequest;

  try {
    const data = await api.addWorkspaceMember(body);
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
| **workspaceId** | `string` |  | [Defaults to `undefined`] |
| **workspaceMemberAddRequest** | [WorkspaceMemberAddRequest](WorkspaceMemberAddRequest.md) |  | |

### Return type

[**WorkspaceMemberRecord**](WorkspaceMemberRecord.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Member added. |  * X-Trace-ID -  <br>  |
| **400** | Validation error (ERR-API-001-003). Request body or parameters failed validation. The &#x60;errors&#x60; array contains field-level details.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  * X-Request-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createAnnotation

> AnnotationRecord createAnnotation(conversationId, turnIndex, annotationRequest)

Create an annotation on a conversation turn

Attaches a comment to a specific turn (zero-based index) in a conversation. The body may contain @mention tokens (e.g. @alice) which trigger asynchronous in-app notifications and emit &#x60;mention&#x60; activity records. 

### Example

```ts
import {
  Configuration,
  CollaborationApi,
} from '@aqueduct-ai/sdk';
import type { CreateAnnotationRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CollaborationApi(config);

  const body = {
    // string
    conversationId: conversationId_example,
    // number
    turnIndex: 56,
    // AnnotationRequest
    annotationRequest: ...,
  } satisfies CreateAnnotationRequest;

  try {
    const data = await api.createAnnotation(body);
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
| **conversationId** | `string` |  | [Defaults to `undefined`] |
| **turnIndex** | `number` |  | [Defaults to `undefined`] |
| **annotationRequest** | [AnnotationRequest](AnnotationRequest.md) |  | |

### Return type

[**AnnotationRecord**](AnnotationRecord.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Annotation created. |  * X-Trace-ID -  <br>  |
| **400** | Validation error (ERR-API-001-003). Request body or parameters failed validation. The &#x60;errors&#x60; array contains field-level details.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  * X-Request-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteAnnotation

> deleteAnnotation(conversationId, turnIndex, annotationId)

Delete an annotation

Permanently removes an annotation.

### Example

```ts
import {
  Configuration,
  CollaborationApi,
} from '@aqueduct-ai/sdk';
import type { DeleteAnnotationRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CollaborationApi(config);

  const body = {
    // string
    conversationId: conversationId_example,
    // number
    turnIndex: 56,
    // string
    annotationId: annotationId_example,
  } satisfies DeleteAnnotationRequest;

  try {
    const data = await api.deleteAnnotation(body);
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
| **conversationId** | `string` |  | [Defaults to `undefined`] |
| **turnIndex** | `number` |  | [Defaults to `undefined`] |
| **annotationId** | `string` |  | [Defaults to `undefined`] |

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
| **204** | Annotation deleted. |  -  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **404** | Resource not found (ERR-API-001-004). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listAnnotations

> AnnotationListResponse listAnnotations(conversationId, turnIndex)

List annotations for a conversation turn

Returns all annotations for the specified turn, ordered by creation time.

### Example

```ts
import {
  Configuration,
  CollaborationApi,
} from '@aqueduct-ai/sdk';
import type { ListAnnotationsRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CollaborationApi(config);

  const body = {
    // string
    conversationId: conversationId_example,
    // number
    turnIndex: 56,
  } satisfies ListAnnotationsRequest;

  try {
    const data = await api.listAnnotations(body);
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
| **conversationId** | `string` |  | [Defaults to `undefined`] |
| **turnIndex** | `number` |  | [Defaults to `undefined`] |

### Return type

[**AnnotationListResponse**](AnnotationListResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Annotation list. |  * X-Trace-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listCollabActivity

> CollabActivityListResponse listCollabActivity(typeFilter, actor, from, to, cursor, pageSize)

List collaboration activity records

Returns a cursor-paginated feed of collaboration activity events for the authenticated tenant: shares, annotations, mentions, and workspace membership changes. Scoped to the caller\&#39;s tenant_id from the JWT claim. 

### Example

```ts
import {
  Configuration,
  CollaborationApi,
} from '@aqueduct-ai/sdk';
import type { ListCollabActivityRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CollaborationApi(config);

  const body = {
    // 'conversation_shared' | 'conversation_annotated' | 'workspace_member_added' | 'workspace_member_removed' | 'policy_changed' | 'mention' | Filter by activity type. (optional)
    typeFilter: typeFilter_example,
    // string | Filter by actor user ID. (optional)
    actor: actor_example,
    // Date | Start time (RFC 3339). (optional)
    from: 2013-10-20T19:20:30+01:00,
    // Date | End time (RFC 3339). (optional)
    to: 2013-10-20T19:20:30+01:00,
    // string | Opaque pagination cursor from a previous response. (optional)
    cursor: cursor_example,
    // number | Number of records to return (default 50, max 200). (optional)
    pageSize: 56,
  } satisfies ListCollabActivityRequest;

  try {
    const data = await api.listCollabActivity(body);
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
| **typeFilter** | `conversation_shared`, `conversation_annotated`, `workspace_member_added`, `workspace_member_removed`, `policy_changed`, `mention` | Filter by activity type. | [Optional] [Defaults to `undefined`] [Enum: conversation_shared, conversation_annotated, workspace_member_added, workspace_member_removed, policy_changed, mention] |
| **actor** | `string` | Filter by actor user ID. | [Optional] [Defaults to `undefined`] |
| **from** | `Date` | Start time (RFC 3339). | [Optional] [Defaults to `undefined`] |
| **to** | `Date` | End time (RFC 3339). | [Optional] [Defaults to `undefined`] |
| **cursor** | `string` | Opaque pagination cursor from a previous response. | [Optional] [Defaults to `undefined`] |
| **pageSize** | `number` | Number of records to return (default 50, max 200). | [Optional] [Defaults to `50`] |

### Return type

[**CollabActivityListResponse**](CollabActivityListResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Activity records. |  * X-Trace-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listConversationShares

> ShareListResponse listConversationShares(conversationId)

List shares for a conversation

Returns all active shares for the specified conversation.

### Example

```ts
import {
  Configuration,
  CollaborationApi,
} from '@aqueduct-ai/sdk';
import type { ListConversationSharesRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CollaborationApi(config);

  const body = {
    // string
    conversationId: conversationId_example,
  } satisfies ListConversationSharesRequest;

  try {
    const data = await api.listConversationShares(body);
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
| **conversationId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**ShareListResponse**](ShareListResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Share list. |  * X-Trace-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listPresence

> PresenceListResponse listPresence(workspaceId)

List active presence records for a conversation

Returns the current presence state for all users active in the specified conversation. Used by the client to restore presence state after a WebSocket reconnect without replaying the full event stream. 

### Example

```ts
import {
  Configuration,
  CollaborationApi,
} from '@aqueduct-ai/sdk';
import type { ListPresenceRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CollaborationApi(config);

  const body = {
    // string | Filter presence records to the specified workspace. Omit to return all tenant-scoped records. (optional)
    workspaceId: workspaceId_example,
  } satisfies ListPresenceRequest;

  try {
    const data = await api.listPresence(body);
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
| **workspaceId** | `string` | Filter presence records to the specified workspace. Omit to return all tenant-scoped records. | [Optional] [Defaults to `undefined`] |

### Return type

[**PresenceListResponse**](PresenceListResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Active presence records. |  * X-Trace-ID -  <br>  |
| **400** | Validation error (ERR-API-001-003). Request body or parameters failed validation. The &#x60;errors&#x60; array contains field-level details.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  * X-Request-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **503** | Collaboration service unavailable. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listWorkspaceMembers

> WorkspaceMemberListResponse listWorkspaceMembers(workspaceId)

List workspace members

Returns all current members of the specified workspace.

### Example

```ts
import {
  Configuration,
  CollaborationApi,
} from '@aqueduct-ai/sdk';
import type { ListWorkspaceMembersRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CollaborationApi(config);

  const body = {
    // string
    workspaceId: workspaceId_example,
  } satisfies ListWorkspaceMembersRequest;

  try {
    const data = await api.listWorkspaceMembers(body);
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
| **workspaceId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**WorkspaceMemberListResponse**](WorkspaceMemberListResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Member list. |  * X-Trace-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## presenceWebSocket

> presenceWebSocket(seq)

Subscribe to real-time presence events via WebSocket

Upgrades the connection to a WebSocket and streams presence change events for the caller\&#39;s tenant. Events are replayed from &#x60;seq&#x60; on reconnect for at-least-once delivery. The server closes the connection on tenant stream failure with code 1011 (Internal Error). 

### Example

```ts
import {
  Configuration,
  CollaborationApi,
} from '@aqueduct-ai/sdk';
import type { PresenceWebSocketRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CollaborationApi(config);

  const body = {
    // number | Replay events after this sequence number (0 = full stream from the beginning). (optional)
    seq: 789,
  } satisfies PresenceWebSocketRequest;

  try {
    const data = await api.presenceWebSocket(body);
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
| **seq** | `number` | Replay events after this sequence number (0 &#x3D; full stream from the beginning). | [Optional] [Defaults to `0`] |

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
| **101** | Switching Protocols — WebSocket connection established. |  -  |
| **400** | Validation error (ERR-API-001-003). Request body or parameters failed validation. The &#x60;errors&#x60; array contains field-level details.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  * X-Request-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## removeWorkspaceMember

> removeWorkspaceMember(workspaceId, userId)

Remove a member from a workspace

Revokes a user\&#39;s membership in the specified workspace.

### Example

```ts
import {
  Configuration,
  CollaborationApi,
} from '@aqueduct-ai/sdk';
import type { RemoveWorkspaceMemberRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CollaborationApi(config);

  const body = {
    // string
    workspaceId: workspaceId_example,
    // string
    userId: userId_example,
  } satisfies RemoveWorkspaceMemberRequest;

  try {
    const data = await api.removeWorkspaceMember(body);
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
| **workspaceId** | `string` |  | [Defaults to `undefined`] |
| **userId** | `string` |  | [Defaults to `undefined`] |

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
| **204** | Member removed. |  -  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **404** | Resource not found (ERR-API-001-004). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## revokeConversationShare

> revokeConversationShare(conversationId, shareId)

Revoke a share

Deletes the share record and removes the associated ABAC policy.

### Example

```ts
import {
  Configuration,
  CollaborationApi,
} from '@aqueduct-ai/sdk';
import type { RevokeConversationShareRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CollaborationApi(config);

  const body = {
    // string
    conversationId: conversationId_example,
    // string
    shareId: shareId_example,
  } satisfies RevokeConversationShareRequest;

  try {
    const data = await api.revokeConversationShare(body);
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
| **conversationId** | `string` |  | [Defaults to `undefined`] |
| **shareId** | `string` |  | [Defaults to `undefined`] |

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
| **204** | Share revoked. |  -  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **404** | Resource not found (ERR-API-001-004). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## shareConversation

> ShareRecord shareConversation(conversationId, shareRequest)

Share a conversation with a user, role, or team

Creates an ABAC share record granting the specified target read/comment/edit access to a conversation. Exactly one of target_user_id, target_role_id, or target_team_id must be set. Bastion ABAC authorization is checked for the caller before the share is created (fail-closed). 

### Example

```ts
import {
  Configuration,
  CollaborationApi,
} from '@aqueduct-ai/sdk';
import type { ShareConversationRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CollaborationApi(config);

  const body = {
    // string
    conversationId: conversationId_example,
    // ShareRequest
    shareRequest: ...,
  } satisfies ShareConversationRequest;

  try {
    const data = await api.shareConversation(body);
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
| **conversationId** | `string` |  | [Defaults to `undefined`] |
| **shareRequest** | [ShareRequest](ShareRequest.md) |  | |

### Return type

[**ShareRecord**](ShareRecord.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Share created. |  * X-Trace-ID -  <br>  |
| **400** | Validation error (ERR-API-001-003). Request body or parameters failed validation. The &#x60;errors&#x60; array contains field-level details.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  * X-Request-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateAnnotation

> AnnotationRecord updateAnnotation(conversationId, turnIndex, annotationId, annotationUpdateRequest)

Update an annotation body

Updates the body of an existing annotation. Only the original author may update their annotation — other callers receive 403. 

### Example

```ts
import {
  Configuration,
  CollaborationApi,
} from '@aqueduct-ai/sdk';
import type { UpdateAnnotationRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CollaborationApi(config);

  const body = {
    // string
    conversationId: conversationId_example,
    // number
    turnIndex: 56,
    // string
    annotationId: annotationId_example,
    // AnnotationUpdateRequest
    annotationUpdateRequest: ...,
  } satisfies UpdateAnnotationRequest;

  try {
    const data = await api.updateAnnotation(body);
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
| **conversationId** | `string` |  | [Defaults to `undefined`] |
| **turnIndex** | `number` |  | [Defaults to `undefined`] |
| **annotationId** | `string` |  | [Defaults to `undefined`] |
| **annotationUpdateRequest** | [AnnotationUpdateRequest](AnnotationUpdateRequest.md) |  | |

### Return type

[**AnnotationRecord**](AnnotationRecord.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Updated annotation. |  * X-Trace-ID -  <br>  |
| **400** | Validation error (ERR-API-001-003). Request body or parameters failed validation. The &#x60;errors&#x60; array contains field-level details.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  * X-Request-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **404** | Resource not found (ERR-API-001-004). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateWorkspaceMemberRole

> WorkspaceMemberRecord updateWorkspaceMemberRole(workspaceId, userId, workspaceMemberUpdateRequest)

Update a workspace member\&#39;s role

Changes the role of an existing workspace member.

### Example

```ts
import {
  Configuration,
  CollaborationApi,
} from '@aqueduct-ai/sdk';
import type { UpdateWorkspaceMemberRoleRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CollaborationApi(config);

  const body = {
    // string
    workspaceId: workspaceId_example,
    // string
    userId: userId_example,
    // WorkspaceMemberUpdateRequest
    workspaceMemberUpdateRequest: ...,
  } satisfies UpdateWorkspaceMemberRoleRequest;

  try {
    const data = await api.updateWorkspaceMemberRole(body);
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
| **workspaceId** | `string` |  | [Defaults to `undefined`] |
| **userId** | `string` |  | [Defaults to `undefined`] |
| **workspaceMemberUpdateRequest** | [WorkspaceMemberUpdateRequest](WorkspaceMemberUpdateRequest.md) |  | |

### Return type

[**WorkspaceMemberRecord**](WorkspaceMemberRecord.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Updated member record. |  * X-Trace-ID -  <br>  |
| **400** | Validation error (ERR-API-001-003). Request body or parameters failed validation. The &#x60;errors&#x60; array contains field-level details.  |  * API-Version -  <br>  * X-Trace-ID -  <br>  * X-Request-ID -  <br>  |
| **401** | Authentication failed. Possible causes: - Token expired (ERR-API-001-002) - Invalid credentials (ERR-API-001-006) - Invalid token signature (ERR-API-001-007)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **403** | Access denied. Possible causes: - Cross-tenant access attempt (ERR-API-001-005) - Insufficient permissions (ERR-API-001-008)  |  * API-Version -  <br>  * X-Trace-ID -  <br>  |
| **404** | Resource not found (ERR-API-001-004). |  * API-Version -  <br>  * X-Trace-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

