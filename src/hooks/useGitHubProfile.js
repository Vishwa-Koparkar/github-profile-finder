import { useState, useCallback } from 'react'
import { fetchUser, fetchRepos } from '../utils/githubApi'
import { ERROR_MESSAGES } from '../utils/constants'

/**
 * Custom hook that manages fetching and state for a GitHub profile.
 *
 * @returns {{
 *   user: Object|null,
 *   repos: Array,
 *   loading: boolean,
 *   error: string,
 *   search: (username: string) => Promise<void>,
 *   reset: () => void,
 * }}
 */
export function useGitHubProfile() {
  const [user, setUser]       = useState(null)
  const [repos, setRepos]     = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError]     = useState('')

  const reset = useCallback(() => {
    setUser(null)
    setRepos([])
    setError('')
  }, [])

  const search = useCallback(async (username) => {
    const trimmed = username.trim()
    if (!trimmed) return

    setLoading(true)
    setError('')
    setUser(null)
    setRepos([])

    try {
      // Fire both requests in parallel for speed
      const [userData, repoData] = await Promise.all([
        fetchUser(trimmed),
        fetchRepos(trimmed),
      ])

      setUser(userData)
      setRepos(repoData)
    } catch (err) {
      setError(err.message || ERROR_MESSAGES.UNKNOWN)
    } finally {
      setLoading(false)
    }
  }, [])

  return { user, repos, loading, error, search, reset }
}
