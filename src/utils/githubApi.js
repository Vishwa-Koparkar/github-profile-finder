import { GITHUB_API_BASE, ERROR_MESSAGES, MAX_REPOS } from './constants'

/**
 * Build fetch headers. Attaches an Authorization header when
 * VITE_GITHUB_TOKEN is set in the environment.
 */
function buildHeaders() {
  const headers = { Accept: 'application/vnd.github+json' }
  const token = import.meta.env.VITE_GITHUB_TOKEN
  if (token) headers['Authorization'] = `Bearer ${token}`
  return headers
}

/**
 * Fetch a single GitHub user's profile.
 * @param {string} username
 * @returns {Promise<Object>} GitHub user object
 * @throws {Error} with a human-readable message
 */
export async function fetchUser(username) {
  const res = await fetch(`${GITHUB_API_BASE}/users/${encodeURIComponent(username)}`, {
    headers: buildHeaders(),
  })

  if (!res.ok) {
    if (res.status === 404) throw new Error(ERROR_MESSAGES.NOT_FOUND)
    if (res.status === 403 || res.status === 429) throw new Error(ERROR_MESSAGES.RATE_LIMITED)
    throw new Error(ERROR_MESSAGES.UNKNOWN)
  }

  return res.json()
}

/**
 * Fetch a user's public repositories, filtered to non-forks,
 * sorted by star count, capped at MAX_REPOS.
 * @param {string} username
 * @returns {Promise<Array>} array of repo objects
 */
export async function fetchRepos(username) {
  const res = await fetch(
    `${GITHUB_API_BASE}/users/${encodeURIComponent(username)}/repos?per_page=100&sort=stars`,
    { headers: buildHeaders() }
  )

  if (!res.ok) {
    if (res.status === 403 || res.status === 429) throw new Error(ERROR_MESSAGES.RATE_LIMITED)
    throw new Error(ERROR_MESSAGES.UNKNOWN)
  }

  const repos = await res.json()

  return repos
    .filter(repo => !repo.fork)
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, MAX_REPOS)
}
