import BookCard from "./common/BookCard";

export default function BookCollection({ data, title }) {
  return (
    <div className=" ">
      <div className=" lg:px-[164px] px-6 custom-grid lg:gap-[60px] gap-6  justify-center lg:justify-between">
        {data?.map((item) => (
          <BookCard key={item.id} book={item} />
        ))}
      </div>
    </div>
  );
}
