import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { Title, Form, Repositories } from './styles';
import logoImg from '../../assets/logo.svg';

function Dashboard(): JSX.Element {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img src="https://avatars.githubusercontent.com/u/51131707?v=4" alt="Keven" />
          <div>
            <strong>KevenMarioN/foundation_golang</strong>
            <p>Sem descrição</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img src="https://avatars.githubusercontent.com/u/51131707?v=4" alt="Keven" />
          <div>
            <strong>KevenMarioN/foundation_golang</strong>
            <p>Sem descrição</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img src="https://avatars.githubusercontent.com/u/51131707?v=4" alt="Keven" />
          <div>
            <strong>KevenMarioN/foundation_golang</strong>
            <p>Sem descrição</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
}

export default Dashboard;
