import { Html5QrcodeScanner } from './node_modules/html5-qrcode/cjs/html5-qrcode-scanner'

function onScanSuccess(decodedText, decodedResult) {
  // handle the scanned code as you like, for example:
  console.log(`Code matched = ${decodedText}`, decodedResult)
}

function onScanFailure(error) {
  // handle scan failure, usually better to ignore and keep scanning.
  // for example:
  console.warn(`Code scan error = ${error}`)
}

let html5QrcodeScanner = new Html5QrcodeScanner(
  'reader',
  { fps: 10, qrbox: { width: 250, height: 250 } },
  /* verbose= */ false
)
html5QrcodeScanner.render(onScanSuccess, onScanFailure)

// this is a new comment
