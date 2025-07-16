// const Card = () => <article>My profile card component</article>

// const Card = () => (
//   <article>
//     <h2>My profile card</h2>
//   </article>
// )

// const Card = () => {
//   return (
//     <article>
//       <h2>My profile card</h2>
//     </article>
//   )
// }

// const Card = () => {
//   return (
//     <article>
//       <h2>Johan Skarpsvärd</h2>
//     </article>
//   )
// }

// const Card = (props) => {
//   return (
//     <article>
//       <h2>{props.title}</h2>
//     </article>
//   )
// }

const Card = ({ title, text }) => {
    return (
      <article>
        <h2>{title}</h2>
        <p>{text}</p>
      </article>
    )
  }
  
  export default Card