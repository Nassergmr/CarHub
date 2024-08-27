export default function Li_navebar({ children }) {
  return (
    <li className="cursor-pointer hover:text-blue-700 font-semibold transition">
      {children}
    </li>
  );
}
