import socket
import random

server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server_socket.bind(('localhost', 3003))
server_socket.listen()

print("Server is running on localhost:3003")

while True:
    client_socket, addr = server_socket.accept()
    print(f"Socket object: {client_socket}")
    print(f"Connection from {addr}")

    request = client_socket.recv(1024).decode()
    if not request or 'favicon.ico' in request:
        client_socket.close()
        continue
    
    request_line = request.splitlines()[0]
    http_method, path_params, _ = request_line.split()
    path, params = path_params.split('?')

    params = params.split("&")
    params_dict = {}
    for param in params:
        key, value = param.split('=')
        params_dict[key] = value
    
    rolls = int(params_dict['rolls'])
    sides = int(params_dict['sides'])

    response_body = (f"<html><body>"
                     f"Request Line: {request_line}<br>"
                     f"HTTP Method: {http_method}<br>"
                     f"Path: {path}<br>"
                     f"Parameters: {params_dict}<br>"
                     f"</body></html>")
    
    for _ in range(rolls):
        roll = random.randint(1, sides)
        response_body += f"Roll: {roll}<br>"

    response = ("HTTP/1.1 200 OK\r\n"
                "Content-Type: text/html\r\n"
                f"Content-Length: {len(response_body)}\r\n"
                "\r\n"
                f"{response_body}\n")

    client_socket.sendall(response.encode())
    client_socket.close()