import { useState } from "react";
import { toast } from "react-toastify"; // For showing messages
import styles from "../styles/HelpSupport.module.css"; // Custom styles for the page

const HelpSupport = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatQuery, setChatQuery] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const faqData = [
    {
      question: "How do I book a ride?",
      answer:
        "To book a ride, just enter your pick-up and drop-off locations, select your preferred ride option (Uber, Rapido, etc.), and confirm your ride.",
    },
    {
      question: "What should I do if I miss my ride?",
      answer:
        "If you miss your ride, you can easily request a new one by clicking 'Rebook Ride'. Check for real-time updates on ride availability.",
    },
    {
      question: "How do I cancel a ride?",
      answer:
        "To cancel a ride, go to the ride details page and click 'Cancel'. Be mindful of cancellation fees if the ride is canceled after a certain time.",
    },
    {
      question: "How do I update my payment method?",
      answer:
        "You can update your payment method by navigating to your profile settings and selecting 'Payment Methods'. Here, you can add or remove cards and link PayPal.",
    },
    {
      question: "Can I schedule a ride in advance?",
      answer:
        "Yes! You can schedule a ride in advance for up to 7 days by selecting the 'Schedule Ride' option when booking your ride.",
    },
    {
      question: "What are Uber Rapido and other ride options?",
      answer:
        "Uber Rapido is a two-wheeled ride option for quicker and more affordable transport. You can also choose from other options like UberX, UberXL, and Comfort, depending on your needs.",
    },
  ];

  // Handle contact support actions
  const handleSupportContact = (method) => {
    if (method === "phone") {
      // Trigger phone dialer (works on mobile)
      window.location.href = "tel:+1234567890"; // Replace with actual phone number
      toast.info("Calling customer support...");
    } else if (method === "email") {
      // Open the default email client with a pre-filled subject and body
      window.location.href =
        "mailto:support@rideease.com?subject=Support Request";
      toast.info("Opening email client...");
    } else if (method === "chat") {
      // Toggle chat interface
      setIsChatOpen(!isChatOpen)
    }
  };

  // Handle chat query submission
  const handleChatSubmit = () => {
    if (chatQuery.trim()) {
      setChatHistory([...chatHistory, { query: chatQuery }]);
      setChatQuery(""); // Clear the input field after submitting
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Help & Support</h1>

      <div className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
        {faqData.map((faq, index) => (
          <div
            key={index}
            className={`${styles.faqItem} ${
              activeQuestion === index ? styles.active : ""
            }`}
            onClick={() =>
              setActiveQuestion(activeQuestion === index ? null : index)
            }
          >
            <div className={styles.faqQuestion}>
              <h3>{faq.question}</h3>
            </div>
            {activeQuestion === index && (
              <div className={styles.faqAnswer}>{faq.answer}</div>
            )}
          </div>
        ))}
      </div>

      <div className={styles.contactSection}>
        <h2 className={styles.sectionTitle}>Contact Customer Support</h2>
        <div className={styles.contactButtons}>
          <button
            onClick={() => handleSupportContact("phone")}
            className={styles.contactButton}
          >
            Call Support
          </button>
          <button
            onClick={() => handleSupportContact("email")}
            className={styles.contactButton}
          >
            Email Support
          </button>
          <button
            onClick={() => handleSupportContact("chat")}
            className={styles.contactButton}
          >
            Start Chat
          </button>
        </div>
      </div>

      {/* Chat Interface */}
      {isChatOpen && (
        <div className={styles.chatSection}>
          <h3>Live Chat</h3>
          <div className={styles.chatHistory}>
            {chatHistory.map((chat, index) => (
              <div key={index} className={styles.chatMessage}>
                <p>{chat.query}</p>
              </div>
            ))}
          </div>
          <textarea
            value={chatQuery}
            onChange={(e) => setChatQuery(e.target.value)}
            placeholder="Type your query..."
            className={styles.chatInput}
          />
          <button
            onClick={handleChatSubmit}
            className={styles.chatSubmitButton}
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default HelpSupport;
