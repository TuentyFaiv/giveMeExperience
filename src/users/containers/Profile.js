import React from 'react';

import ProfileLayout from '../components/ProfileLayout';
import ProfilePosts from '../components/ProfilePosts';
import ProfileExperience from '../components/ProfileExperience';
import ProfileProjects from '../components/ProfileProjects';
import PostBox from '../../feed/components/PostBox';
import ProjectBox from '../../projects/components/ProjectBox';
import EventBox from '../../events/components/EventBox';

const Profile = (props) => {
  const handleConnectProfile = () => {
    console.log('Conectado desde Profile');
  };

  return (
    <ProfileLayout
      history={props.history}
      match={props.match}
      handleConnectProfile={handleConnectProfile}
      typeStyle="profile"
    >
      <ProfilePosts>
        <PostBox typeStyle="-small">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate sint harum sapiente minus nisi eum est ex quasi, modi in non eligendi tempore. Veniam ratione aliquam atque iste vel fuga.Labore temporibus vel maiores, excepturi sint corporis explicabo ratione asperiores quia quasi id cupiditate harum qui voluptas! Porro eos officiis ratione, numquam ea magnam sapiente quod consectetur nobis iusto sunt.
        </PostBox>
        <PostBox typeStyle="-small">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate sint harum sapiente minus nisi eum est ex quasi, modi in non eligendi tempore. Veniam ratione aliquam atque iste vel fuga.Labore temporibus vel maiores, excepturi sint corporis explicabo ratione asperiores quia quasi id cupiditate harum qui voluptas! Porro eos officiis ratione, numquam ea magnam sapiente quod consectetur nobis iusto sunt.
        </PostBox>
        <PostBox typeStyle="-small">
          <p>Has este proyecto conmigo</p>
          <ProjectBox typeStyle="-shared" />
        </PostBox>
        <PostBox typeStyle="-small">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate sint harum sapiente minus nisi eum est ex quasi, modi in non eligendi tempore. Veniam ratione aliquam atque iste vel fuga.Labore temporibus vel maiores, excepturi sint corporis explicabo ratione asperiores quia quasi id cupiditate harum qui voluptas! Porro eos officiis ratione, numquam ea magnam sapiente quod consectetur nobis iusto sunt.
        </PostBox>
        <PostBox typeStyle="-small">
          <p>Ven a este evento conmigo</p>
          <EventBox typeStyle="-shared" />
        </PostBox>
      </ProfilePosts>
      <ProfileExperience />
      <ProfileProjects>
        <ProjectBox typeStyle="-small" />
        <ProjectBox typeStyle="-small" />
        <ProjectBox typeStyle="-small" />
        <ProjectBox typeStyle="-small" />
        <ProjectBox typeStyle="-small" />
      </ProfileProjects>
    </ProfileLayout>
  );
};

export default Profile;
