import Link from 'next/link'

const Header: React.FunctionComponent = () => (
  <div className="navigation">
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/about">
      <a>About</a>
    </Link>
  </div>
)

export default Header