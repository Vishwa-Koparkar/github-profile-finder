import LanguageBadge from './LanguageBadge'
import { formatCount, normaliseUrl, getTopLanguages } from '../utils/formatters'
import styles from './ProfileCard.module.css'

function StatBox({ label, value }) {
  return (
    <div className={styles.stat}>
      <span className={styles.statValue}>{formatCount(value)}</span>
      <span className={styles.statLabel}>{label}</span>
    </div>
  )
}

/**
 * Full user profile card — avatar, name, bio, location, stats and top languages.
 */
export default function ProfileCard({ user, repos }) {
  const topLangs = getTopLanguages(repos)
  const websiteUrl = normaliseUrl(user.blog)

  return (
    <article className={styles.card} aria-label={`${user.login}'s GitHub profile`}>
      {/* Avatar + identity */}
      <div className={styles.identity}>
        <img
          src={user.avatar_url}
          alt={`${user.login}'s avatar`}
          className={styles.avatar}
          width={80}
          height={80}
        />
        <div className={styles.nameBlock}>
          <div className={styles.nameRow}>
            <h2 className={styles.name}>{user.name || user.login}</h2>
            <a
              href={user.html_url}
              target="_blank"
              rel="noreferrer noopener"
              className={styles.loginLink}
            >
              @{user.login} ↗
            </a>
          </div>
          {user.bio && <p className={styles.bio}>{user.bio}</p>}

          {/* Meta row */}
          <div className={styles.meta}>
            {user.location && (
              <span className={styles.metaItem}>
                <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                </svg>
                {user.location}
              </span>
            )}
            {user.company && (
              <span className={styles.metaItem}>
                <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                  <path d="M1.75 16A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v5.5c0 .414-.336.75-.75.75h-1v7.25c0 .414-.336.75-.75.75H1.75Zm1.5-7.25v5.5h1.5v-5.5h-1.5Zm3 0v5.5h1.5v-5.5h-1.5Zm-4.5 0v1.5H3.5v-1.5H1.75Zm0-3v1.5H3.5V5.5H1.75Zm3 0v1.5H6.5V5.5H4.75Zm3 0v1.5H9.5V5.5H7.75Zm-6-3v1.5H3.5V2.5H1.75Zm3 0v1.5H6.5V2.5H4.75Zm3 0v1.5H9.5V2.5H7.75Z" />
                </svg>
                {user.company}
              </span>
            )}
            {websiteUrl && (
              <a href={websiteUrl} target="_blank" rel="noreferrer noopener" className={styles.metaLink}>
                <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                  <path d="M7.775 3.275a.75.75 0 0 0 1.06 1.06l1.25-1.25a2 2 0 1 1 2.83 2.83l-2.5 2.5a2 2 0 0 1-2.83 0 .75.75 0 0 0-1.06 1.06 3.5 3.5 0 0 0 4.95 0l2.5-2.5a3.5 3.5 0 0 0-4.95-4.95l-1.25 1.25Zm-4.69 9.64a2 2 0 0 1 0-2.83l2.5-2.5a2 2 0 0 1 2.83 0 .75.75 0 0 0 1.06-1.06 3.5 3.5 0 0 0-4.95 0l-2.5 2.5a3.5 3.5 0 0 0 4.95 4.95l1.25-1.25a.75.75 0 0 0-1.06-1.06l-1.25 1.25a2 2 0 0 1-2.83 0Z" />
                </svg>
                Website
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className={styles.statsRow}>
        <StatBox label="Followers" value={user.followers} />
        <div className={styles.divider} />
        <StatBox label="Following" value={user.following} />
        <div className={styles.divider} />
        <StatBox label="Repos" value={user.public_repos} />
        <div className={styles.divider} />
        <StatBox label="Gists" value={user.public_gists} />
      </div>

      {/* Top languages */}
      {topLangs.length > 0 && (
        <div className={styles.langSection}>
          <span className={styles.langLabel}>Top languages</span>
          <div className={styles.langList}>
            {topLangs.map(({ language }) => (
              <LanguageBadge key={language} language={language} />
            ))}
          </div>
        </div>
      )}
    </article>
  )
}
