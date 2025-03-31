import { useParams } from "react-router-dom";

const ProductDetails = () => {
    const { productId } = useParams();
    return <div> Now showing the product with it - { productId}</div>
}