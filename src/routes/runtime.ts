import type { FastifyInstance } from "fastify";

import { endpoints, requiredEndpoints } from "../contract.js";
import { integrationId, integrationName, integrationVersion, projectDomain, projectKind, projectPreset } from "../settings.js";
import { registry } from "../state.js";

export function registerRuntimeRoutes(app: FastifyInstance): void {
  app.get("/state", async () => {
    return {
      summary: {
        activeConfigCount: registry.ids().length,
        recentEventCount: registry.recentEvents.length,
      },
      entries: Object.fromEntries(registry.entries),
      stateSnapshots: Object.fromEntries(registry.stateSnapshots),
    };
  });

  app.get("/contract", async () => {
    return {
      integration_id: integrationId,
      name: integrationName,
      version: integrationVersion,
      kind: projectKind,
      preset: projectPreset,
      domain: projectDomain,
      endpoints,
      required: requiredEndpoints,
    };
  });
}
