import React from 'react';

import Header from './ProfileHeader';

const ProfileLayout = (props) => {
  const {
    children,
    typeStyle = '',
    handleConnectProfile = () => { },
    handleEditBanner = () => { },
    handleEditPhoto = () => { },
    edit = false,
    history,
    match,
  } = props;

  return (
    <section className={typeStyle}>
      <Header
        history={history}
        match={match}
        editBanner={handleEditBanner}
        editPhoto={handleEditPhoto}
        connectProfile={handleConnectProfile}
        edit={edit}
      />
      {
        !edit ? (
          <div className="profile__content">
            {children}
          </div>
        ) :
          <>{children}</>
      }
    </section>
  );
};

export default ProfileLayout;
