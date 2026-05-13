/**
 * Format a large number with k/m suffixes for compact display.
 * e.g. 1500 → "1.5k", 2300000 → "2.3m"
 */
export function formatCount(n) {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}m`
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}k`
  return String(n)
}

/**
 * Normalise a URL — prepend https:// if missing a scheme.
 */
export function normaliseUrl(url) {
  if (!url) return null
  return url.startsWith('http') ? url : `https://${url}`
}

/**
 * Given an array of repos, count occurrences of each language
 * and return them sorted by frequency, most common first.
 * @param {Array} repos
 * @returns {Array<{ language: string, count: number }>}
 */
export function getTopLanguages(repos, limit = 5) {
  const counts = repos.reduce((acc, repo) => {
    if (repo.language) acc[repo.language] = (acc[repo.language] || 0) + 1
    return acc
  }, {})

  return Object.entries(counts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, limit)
    .map(([language, count]) => ({ language, count }))
}

/**
 * Truncate a string to maxLen characters, appending ellipsis if needed.
 */
export function truncate(str, maxLen = 100) {
  if (!str || str.length <= maxLen) return str
  return str.slice(0, maxLen).trimEnd() + '…'
}
