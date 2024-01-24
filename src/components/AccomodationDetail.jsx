// import React from 'react';
// import { useParams } from 'react-router-dom';
// import accomodationData from '../data/accomodationData';
// import "../styles/AccomodationDetail.scss"

// function AccomodationDetail() {
//   const { id } = useParams();
//   const accommodation = accomodationData.find(item => item.id.toString() === id);

//   if (!accommodation) {
//     return <div>Hébergement non trouvé</div>;
//   }

//   const {cover, title, pictures, description, host, rating, location, equipments, tags } = accommodation;

  
//   const hostName = host && host.name ? host.name : 'Nom de l\'hôte non disponible';
//   const hostPicture = host && host.picture ? host.picture : 'Image de l\'hôte non disponible';

//   return (
//     <div className="detail">
//       <div className="detail__photo">
//         {cover && <img src={cover} alt={title} />}
//       </div>
//       <div className="detail__content">
//         <div>
//           <h2 className="detail__title">{title}</h2>
//           <p className="detail__location">{location}</p>
//         </div>
//         <div className="detail__host">
//                 <div className="host-info">
//                     <p className="detail__host--name">{hostName}</p>
//                 </div>
//                 <img className="host-picture" src={hostPicture} alt="Photo de l'hôte" />
//         </div>
//       </div>
//           <div className="detail__rating">{rating}</div>
//       <div className="detail__tags">
//         {tags.map((tag, index) => (
//           <span key={index} className="tag">
//             {tag}
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default AccomodationDetail;


import React from 'react';
import { useParams } from 'react-router-dom';
import accomodationData from '../data/accomodationData';
import "../styles/AccomodationDetail.scss"

function AccomodationDetail() {
  const { id } = useParams();
  const accommodation = accomodationData.find(item => item.id.toString() === id);

  if (!accommodation) {
    return <div>Hébergement non trouvé</div>;
  }

  const { cover, title, pictures, description, host, rating, location, equipments, tags } = accommodation;
  console.log('Host structure:', host);

const hostFullName = host && host.name ? host.name : 'Nom de l\'hôte non disponible';
const [hostFirstName, hostLastName] = hostFullName.split(' ');
const hostPicture = host && host.picture ? host.picture : 'Image de l\'hôte non disponible';

  return (
    <div className="detail">
      <div className="detail__photo">
        {cover && <img src={cover} alt={title} />}
      </div>
      <div className="detail__content">
        <div>
          <h2 className="detail__title">{title}</h2>
          <p className="detail__location">{location}</p>
        </div>
        <div className="detail__host">
          <div className="host-info">
            <p className="detail__host--name">{hostFirstName}</p>
            <p className="detail__host--name">{hostLastName}</p>
          </div>
          <img className="host-picture" src={hostPicture} alt="Photo de l'hôte" />
        </div>
      </div>
      <div className="detail__rating">{rating}</div>
      <div className="detail__tags">
        {tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default AccomodationDetail;
