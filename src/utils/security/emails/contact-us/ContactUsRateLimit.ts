import { RateLimitResult } from '@/utils/security/types'
import 'server-only'

const CONTACT_US_POLICY = { max: 3, windowMs: 60 * 60 * 1000 } as const
const buckets = new Map<string, number[]>()

/**
 * @description Removes expired timestamps from the in-memory bucket map to keep it bounded.
 * @private
 * @param {number} now - Current timestamp in milliseconds.
 * @param {number} windowMs - Sliding window length in milliseconds.
 * @returns {void} - Mutates the internal bucket map in place.
 */
const pruneBuckets = (now: number, windowMs: number): void => {
  for (const [key, timestamps] of buckets) {
    const fresh = timestamps.filter((t) => now - t < windowMs)
    if (fresh.length === 0) {
      buckets.delete(key)
    } else if (fresh.length !== timestamps.length) {
      buckets.set(key, fresh)
    }
  }
}

/**
 * @description Checks whether the given client IP is allowed to submit the contact form right now.
 * @public
 * @param {string} clientIp - Resolved client IP, typically from `x-forwarded-for`.
 * @returns {RateLimitResult} - Whether the attempt is allowed and how long to wait otherwise.
 */
export const checkContactUsRateLimit = (clientIp: string): RateLimitResult => {
  const key = `contact-us:${clientIp}`
  const now = Date.now()
  const recent = (buckets.get(key) ?? []).filter((t) => now - t < CONTACT_US_POLICY.windowMs)
  if (recent.length >= CONTACT_US_POLICY.max) {
    const oldest = recent[0]!
    return {
      allowed: false,
      retryAfterMs: CONTACT_US_POLICY.windowMs - (now - oldest),
    }
  }
  recent.push(now)
  buckets.set(key, recent)
  if (buckets.size > 1000) pruneBuckets(now, CONTACT_US_POLICY.windowMs)
  return { allowed: true, retryAfterMs: 0 }
}
