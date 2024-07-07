import BookCard from "./common/BookCard";
import CollectionTitle from "./common/CollectionTitle";

export default function BookCollection({ data, title }) {
  return (
    <div className=" mb-[60px]">
      <div className="lg:px-[107px]">
        <CollectionTitle>{title}</CollectionTitle>
      </div>
      <div className=" lg:px-[164px] px-6 custom-grid lg:gap-[60px] gap-6  justify-center lg:justify-between">
        {data.map((item) => (
          <BookCard key={item.id} book={item} />
        ))}
      </div>
    </div>
  );
}
