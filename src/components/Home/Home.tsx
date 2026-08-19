import BooksData from "./BooksData"
import Banner from "./Banner"
import MarqueeSection from "./MarqueeSection"
import Categories from "./Categories"

const Home = () => {
  return (
    <div className="">
      <Banner />
      <MarqueeSection />
      <Categories />
      <BooksData />
    </div>
  )
}

export default Home
