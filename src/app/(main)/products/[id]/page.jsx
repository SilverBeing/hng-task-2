import BookDetail from "@/components/common/BookDetail";
import Modal from "@/components/common/Modal";
import { fetchProductById } from "@/lib";

export default async function page({ params }) {
  const product = await fetchProductById(params.id);

  return (
    <Modal isShowing={true}>
      <BookDetail product={product} />
    </Modal>
  );
}
