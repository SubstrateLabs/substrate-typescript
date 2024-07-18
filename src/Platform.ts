/**
 * @private
 *
 * Returns properties of the current environment.
 */

declare const Deno: any;
declare const EdgeRuntime: any;

type Arch = "x32" | "x64" | "arm" | "arm64" | `other:${string}` | "unknown";

type PlatformName =
  | "MacOS"
  | "Linux"
  | "Windows"
  | "FreeBSD"
  | "OpenBSD"
  | "iOS"
  | "Android"
  | `Other:${string}`
  | "Unknown";

type Browser = "ie" | "edge" | "chrome" | "firefox" | "safari";

type PlatformProperties = {
  os: PlatformName;
  arch: Arch;
  runtime:
    | "node"
    | "deno"
    | "edge"
    | "workerd"
    | `browser:${Browser}`
    | "unknown";
  runtimeVersion: string;
};

export const getPlatformProperties = (): PlatformProperties => {
  if (typeof Deno !== "undefined" && Deno.build != null) {
    return {
      os: normalizePlatform(Deno.build.os),
      arch: normalizeArch(Deno.build.arch),
      runtime: "deno",
      runtimeVersion:
        typeof Deno.version === "string"
          ? Deno.version
          : (Deno.version?.deno ?? "unknown"),
    };
  }
  if (typeof EdgeRuntime !== "undefined") {
    return {
      os: "Unknown",
      arch: `other:${EdgeRuntime}`,
      runtime: "edge",
      runtimeVersion: process.version,
    };
  }
  // Check if Node.js
  if (
    Object.prototype.toString.call(
      typeof process !== "undefined" ? process : 0,
    ) === "[object process]"
  ) {
    return {
      os: normalizePlatform(process.platform),
      arch: normalizeArch(process.arch),
      runtime: "node",
      runtimeVersion: process.version,
    };
  }

  // https://developers.cloudflare.com/workers/runtime-apis/web-standards/#navigatoruseragent
  if (
    typeof navigator !== undefined &&
    navigator.userAgent === "Cloudflare-Workers"
  ) {
    return {
      os: "Unknown",
      arch: "unknown",
      runtime: "workerd",
      runtimeVersion: "unknown",
    };
  }

  const browserInfo = getBrowserInfo();
  if (browserInfo) {
    return {
      os: "Unknown",
      arch: "unknown",
      runtime: `browser:${browserInfo.browser}`,
      runtimeVersion: browserInfo.version,
    };
  }

  return {
    os: "Unknown",
    arch: "unknown",
    runtime: "unknown",
    runtimeVersion: "unknown",
  };
};

type BrowserInfo = {
  browser: Browser;
  version: string;
};

// Note: modified from https://github.com/JS-DevTools/host-environment/blob/b1ab79ecde37db5d6e163c050e54fe7d287d7c92/src/isomorphic.browser.ts
function getBrowserInfo(): BrowserInfo | null {
  if (typeof navigator === "undefined" || !navigator) {
    return null;
  }

  // NOTE: The order matters here!
  const browserPatterns = [
    { key: "edge" as const, pattern: /Edge(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/ },
    { key: "ie" as const, pattern: /MSIE(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/ },
    {
      key: "ie" as const,
      pattern: /Trident(?:.*rv\:(\d+)\.(\d+)(?:\.(\d+))?)?/,
    },
    {
      key: "chrome" as const,
      pattern: /Chrome(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/,
    },
    {
      key: "firefox" as const,
      pattern: /Firefox(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/,
    },
    {
      key: "safari" as const,
      pattern:
        /(?:Version\W+(\d+)\.(\d+)(?:\.(\d+))?)?(?:\W+Mobile\S*)?\W+Safari/,
    },
  ];

  // Find the FIRST matching browser
  for (const { key, pattern } of browserPatterns) {
    const match = pattern.exec(navigator.userAgent);
    if (match) {
      const major = match[1] || 0;
      const minor = match[2] || 0;
      const patch = match[3] || 0;

      return { browser: key, version: `${major}.${minor}.${patch}` };
    }
  }

  return null;
}

const normalizeArch = (arch: string): Arch => {
  // Node docs:
  // - https://nodejs.org/api/process.html#processarch
  // Deno docs:
  // - https://doc.deno.land/deno/stable/~/Deno.build
  if (arch === "x32") return "x32";
  if (arch === "x86_64" || arch === "x64") return "x64";
  if (arch === "arm") return "arm";
  if (arch === "aarch64" || arch === "arm64") return "arm64";
  if (arch) return `other:${arch}`;
  return "unknown";
};

const normalizePlatform = (platform: string): PlatformName => {
  // Node platforms:
  // - https://nodejs.org/api/process.html#processplatform
  // Deno platforms:
  // - https://doc.deno.land/deno/stable/~/Deno.build
  // - https://github.com/denoland/deno/issues/14799

  platform = platform.toLowerCase();

  // NOTE: this iOS check is untested and may not work
  // Node does not work natively on IOS, there is a fork at
  // https://github.com/nodejs-mobile/nodejs-mobile
  // however it is unknown at the time of writing how to detect if it is running
  if (platform.includes("ios")) return "iOS";
  if (platform === "android") return "Android";
  if (platform === "darwin") return "MacOS";
  if (platform === "win32") return "Windows";
  if (platform === "freebsd") return "FreeBSD";
  if (platform === "openbsd") return "OpenBSD";
  if (platform === "linux") return "Linux";
  if (platform) return `Other:${platform}`;
  return "Unknown";
};
