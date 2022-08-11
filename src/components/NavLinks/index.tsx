import Link from 'next/link';

export default function NavLinks() {
  return (
    <ul>
      <li>
        <Link href="/">
          <a>Inicio</a>
        </Link>
      </li>
      <li>
        <Link href="/restaurantes">
          <a>Restaurantes</a>
        </Link>
      </li>
    </ul>
  );
}
