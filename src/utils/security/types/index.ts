/* ------------------------------------------------- INTERFACES-PROPS --------------------------------------------------------- */

/**
 * @description Result returned by every rate limit check inside the security layer.
 * @interface RateLimitResult
 * @property {boolean} allowed - Whether the caller is allowed to proceed with the request.
 * @property {number} retryAfterMs - Milliseconds to wait before the next attempt; `0` when allowed.
 */
export interface RateLimitResult {
  allowed: boolean
  retryAfterMs: number
}
