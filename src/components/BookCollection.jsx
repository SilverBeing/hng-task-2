import BookCard from "./common/BookCard";
import CollectionTitle from "./common/CollectionTitle";

export default function BookCollection({ data, title }) {
  return (
    <div className="lg:mt-0 mt-[90px]">
      <div className="lg:hidden block">
        <CollectionTitle>All Products</CollectionTitle>
      </div>
      <div className=" lg:px-[164px] min-[1200px]:gap-[60px] justify-center px-6 custom-grid  gap-3 sm:gap-6  lg:justify-between">
        {data?.map((item) => (
          <BookCard key={item.id} book={item} />
        ))}
      </div>
    </div>
  );
}
