# rtTcpServer
TCP Server. This is where the control room will receive commands from the mobile and frontend teams.

Steps to set up:
1. Clone the project to your machine
2. Keep server code IP alone!! It automatically connects to wireguard. You should never need to change this
3. Make a firewall rule. In windows, make a Port rule for TCP on the specific local port 80. Allow the connection on domain, private, and public locations, and name it something related to this server.
4. Download wireguard
5. Add blank tunnel
6. Add the config file code. This should be in the shared google drive
7. Activate wireguard
8. Start server by running node index.js, traffic should come through when the user sends a command

