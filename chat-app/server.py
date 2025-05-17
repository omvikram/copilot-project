import socket
import threading
import time

# ChatServer class handles the chat server functionality
class ChatServer:
    def __init__(self, host='127.0.0.1', port=5555):
        self.host = host
        self.port = port
        self.server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        self.server_socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
        self.clients = {}  # {client_socket: username}
        self.lock = threading.Lock()

    def start(self):
        self.server_socket.bind((self.host, self.port))
        self.server_socket.listen(5)
        print(f"Server started on {self.host}:{self.port}")

        try:
            while True:
                client_socket, address = self.server_socket.accept()
                print(f"Connection from {address} established")
                
                # Start a new thread to handle the client
                client_thread = threading.Thread(target=self.handle_client, 
                                               args=(client_socket, address))
                client_thread.daemon = True
                client_thread.start()
        except KeyboardInterrupt:
            print("Server shutting down...")
        finally:
            self.server_socket.close()

    # Starts the chat server and listens for incoming client connections
    def handle_client(self, client_socket, address):
        try:
            # Get username
            username = client_socket.recv(1024).decode('utf-8')
            with self.lock:
                self.clients[client_socket] = username
            
            # Announce new user
            self.broadcast(f"\n>>> {username} has joined the chat <<<\n")
            
            # Handle messages
            while True:
                message = client_socket.recv(1024).decode('utf-8')
                if not message:
                    break
                    
                formatted_message = f"{username}: {message}"
                print(formatted_message)  # Server log
                self.broadcast(formatted_message, sender_socket=client_socket)
                
        except Exception as e:
            print(f"Error handling client {address}: {e}")
        finally:
            with self.lock:
                username = self.clients.pop(client_socket, "Unknown")
            self.broadcast(f"\n>>> {username} has left the chat <<<\n")
            client_socket.close()

    def broadcast(self, message, sender_socket=None):
        with self.lock:
            for client_socket in list(self.clients.keys()):
                # Don't send the message back to the sender
                if client_socket != sender_socket:
                    try:
                        client_socket.send(message.encode('utf-8'))
                    except:
                        # If we can't send to a client, they're likely disconnected
                        pass

if __name__ == "__main__":
    server = ChatServer()
    server.start()
    # test_server.py
