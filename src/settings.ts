export const integrationId = "piphi-zwave-js-sidecar";
export const integrationName = "Piphi Zwave Js Sidecar";
export const integrationVersion = "0.1.0";
export const projectKind = "sidecar";
export const projectPreset = "sidecar-worker";
export const projectDomain = "sidecar-service";
export const defaultPort = 4211;

export function runtimePort(): number {
  const value = Number(process.env.PORT ?? defaultPort);
  return Number.isInteger(value) && value > 0 && value <= 65535 ? value : defaultPort;
}
