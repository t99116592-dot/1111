body {
  font-family: Arial, sans-serif;
  background: linear-gradient(135deg, #1e3c72, #2a5298);
  height: 100vh;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}

.container {
  background: #0b1f3a;
  padding: 25px 35px;
  border-radius: 12px;
  width: 320px;
  text-align: center;
  box-shadow: 0 15px 30px rgba(0,0,0,0.4);
}

button {
  width: 100%;
  padding: 12px;
  margin: 8px 0;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  cursor: pointer;
}

button:nth-child(2) { background: #2ecc71; }
button:nth-child(3) { background: #e74c3c; }
button:nth-child(4) { background: #3498db; }

#out {
  margin-top: 15px;
  font-weight: bold;
}