import React from 'react';

import imageHeader from '../assets/images/header1.png';
import imageContent from '../assets/images/header4.png';
import alumnoIcon from '../assets/icons/alumno.png';
import alumnaIcon from '../assets/icons/alumna.png';
import arrowIcon from '../assets/icons/arrow.png';
import likeIcon from '../assets/icons/likePost.png';
import commentIcon from '../assets/icons/commentPost.png';
import shareIcon from '../assets/icons/sharePost.svg';

const Project = (props) => {
  const handleBack = () => {
    props.history.goBack();
  };

  return (
    <section className="page">
      <div className="page__header">
        <div className="page__header-back">
          <img src={arrowIcon} alt="Back" onClick={handleBack} />
        </div>
        <img src={imageHeader} alt="header" className="page__header-banner" />
        <div className="page__header-title">
          <div>
            <h1>Titulo</h1>
            <button>Unirme al proyecto</button>
          </div>
          <div>
            <h3>Participantes</h3>
            <img src={alumnoIcon} alt="participants" />
            <img src={alumnaIcon} alt="participants" />
            <img src={alumnoIcon} alt="participants" />
            <img src={alumnaIcon} alt="participants" />
          </div>
        </div>
      </div>
      <div className="page__content">
        <div className="page__content-actions">
          <img src={likeIcon} alt="Like" />
          <img src={commentIcon} alt="Comment" />
          <img src={shareIcon} alt="Share" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti nobis reprehenderit quia ipsam alias consequatur asperiores sed eos, dicta laudantium veniam quis vel adipisci vitae voluptatem quasi laboriosam ad repellendus.
          Ad asperiores quisquam eveniet veritatis odit eum, similique porro deserunt vel impedit laborum modi minima dicta! Totam assumenda eligendi illo laboriosam aperiam, quae laborum quaerat velit labore quibusdam consequatur perferendis!
          Doloribus repellat consequatur similique, distinctio tempora, rerum sit illo sapiente ea molestias aut laboriosam veniam eius dolores nihil in autem eaque molestiae dolorum ex dicta. Saepe cupiditate sunt esse distinctio?
          Dicta eum sunt dolorem ea voluptates rerum quisquam, placeat voluptate alias quod quia excepturi sed eveniet aperiam inventore, iste debitis adipisci quam, accusantium eos. Eius harum dolore repellendus id at.
          Quam eos aut, non quia hic assumenda dolore deleniti asperiores ipsa maiores facilis similique eum vel aperiam saepe eligendi repellat officia repellendus maxime aspernatur voluptas ipsam. Natus nihil aut magni!
          Fuga culpa provident perspiciatis? Enim omnis ducimus sapiente ad sint inventore rem nostrum! Maxime, ex praesentium, eos quis tempore ipsa temporibus fuga necessitatibus harum nobis saepe facere quaerat illo itaque.
          Sequi harum quam voluptate ipsam doloremque nemo quos, quae sit ratione quisquam assumenda delectus totam odit pariatur, officiis dolores placeat blanditiis iure aspernatur, rerum expedita ab. Ex tempora odit optio.
          Ab beatae qui facilis. Voluptatem sint facilis molestiae excepturi illo quidem recusandae id, labore sunt iste corrupti dolorum quisquam exercitationem explicabo dolores aut odio, laudantium ad consequatur obcaecati. Quas, nobis.
          Iste quod a tempora illum vitae labore aperiam. Cum, itaque saepe porro impedit nesciunt ex, sint totam vitae iste, quo repellat? Cum quod labore, quas mollitia consequatur error molestiae tempore!
          Officiis repudiandae, cum magni, veritatis ipsa eligendi eveniet maiores iusto cumque, ab voluptas dolorem? Non, vel. Perspiciatis, ipsa repellendus exercitationem eligendi odio molestias earum aut nobis, necessitatibus, rerum porro hic?
          Nulla reiciendis, dolorem fugit fuga impedit neque magni, voluptatem sequi modi, asperiores rerum. Incidunt dignissimos neque ut sit doloremque, eos accusantium voluptatum perspiciatis vero! Iure velit voluptas eveniet maiores nulla!
          Nulla porro earum id officia! Eius sapiente, eligendi ducimus corporis deserunt voluptate repudiandae, ad laboriosam iure ipsa maiores minus perspiciatis id eum ipsum, facere sed aspernatur. Nam perferendis repudiandae natus.
          Magnam, dolorum est tenetur nobis quaerat quis quae voluptas dolorem odio rem praesentium, corrupti dicta itaque ullam quia, nam architecto impedit recusandae nisi iusto culpa harum autem. Esse, aliquid dicta.
          Quaerat reprehenderit a animi enim sint architecto iure, rerum sunt in perspiciatis dolore tenetur praesentium atque temporibus suscipit, nihil delectus laudantium ipsam quos odit. Fugit ea ullam provident ipsam veritatis?
          Similique illo, fuga reprehenderit saepe laudantium facilis error quae accusamus excepturi ex explicabo voluptatem labore accusantium, quo, non quibusdam facere quod amet. Asperiores facere laboriosam sapiente assumenda et aut aspernatur?
          Aspernatur laudantium quaerat explicabo exercitationem, sequi culpa ab totam aliquid suscipit beatae fugit obcaecati. Repellendus optio nostrum aspernatur iure veritatis, quibusdam commodi aliquid sapiente necessitatibus officia, in quis omnis maiores!
          Rerum cumque eveniet quaerat nostrum quis tenetur fuga qui totam quasi doloribus. Eveniet, cumque sint, quasi, deserunt voluptate laboriosam beatae magni sunt cum eaque laborum iure praesentium voluptatem neque tempora?
          Explicabo sit sapiente illum nostrum facilis ipsa, repellendus culpa sed necessitatibus labore minus quod, praesentium nemo suscipit quasi cumque ad maxime placeat quo eius, architecto delectus veniam! Ratione, ipsa fuga?
          Culpa, provident quaerat quis eligendi aliquam repellat nemo suscipit nam magnam totam, voluptatem illum, quo adipisci ad numquam fuga ab accusamus nihil magni incidunt tempore quasi eum. Saepe, voluptas. Quod.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti nobis reprehenderit quia ipsam alias consequatur asperiores sed eos, dicta laudantium veniam quis vel adipisci vitae voluptatem quasi laboriosam ad repellendus.
          Ad asperiores quisquam eveniet veritatis odit eum, similique porro deserunt vel impedit laborum modi minima dicta! Totam assumenda eligendi illo laboriosam aperiam, quae laborum quaerat velit labore quibusdam consequatur perferendis!
          Doloribus repellat consequatur similique, distinctio tempora, rerum sit illo sapiente ea molestias aut laboriosam veniam eius dolores nihil in autem eaque molestiae dolorum ex dicta. Saepe cupiditate sunt esse distinctio?
          Dicta eum sunt dolorem ea voluptates rerum quisquam, placeat voluptate alias quod quia excepturi sed eveniet aperiam inventore, iste debitis adipisci quam, accusantium eos. Eius harum dolore repellendus id at.
          Quam eos aut, non quia hic assumenda dolore deleniti asperiores ipsa maiores facilis similique eum vel aperiam saepe eligendi repellat officia repellendus maxime aspernatur voluptas ipsam. Natus nihil aut magni!
          Fuga culpa provident perspiciatis? Enim omnis ducimus sapiente ad sint inventore rem nostrum! Maxime, ex praesentium, eos quis tempore ipsa temporibus fuga necessitatibus harum nobis saepe facere quaerat illo itaque.
          Sequi harum quam voluptate ipsam doloremque nemo quos, quae sit ratione quisquam assumenda delectus totam odit pariatur, officiis dolores placeat blanditiis iure aspernatur, rerum expedita ab. Ex tempora odit optio.
          Ab beatae qui facilis. Voluptatem sint facilis molestiae excepturi illo quidem recusandae id, labore sunt iste corrupti dolorum quisquam exercitationem explicabo dolores aut odio, laudantium ad consequatur obcaecati. Quas, nobis.
          Iste quod a tempora illum vitae labore aperiam. Cum, itaque saepe porro impedit nesciunt ex, sint totam vitae iste, quo repellat? Cum quod labore, quas mollitia consequatur error molestiae tempore!
          Officiis repudiandae, cum magni, veritatis ipsa eligendi eveniet maiores iusto cumque, ab voluptas dolorem? Non, vel. Perspiciatis, ipsa repellendus exercitationem eligendi odio molestias earum aut nobis, necessitatibus, rerum porro hic?
          Nulla reiciendis, dolorem fugit fuga impedit neque magni, voluptatem sequi modi, asperiores rerum. Incidunt dignissimos neque ut sit doloremque, eos accusantium voluptatum perspiciatis vero! Iure velit voluptas eveniet maiores nulla!
          Nulla porro earum id officia! Eius sapiente, eligendi ducimus corporis deserunt voluptate repudiandae, ad laboriosam iure ipsa maiores minus perspiciatis id eum ipsum, facere sed aspernatur. Nam perferendis repudiandae natus.
          Magnam, dolorum est tenetur nobis quaerat quis quae voluptas dolorem odio rem praesentium, corrupti dicta itaque ullam quia, nam architecto impedit recusandae nisi iusto culpa harum autem. Esse, aliquid dicta.
          Quaerat reprehenderit a animi enim sint architecto iure, rerum sunt in perspiciatis dolore tenetur praesentium atque temporibus suscipit, nihil delectus laudantium ipsam quos odit. Fugit ea ullam provident ipsam veritatis?
          Similique illo, fuga reprehenderit saepe laudantium facilis error quae accusamus excepturi ex explicabo voluptatem labore accusantium, quo, non quibusdam facere quod amet. Asperiores facere laboriosam sapiente assumenda et aut aspernatur?
          Aspernatur laudantium quaerat explicabo exercitationem, sequi culpa ab totam aliquid suscipit beatae fugit obcaecati. Repellendus optio nostrum aspernatur iure veritatis, quibusdam commodi aliquid sapiente necessitatibus officia, in quis omnis maiores!
          Rerum cumque eveniet quaerat nostrum quis tenetur fuga qui totam quasi doloribus. Eveniet, cumque sint, quasi, deserunt voluptate laboriosam beatae magni sunt cum eaque laborum iure praesentium voluptatem neque tempora?
          Explicabo sit sapiente illum nostrum facilis ipsa, repellendus culpa sed necessitatibus labore minus quod, praesentium nemo suscipit quasi cumque ad maxime placeat quo eius, architecto delectus veniam! Ratione, ipsa fuga?
          Culpa, provident quaerat quis eligendi aliquam repellat nemo suscipit nam magnam totam, voluptatem illum, quo adipisci ad numquam fuga ab accusamus nihil magni incidunt tempore quasi eum. Saepe, voluptas. Quod.
        </p>
        <img src={imageContent} alt="" />
      </div>
    </section>
  );
}

export default Project;