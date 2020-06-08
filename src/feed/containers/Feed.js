import React from 'react';

import FeedLayout from '../components/FeedLayout';
import EventBox from '../../events/components/EventBox';
import ProjectBox from '../../projects/components/ProjectBox';
import PostBox from '../components/PostBox';

const Feed = (props) => {
  return (
    <FeedLayout history={props.history}>
      <PostBox>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, ut voluptate! Excepturi blanditiis esse ut consectetur, laboriosam commodi nulla provident sunt tempora sequi, accusamus odit iste rem eius aliquid voluptates?
        Temporibus similique doloribus placeat iste unde fuga, eum consequuntur cupiditate, voluptatibus in provident illum fugit sed vel dolor! Tenetur nobis natus amet deleniti, eum ex veniam sapiente exercitationem ea quo?
        Nobis, inventore sequi laboriosam perspiciatis ut error porro voluptatibus harum illo fugit perferendis praesentium unde officia earum consequuntur ad tenetur vitae quaerat exercitationem, modi, repellat at asperiores! Illo, eos non!
        Iure corrupti quibusdam minima, non distinctio blanditiis atque culpa, sint debitis doloribus sequi expedita fugiat, ea fugit commodi aliquid numquam officia dolorum beatae tempore. Mollitia reiciendis aperiam saepe dignissimos esse.
        Ipsam dolor voluptate enim molestias sequi at quibusdam, temporibus sed eius ratione ducimus doloribus mollitia accusamus odit blanditiis possimus similique asperiores sunt error et earum voluptatem consectetur. Saepe, cum sed.
        Aliquam accusantium, veritatis reprehenderit architecto animi molestiae nemo possimus voluptatibus minima quaerat nesciunt quam dolores quia fugiat vel? Doloribus animi aperiam nihil sit debitis numquam temporibus deserunt. Omnis, vitae earum.
      </PostBox>
      <ProjectBox typeStyle="-large" />
      <PostBox>
        <p>Ven a este evento conmigo</p>
        <EventBox typeStyle="-shared" />
      </PostBox>
      <PostBox>
        <p>Has este proyecto conmigo</p>
        <ProjectBox typeStyle="-shared" />
      </PostBox>
      <PostBox>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus natus atque sint obcaecati? Error voluptatum reprehenderit doloribus? Mollitia ullam deserunt ab? Numquam, facere itaque illum eum voluptatum magnam sit eveniet?
        Architecto explicabo sint nesciunt necessitatibus odit assumenda ipsum aut porro iste, neque nam excepturi modi asperiores quibusdam aspernatur maiores deleniti mollitia commodi minus non dignissimos doloribus qui exercitationem ipsa! Labore.
        Non provident at tenetur, mollitia temporibus similique nobis porro exercitationem saepe iusto veritatis, repudiandae soluta repellendus omnis voluptates enim veniam dolore cupiditate cum magnam reprehenderit natus laborum perspiciatis. Minima, libero?
        Deserunt quam hic neque rem provident? Consequatur nulla, veniam aperiam nesciunt amet iure nisi animi et, totam excepturi modi explicabo quam at iusto tempora voluptate ipsam facere accusantium. Odit, mollitia.
        Doloribus, cumque itaque eum exercitationem dolorem reiciendis quas et debitis quasi accusamus eius obcaecati iusto sed facere nam fugit voluptate provident hic saepe nobis animi! Non molestias deserunt fuga earum?
        Quibusdam expedita esse aliquam, repudiandae eius adipisci saepe nisi dolorum, quaerat soluta eum velit amet animi nulla id? Nihil vitae eum quam unde provident eligendi iste, non molestias ipsam veritatis!
      </PostBox>
      <ProjectBox typeStyle="-large" />
    </FeedLayout>
  );
};

export default Feed;
