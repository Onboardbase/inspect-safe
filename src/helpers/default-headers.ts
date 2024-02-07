import { SafeHeaders } from "../types";

export function defaultSecurityHeaders():SafeHeaders[]{
  return [
    {
      key:"content-security-policy",
      value:"default-src 'self'",
    },
    {
      key:"referrer-policy",
      value:"origin",
    },
    {
      key:"x-frame-options",
      value:"DENY",
    },
    {
      key:"x-xss-protection",
      value:"1; mode=block",
    },
    {
      key:"x-content-type-options",
      value:"nosniff",
    },
    {
      key:"x-secured-by",
      value:"nudgeer-safe"
    }
  ]
}