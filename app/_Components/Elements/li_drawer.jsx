export default function Li_drawer({ children }) {
  return (
    <li className="flex gap-x-3 items-center cursor-pointer hover:text-blue-700 font-semibold transition">
      {children}
    </li>
  );
}
