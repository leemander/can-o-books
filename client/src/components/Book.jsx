export default function Book({ title, description, status }) {
  return (
    <article>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Status: {status}</p>
    </article>
  );
}
