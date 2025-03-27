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
    if (orderId) {
      orderStore.fetchOrder(parseInt(orderId));
    }
  }, []);
  useEffect(() => {
    if (!orderStore.loading) {
      if (orderStore.error) {
        navigate("/");
      } else {
        if (orderStore.order) {
          if (orderStore.order.orderStatus == "Pending") {
            fetchPaymentUrl();
          } else {
            setIsPaid(true);
          }
        }
      }
    }
  }, [orderStore]);

  const fetchPaymentUrl = async () => {
    if (orderId) {
      setError("");
      setIsLoading(true);
      const result = await payOrder(parseInt(orderId));
      if (result.error) {
        setError("Thanh toán thất bại. Vui lòng thử lại");
      } else if (result.data?.status == "EXPIRED") {
        setError("Thanh toán hết hạn. Vui lòng tạo hóa đơn mới");
      } else {
        if (result.data) {
          window.location.href = result.data.checkoutUrl;
        }
      }
      setIsLoading(false);
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
