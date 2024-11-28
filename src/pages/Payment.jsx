import { useState } from "react";
import { toast } from "react-toastify"; // Import toast
import { jsPDF } from "jspdf";
import styles from "../styles/Payment.module.css";

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [fareEstimate] = useState(18); // Simulated fare estimate in INR (₹)
  const [isPaid, setIsPaid] = useState(false);
  const [isReceiptDownloaded, setIsReceiptDownloaded] = useState(false);

  const handlePayment = () => {
    if (!paymentMethod) {
      toast.error("Please select a payment method!");
      return;
    }

    // Simulate a successful payment process
    setIsPaid(true);
    toast.success(`Payment successful via ${paymentMethod}!`);
  };

  const generateReceipt = () => {
    const doc = new jsPDF();
    doc.text("Receipt", 20, 20);
    
    // Improved formatting for the fare with clear rupee symbol
    doc.text(`Fare Estimate: $${fareEstimate.toFixed(2)}`, 20, 30);
    doc.text(`Payment Method: ${paymentMethod}`, 20, 40);
    doc.text(`Status: Paid`, 20, 50);
    doc.save("receipt.pdf"); // Save the PDF
  
    // Disable the payment method selection after the receipt is downloaded
    setIsReceiptDownloaded(true);
  };
  

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Payment</h1>

      <div
        className={`${styles.paymentDetails} ${
          isPaid ? styles.paymentConfirmed : ""
        }`}
      >
        <h2>Fare Estimate</h2>
        <p>
          Your total fare estimate is:{" "}
          <strong>${fareEstimate.toFixed(2)}</strong>
        </p>

        <h3>Select Payment Method</h3>
        <div className={styles.paymentOptions}>
          <div
            className={`${styles.paymentOption} ${
              paymentMethod === "Credit Card" ? styles.selected : ""
            }`}
            onClick={() => !isReceiptDownloaded && setPaymentMethod("Credit Card")}
          >
            <p>Credit Card</p>
          </div>
          <div
            className={`${styles.paymentOption} ${
              paymentMethod === "Debit Card" ? styles.selected : ""
            }`}
            onClick={() => !isReceiptDownloaded && setPaymentMethod("Debit Card")}
          >
            <p>Debit Card</p>
          </div>
          <div
            className={`${styles.paymentOption} ${
              paymentMethod === "PayPal" ? styles.selected : ""
            }`}
            onClick={() => !isReceiptDownloaded && setPaymentMethod("PayPal")}
          >
            <p>PayPal</p>
          </div>
          <div
            className={`${styles.paymentOption} ${
              paymentMethod === "Cash" ? styles.selected : ""
            }`}
            onClick={() => !isReceiptDownloaded && setPaymentMethod("Cash")}
          >
            <p>Cash</p>
          </div>
        </div>

        {isPaid && !isReceiptDownloaded && (
          <div className={`${styles.receiptDetails} ${styles.fadeIn}`}>
            <h2>Receipt</h2>
            <p>
              <strong>Fare:</strong> ${fareEstimate.toFixed(2)}
            </p>
            <p>
              <strong>Payment Method:</strong> {paymentMethod}
            </p>
            <p>
              <strong>Status:</strong> Paid
            </p>
            <button
              className={styles.downloadButton}
              onClick={generateReceipt}
            >
              Download Receipt
            </button>
          </div>
        )}

        <button
          className={`${styles.paymentButton} ${
            isPaid && !isReceiptDownloaded ? styles.disabled : ""
          }`}
          onClick={handlePayment}
          disabled={isPaid || isReceiptDownloaded}
        >
          {isPaid ? "Done" : "Confirm "}
        </button>
      </div>
    </div>
  );
};

export default Payment;
