import CarouselContent from '../components/Carousel';
import ProductView from '@/views/products';


export default function Home() {
  return (
    <>
      <CarouselContent/>
      <div className='flex justify-center py-16'>
        <h1>SẢN PHẨM NỔI BẬT CỦA MEEYANA</h1>
      </div>
      <ProductView />

    </>
  )
}
