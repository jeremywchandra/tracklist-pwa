from flask import Flask, send_from_directory

app = Flask(__name__)

@app.route('/sw.js')
def service_worker():
    return send_from_directory('static', 'sw.js')