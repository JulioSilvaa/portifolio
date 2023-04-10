import React from 'react';
import {
  DiCss3,
  DiFirebase,
  DiHtml5,
  DiJsBadge,
  DiMongodb,
  DiMysql,
  DiNodejsSmall,
  DiReact,
} from 'react-icons/di';
import { SiElectron } from 'react-icons/si';
import * as S from './styled.technologies';

const Technologies = () => {
  const technologies = [
    { id: 'html', name: 'HTML5', icon: <DiHtml5 /> },
    { id: 'css', name: 'CSS3', icon: <DiCss3 /> },
    { id: 'js', name: 'JavaScript', icon: <DiJsBadge /> },
    { id: 'react', name: 'React', icon: <DiReact /> },
    { id: 'electron', name: 'Electron', icon: <SiElectron /> },
    { id: 'node', name: 'Node.js', icon: <DiNodejsSmall /> },
    { id: 'firebase', name: 'Firebase', icon: <DiFirebase /> },
    { id: 'mongo', name: 'MongoDB', icon: <DiMongodb /> },
    { id: 'mysql', name: 'MySql', icon: <DiMysql /> },
  ];
  return (
    <S.ContainerTechnologies>
      <div style={{ display: 'flex' }}>
        {technologies.map((tech) => (
          <S.IconTechnologies id={tech.id} key={tech.id}>
            {tech.icon}
            <div>
              <h3>{tech.name}</h3>
            </div>
          </S.IconTechnologies>
        ))}
      </div>
    </S.ContainerTechnologies>
  );
};

export default Technologies;
