// GitHub API base URL
export const GITHUB_API_BASE = 'https://api.github.com'

// Max repos to display
export const MAX_REPOS = 12

// Language → colour map (matches github.com colouring)
export const LANGUAGE_COLORS = {
  JavaScript:  '#f1e05a',
  TypeScript:  '#3178c6',
  Python:      '#3572A5',
  Java:        '#b07219',
  'C++':       '#f34b7d',
  C:           '#555555',
  'C#':        '#178600',
  Go:          '#00ADD8',
  Rust:        '#dea584',
  Ruby:        '#701516',
  PHP:         '#4F5D95',
  Swift:       '#F05138',
  Kotlin:      '#A97BFF',
  Dart:        '#00B4AB',
  HTML:        '#e34c26',
  CSS:         '#563d7c',
  SCSS:        '#c6538c',
  Shell:       '#89e051',
  Vue:         '#41b883',
  Svelte:      '#ff3e00',
  Scala:       '#c22d40',
  Haskell:     '#5e5086',
  Elixir:      '#6e4a7e',
  Clojure:     '#db5855',
}

// Error messages
export const ERROR_MESSAGES = {
  NOT_FOUND: "User not found. Double-check the username and try again.",
  RATE_LIMITED: "GitHub API rate limit reached. Wait a minute or add a token in .env.",
  NETWORK: "Network error. Check your connection and try again.",
  UNKNOWN: "Something went wrong. Please try again.",
}
