import BookCard from "./common/BookCard";
import CollectionTitle from "./common/CollectionTitle";

export default function MostSearch({ data }) {
  return (
    <div className=" mb-[50px] lg:mb-[129px]">
      <div className="lg:px-[107px]">
        <CollectionTitle>Most Search</CollectionTitle>
      </div>
      <div className="flex max-w-full remove-scrollbar gap-[38px] lg:gap-[60px] overflow-auto py-1">
        {data?.map((item) => (
          <BookCard key={item.id} book={item} />
        ))}
      </div>
    </div>
  );
}
