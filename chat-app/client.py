import socket
import threading
import sys
import time
import os

class ChatClient:
    def __init__(self, host='127.0.0.1', port=5555):
        self.host = host
        self.port = port
        self.client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        self.username = None
        
    def connect(self, username):
        """Connect to the server and set up the client"""
        try:
            self.client_socket.connect((self.host, self.port))
            self.username = username
            
            # Send username to server
            self.client_socket.send(username.encode('utf-8'))
            
            # Start thread to receive messages
            receive_thread = threading.Thread(target=self.receive_messages)
            receive_thread.daemon = True
            receive_thread.start()
            
            return True
        except Exception as e:
            print(f"Failed to connect to server: {e}")
            return False
            
    def send_message(self, message):
        """Send a message to the server"""
        try:
            self.client_socket.send(message.encode('utf-8'))
        except Exception as e:
            print(f"Error sending message: {e}")
            return False
        return True
            
    def receive_messages(self):
        """Continuously receive and print messages from server"""
        while True:
            try:
                message = self.client_socket.recv(1024).decode('utf-8')
                if not message:
                    print("Connection to server lost.")
                    break
                print(message)
            except Exception as e:
                print(f"Error receiving message: {e}")
                break
        
        print("Disconnected from server")
        self.client_socket.close()
        os._exit(1)  # Exit the app if connection is lost
        
    def disconnect(self):
        """Close the connection to the server"""
        self.client_socket.close()

def main():
    """Run the chat client application"""
    client = ChatClient()
    
    print("===== Welcome to Python Chat =====")
    
    username = input("Enter your username: ")
    if client.connect(username):
        print(f"Connected to server as {username}")
        print("Type your messages (press Ctrl+C to quit)")
        
        try:
            while True:
                message = input()
                if message.lower() == 'quit':
                    break
                if not client.send_message(message):
                    break
        except KeyboardInterrupt:
            print("\nDisconnecting from chat...")
        finally:
            client.disconnect()
    
if __name__ == "__main__":
    main()