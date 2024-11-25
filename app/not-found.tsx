import Link from 'next/link'

export default function NotFound() {
    return (
        <div>
            <h2>Not Found 404</h2>
            <h3>This is mocked page</h3>
            <Link href="/dashboard">Return to Dashboard</Link>
        </div>
    )
}