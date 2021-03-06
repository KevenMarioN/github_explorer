import React, { useEffect, useState } from 'react';
import { Link, useMatch } from 'react-router-dom';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Header, RepositoryInfo, Issues } from './style';
import logoImg from '../../assets/logo.svg';
import api from '../../services/api';

interface Repository {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}
interface Issue {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string
  }
}
function Repository(): JSX.Element {
  const [repository, setRepository] = useState<Repository | null>();
  const [issues, setIssues] = useState<Issue[]>([]);

  const match = useMatch({
    path: '/repositories/:repository/:name',
    end: true,
    caseSensitive: true,
  });
  const name = match?.params.name;
  const repo = match?.params.repository;
  useEffect(() => {
    async function loadData() {
      const [respositoryResult, issuesResult] = await Promise.all([api.get<Repository>(`repos/${repo}/${name}`), api.get(`repos/${repo}/${name}/issues`)]);
      setRepository(respositoryResult.data);
      setIssues(issuesResult.data);
    }
    loadData();
  }, [name, repo]);
  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/dashboard">
          <FiChevronLeft size={18} />
          Voltar
        </Link>
      </Header>
      {repository && (
        <RepositoryInfo>
          <header>
            <img src={repository.owner.avatar_url} alt={repository.owner.login} />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
          </header>
          <ul>
            <li>
              <strong>{repository.stargazers_count}</strong>
              <span>Starts</span>
            </li>
            <li>
              <strong>{repository.forks_count}</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong>{repository.open_issues_count}</strong>
              <span>Issues abertas</span>
            </li>
          </ul>
        </RepositoryInfo>
      )}
      <Issues>
        {issues.map((issue) => (
          <a key={issue.id} href={issue.html_url}>
            <div>
              <strong>{issue.title}</strong>
              <p>{issue.user.login}</p>
            </div>
            <FiChevronRight size={20} />
          </a>
        ))}
      </Issues>
    </>
  );
}

export default Repository;
