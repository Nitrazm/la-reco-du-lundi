export default function Tag({ text, color = "primary" }) {
  return (
    <span
      className={`inline-block bg-${color}/20 text-${color} text-xs font-semibold px-3 py-1 rounded-full mr-2 mb-2`}
    >
      {text}
    </span>
  );
}