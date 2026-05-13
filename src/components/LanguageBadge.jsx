import { LANGUAGE_COLORS } from '../utils/constants'
import styles from './LanguageBadge.module.css'

/**
 * Coloured pill badge for a programming language.
 * Falls back to a neutral grey if the language isn't in the colours map.
 */
export default function LanguageBadge({ language }) {
  const color = LANGUAGE_COLORS[language] || '#888888'

  return (
    <span
      className={styles.badge}
      style={{
        '--lang-color': color,
        '--lang-bg': color + '22',
        '--lang-border': color + '55',
      }}
    >
      <span className={styles.dot} aria-hidden="true" />
      {language}
    </span>
  )
}
