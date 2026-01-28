import Logo from "./Logo"
import TransitionLink from "./TransitionLink"

const Header = () => {
  return (
 <header className="fixed top-0 left-0 right-0 z-50 flex px-10 py-8">
   <Logo />
     <nav className="ml-auto">
     
      <ul className="flex gap-5">
        <li>
          <TransitionLink href="/" label="Home" />
        </li>
        <li>
          <TransitionLink href="/work" label="Work" />
        </li>
        <li>
          <TransitionLink href="/about" label="About" />
        </li>
        <li>
          <TransitionLink href="/contact" label="Contact" />
        </li>
      </ul>
    </nav>
 </header>
  )
}

export default Header
