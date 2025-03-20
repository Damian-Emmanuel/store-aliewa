export const COUPON_CODES = {
    bFriday: 'bFriday',
    XMAS2025: 'XMAS2025',
    LG2022: 'LG2022',
} as const;

export type CouponCode = keyof typeof COUPON_CODES;