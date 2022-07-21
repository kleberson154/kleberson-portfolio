import { About } from './components/About'
import { Experience } from './components/Experience'
import { Header } from './components/Header'
import { Nav } from './components/Nav'
import { Portfolio } from './components/Portfolio'
import { ContactUs } from './components/Contact'
import { Footer } from './components/Footer'
import { Certif } from './components/Certif'
import { Blur } from './components/Blur'

export function App() {
  return (
    <div>
      <Blur />
      <Nav />
      <Header />
      <About />
      <Experience />
      <Portfolio />
      <Certif />
      <ContactUs />
      <Footer />
    </div>
  )
}
