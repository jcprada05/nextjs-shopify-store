import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <nav>
        <Link href="/store/tecnologia">Tecnología</Link> |{' '}
        <Link href="/store/ropa">Ropa</Link> |{' '}
        <Link href="/store/hogar">Hogar</Link> |{' '}
        <Link href="/store/oficina">Oficina</Link>
        {children}
      </nav>
    </main>
  );
}
