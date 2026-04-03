# @aqueduct-ai/sdk@0.1.0

A TypeScript SDK client for the api.aqueduct.io API.

## Usage

First, install the SDK from npm.

```bash
npm install @aqueduct-ai/sdk --save
```

Next, try it out.


```ts
import {
  Configuration,
  ActivityApi,
} from '@aqueduct-ai/sdk';
import type { BatchCreateActivityEventsRequest } from '@aqueduct-ai/sdk';

async function example() {
  console.log("🚀 Testing @aqueduct-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ActivityApi(config);

  const body = {
    // BatchEventRequest
    batchEventRequest: {"events":[{"event_id":"evt_batch001","tenant_id":"tnt_acme-corp_a1b2c3","user_id":"usr_johndoe_abc123","timestamp":"2025-01-15T14:30:00Z","action":"document.view","resource_type":"document","resource_id":"doc_abc123","outcome":"success","hash_chain":"sha256:a3f2b8c1d4e5","storage_tier":"hot"},{"event_id":"evt_batch002","tenant_id":"tnt_acme-corp_a1b2c3","user_id":"usr_janedoe_def456","timestamp":"2025-01-15T14:31:00Z","action":"auth.login","resource_type":"session","resource_id":"ses_01HQ3XYZDEF456","outcome":"success","hash_chain":"sha256:b4g3c9d2e6f7","storage_tier":"hot"}]},
  } satisfies BatchCreateActivityEventsRequest;

  try {
    const data = await api.batchCreateActivityEvents(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```


## Documentation

### API Endpoints

All URIs are relative to *https://api.aqueduct.io:443*

| Class | Method | HTTP request | Description
| ----- | ------ | ------------ | -------------
*ActivityApi* | [**batchCreateActivityEvents**](docs/ActivityApi.md#batchcreateactivityevents) | **POST** /admin/activity/events/batch | Batch create activity events
*ActivityApi* | [**createActivityEvent**](docs/ActivityApi.md#createactivityevent) | **POST** /admin/activity/events | Create an activity event
*ActivityApi* | [**exportActivityEvents**](docs/ActivityApi.md#exportactivityevents) | **POST** /admin/activity/export | Export activity events
*ActivityApi* | [**exportActivityEventsCsv**](docs/ActivityApi.md#exportactivityeventscsv) | **POST** /admin/activity/export/csv | Export activity events as CSV
*ActivityApi* | [**exportActivityEventsJson**](docs/ActivityApi.md#exportactivityeventsjson) | **POST** /admin/activity/export/json | Export activity events as JSON
*ActivityApi* | [**getActivityAggregates**](docs/ActivityApi.md#getactivityaggregates) | **GET** /admin/activity/dashboard/aggregates | Get activity aggregates
*ActivityApi* | [**getActivityDashboard**](docs/ActivityApi.md#getactivitydashboard) | **GET** /admin/activity/dashboard | Get activity dashboard
*ActivityApi* | [**getActivityDashboardSummary**](docs/ActivityApi.md#getactivitydashboardsummary) | **GET** /admin/activity/dashboard/summary | Get dashboard summary
*ActivityApi* | [**getActivityEvent**](docs/ActivityApi.md#getactivityevent) | **GET** /admin/activity/events/{event_id} | Get activity event by ID
*ActivityApi* | [**getExportStatus**](docs/ActivityApi.md#getexportstatus) | **GET** /admin/activity/export/status/{export_id} | Get export job status
*ActivityApi* | [**getTenantDashboard**](docs/ActivityApi.md#gettenantdashboard) | **GET** /admin/activity/dashboard/tenants/{tenant_id} | Get tenant-specific dashboard
*ActivityApi* | [**listActivityEvents**](docs/ActivityApi.md#listactivityevents) | **GET** /admin/activity/events | List activity events
*ActivityApi* | [**listAnomalies**](docs/ActivityApi.md#listanomalies) | **GET** /admin/activity/dashboard/anomalies | List detected anomalies
*ActivityApi* | [**streamAdminActivity**](docs/ActivityApi.md#streamadminactivity) | **GET** /ws/admin/activity | Real-time activity event stream (WebSocket)
*AssetPerformanceApi* | [**acknowledgePerformanceAlert**](docs/AssetPerformanceApi.md#acknowledgeperformancealert) | **PUT** /api/v1/admin/assets/alerts/{alert_id}/acknowledge | Acknowledge a performance alert
*AssetPerformanceApi* | [**getAssetTimeSeries**](docs/AssetPerformanceApi.md#getassettimeseries) | **GET** /api/v1/admin/assets/timeseries | Get asset metric time series
*AssetPerformanceApi* | [**getCacheHitRate**](docs/AssetPerformanceApi.md#getcachehitrate) | **GET** /api/v1/admin/assets/cache-hit-rate | Get cache hit rate statistics
*AssetPerformanceApi* | [**getCdnLatency**](docs/AssetPerformanceApi.md#getcdnlatency) | **GET** /api/v1/admin/assets/cdn-latency | Get CDN latency statistics
*AssetPerformanceApi* | [**getWebVitalsReport**](docs/AssetPerformanceApi.md#getwebvitalsreport) | **GET** /api/v1/admin/assets/web-vitals-report | Get Web Vitals report
*AssetPerformanceApi* | [**ingestAssetMetrics**](docs/AssetPerformanceApi.md#ingestassetmetrics) | **POST** /api/v1/metrics/assets | Ingest asset performance metrics
*AssetPerformanceApi* | [**listAlertThresholds**](docs/AssetPerformanceApi.md#listalertthresholds) | **GET** /api/v1/admin/assets/thresholds | List alert thresholds
*AssetPerformanceApi* | [**listPerformanceAlerts**](docs/AssetPerformanceApi.md#listperformancealerts) | **GET** /api/v1/admin/assets/alerts | List performance alerts
*AssetPerformanceApi* | [**setAlertThreshold**](docs/AssetPerformanceApi.md#setalertthreshold) | **PUT** /api/v1/admin/assets/thresholds/{metric} | Set alert threshold for a metric
*AuditApi* | [**getAuditLogEntry**](docs/AuditApi.md#getauditlogentry) | **GET** /v1/audit/logs/{log_id} | Get a single audit log entry
*AuditApi* | [**getAuditStats**](docs/AuditApi.md#getauditstats) | **GET** /v1/audit/stats | Get audit log statistics
*AuditApi* | [**queryAuditLogs**](docs/AuditApi.md#queryauditlogs) | **GET** /v1/audit/logs | Query audit logs
*AuthenticationApi* | [**deleteSession**](docs/AuthenticationApi.md#deletesession) | **DELETE** /api/v1/auth/sessions/{session_id} | Terminate a session
*AuthenticationApi* | [**getJwks**](docs/AuthenticationApi.md#getjwks) | **GET** /.well-known/jwks.json | Get JSON Web Key Set
*AuthenticationApi* | [**listSessions**](docs/AuthenticationApi.md#listsessions) | **GET** /api/v1/auth/sessions | List active sessions
*AuthenticationApi* | [**refreshToken**](docs/AuthenticationApi.md#refreshtokenoperation) | **POST** /api/v1/auth/token/refresh | Refresh an access token
*AuthenticationApi* | [**revokeToken**](docs/AuthenticationApi.md#revoketokenoperation) | **POST** /api/v1/auth/token/revoke | Revoke a token
*AuthenticationApi* | [**validateToken**](docs/AuthenticationApi.md#validatetokenoperation) | **POST** /api/v1/auth/validate | Validate an access token
*BreakpointsApi* | [**approvePausedRequest**](docs/BreakpointsApi.md#approvepausedrequest) | **POST** /api/v1/admin/breakpoints/paused/{id}/approve | Approve a paused request
*BreakpointsApi* | [**createBreakpoint**](docs/BreakpointsApi.md#createbreakpointoperation) | **POST** /api/v1/admin/breakpoints | Create a breakpoint
*BreakpointsApi* | [**deleteBreakpoint**](docs/BreakpointsApi.md#deletebreakpoint) | **DELETE** /api/v1/admin/breakpoints/{id} | Delete a breakpoint
*BreakpointsApi* | [**disableBreakpoint**](docs/BreakpointsApi.md#disablebreakpoint) | **POST** /api/v1/admin/breakpoints/{id}/disable | Disable a breakpoint
*BreakpointsApi* | [**enableBreakpoint**](docs/BreakpointsApi.md#enablebreakpoint) | **POST** /api/v1/admin/breakpoints/{id}/enable | Enable a breakpoint
*BreakpointsApi* | [**getBreakpoint**](docs/BreakpointsApi.md#getbreakpoint) | **GET** /api/v1/admin/breakpoints/{id} | Get breakpoint details
*BreakpointsApi* | [**getBreakpointHistory**](docs/BreakpointsApi.md#getbreakpointhistory) | **GET** /api/v1/admin/breakpoints/{id}/history | Get breakpoint activation history
*BreakpointsApi* | [**getPausedRequest**](docs/BreakpointsApi.md#getpausedrequest) | **GET** /api/v1/admin/breakpoints/paused/{id} | Get paused request details
*BreakpointsApi* | [**getQueueStats**](docs/BreakpointsApi.md#getqueuestats) | **GET** /api/v1/admin/breakpoints/queue/stats | Get breakpoint queue statistics
*BreakpointsApi* | [**listBreakpoints**](docs/BreakpointsApi.md#listbreakpoints) | **GET** /api/v1/admin/breakpoints | List breakpoints
*BreakpointsApi* | [**listPausedRequests**](docs/BreakpointsApi.md#listpausedrequests) | **GET** /api/v1/admin/breakpoints/paused | List paused requests
*BreakpointsApi* | [**modifyPausedRequest**](docs/BreakpointsApi.md#modifypausedrequest) | **POST** /api/v1/admin/breakpoints/paused/{id}/modify | Modify and approve a paused request
*BreakpointsApi* | [**rejectPausedRequest**](docs/BreakpointsApi.md#rejectpausedrequest) | **POST** /api/v1/admin/breakpoints/paused/{id}/reject | Reject a paused request
*BreakpointsApi* | [**streamBreakpointEvents**](docs/BreakpointsApi.md#streambreakpointevents) | **GET** /ws/admin/breakpoints | Real-time breakpoint event stream (WebSocket)
*BreakpointsApi* | [**testBreakpoint**](docs/BreakpointsApi.md#testbreakpointoperation) | **POST** /api/v1/admin/breakpoints/{id}/test | Test a breakpoint against sample fields
*BreakpointsApi* | [**updateBreakpoint**](docs/BreakpointsApi.md#updatebreakpointoperation) | **PUT** /api/v1/admin/breakpoints/{id} | Update a breakpoint
*BrowserApi* | [**classifyBrowser**](docs/BrowserApi.md#classifybrowseroperation) | **POST** /api/browser/v1/classify | Classify browser capabilities
*BrowserApi* | [**getBrowserCapabilities**](docs/BrowserApi.md#getbrowsercapabilities) | **GET** /api/browser/v1/capabilities | Get browser capabilities
*BrowserApi* | [**reportBrowserUsage**](docs/BrowserApi.md#reportbrowserusageoperation) | **POST** /api/browser/v1/usage | Report browser usage telemetry
*CUIApi* | [**applyCUIMarking**](docs/CUIApi.md#applycuimarking) | **POST** /api/v1/cui/markings | Apply a CUI marking
*CUIApi* | [**getCUIMarking**](docs/CUIApi.md#getcuimarking) | **GET** /api/v1/cui/markings/{resourceID} | Get a CUI marking
*CUIApi* | [**listCUICategories**](docs/CUIApi.md#listcuicategories) | **GET** /api/v1/cui/categories | List CUI categories
*CUIApi* | [**listCUIMarkings**](docs/CUIApi.md#listcuimarkings) | **GET** /api/v1/cui/markings | List CUI markings for tenant
*CUIApi* | [**listDisseminationControls**](docs/CUIApi.md#listdisseminationcontrols) | **GET** /api/v1/cui/dissemination-controls | List dissemination controls
*CUIApi* | [**removeCUIMarking**](docs/CUIApi.md#removecuimarking) | **DELETE** /api/v1/cui/markings/{resourceID} | Remove a CUI marking (decontrol)
*CUIApi* | [**updateCUIMarking**](docs/CUIApi.md#updatecuimarking) | **PUT** /api/v1/cui/markings/{resourceID} | Update a CUI marking
*CacheApi* | [**getCacheEvents**](docs/CacheApi.md#getcacheevents) | **GET** /api/v1/cache/events | Get recent cache events
*CacheApi* | [**getCacheStats**](docs/CacheApi.md#getcachestats) | **GET** /api/v1/cache/stats | Get cache statistics
*CacheApi* | [**invalidateCache**](docs/CacheApi.md#invalidatecacheoperation) | **POST** /api/v1/cache/invalidate | Invalidate cache entries
*CacheApi* | [**invalidateCacheByPattern**](docs/CacheApi.md#invalidatecachebypatternoperation) | **POST** /api/v1/cache/invalidate/pattern | Invalidate cache by pattern
*CacheApi* | [**invalidateResponseCache**](docs/CacheApi.md#invalidateresponsecache) | **DELETE** /v1/cache | Invalidate LLM response cache
*CacheApi* | [**invalidateTenantCache**](docs/CacheApi.md#invalidatetenantcache) | **POST** /api/v1/cache/invalidate/tenant/{tenant_id} | Invalidate all cache for a tenant
*CacheApi* | [**streamCacheInvalidations**](docs/CacheApi.md#streamcacheinvalidations) | **GET** /api/v1/cache/ws/invalidations | Real-time cache invalidation event stream (WebSocket)
*CollaborationApi* | [**addWorkspaceMember**](docs/CollaborationApi.md#addworkspacemember) | **POST** /api/v1/workspaces/{workspace_id}/members | Add a member to a workspace
*CollaborationApi* | [**createAnnotation**](docs/CollaborationApi.md#createannotation) | **POST** /api/v1/conversations/{conversation_id}/turns/{turn_index}/annotations | Create an annotation on a conversation turn
*CollaborationApi* | [**deleteAnnotation**](docs/CollaborationApi.md#deleteannotation) | **DELETE** /api/v1/conversations/{conversation_id}/turns/{turn_index}/annotations/{annotation_id} | Delete an annotation
*CollaborationApi* | [**listAnnotations**](docs/CollaborationApi.md#listannotations) | **GET** /api/v1/conversations/{conversation_id}/turns/{turn_index}/annotations | List annotations for a conversation turn
*CollaborationApi* | [**listCollabActivity**](docs/CollaborationApi.md#listcollabactivity) | **GET** /api/v1/activity | List collaboration activity records
*CollaborationApi* | [**listConversationShares**](docs/CollaborationApi.md#listconversationshares) | **GET** /api/v1/conversations/{conversation_id}/shares | List shares for a conversation
*CollaborationApi* | [**listPresence**](docs/CollaborationApi.md#listpresence) | **GET** /api/v1/presence | List active presence records for a conversation
*CollaborationApi* | [**listWorkspaceMembers**](docs/CollaborationApi.md#listworkspacemembers) | **GET** /api/v1/workspaces/{workspace_id}/members | List workspace members
*CollaborationApi* | [**presenceWebSocket**](docs/CollaborationApi.md#presencewebsocket) | **GET** /api/v1/presence/ws | Subscribe to real-time presence events via WebSocket
*CollaborationApi* | [**removeWorkspaceMember**](docs/CollaborationApi.md#removeworkspacemember) | **DELETE** /api/v1/workspaces/{workspace_id}/members/{user_id} | Remove a member from a workspace
*CollaborationApi* | [**revokeConversationShare**](docs/CollaborationApi.md#revokeconversationshare) | **DELETE** /api/v1/conversations/{conversation_id}/shares/{share_id} | Revoke a share
*CollaborationApi* | [**shareConversation**](docs/CollaborationApi.md#shareconversation) | **POST** /api/v1/conversations/{conversation_id}/shares | Share a conversation with a user, role, or team
*CollaborationApi* | [**updateAnnotation**](docs/CollaborationApi.md#updateannotation) | **PUT** /api/v1/conversations/{conversation_id}/turns/{turn_index}/annotations/{annotation_id} | Update an annotation body
*CollaborationApi* | [**updateWorkspaceMemberRole**](docs/CollaborationApi.md#updateworkspacememberrole) | **PUT** /api/v1/workspaces/{workspace_id}/members/{user_id} | Update a workspace member\&#39;s role
*ComplianceApi* | [**getComplianceEvidence**](docs/ComplianceApi.md#getcomplianceevidence) | **GET** /api/v1/compliance/evidence | List compliance evidence
*ComplianceApi* | [**getComplianceGapReport**](docs/ComplianceApi.md#getcompliancegapreport) | **GET** /api/v1/compliance/gap-report | Get compliance gap analysis report
*ComplianceApi* | [**getComplianceStatus**](docs/ComplianceApi.md#getcompliancestatus) | **GET** /api/v1/compliance/status | Get overall compliance status
*ComplianceApi* | [**getFrameworkControls**](docs/ComplianceApi.md#getframeworkcontrols) | **GET** /api/v1/frameworks/{frameworkID}/controls | Get controls for a compliance framework
*ComplianceApi* | [**listComplianceFrameworks**](docs/ComplianceApi.md#listcomplianceframeworks) | **GET** /api/v1/frameworks | List compliance frameworks
*ComplianceApi* | [**runComplianceCheck**](docs/ComplianceApi.md#runcompliancecheckoperation) | **POST** /api/v1/compliance/check | Run a compliance check
*ComplianceApi* | [**setComplianceTenants**](docs/ComplianceApi.md#setcompliancetenants) | **POST** /api/v1/compliance/tenants | Set tenants for compliance scheduler
*ConfigurationApi* | [**createConfig**](docs/ConfigurationApi.md#createconfigoperation) | **POST** /api/v1/config | Create a configuration entry
*ConfigurationApi* | [**deleteConfig**](docs/ConfigurationApi.md#deleteconfig) | **DELETE** /api/v1/config/{key} | Delete a configuration entry
*ConfigurationApi* | [**deleteTenantConfigOverride**](docs/ConfigurationApi.md#deletetenantconfigoverride) | **DELETE** /api/v1/tenants/{tenant_id}/config/{key} | Delete a tenant configuration override
*ConfigurationApi* | [**evaluateFlag**](docs/ConfigurationApi.md#evaluateflag) | **GET** /api/v1/flags/{flag} | Evaluate a feature flag
*ConfigurationApi* | [**getConfig**](docs/ConfigurationApi.md#getconfig) | **GET** /api/v1/config/{key} | Get configuration entry by key
*ConfigurationApi* | [**getTenantMergedConfig**](docs/ConfigurationApi.md#gettenantmergedconfig) | **GET** /api/v1/tenants/{tenant_id}/config | Get merged tenant configuration
*ConfigurationApi* | [**listConfigAudit**](docs/ConfigurationApi.md#listconfigaudit) | **GET** /api/v1/audit | List configuration audit log
*ConfigurationApi* | [**listConfigVersions**](docs/ConfigurationApi.md#listconfigversions) | **GET** /api/v1/config/{key}/versions | List version history for a configuration entry
*ConfigurationApi* | [**listConfigs**](docs/ConfigurationApi.md#listconfigs) | **GET** /api/v1/config | List configuration entries
*ConfigurationApi* | [**listFlags**](docs/ConfigurationApi.md#listflags) | **GET** /api/v1/flags | List all feature flags
*ConfigurationApi* | [**rollbackConfig**](docs/ConfigurationApi.md#rollbackconfig) | **POST** /api/v1/config/{key}/rollback | Rollback configuration to a previous version
*ConfigurationApi* | [**setGlobalFlag**](docs/ConfigurationApi.md#setglobalflag) | **PUT** /api/v1/flags/{flag} | Set global feature flag value
*ConfigurationApi* | [**setTenantConfigOverride**](docs/ConfigurationApi.md#settenantconfigoverride) | **PUT** /api/v1/tenants/{tenant_id}/config/{key} | Set a tenant configuration override
*ConfigurationApi* | [**setTenantFlagOverride**](docs/ConfigurationApi.md#settenantflagoverride) | **PUT** /api/v1/flags/{flag}/tenant/{tenant_id} | Set tenant-specific feature flag override
*ConfigurationApi* | [**updateConfig**](docs/ConfigurationApi.md#updateconfig) | **PUT** /api/v1/config/{key} | Update a configuration entry
*DLPApi* | [**createDLPPolicy**](docs/DLPApi.md#createdlppolicyoperation) | **POST** /v1/dlp/policies | Create a DLP policy
*DLPApi* | [**deidentifyContent**](docs/DLPApi.md#deidentifycontent) | **POST** /v1/dlp/deidentify | De-identify content
*DLPApi* | [**deleteDLPPolicy**](docs/DLPApi.md#deletedlppolicy) | **DELETE** /v1/dlp/policies/{policy_id} | Delete a DLP policy
*DLPApi* | [**getDLPPolicy**](docs/DLPApi.md#getdlppolicy) | **GET** /v1/dlp/policies/{policy_id} | Get DLP policy
*DLPApi* | [**listDLPPolicies**](docs/DLPApi.md#listdlppolicies) | **GET** /v1/dlp/policies | List DLP policies
*DLPApi* | [**scanContent**](docs/DLPApi.md#scancontent) | **POST** /v1/dlp/scan | Scan content for PII
*DLPApi* | [**updateDLPPolicy**](docs/DLPApi.md#updatedlppolicy) | **PUT** /v1/dlp/policies/{policy_id} | Update a DLP policy
*HealthApi* | [**getLiveness**](docs/HealthApi.md#getliveness) | **GET** /healthz | Liveness probe
*HealthApi* | [**getReadiness**](docs/HealthApi.md#getreadiness) | **GET** /readyz | Readiness probe
*InferenceApi* | [**createChatCompletion**](docs/InferenceApi.md#createchatcompletion) | **POST** /v1/chat/completions | Create chat completion
*InferenceApi* | [**createEmbedding**](docs/InferenceApi.md#createembedding) | **POST** /v1/embeddings | Create embeddings
*InferenceApi* | [**listModels**](docs/InferenceApi.md#listmodels) | **GET** /v1/models | List available models
*QuotasApi* | [**acknowledgeQuotaAlert**](docs/QuotasApi.md#acknowledgequotaalert) | **POST** /api/v1/tenants/{tenant_id}/quotas/alerts/{alert_id}/acknowledge | Acknowledge a quota alert
*QuotasApi* | [**getQuotaAlerts**](docs/QuotasApi.md#getquotaalerts) | **GET** /api/v1/tenants/{tenant_id}/quotas/alerts | Get quota alerts
*QuotasApi* | [**getQuotaStatus**](docs/QuotasApi.md#getquotastatus) | **GET** /api/v1/tenants/{tenant_id}/quotas | Get tenant quota status
*QuotasApi* | [**requestQuotaIncrease**](docs/QuotasApi.md#requestquotaincrease) | **POST** /api/v1/tenants/{tenant_id}/quotas/increase-request | Request quota increase
*QuotasApi* | [**updateQuotaConfig**](docs/QuotasApi.md#updatequotaconfigoperation) | **PATCH** /api/v1/admin/tenants/{tenant_id}/quotas | Update tenant quota configuration
*RAGApi* | [**addDocument**](docs/RAGApi.md#adddocument) | **POST** /v1/knowledge-bases/{kb_id}/documents | Add a document
*RAGApi* | [**createKnowledgeBase**](docs/RAGApi.md#createknowledgebaseoperation) | **POST** /v1/knowledge-bases | Create a knowledge base
*RAGApi* | [**deleteDocument**](docs/RAGApi.md#deletedocument) | **DELETE** /v1/knowledge-bases/{kb_id}/documents/{document_id} | Delete a document
*RAGApi* | [**deleteKnowledgeBase**](docs/RAGApi.md#deleteknowledgebase) | **DELETE** /v1/knowledge-bases/{kb_id} | Delete a knowledge base
*RAGApi* | [**getDocument**](docs/RAGApi.md#getdocument) | **GET** /v1/knowledge-bases/{kb_id}/documents/{document_id} | Get document details
*RAGApi* | [**getKnowledgeBase**](docs/RAGApi.md#getknowledgebase) | **GET** /v1/knowledge-bases/{kb_id} | Get knowledge base
*RAGApi* | [**listDocuments**](docs/RAGApi.md#listdocuments) | **GET** /v1/knowledge-bases/{kb_id}/documents | List documents in a knowledge base
*RAGApi* | [**listKnowledgeBases**](docs/RAGApi.md#listknowledgebases) | **GET** /v1/knowledge-bases | List knowledge bases
*RAGApi* | [**retrieveFromKnowledgeBase**](docs/RAGApi.md#retrievefromknowledgebase) | **POST** /v1/rag/retrieve | Retrieve from knowledge base
*RAGApi* | [**updateKnowledgeBase**](docs/RAGApi.md#updateknowledgebaseoperation) | **PATCH** /v1/knowledge-bases/{kb_id} | Update a knowledge base
*SafetyApi* | [**createGuardrailConfig**](docs/SafetyApi.md#createguardrailconfigoperation) | **POST** /v1/safety/guardrails | Create a guardrail configuration
*SafetyApi* | [**deleteGuardrailConfig**](docs/SafetyApi.md#deleteguardrailconfig) | **DELETE** /v1/safety/guardrails/{guardrail_id} | Delete a guardrail configuration
*SafetyApi* | [**getGuardrailConfig**](docs/SafetyApi.md#getguardrailconfig) | **GET** /v1/safety/guardrails/{guardrail_id} | Get guardrail configuration
*SafetyApi* | [**listGuardrailConfigs**](docs/SafetyApi.md#listguardrailconfigs) | **GET** /v1/safety/guardrails | List guardrail configurations
*SafetyApi* | [**scanContentSafety**](docs/SafetyApi.md#scancontentsafety) | **POST** /v1/safety/scan | Scan content for safety violations
*SafetyApi* | [**updateGuardrailConfig**](docs/SafetyApi.md#updateguardrailconfig) | **PUT** /v1/safety/guardrails/{guardrail_id} | Update a guardrail configuration
*SecurityApi* | [**deactivateHSMKey**](docs/SecurityApi.md#deactivatehsmkey) | **POST** /api/v1/hsm/keys/{keyID}/deactivate | Deactivate an HSM key
*SecurityApi* | [**destroyHSMKey**](docs/SecurityApi.md#destroyhsmkey) | **DELETE** /api/v1/hsm/keys/{keyID} | Destroy an HSM key
*SecurityApi* | [**generateHSMKey**](docs/SecurityApi.md#generatehsmkey) | **POST** /api/v1/hsm/keys | Generate a new HSM key
*SecurityApi* | [**getHSMHealth**](docs/SecurityApi.md#gethsmhealth) | **GET** /api/v1/hsm/health | Get HSM health and FIPS self-test status
*SecurityApi* | [**getHSMKeyAttestation**](docs/SecurityApi.md#gethsmkeyattestation) | **GET** /api/v1/hsm/keys/{keyID}/attestation | Get key attestation evidence
*SecurityApi* | [**getHSMKeyMetadata**](docs/SecurityApi.md#gethsmkeymetadata) | **GET** /api/v1/hsm/keys/{keyID} | Get HSM key metadata
*SecurityApi* | [**hsmDecrypt**](docs/SecurityApi.md#hsmdecrypt) | **POST** /api/v1/hsm/decrypt | Decrypt data
*SecurityApi* | [**hsmEncrypt**](docs/SecurityApi.md#hsmencrypt) | **POST** /api/v1/hsm/encrypt | Encrypt data
*SecurityApi* | [**hsmSign**](docs/SecurityApi.md#hsmsign) | **POST** /api/v1/hsm/sign | Sign data
*SecurityApi* | [**hsmUnwrapKey**](docs/SecurityApi.md#hsmunwrapkey) | **POST** /api/v1/hsm/unwrap | Unwrap a key
*SecurityApi* | [**hsmVerify**](docs/SecurityApi.md#hsmverify) | **POST** /api/v1/hsm/verify | Verify a signature
*SecurityApi* | [**hsmWrapKey**](docs/SecurityApi.md#hsmwrapkey) | **POST** /api/v1/hsm/wrap | Wrap a key
*SecurityApi* | [**listHSMKeys**](docs/SecurityApi.md#listhsmkeys) | **GET** /api/v1/hsm/keys | List HSM keys
*SecurityApi* | [**rotateHSMKey**](docs/SecurityApi.md#rotatehsmkey) | **POST** /api/v1/hsm/keys/{keyID}/rotate | Rotate an HSM key
*SubscriptionsApi* | [**createSubscription**](docs/SubscriptionsApi.md#createsubscriptionoperation) | **POST** /api/v1/webhooks/subscriptions | Create a webhook subscription
*SubscriptionsApi* | [**deleteSubscription**](docs/SubscriptionsApi.md#deletesubscription) | **DELETE** /api/v1/webhooks/subscriptions/{subscription_id} | Delete a webhook subscription
*SubscriptionsApi* | [**getSubscription**](docs/SubscriptionsApi.md#getsubscription) | **GET** /api/v1/webhooks/subscriptions/{subscription_id} | Get subscription details
*SubscriptionsApi* | [**listSubscriptions**](docs/SubscriptionsApi.md#listsubscriptions) | **GET** /api/v1/webhooks/subscriptions | List webhook subscriptions
*SubscriptionsApi* | [**rotateSubscriptionSecret**](docs/SubscriptionsApi.md#rotatesubscriptionsecret) | **POST** /api/v1/webhooks/subscriptions/{subscription_id}/rotate-secret | Rotate subscription signing secret
*SubscriptionsApi* | [**testSubscription**](docs/SubscriptionsApi.md#testsubscription) | **POST** /api/v1/webhooks/subscriptions/{subscription_id}/test | Send a test event
*SubscriptionsApi* | [**updateSubscription**](docs/SubscriptionsApi.md#updatesubscriptionoperation) | **PUT** /api/v1/webhooks/subscriptions/{subscription_id} | Update a webhook subscription
*TenantLifecycleApi* | [**approveDeletion**](docs/TenantLifecycleApi.md#approvedeletionoperation) | **POST** /api/v1/admin/tenants/{tenant_id}/deletion-request/{request_id}/approve | Approve a tenant deletion request
*TenantLifecycleApi* | [**createDeletionRequest**](docs/TenantLifecycleApi.md#createdeletionrequest) | **POST** /api/v1/tenants/{tenant_id}/deletion-request | Create a tenant deletion request
*TenantLifecycleApi* | [**downloadTenantExport**](docs/TenantLifecycleApi.md#downloadtenantexport) | **GET** /api/v1/tenants/{tenant_id}/export/{export_id} | Download tenant data export
*TenantLifecycleApi* | [**getDeletionStatus**](docs/TenantLifecycleApi.md#getdeletionstatus) | **GET** /api/v1/tenants/{tenant_id}/deletion-status | Get tenant deletion status
*TenantLifecycleApi* | [**reactivateTenant**](docs/TenantLifecycleApi.md#reactivatetenantoperation) | **POST** /api/v1/admin/tenants/{tenant_id}/reactivate | Reactivate a suspended tenant
*TenantLifecycleApi* | [**suspendTenant**](docs/TenantLifecycleApi.md#suspendtenantoperation) | **POST** /api/v1/admin/tenants/{tenant_id}/suspend | Suspend a tenant
*TenantsApi* | [**addDomain**](docs/TenantsApi.md#adddomainoperation) | **POST** /api/v1/tenants/{tenant_id}/domains | Add a custom domain
*TenantsApi* | [**createTenant**](docs/TenantsApi.md#createtenantoperation) | **POST** /api/v1/tenants | Create a new tenant
*TenantsApi* | [**deleteTenant**](docs/TenantsApi.md#deletetenantoperation) | **DELETE** /api/v1/tenants/{tenant_id} | Delete a tenant
*TenantsApi* | [**getDomain**](docs/TenantsApi.md#getdomain) | **GET** /api/v1/tenants/{tenant_id}/domains/{domain_id} | Get domain details
*TenantsApi* | [**getTenant**](docs/TenantsApi.md#gettenant) | **GET** /api/v1/tenants/{tenant_id} | Get tenant by ID
*TenantsApi* | [**listDomains**](docs/TenantsApi.md#listdomains) | **GET** /api/v1/tenants/{tenant_id}/domains | List tenant domains
*TenantsApi* | [**listTenants**](docs/TenantsApi.md#listtenants) | **GET** /api/v1/tenants | List tenants
*TenantsApi* | [**removeDomain**](docs/TenantsApi.md#removedomain) | **DELETE** /api/v1/tenants/{tenant_id}/domains/{domain_id} | Remove a custom domain
*TenantsApi* | [**updateTenantConfig**](docs/TenantsApi.md#updatetenantconfig) | **PATCH** /api/v1/tenants/{tenant_id}/config | Update tenant configuration
*TenantsApi* | [**updateTenantStatus**](docs/TenantsApi.md#updatetenantstatus) | **POST** /api/v1/tenants/{tenant_id}/status | Update tenant status
*TenantsApi* | [**verifyDomain**](docs/TenantsApi.md#verifydomain) | **POST** /api/v1/tenants/{tenant_id}/domains/{domain_id}/verify | Trigger domain verification
*UsersApi* | [**getUserThemePreference**](docs/UsersApi.md#getuserthemepreference) | **GET** /api/v1/users/{userID}/preferences/theme | Get user theme preference
*UsersApi* | [**setUserThemePreference**](docs/UsersApi.md#setuserthemepreference) | **PUT** /api/v1/users/{userID}/preferences/theme | Set user theme preference
*UsersApi* | [**streamUserThemePreference**](docs/UsersApi.md#streamuserthemepreference) | **GET** /api/v1/users/{userID}/preferences/theme/sse | Stream theme preference updates via SSE
*WebhooksApi* | [**deleteDeadLetterEntry**](docs/WebhooksApi.md#deletedeadletterentry) | **DELETE** /api/v1/webhooks/dead-letter/{entry_id} | Delete a dead-letter entry
*WebhooksApi* | [**getDelivery**](docs/WebhooksApi.md#getdelivery) | **GET** /api/v1/webhooks/deliveries/{delivery_id} | Get delivery details
*WebhooksApi* | [**ingestWebhookEvent**](docs/WebhooksApi.md#ingestwebhookevent) | **POST** /api/v1/webhooks/events | Ingest a webhook event
*WebhooksApi* | [**listDeadLetterEntries**](docs/WebhooksApi.md#listdeadletterentries) | **GET** /api/v1/webhooks/dead-letter | List dead-letter entries
*WebhooksApi* | [**listSubscriptionDeliveries**](docs/WebhooksApi.md#listsubscriptiondeliveries) | **GET** /api/v1/webhooks/subscriptions/{subscription_id}/deliveries | List deliveries for a subscription
*WebhooksApi* | [**replayDeadLetterEntry**](docs/WebhooksApi.md#replaydeadletterentry) | **POST** /api/v1/webhooks/dead-letter/{entry_id}/replay | Replay a dead-letter entry


### Models

- [AcknowledgeAlertRequest](docs/AcknowledgeAlertRequest.md)
- [AcknowledgePerformanceAlert200Response](docs/AcknowledgePerformanceAlert200Response.md)
- [AcknowledgeQuotaAlert200Response](docs/AcknowledgeQuotaAlert200Response.md)
- [ActivationHistoryResponse](docs/ActivationHistoryResponse.md)
- [ActivationRecordResponse](docs/ActivationRecordResponse.md)
- [ActivityAggregate](docs/ActivityAggregate.md)
- [ActivityAggregateTopActionsInner](docs/ActivityAggregateTopActionsInner.md)
- [ActivityAggregateTopResourcesInner](docs/ActivityAggregateTopResourcesInner.md)
- [ActivityAggregateTopUsersInner](docs/ActivityAggregateTopUsersInner.md)
- [ActivityEvent](docs/ActivityEvent.md)
- [AddDomainRequest](docs/AddDomainRequest.md)
- [AddDomainResponse](docs/AddDomainResponse.md)
- [AggregatesResponse](docs/AggregatesResponse.md)
- [AlertThreshold](docs/AlertThreshold.md)
- [AnnotationListResponse](docs/AnnotationListResponse.md)
- [AnnotationRecord](docs/AnnotationRecord.md)
- [AnnotationRequest](docs/AnnotationRequest.md)
- [AnnotationUpdateRequest](docs/AnnotationUpdateRequest.md)
- [AnomaliesResponse](docs/AnomaliesResponse.md)
- [Anomaly](docs/Anomaly.md)
- [ApplyMarkingRequest](docs/ApplyMarkingRequest.md)
- [ApprovalRecord](docs/ApprovalRecord.md)
- [ApproveDeletionRequest](docs/ApproveDeletionRequest.md)
- [ApproveDeletionResponse](docs/ApproveDeletionResponse.md)
- [ApproveRequestBody](docs/ApproveRequestBody.md)
- [AssetMetric](docs/AssetMetric.md)
- [AssetMetricBatch](docs/AssetMetricBatch.md)
- [AssetTimeSeries](docs/AssetTimeSeries.md)
- [AssetTimeSeriesDataPoint](docs/AssetTimeSeriesDataPoint.md)
- [AttestationResponse](docs/AttestationResponse.md)
- [AuditLogEntry](docs/AuditLogEntry.md)
- [AuditLogEntryCache](docs/AuditLogEntryCache.md)
- [AuditLogEntryCompliance](docs/AuditLogEntryCompliance.md)
- [AuditLogEntryComplianceViolationsInner](docs/AuditLogEntryComplianceViolationsInner.md)
- [AuditLogEntryDlp](docs/AuditLogEntryDlp.md)
- [AuditLogEntryModel](docs/AuditLogEntryModel.md)
- [AuditLogEntryPerformance](docs/AuditLogEntryPerformance.md)
- [AuditLogEntryRag](docs/AuditLogEntryRag.md)
- [AuditLogEntryRequest](docs/AuditLogEntryRequest.md)
- [AuditLogEntryResponse](docs/AuditLogEntryResponse.md)
- [AuditLogEntrySafety](docs/AuditLogEntrySafety.md)
- [AuditLogEntrySafetyFindingsInner](docs/AuditLogEntrySafetyFindingsInner.md)
- [AuditLogEntryUsage](docs/AuditLogEntryUsage.md)
- [AuditLogQueryResponse](docs/AuditLogQueryResponse.md)
- [AuditLogQueryResponseAggregations](docs/AuditLogQueryResponseAggregations.md)
- [BatchEventRequest](docs/BatchEventRequest.md)
- [BatchEventResponse](docs/BatchEventResponse.md)
- [BatchEventResponseErrorsInner](docs/BatchEventResponseErrorsInner.md)
- [BreakpointListResponse](docs/BreakpointListResponse.md)
- [BreakpointResponse](docs/BreakpointResponse.md)
- [CDNLatencyStats](docs/CDNLatencyStats.md)
- [CUICategory](docs/CUICategory.md)
- [CacheHitRateResponse](docs/CacheHitRateResponse.md)
- [CacheHitStats](docs/CacheHitStats.md)
- [CdnLatencyResponse](docs/CdnLatencyResponse.md)
- [ChatCompletionChunk](docs/ChatCompletionChunk.md)
- [ChatCompletionChunkChoicesInner](docs/ChatCompletionChunkChoicesInner.md)
- [ChatCompletionChunkChoicesInnerDelta](docs/ChatCompletionChunkChoicesInnerDelta.md)
- [ChatCompletionRequest](docs/ChatCompletionRequest.md)
- [ChatCompletionRequestResponseFormat](docs/ChatCompletionRequestResponseFormat.md)
- [ChatCompletionRequestStop](docs/ChatCompletionRequestStop.md)
- [ChatCompletionRequestToolChoice](docs/ChatCompletionRequestToolChoice.md)
- [ChatCompletionRequestToolChoiceOneOf](docs/ChatCompletionRequestToolChoiceOneOf.md)
- [ChatCompletionRequestToolChoiceOneOfFunction](docs/ChatCompletionRequestToolChoiceOneOfFunction.md)
- [ChatCompletionResponse](docs/ChatCompletionResponse.md)
- [ChatCompletionResponseChoicesInner](docs/ChatCompletionResponseChoicesInner.md)
- [ChatCompletionResponseXAqueductDlpResult](docs/ChatCompletionResponseXAqueductDlpResult.md)
- [ChatCompletionResponseXAqueductRouting](docs/ChatCompletionResponseXAqueductRouting.md)
- [ChatMessage](docs/ChatMessage.md)
- [ChatMessageContent](docs/ChatMessageContent.md)
- [ChatMessageContentOneOfInner](docs/ChatMessageContentOneOfInner.md)
- [ChatMessageContentOneOfInnerImageUrl](docs/ChatMessageContentOneOfInnerImageUrl.md)
- [CheckResult](docs/CheckResult.md)
- [ChunkingConfig](docs/ChunkingConfig.md)
- [ClassifyBrowser200Response](docs/ClassifyBrowser200Response.md)
- [ClassifyBrowserRequest](docs/ClassifyBrowserRequest.md)
- [CollabActivityListResponse](docs/CollabActivityListResponse.md)
- [CollabActivityRecord](docs/CollabActivityRecord.md)
- [CompletionUsage](docs/CompletionUsage.md)
- [ComplianceControl](docs/ComplianceControl.md)
- [ComplianceEvidence](docs/ComplianceEvidence.md)
- [ComplianceFramework](docs/ComplianceFramework.md)
- [ConditionRequest](docs/ConditionRequest.md)
- [ConditionResponse](docs/ConditionResponse.md)
- [ConfigAuditEntry](docs/ConfigAuditEntry.md)
- [ConfigAuditListResponse](docs/ConfigAuditListResponse.md)
- [ConfigEntry](docs/ConfigEntry.md)
- [ConfigListResponse](docs/ConfigListResponse.md)
- [ConfigUpdateConfigRequest](docs/ConfigUpdateConfigRequest.md)
- [ConfigVersion](docs/ConfigVersion.md)
- [ConfigVersionListResponse](docs/ConfigVersionListResponse.md)
- [ControlListResponse](docs/ControlListResponse.md)
- [ControlReport](docs/ControlReport.md)
- [ControlStatus](docs/ControlStatus.md)
- [CreateBreakpointRequest](docs/CreateBreakpointRequest.md)
- [CreateConfigRequest](docs/CreateConfigRequest.md)
- [CreateDLPPolicyRequest](docs/CreateDLPPolicyRequest.md)
- [CreateDocumentRequest](docs/CreateDocumentRequest.md)
- [CreateDocumentRequestSource](docs/CreateDocumentRequestSource.md)
- [CreateGuardrailConfigRequest](docs/CreateGuardrailConfigRequest.md)
- [CreateKnowledgeBaseRequest](docs/CreateKnowledgeBaseRequest.md)
- [CreateKnowledgeBaseRequestVectorStoreConfig](docs/CreateKnowledgeBaseRequestVectorStoreConfig.md)
- [CreateSubscription201Response](docs/CreateSubscription201Response.md)
- [CreateSubscriptionRequest](docs/CreateSubscriptionRequest.md)
- [CreateTenantRequest](docs/CreateTenantRequest.md)
- [DLPDeidentifyRequest](docs/DLPDeidentifyRequest.md)
- [DLPDeidentifyRequestDeidentifyConfig](docs/DLPDeidentifyRequestDeidentifyConfig.md)
- [DLPDeidentifyResponse](docs/DLPDeidentifyResponse.md)
- [DLPDeidentifyResponseTransformationsInner](docs/DLPDeidentifyResponseTransformationsInner.md)
- [DLPFinding](docs/DLPFinding.md)
- [DLPFindingLocation](docs/DLPFindingLocation.md)
- [DLPPolicy](docs/DLPPolicy.md)
- [DLPPolicyRule](docs/DLPPolicyRule.md)
- [DLPScanRequest](docs/DLPScanRequest.md)
- [DLPScanResponse](docs/DLPScanResponse.md)
- [DashboardResponse](docs/DashboardResponse.md)
- [DashboardSummary](docs/DashboardSummary.md)
- [DeactivateKeyResponse](docs/DeactivateKeyResponse.md)
- [DeadLetterEntry](docs/DeadLetterEntry.md)
- [DecryptRequest](docs/DecryptRequest.md)
- [DecryptResponse](docs/DecryptResponse.md)
- [DeidentifyOperator](docs/DeidentifyOperator.md)
- [DeleteResponse](docs/DeleteResponse.md)
- [DeleteSession200Response](docs/DeleteSession200Response.md)
- [DeleteTenantRequest](docs/DeleteTenantRequest.md)
- [DeleteTenantResponse](docs/DeleteTenantResponse.md)
- [DeletionRequestRequest](docs/DeletionRequestRequest.md)
- [DeletionRequestResponse](docs/DeletionRequestResponse.md)
- [DeletionRequestSummary](docs/DeletionRequestSummary.md)
- [DeletionStatusResponse](docs/DeletionStatusResponse.md)
- [DeletionTimeline](docs/DeletionTimeline.md)
- [Delivery](docs/Delivery.md)
- [DestroyKeyResponse](docs/DestroyKeyResponse.md)
- [DisseminationControl](docs/DisseminationControl.md)
- [Document](docs/Document.md)
- [DocumentSource](docs/DocumentSource.md)
- [DomainListItem](docs/DomainListItem.md)
- [DomainListResponse](docs/DomainListResponse.md)
- [DomainResponse](docs/DomainResponse.md)
- [EmbeddingRequest](docs/EmbeddingRequest.md)
- [EmbeddingRequestInput](docs/EmbeddingRequestInput.md)
- [EmbeddingResponse](docs/EmbeddingResponse.md)
- [EmbeddingResponseDataInner](docs/EmbeddingResponseDataInner.md)
- [EmbeddingResponseUsage](docs/EmbeddingResponseUsage.md)
- [EncryptRequest](docs/EncryptRequest.md)
- [EncryptResponse](docs/EncryptResponse.md)
- [EvidenceListResponse](docs/EvidenceListResponse.md)
- [ExportDownloadResponse](docs/ExportDownloadResponse.md)
- [ExportRequest](docs/ExportRequest.md)
- [ExportResponse](docs/ExportResponse.md)
- [ExportStatusResponse](docs/ExportStatusResponse.md)
- [ExportSummary](docs/ExportSummary.md)
- [FeatureFlag](docs/FeatureFlag.md)
- [FeatureFlagListResponse](docs/FeatureFlagListResponse.md)
- [FlagEvaluationResponse](docs/FlagEvaluationResponse.md)
- [FrameworkListResponse](docs/FrameworkListResponse.md)
- [FrameworkStatus](docs/FrameworkStatus.md)
- [GapAnalysisReport](docs/GapAnalysisReport.md)
- [GenerateKeyRequest](docs/GenerateKeyRequest.md)
- [GenerateKeyResponse](docs/GenerateKeyResponse.md)
- [GetAuditStats200Response](docs/GetAuditStats200Response.md)
- [GetAuditStats200ResponseGroupsInner](docs/GetAuditStats200ResponseGroupsInner.md)
- [GetAuditStats200ResponseTimeRange](docs/GetAuditStats200ResponseTimeRange.md)
- [GetAuditStats200ResponseTotals](docs/GetAuditStats200ResponseTotals.md)
- [GetBrowserCapabilities200Response](docs/GetBrowserCapabilities200Response.md)
- [GetCacheEvents200Response](docs/GetCacheEvents200Response.md)
- [GetCacheEvents200ResponseEventsInner](docs/GetCacheEvents200ResponseEventsInner.md)
- [GetCacheStats200Response](docs/GetCacheStats200Response.md)
- [GuardrailConfig](docs/GuardrailConfig.md)
- [HSMHealthResponse](docs/HSMHealthResponse.md)
- [HSMKeyMetadata](docs/HSMKeyMetadata.md)
- [HSMKeyState](docs/HSMKeyState.md)
- [HSMKeyType](docs/HSMKeyType.md)
- [HealthResponse](docs/HealthResponse.md)
- [InfoType](docs/InfoType.md)
- [IngestEventRequest](docs/IngestEventRequest.md)
- [IngestMetricsResponse](docs/IngestMetricsResponse.md)
- [InvalidateCache200Response](docs/InvalidateCache200Response.md)
- [InvalidateCacheByPattern200Response](docs/InvalidateCacheByPattern200Response.md)
- [InvalidateCacheByPatternRequest](docs/InvalidateCacheByPatternRequest.md)
- [InvalidateCacheRequest](docs/InvalidateCacheRequest.md)
- [InvalidateResponseCache200Response](docs/InvalidateResponseCache200Response.md)
- [InvalidateTenantCache200Response](docs/InvalidateTenantCache200Response.md)
- [JWK](docs/JWK.md)
- [JWKSet](docs/JWKSet.md)
- [KnowledgeBase](docs/KnowledgeBase.md)
- [KnowledgeBaseVectorStoreConfig](docs/KnowledgeBaseVectorStoreConfig.md)
- [ListAlertsResponse](docs/ListAlertsResponse.md)
- [ListCategoriesResponse](docs/ListCategoriesResponse.md)
- [ListDLPPolicies200Response](docs/ListDLPPolicies200Response.md)
- [ListDeadLetterEntriesResponse](docs/ListDeadLetterEntriesResponse.md)
- [ListDeliveriesResponse](docs/ListDeliveriesResponse.md)
- [ListDisseminationControlsResponse](docs/ListDisseminationControlsResponse.md)
- [ListDocuments200Response](docs/ListDocuments200Response.md)
- [ListGuardrailConfigs200Response](docs/ListGuardrailConfigs200Response.md)
- [ListKeysResponse](docs/ListKeysResponse.md)
- [ListKnowledgeBases200Response](docs/ListKnowledgeBases200Response.md)
- [ListMarkingsResponse](docs/ListMarkingsResponse.md)
- [ListModelsResponse](docs/ListModelsResponse.md)
- [ListSessionsResponse](docs/ListSessionsResponse.md)
- [ListSubscriptionsResponse](docs/ListSubscriptionsResponse.md)
- [ListTenantsResponse](docs/ListTenantsResponse.md)
- [MetricName](docs/MetricName.md)
- [ModelInfo](docs/ModelInfo.md)
- [ModelInfoCapabilities](docs/ModelInfoCapabilities.md)
- [ModelInfoRateLimits](docs/ModelInfoRateLimits.md)
- [ModifyRequestBody](docs/ModifyRequestBody.md)
- [OverallComplianceStatus](docs/OverallComplianceStatus.md)
- [PaginatedEventsResponse](docs/PaginatedEventsResponse.md)
- [PaginatedEventsResponsePagination](docs/PaginatedEventsResponsePagination.md)
- [PaginationMeta](docs/PaginationMeta.md)
- [PausedRequestDetailResponse](docs/PausedRequestDetailResponse.md)
- [PausedRequestListResponse](docs/PausedRequestListResponse.md)
- [PausedRequestResponse](docs/PausedRequestResponse.md)
- [PerformanceAlert](docs/PerformanceAlert.md)
- [PresenceListResponse](docs/PresenceListResponse.md)
- [PresenceRecord](docs/PresenceRecord.md)
- [ProblemDetail](docs/ProblemDetail.md)
- [QueueStatsResponse](docs/QueueStatsResponse.md)
- [QuotaAlertDetail](docs/QuotaAlertDetail.md)
- [QuotaAlertSummary](docs/QuotaAlertSummary.md)
- [QuotaAlertsResponse](docs/QuotaAlertsResponse.md)
- [QuotaCheckInternalRequest](docs/QuotaCheckInternalRequest.md)
- [QuotaCheckInternalResponse](docs/QuotaCheckInternalResponse.md)
- [QuotaConfigChange](docs/QuotaConfigChange.md)
- [QuotaIncreaseRequestReq](docs/QuotaIncreaseRequestReq.md)
- [QuotaIncreaseRequestResp](docs/QuotaIncreaseRequestResp.md)
- [QuotaLimit](docs/QuotaLimit.md)
- [QuotaLimitsUpdate](docs/QuotaLimitsUpdate.md)
- [QuotaStatusResponse](docs/QuotaStatusResponse.md)
- [RAGPrivacyConfig](docs/RAGPrivacyConfig.md)
- [ReactivateTenantRequest](docs/ReactivateTenantRequest.md)
- [ReactivateTenantResponse](docs/ReactivateTenantResponse.md)
- [ReadinessResponse](docs/ReadinessResponse.md)
- [ReadinessResponseChecksValue](docs/ReadinessResponseChecksValue.md)
- [RefreshTokenRequest](docs/RefreshTokenRequest.md)
- [RefreshTokenResponse](docs/RefreshTokenResponse.md)
- [RejectRequestBody](docs/RejectRequestBody.md)
- [RemoveCUIMarking200Response](docs/RemoveCUIMarking200Response.md)
- [RemoveDomainResponse](docs/RemoveDomainResponse.md)
- [ReportBrowserUsage202Response](docs/ReportBrowserUsage202Response.md)
- [ReportBrowserUsageRequest](docs/ReportBrowserUsageRequest.md)
- [RetrievalRequest](docs/RetrievalRequest.md)
- [RetrievalRequestHybridWeights](docs/RetrievalRequestHybridWeights.md)
- [RetrievalRequestReranking](docs/RetrievalRequestReranking.md)
- [RetrievalResponse](docs/RetrievalResponse.md)
- [RetrievalResult](docs/RetrievalResult.md)
- [RetrievalResultSource](docs/RetrievalResultSource.md)
- [ReviewResultResponse](docs/ReviewResultResponse.md)
- [RevokeToken200Response](docs/RevokeToken200Response.md)
- [RevokeTokenRequest](docs/RevokeTokenRequest.md)
- [RollbackRequest](docs/RollbackRequest.md)
- [RotateKeyResponse](docs/RotateKeyResponse.md)
- [RotateSecretResponse](docs/RotateSecretResponse.md)
- [RunComplianceCheckRequest](docs/RunComplianceCheckRequest.md)
- [SSLStatus](docs/SSLStatus.md)
- [SafetyCheckType](docs/SafetyCheckType.md)
- [SafetyFinding](docs/SafetyFinding.md)
- [SafetyRail](docs/SafetyRail.md)
- [SafetyScanRequest](docs/SafetyScanRequest.md)
- [SafetyScanResponse](docs/SafetyScanResponse.md)
- [Session](docs/Session.md)
- [SetAlertThreshold200Response](docs/SetAlertThreshold200Response.md)
- [SetFlagRequest](docs/SetFlagRequest.md)
- [SetOverrideRequest](docs/SetOverrideRequest.md)
- [SetTenantConfigOverride200Response](docs/SetTenantConfigOverride200Response.md)
- [SetTenantFlagOverride200Response](docs/SetTenantFlagOverride200Response.md)
- [SetTenantsRequest](docs/SetTenantsRequest.md)
- [SetTenantsResponse](docs/SetTenantsResponse.md)
- [SetThemePreferenceRequest](docs/SetThemePreferenceRequest.md)
- [ShareListResponse](docs/ShareListResponse.md)
- [ShareRecord](docs/ShareRecord.md)
- [ShareRequest](docs/ShareRequest.md)
- [SignRequest](docs/SignRequest.md)
- [SignResponse](docs/SignResponse.md)
- [StatusUpdateRequest](docs/StatusUpdateRequest.md)
- [StatusUpdateResponse](docs/StatusUpdateResponse.md)
- [StoredMarking](docs/StoredMarking.md)
- [Subscription](docs/Subscription.md)
- [SuccessResponse](docs/SuccessResponse.md)
- [SuspendTenantRequest](docs/SuspendTenantRequest.md)
- [SuspendTenantResponse](docs/SuspendTenantResponse.md)
- [TemporaryIncreaseReq](docs/TemporaryIncreaseReq.md)
- [TenantConfigRequest](docs/TenantConfigRequest.md)
- [TenantConfigResponse](docs/TenantConfigResponse.md)
- [TenantDashboardResponse](docs/TenantDashboardResponse.md)
- [TenantResponse](docs/TenantResponse.md)
- [TenantStatus](docs/TenantStatus.md)
- [TenantTier](docs/TenantTier.md)
- [TestBreakpointRequest](docs/TestBreakpointRequest.md)
- [TestBreakpointResponse](docs/TestBreakpointResponse.md)
- [TestSubscriptionResponse](docs/TestSubscriptionResponse.md)
- [ThemeMode](docs/ThemeMode.md)
- [ThemePreference](docs/ThemePreference.md)
- [ThemePreferenceResponse](docs/ThemePreferenceResponse.md)
- [TimeRange](docs/TimeRange.md)
- [ToolCall](docs/ToolCall.md)
- [ToolCallFunction](docs/ToolCallFunction.md)
- [ToolDefinition](docs/ToolDefinition.md)
- [ToolDefinitionFunction](docs/ToolDefinitionFunction.md)
- [UnwrapKeyRequest](docs/UnwrapKeyRequest.md)
- [UnwrapKeyResponse](docs/UnwrapKeyResponse.md)
- [UpdateBreakpointRequest](docs/UpdateBreakpointRequest.md)
- [UpdateConfigRequest](docs/UpdateConfigRequest.md)
- [UpdateKnowledgeBaseRequest](docs/UpdateKnowledgeBaseRequest.md)
- [UpdateQuotaConfigRequest](docs/UpdateQuotaConfigRequest.md)
- [UpdateQuotaConfigResponse](docs/UpdateQuotaConfigResponse.md)
- [UpdateSubscriptionRequest](docs/UpdateSubscriptionRequest.md)
- [UsageSummaryResponse](docs/UsageSummaryResponse.md)
- [ValidateTokenRequest](docs/ValidateTokenRequest.md)
- [ValidateTokenResponse](docs/ValidateTokenResponse.md)
- [ValidationError](docs/ValidationError.md)
- [VerificationDetails](docs/VerificationDetails.md)
- [VerificationStatus](docs/VerificationStatus.md)
- [VerifyDomainResponse](docs/VerifyDomainResponse.md)
- [VerifyRequest](docs/VerifyRequest.md)
- [VerifyResponse](docs/VerifyResponse.md)
- [WebVitalMetricSummary](docs/WebVitalMetricSummary.md)
- [WebVitalsReport](docs/WebVitalsReport.md)
- [WebhookEvent](docs/WebhookEvent.md)
- [WorkspaceMemberAddRequest](docs/WorkspaceMemberAddRequest.md)
- [WorkspaceMemberListResponse](docs/WorkspaceMemberListResponse.md)
- [WorkspaceMemberRecord](docs/WorkspaceMemberRecord.md)
- [WorkspaceMemberUpdateRequest](docs/WorkspaceMemberUpdateRequest.md)
- [WrapKeyRequest](docs/WrapKeyRequest.md)
- [WrapKeyResponse](docs/WrapKeyResponse.md)

### Authorization


Authentication schemes defined for the API:
<a id="BearerAuth"></a>
#### BearerAuth


- **Type**: HTTP Bearer Token authentication (JWT)
<a id="ApiKeyAuth"></a>
#### ApiKeyAuth


- **Type**: API key
- **API key parameter name**: `X-API-Key`
- **Location**: HTTP header
<a id="OAuth2-accessCode"></a>
#### OAuth2 accessCode


- **Type**: OAuth
- **Flow**: accessCode
- **Authorization URL**: https://auth.aqueduct.ai/oauth2/authorize
- **Scopes**: 
  - `system:admin`: Full system administration access
  - `reseller:admin`: Reseller-level tenant management
  - `tenant:admin`: Tenant administration (CRUD, config, user management)
  - `tenant:read`: Read-only access to tenant data
  - `tenant:write`: Write access to tenant data
  - `user:admin`: User administration within a tenant
  - `user:read`: Read-only access to user data
  - `user:write`: Write access to user data
  - `breakpoint:admin`: Full CRUD on breakpoint configuration
  - `breakpoint:operator`: Review and action paused requests
  - `breakpoint:viewer`: Read-only access to breakpoints and queue
  - `api:read`: Read access to API resources
  - `api:write`: Write access to API resources
  - `api:admin`: Full API administration
  - `conversation:read`: Read access to conversation history
  - `conversation:write`: Create and modify conversations
  - `prompt:read`: Read access to prompt library
  - `prompt:write`: Manage prompt library entries
  - `billing:read`: Read billing and usage data
  - `billing:write`: Manage billing configuration
  - `audit:read`: Read audit logs
  - `model:invoke`: Invoke AI model inference endpoints
  - `dlp:scan`: Execute DLP scans on content
  - `dlp:manage`: Manage DLP policies and configuration
  - `rag:query`: Query knowledge bases for retrieval
  - `rag:manage`: Manage knowledge bases and documents
  - `safety:manage`: Manage safety guardrail configuration
  - `config:read`: Read configuration entries and feature flags
  - `config:write`: Create, update, delete configuration entries and flags
  - `compliance:read`: Read compliance frameworks, controls, and reports
  - `compliance:manage`: Run compliance checks and manage scheduler
  - `security:admin`: Manage HSM keys (generate, rotate, deactivate, destroy)
  - `security:encrypt`: Perform HSM encrypt/decrypt operations
  - `security:sign`: Perform HSM sign/verify operations
  - `security:wrap`: Perform HSM key wrap/unwrap operations
  - `tenant:owner`: Tenant owner operations (deletion requests, data export)

## About

This TypeScript SDK client supports the [Fetch API](https://fetch.spec.whatwg.org/)
and is automatically generated by the
[OpenAPI Generator](https://openapi-generator.tech) project:

- API version: `1.0.0`
- Package version: `0.1.0`
- Generator version: `7.21.0`
- Build package: `org.openapitools.codegen.languages.TypeScriptFetchClientCodegen`

The generated npm module supports the following:

- Environments
  * Node.js
  * Webpack
  * Browserify
- Language levels
  * ES5 - you must have a Promises/A+ library installed
  * ES6
- Module systems
  * CommonJS
  * ES6 module system

For more information, please visit [https://github.com/NetizenPrime/Aqueduct](https://github.com/NetizenPrime/Aqueduct)

## Development

### Building

To build the TypeScript source code, you need to have Node.js and npm installed.
After cloning the repository, navigate to the project directory and run:

```bash
npm install
npm run build
```

### Publishing

Once you've built the package, you can publish it to npm:

```bash
npm publish
```

## License

[Proprietary](https://aqueduct.ai/license)
