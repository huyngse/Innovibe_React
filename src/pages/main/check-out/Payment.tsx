import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { RotatingTriangles } from "react-loader-spinner";
import { payOrder } from "@/lib/api/order-api";
import useOrderStore from "@/stores/use-order-store";
import paymentSuccess from "@/assets/imgs/payment_success.gif";
const PaymentPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isPaid, setIsPaid] = useState(false);
  const orderStore = useOrderStore();
  const [error, setError] = useState("");
  const { orderId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    fetchOrder();
  }, []);

  const fetchPaymentUrl = async () => {
    if (orderId) {
      setError("");
      setIsLoading(true);
      const result = await payOrder(parseInt(orderId));
      if (result.error) {
        setError("Thanh toán thất bại. Vui lòng thử lại");
      } else {
        window.location.href = result.data.vnPayUrl;
      }
      setIsLoading(false);
    } else {
      navigate("/");
    }
  };
  const fetchOrder = async () => {
    if (orderId) {
      await orderStore.fetchOrder(parseInt(orderId));
      if (!orderStore.order) {
        navigate("/");
      } else {
        if (orderStore.order.orderStatus == "Pending") {
          fetchPaymentUrl();
        } else {
          setIsPaid(true);
          setTimeout(() => {
            navigate(`/profile/order/${orderId}`);
          }, 3000);
        }
      }
    }
  };

  return (
    <div className="min-h-[80vh] flex justify-center flex-col items-center">
      {error && <p className="text-lg text-red-500">{error}</p>}
      {!isLoading && isPaid && (
        <>
          <img src={paymentSuccess} alt="" />
          <p className="text-xl font-semibold text-center text-green-500">
            Thanh toán thành công
          </p>
        </>
      )}
      {isLoading && (
        <>
          <RotatingTriangles
            visible={true}
            height="80"
            width="80"
            ariaLabel="rotating-triangles-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
          <p className="font-semibold text-center">
            Đang chuyển hướng đến đường dẫn
            <br />
            thanh toán..
          </p>
        </>
      )}
    </div>
  );
};

export default PaymentPage;
