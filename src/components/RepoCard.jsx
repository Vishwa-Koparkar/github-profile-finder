import LanguageBadge from './LanguageBadge'
import { truncate } from '../utils/formatters'
import styles from './RepoCard.module.css'

/**
 * Card displaying a single GitHub repository with name, description,
 * star count, fork indicator and language badge.
 */
export default function RepoCard({ repo }) {
  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noreferrer noopener"
      className={styles.card}
      aria-label={`${repo.name} — ${repo.description || 'no description'}`}
    >
      <div className={styles.header}>
        <span className={styles.name}>{repo.name}</span>
        <span className={styles.stars} aria-label={`${repo.stargazers_count} stars`}>
          <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z" />
          </svg>
          {repo.stargazers_count.toLocaleString()}
        </span>
      </div>

      {repo.description && (
        <p className={styles.description}>{truncate(repo.description, 90)}</p>
      )}

      <div className={styles.footer}>
        {repo.language && <LanguageBadge language={repo.language} />}
        {repo.fork && (
          <span className={styles.forkBadge}>
            <svg width="11" height="11" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
              <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0Z" />
            </svg>
            fork
          </span>
        )}
      </div>
    </a>
  )
}
