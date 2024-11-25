import Link from 'next/link';

export default function NotFound() {
  return (
    <div>
      <h2>Coming soon</h2>
      <Link href="/dashboard" style={{color: "blue"}}>Return to Dashboard</Link>
    </div>
  );
}
