

function CoreConcept(props){
  return (
    <li>
      <img src={props.img} alt = {props.alt} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

//Method-2

// function CoreConcept({image, description, title}){
//   return (
//     <li>
//       <img src={image} alt = {title} />
//       <h3>{title}</h3>
//       <p>{description}</p>
//     </li>
//   );
// }