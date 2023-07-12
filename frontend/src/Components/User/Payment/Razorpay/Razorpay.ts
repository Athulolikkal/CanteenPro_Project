import axios from "../../../../Axios/axios";
// import { useNavigate } from 'react-router-dom';
const razorpay_key_id = import.meta.env.VITE_RAZORPAY_KEY_ID;

export const razorpayPaymentIntegration = async (
  newEndDate: string,
  active: boolean,
  actualEndDate: string,
  bookingId: string,
  source: string,
  count: number,
  renewBookingAmount: number,
  newStartDate: string,
  url: string,
  phone: string,
  navigate: any
) => {
  try {
    const isPayment = await axios.post("/wish/payment", { renewBookingAmount });
    const orderId = isPayment?.data?.order?.id;

    const options = {
      key: razorpay_key_id,
      amount: renewBookingAmount * 100,
      currency: "INR",
      name: "CanteenPro",
      description: "Complete canteen for all of them",
      order_id: orderId,
      handler: async (response: any) => {
        if (response.razorpay_payment_id) {
          console.log("call comes to paymentid");
          const response = await axios.post(url, {
            newEndDate,
            active,
            actualEndDate,
            bookingId,
            source,
            count,
            renewBookingAmount,
            newStartDate,
          });
          // console.log('after the response');
          navigate("/user/paymentsuccess");
         
        } else {
            navigate("/user/userhome");
        }
      },
      prefill: {
        contact: phone,
      },
      theme: {
        color: "#3399cc",
      },
    };

    return new Promise((resolve, reject) => {
      const rzp = new window.Razorpay(options);
      rzp.on("payment.failed", () => {
        resolve({ paymentstatus: false });
      });
      rzp.on("payment.success", () => {
        resolve({ paymentstatus: true });
      });
      rzp.open();
    });
  } catch (err) {
    console.log(err);
    return { networkerror: true };
  }
};
