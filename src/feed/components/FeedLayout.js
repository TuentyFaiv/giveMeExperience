import React from 'react';

import HeaderPost from './HeaderPost';
import PopularProjects from '../../projects/components/PopularProjects';
import ProjectBox from '../../projects/components/ProjectBox';

import user from '../../assets/images/user.jpg';

const FeedLayout = (props) => {
  const { children } = props;

  const handleAutoHeight = (event) => {
    const input = event.target;
    input.style.height = '60px';
    input.style.height = `${input.scrollHeight}px`;
  };

  const goToProjects = () => {
    props.history.push('/projects');
  };

  return (
    <section className="feed">
      <div className="postInput box">
        <HeaderPost userImg={user} />
        <textarea className="postInput-content" name="postInput" id="postInput" onInput={handleAutoHeight} placeholder="¿Tienes algo que compartir?" />
        <button type="button" className="btn btn-submitPost">Publicar</button>
      </div>
      <PopularProjects feed>
        <ProjectBox margin="mr-20" />
        <ProjectBox margin="mr-20" />
        <ProjectBox margin="mr-20" />
        <ProjectBox margin="mr-20" />
        <ProjectBox margin="mr-20" />
        <ProjectBox margin="mr-20" />
        <button type="button" className="btn btn-primary" onClick={goToProjects}>Ver más</button>
      </PopularProjects>
      {children}
    </section>
  );
};

export default FeedLayout;
