import pytest
import threading
import time
import socket
from server import ChatServer  # Assuming this is your chat server implementation

class TestChatServer:
        @pytest.fixture
        def server(self):
            """Create a server instance that runs in a separate thread"""
            server = ChatServer(port=5556)  # Use different port for testing
            server_thread = threading.Thread(target=server.start)
            server_thread.daemon = True
            server_thread.start()
            time.sleep(0.1)  # Give the server time to start
            yield server
            # Clean up
            server.server_socket.close()

        def test_server_initialization(self):
            """Test that the server initializes with correct values"""
            server = ChatServer(host='127.0.0.1', port=5557)
            assert server.host == '127.0.0.1'
            assert server.port == 5557
            assert isinstance(server.server_socket, socket.socket)
            assert len(server.clients) == 0

        def test_client_connect(self, server):
            """Test that a client can connect to the server"""
            client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
            client.connect(('127.0.0.1', 5556))
            client.send("TestUser".encode('utf-8'))
            time.sleep(0.1)  # Give the server time to process
            
            # Verify the client was added
            with server.lock:
                assert len(server.clients) == 1
            
            client.close()

        def test_client_disconnect(self, server):
            """Test that a client can disconnect from the server"""
            client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
            client.connect(('127.0.0.1', 5556))
            client.send("TestUser".encode('utf-8'))
            time.sleep(0.1)
            
            # Verify the client was added
            with server.lock:
                assert len(server.clients) == 1
                
            client.close()
            time.sleep(0.1)  # Give the server time to process
            
            # Verify the client was removed
            with server.lock:
                assert len(server.clients) == 0

        def test_broadcast_message(self, server):
            """Test that messages are broadcasted to connected clients"""
            # Connect first client
            client1 = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
            client1.connect(('127.0.0.1', 5556))
            client1.send("User1".encode('utf-8'))
            
            # Connect second client
            client2 = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
            client2.connect(('127.0.0.1', 5556))
            client2.send("User2".encode('utf-8'))
            
            time.sleep(0.1)  # Wait for connections to be processed
            
            # Client1 sends a message
            client1.send("Hello from client1".encode('utf-8'))
            time.sleep(0.1)  # Wait for message to be processed
            
            # Client2 should receive the message
            message = client2.recv(1024).decode('utf-8')
            assert "User1: Hello from client1" in message
            
            client1.close()
            client2.close()
