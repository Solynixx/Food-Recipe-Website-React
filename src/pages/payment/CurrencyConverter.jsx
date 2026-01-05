const USD_TO_IDR_RATE = 16000;

/**
 * Parse an Indonesian Rupiah formatted string (e.g., "Rp 12.345,67") into a number.
 * Handles common separators and currency symbols.
 * @param {string} idrString - Formatted IDR string.
 * @returns {number} Numeric value parsed from the string.
 */
export function parseIdrToNumber(idrString) {
  const clean = String(idrString || "")
    .replace(/[^\d.,-]/g, "") 
    .replace(/\./g, "")      
    .replace(",", ".");       
  return Number(clean) || 0;
}

/**
 * Convert an IDR numeric value to USD using a fixed rate.
 * @param {number} idrValue - Value in IDR.
 * @returns {number} Equivalent value in USD.
 */
export function idrToUsd(idrValue) {
  return idrValue / USD_TO_IDR_RATE;
}

/**
 * Format a number as USD currency string.
 * @param {number} n - Numeric value.
 * @returns {string} Formatted USD string.
 */
export function formatUsd(n) {
  return `$${Number(n || 0).toFixed(2)}`;
}

/**
 * Format a number as IDR currency using Intl.NumberFormat.
 * @param {number} n - Numeric value.
 * @returns {string} Formatted IDR string.
 */
export function formatIdr(n) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(Number(n || 0));
}