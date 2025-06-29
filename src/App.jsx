// Paste this into src/App.jsx
import React, { useState } from "react";

export default function PayMate() {
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f6f7fb] px-4">
      <div className="bg-white w-full max-w-sm rounded-xl shadow-md p-6">
        <img
          src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_111x69.jpg"
          alt="PayMate"
          className="h-10 mb-4 mx-auto"
        />
        <h2 className="text-lg font-semibold text-center text-gray-800 mb-1">
          Send Payment
        </h2>
        <p className="text-center text-sm text-gray-500 mb-6">
          Available balance:{" "}
          <span className="text-green-600 font-medium">$1,200.00</span>
        </p>

        {success ? (
          <div className="text-center">
            <div className="text-green-600 text-4xl mb-2">✅</div>
            <p className="text-lg font-semibold text-gray-800">
              Transfer Complete
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Recipient Email"
                className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Amount (USD)"
                className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <input
                type="text"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Note (Optional)"
                className="w-full border border-gray-300 rounded-md p-2 text-sm"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 rounded-md transition"
            >
              {loading ? "Sending..." : "Send Now"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
