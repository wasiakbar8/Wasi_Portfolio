"""
Custom HTTP server for Portfolio — properly serves PDFs with
Content-Disposition: attachment so they download instead of opening inline.
"""
import http.server
import os

PORT = 5501
DIRECTORY = r"d:\Portfolio"

class PortfolioHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        # Force PDF files to download (not open inline)
        if self.path.endswith('.pdf'):
            filename = os.path.basename(self.path)
            self.send_header('Content-Disposition', f'attachment; filename="{filename}"')
            self.send_header('Content-Type', 'application/pdf')
        # Allow cross-origin requests (for local dev)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Cache-Control', 'no-cache')
        super().end_headers()

    def log_message(self, format, *args):
        print(f"[{self.address_string()}] {format % args}")

if __name__ == '__main__':
    with http.server.HTTPServer(('', PORT), PortfolioHandler) as httpd:
        print(f"[OK] Portfolio running at http://localhost:{PORT}/")
        print(f"[CV] Download at http://localhost:{PORT}/my-cv.pdf")
        print(f"[DIR] Serving: {DIRECTORY}")
        print("Press Ctrl+C to stop.")
        httpd.serve_forever()
