import React from 'react';

import PageActions from '../../widgets/components/PageActions';

const ProjectContentPage = (props) => {
  const { children } = props;

  return (
    <div className="page__content">
      <PageActions />
      {children}
    </div>
  );
};

export default ProjectContentPage;
