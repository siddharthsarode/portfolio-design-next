import Footer from '@/_pages/Footer';
import Home from '@/_pages/Home';
import Projects from '@/_pages/Projects';
import Services from '@/_pages/Services';

const page = () => {
  return (
    <main className=" w-full h-full">
      <Home/>
      <Services/>
      <Projects/>
      <Footer/>
    </main>
  )
}

export default page;
