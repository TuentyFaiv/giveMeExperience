import React from 'react';

import ProfileLayout from '../components/ProfileLayout';
import ProfileEditForm from '../components/ProfileEditForm';

const ProfileEdit = (props) => {

  const handleCancelEdit = (event) => {
    event.preventDefault();
    console.log('Edit cancelado');
    props.history.goBack();
  };

  const handleSubmitEdit = (event) => {
    event.preventDefault();
    console.log('Edit completado');
    props.history.goBack();
  };

  const handleEditBanner = () => {
    console.log('Banner editado desde ProdileEdit');
  };

  const handleEditPhoto = () => {
    console.log('Photo editado desde ProdileEdit');
  };

  return (
    <ProfileLayout
      handleEditBanner={handleEditBanner}
      handleEditPhoto={handleEditPhoto}
      typeStyle="profileEdit"
      edit={true}
    >
      <ProfileEditForm
        submitEdit={handleSubmitEdit}
        cancelEdit={handleCancelEdit}
      />
    </ProfileLayout>
  );
};

export default ProfileEdit;
