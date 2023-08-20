import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Provider from "@/components/Provider";
export default function Home() {
  return (
    <Provider>
    <div className='bg-gray-500 text-white w-full h-screen'>
    <Header/>
    <Footer/>
    </div>
    </Provider>
  )
}