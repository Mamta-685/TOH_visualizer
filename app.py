from flask import Flask, jsonify, request, send_from_directory



# Serve files in `static/` at the app root so relative paths in index.html work
app = Flask(__name__, static_url_path="")

@app.route("/")
def home():
    return send_from_directory("static", "index.html")

def toh(n, A, B, C, state, moves):
    if n > 0:
        toh(n-1, A, C, B, state, moves)

        disk = state[A].pop()
        state[C].append(disk)

        moves.append({
            "disk": disk,
            "from": A,
            "to": C
        })

        toh(n-1, B, A, C, state, moves)
# def home():
#     return send_from_directory("static", "index.html")

# def toh(n, A,B,C,state, moves):
#     if n>0:
#         toh(n-1, A, C, B, state, moves)

#         disk = state[A].pop()
#         state[C].append(disk)
#         moves.append({"from": A, "to": C, "disk": disk})

#         toh(n-1, B, A, C, state, moves)


@app.route("/solve")
def solve():
    n = int(request.args.get("n"))

    state = {
        "A": list(range(n, 0, -1)),
        "B": [],
        "C": []
    }

    moves = []
    toh(n, "A", "B", "C", state, moves)

    return jsonify({
        "n": n,
        "moves": moves
    })


if __name__ == "__main__":
    app.run(debug=True)


# We need Flask because Python logic must run again for every user input, with a fresh state — which a static JSON file cannot provide.