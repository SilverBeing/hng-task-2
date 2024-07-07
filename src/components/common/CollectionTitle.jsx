export default function CollectionTitle({ children }) {
  return (
    <div className=" mb-10 flex gap-[48px] items-center">
      <div className=" flex-1 h-[1px] bg-darkBlue "></div>
      <h2 className=" text-darkBlue font-medium text-[24px]">{children}</h2>
      <div className=" flex-1 h-[1px] bg-darkBlue "></div>
    </div>
  );
}
