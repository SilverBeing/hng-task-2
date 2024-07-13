import BookCard from "./common/BookCard";

export default function BookCollection({ data, title }) {
  return (
    <div className=" ">
      <div className=" lg:px-[164px] min-[1200px]:gap-[60px] justify-center px-6 custom-grid  gap-3 sm:gap-6  lg:justify-between">
        {data?.map((item) => (
          <BookCard key={item.id} book={item} />
        ))}
      </div>
    </div>
  );
}
