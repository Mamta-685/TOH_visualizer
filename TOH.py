import time
import json

def TOH(n, A, B, C, state, step):
    if n > 0:
        TOH(n-1, A, C, B, state, step)

        disk = state[A].pop()
        state[C].append(disk)

        print(f"Step {step[0]}: Move disk {disk} from {A} to {C}")
        print(f"A:{state['A']} B:{state['B']} C:{state['C']}\n")

        moves.append({
            "disk": disk,
            "from": A,
            "to": C
        })
        
        step[0] += 1
        time.sleep(0.5)

        TOH(n-1, B, A, C, state, step)


n = int(input("How many disks? "))


initial_state = {
    'A': list(range(n, 0, -1)), 
    'B': [], 
    'C': []
}
counter = [1]
moves=[]

TOH(n, 'A', 'B', 'C', initial_state, counter)

with open('TOH_moves.json', 'w') as f:
    json.dump(moves, f, indent=4)

print("All moves have been saved to TOH_moves.json")

# Why this step matters ?
    # You just learned:
        # -Recursion produces events
        # -Events can be stored as data
        # -Data can drive any UI