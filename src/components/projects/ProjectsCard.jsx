import React, { useState } from 'react';
import Modal from '../modal/Modal';
import { products } from './DataProjects';
import * as S from './styled.projects';

function ProjectsCard() {
  const [isModalVisible, setModalVisible] = useState(false);

  const productsList = products?.map((product) => (
    <S.ContainerCardProjects key={product.id}>
      <S.title>{product.name}</S.title>
      <S.ContainerImage>
        <S.ImageCard
          // Trabalhando na apresentação do Modal -
          // onClick={() => {
          //   setModalVisible(true);
          // }}
          src={product.image}
          alt={`imagem do projeto ${product.name}`}
        />
      </S.ContainerImage>
      <S.ContainerDescriptions>
        <S.Description>{product.description}</S.Description>
      </S.ContainerDescriptions>
      <S.ContainerLinks>
        <S.Links href={product.gitHub}>Github</S.Links>
        <S.Links href={product.url}>Página do Projeto</S.Links>
      </S.ContainerLinks>
    </S.ContainerCardProjects>
  ));

  const descriptionForModal = products.map((product) => product.description);

  return (
    <>
      {isModalVisible ? (
        <Modal
          onClose={() => {
            setModalVisible(false);
          }}
        >
          Em Produção
        </Modal>
      ) : (
        productsList
      )}
    </>
  );
}

export default ProjectsCard;
