from flask import (Flask, render_template)

app = Flask(__name__)

@app.route('/')
@app.route('/home')
def showHome():
    return render_template("index.html")

@app.route('/resume')
def showResume():
    return render_template("resume.html")

if __name__ == '__main__':
    app.secret_key = 'secretkey'
    app.debug = True
    app.run(host='0.0.0.0', port=5000)
