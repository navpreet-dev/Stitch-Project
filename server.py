import http.server
import socketserver
import json
import sqlite3
import urllib.parse
import os

PORT = 8000
DB_NAME = 'ecommerce.db'

# Initialize Database
def init_db():
    conn = sqlite3.connect(DB_NAME)
    c = conn.cursor()
    c.execute('''CREATE TABLE IF NOT EXISTS users
                 (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT UNIQUE, password TEXT, provider TEXT)''')
    c.execute('''CREATE TABLE IF NOT EXISTS cart
                 (id INTEGER PRIMARY KEY AUTOINCREMENT, user_id INTEGER, product_id TEXT, size TEXT, quantity INTEGER)''')
    c.execute('''CREATE TABLE IF NOT EXISTS wishlist
                 (id INTEGER PRIMARY KEY AUTOINCREMENT, user_id INTEGER, product_id TEXT)''')
    c.execute('''CREATE TABLE IF NOT EXISTS orders
                 (id INTEGER PRIMARY KEY AUTOINCREMENT, user_id INTEGER, total REAL, status TEXT, items TEXT)''')
    conn.commit()
    conn.close()

init_db()

class EcommerceAPIHandler(http.server.SimpleHTTPRequestHandler):
    def do_POST(self):
        if self.path == '/api/auth/login':
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length)
            data = json.loads(post_data.decode('utf-8'))
            
            # Simulated login logic for DB
            conn = sqlite3.connect(DB_NAME)
            c = conn.cursor()
            c.execute("SELECT id FROM users WHERE email=? AND password=?", (data.get('email'), data.get('password')))
            user = c.fetchone()
            
            if not user:
                # auto-signup for simplicity in mock
                c.execute("INSERT INTO users (email, password, provider) VALUES (?, ?, ?)", (data.get('email'), data.get('password'), data.get('provider', 'local')))
                conn.commit()
                user_id = c.lastrowid
            else:
                user_id = user[0]
            conn.close()

            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps({'status': 'success', 'user_id': user_id}).encode('utf-8'))
        else:
            self.send_response(404)
            self.end_headers()

Handler = EcommerceAPIHandler
with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Serving premium ecommerce at http://localhost:{PORT}")
    httpd.serve_forever()
