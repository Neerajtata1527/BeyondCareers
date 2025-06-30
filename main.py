from flask import Flask, render_template


app=Flask(__name__)

@app.route('/')
def home():
    return render_template("index.html")

@app.route('/services')
def services():
    return render_template("services.html")

@app.route('/success_stories')
def success_stories():
    return render_template("success_stories.html")

@app.route('/contact')
def contact():
    return render_template("contact.html")

@app.route('/about')
def about():
    return render_template("about.html")

if __name__=="__main__":
    app.run(debug=True)