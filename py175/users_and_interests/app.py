from flask import Flask, render_template, g, request, redirect
import yaml

app = Flask(__name__)

@app.before_request
def load_data():
    with open("users.yaml", "r") as file:
        g.data = yaml.safe_load(file)

@app.route('/')
def index():
    return redirect("/users")

@app.route('/users')
def users():
    return render_template("users.html",
                           users=g.data,
                           users_total=len(g.data),
                           interests_total=get_total_interests())

@app.route('/users/<name>')
def get_info(name):
    email = g.data[name]['email']
    interests = ', '.join(g.data[name]['interests'])

    return render_template("display_info.html",
                           users=g.data,
                           users_total=len(g.data),
                           interests_total=get_total_interests(),
                           name=name.capitalize(),
                           email=email,
                           interests=interests)

def get_total_interests():
    interests_total = 0

    for user in g.data.keys():
        for info, value in g.data[user].items():
            if info == "interests":
                interests_total += len(value)

    return interests_total

if __name__ == '__main__':
    app.run(debug=True, port=5003)