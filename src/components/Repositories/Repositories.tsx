import React, { useEffect, useState } from 'react';
import '../../components/Repositories/Repositories.css';
import api from '../../utils/Api';
import { Person } from '../Main/Main';
import Paginate from '../Paginate/Paginate';


type Props = {
  searchValue: string
  totalRepos: Person['public_repos']
}

type Repo = {
  id: number;
  html_url: string;
  name: string;
  description: string;
}

function Repositories({ searchValue, totalRepos }: Props) {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    api
      .getRepositories(searchValue.toLowerCase().replace(/\s/g, ''), page)
      .then((res) => {
        setRepos(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [searchValue, page]);

  return (
    <>
      <ul className="main__repos-container">
        {repos.map((repo) => (
          <li key={repo.id} className="repositories__item">
            <a
              className="repositories__link"
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className="repositories__item-title">{repo.name}</h2>
            </a>
            <p className="repositories__item-description">{repo.description}</p>
          </li>
        ))}
      </ul>
      <Paginate totalRepos={totalRepos} setPage={setPage} />
    </>
  );
}

export default Repositories;
