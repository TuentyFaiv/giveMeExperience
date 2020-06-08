import React from 'react';

import Header from './ProjectHeaderPage';

const ProjectLayout = (props) => {
  const { children, typeStyle = '', page, history } = props;

  const handleBack = () => {
    history.goBack();
  };

  return (
    <section className={typeStyle}>
      {
        page && <Header handleBack={handleBack} />
      }
      {children}
    </section>
  );
};

export default ProjectLayout;
