export default function TabButton(props){

  return(
    <li>
      <button onClick={props.onSelect}>{props.children}</button>
      <button>{props.label}</button> ///Method-2
    </li>
  );

}