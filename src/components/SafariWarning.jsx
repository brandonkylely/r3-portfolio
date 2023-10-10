// Define the warning component
export default function SafariWarning({ onClose }) {
  return (
    <div className="w-80 text-white bg-black bg-opacity-20 itimFont">
      <p className="text-sm">
        Mobile Safari (Tab Bar Issue):
        <br />
        If you are experiencing issues, please go to 'Settings' -&gt; 'Safari'
        -&gt; 'Single Tab' (Instead of 'Tab Bar') or use a different browser.
      </p>
      <button className="mt-1 p-1 rounded" onClick={onClose}>
        Close (X)
      </button>
    </div>
  );
}
