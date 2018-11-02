import Link from 'next/link'

const Index = () => (
  <div>
    <Link href="/friends">
      <button>Friends</button>
    </Link>
    <p>Hello Next.js</p>
  </div>
)

export default Index

// use Link for client-side navigation
// action takes place in the browser without making a request to the server
// next/link does all the `location.history` handling for you

// The only requirement for components placed inside a Link is they should accept an onClick prop
