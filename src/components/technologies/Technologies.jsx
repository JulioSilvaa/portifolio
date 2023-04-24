import React from 'react';
import {
  DiCss3,
  DiFirebase,
  DiHtml5,
  DiJsBadge,
  DiMongodb,
  DiNodejsSmall,
  DiReact,
} from 'react-icons/di';
import * as S from './styled.technologies';

const Technologies = () => {
  const technologies = [
    { id: 'html', name: 'HTML5', icon: <DiHtml5 /> },
    { id: 'css', name: 'CSS3', icon: <DiCss3 /> },
    { id: 'js', name: 'JavaScript', icon: <DiJsBadge /> },
    { id: 'react', name: 'React', icon: <DiReact /> },
    { id: 'node', name: 'Node.js', icon: <DiNodejsSmall /> },
    { id: 'firebase', name: 'Firebase', icon: <DiFirebase /> },
    { id: 'mongo', name: 'MongoDB', icon: <DiMongodb /> },
  ];
  return (
    <S.ContainerTechnologies>
      {technologies.map((tech) => (
        <S.IconTechnologies id={tech.id} key={tech.id}>
          {tech.icon}
          <div>
            <h3>{tech.name}</h3>
          </div>
        </S.IconTechnologies>
      ))}
    </S.ContainerTechnologies>
  );
};

export default Technologies;
