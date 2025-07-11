import { useState } from "react"
import QRCode from "react-qr-code"
import './styles.css'

export default function QRCodeGenerator() {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  function handleGenerateQrCode() {
    setQrCode(input);
    setInput('');
  }


  return <div className="qr-generator-container">
    <h1 className="qr-generator-title">QR Code Generator</h1>
    <div className="qr-generator-input-group">
      <input
        className="qr-generator-input"
        onChange={(e) => setInput(e.target.value)}
        type="text"
        name="qr-code"
        value={input}
        placeholder="Enter your value here"
      />
      <button
        className="qr-generator-button"
        disabled={input && input.trim() !== "" ? false : true}
        onClick={handleGenerateQrCode}
      >
        Generate
      </button>
    </div>
    <div>
      <QRCode
        id="qr-code-value"
        value={qrCode}
        size={400}
        bgColor="#fff"
        className="qr-generator-qrcode" />
    </div>

  </div>
}