import { PERSONAL_INFO } from '@/constants/portfolio';

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  topics: string[];
  stargazers_count: number;
  language: string | null;
  created_at: string;
  updated_at: string;
  pushed_at: string;
}

const GITHUB_USERNAME = 'DamiduGimhan20';
const GITHUB_API = 'https://api.github.com';

export async function fetchGitHubRepos(): Promise<GitHubRepo[]> {
  try {
    const response = await fetch(
      `${GITHUB_API}/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`,
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch GitHub repositories');
    }

    const repos: GitHubRepo[] = await response.json();
    
    // Filter out forks and sort by stars and update date
    return repos
      .filter(repo => !repo.fork)
      .sort((a, b) => {
        // Prioritize repos with more stars
        if (b.stargazers_count !== a.stargazers_count) {
          return b.stargazers_count - a.stargazers_count;
        }
        // Then by most recently updated
        return new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime();
      });
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return [];
  }
}

export function mapGitHubRepoToProject(repo: GitHubRepo, featured: boolean = false) {
  return {
    id: repo.id,
    title: repo.name
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' '),
    description: repo.description || 'A project built with modern web technologies',
    technologies: [
      repo.language || 'JavaScript',
      ...repo.topics.slice(0, 4),
    ].filter(Boolean),
    github: repo.html_url,
    demo: repo.homepage || undefined,
    featured,
    image: `https://opengraph.githubassets.com/1/${repo.full_name}`,
    stars: repo.stargazers_count,
  };
}
