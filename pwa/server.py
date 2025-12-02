import os
from flask import Flask, send_from_directory, render_template, redirect

app = Flask(__name__)

port = int(os.environ.get("PORT", 5000))

def get_tracks(): #This function utilises magic to get the info from the database
    import sqlite3
    conn = sqlite3.connect("database/tracks.db")
    conn.row_factory = sqlite3.Row
    cur = conn.cursor()
    cur.execute("SELECT * FROM tracks ORDER BY TrackID ASC")
    tracks = cur.fetchall()
    conn.close()
    return tracks

@app.route('/europe_catalogue')
def europe_catalogue():
    tracks = get_tracks()
    return render_template('europe_catalogue.html', tracks=tracks)

@app.route('/static/<path:path>')
def serve_static(path):
    return send_from_directory('static', path)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/europe')
def europe():
    return render_template('europe.html')

@app.route('/<path:path>')
def all_routes(path):
    return redirect('/')

if __name__ == "__main__":
    app.run(port=port)