#!/usr/bin/env python3
"""
Simple HTTP server for TeorMinimumEval that supports HTTP Range requests
for the logs view to work properly with static files.
"""

import http.server
import socketserver
import json
import os
import urllib.parse
from pathlib import Path

class TeorMinimumEvalHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=os.getcwd(), **kwargs)
    
    def do_GET(self):
        # Check if this is a Range request
        range_header = self.headers.get('Range')
        if range_header:
            self.handle_range_request()
        else:
            # Serve static files normally
            super().do_GET()
    
    def handle_range_request(self):
        """Handle HTTP Range requests for byte ranges"""
        try:
            # Parse the Range header
            range_header = self.headers.get('Range')
            if not range_header.startswith('bytes='):
                self.send_error(400, "Invalid Range header")
                return
            
            # Get the file path
            file_path = self.translate_path(self.path)
            if not os.path.exists(file_path) or not os.path.isfile(file_path):
                self.send_error(404, "File not found")
                return
            
            file_size = os.path.getsize(file_path)
            
            # Parse range (e.g., "bytes=0-1023" or "bytes=1024-")
            range_spec = range_header[6:]  # Remove "bytes="
            if '-' not in range_spec:
                self.send_error(400, "Invalid Range header")
                return
            
            start_str, end_str = range_spec.split('-', 1)
            start = int(start_str) if start_str else 0
            end = int(end_str) if end_str else file_size - 1
            
            # Validate range
            if start < 0 or end >= file_size or start > end:
                self.send_error(416, "Requested Range Not Satisfiable")
                return
            
            # Read the requested range
            with open(file_path, 'rb') as f:
                f.seek(start)
                data = f.read(end - start + 1)
            
            # Send partial content response
            self.send_response(206, "Partial Content")
            self.send_header('Content-Type', 'application/octet-stream')
            self.send_header('Content-Length', str(len(data)))
            self.send_header('Content-Range', f'bytes {start}-{end}/{file_size}')
            self.send_header('Accept-Ranges', 'bytes')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
            self.send_header('Access-Control-Allow-Headers', 'Content-Type, Range')
            self.end_headers()
            self.wfile.write(data)
            
        except Exception as e:
            print(f"Error handling range request: {e}")
            self.send_error(500, f"Internal server error: {str(e)}")
    
    def end_headers(self):
        # Add CORS headers for all responses
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type, Range')
        super().end_headers()
    
    def do_OPTIONS(self):
        """Handle preflight CORS requests"""
        self.send_response(200)
        self.end_headers()

def main():
    PORT = 8001
    
    # Change to the script directory
    script_dir = os.path.dirname(os.path.abspath(__file__))
    os.chdir(script_dir)
    
    with socketserver.TCPServer(("", PORT), TeorMinimumEvalHandler) as httpd:
        print(f"Serving TeorMinimumEval at http://localhost:{PORT}")
        print(f"Logs view should now work at http://localhost:{PORT}/preview.html#/logs/")
        print("Press Ctrl+C to stop the server")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServer stopped.")

if __name__ == "__main__":
    main()
