export {};

declare global {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface Window {
    __consent?: { analytics: boolean; marketing: boolean; timestamp: string };
    __gtmId?: string;
    dataLayer?: unknown[];
  }
}
