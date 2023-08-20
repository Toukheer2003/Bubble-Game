from flask import Flask,render_template

app = Flask(__name__)


@app.route("/")
def instructions():
    return render_template("instructions.html")

@app.route("/game")
def bubble():    
    return render_template("index.html")


if(__name__=="__main__"):
    app.run(debug=True)