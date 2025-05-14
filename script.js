body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    color: #333;
    background-color: #f5f5f5;
}

h1 {
    color: #2c3e50;
    text-align: center;
    margin-bottom: 30px;
}

.form-container {
    background-color: white;
    padding: 25px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.form-group {
    margin-bottom: 20px;
}

label {
    display: block;
    margin-bottom: 5px;
    font-weight: 600;
}

input, select, textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
}

input:focus, select:focus, textarea:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 0 2px rgba(52,152,219,0.2);
}

.error {
    color: #e74c3c;
    font-size: 14px;
    margin-top: 5px;
    display: none;
}

button {
    background-color: #3498db;
    color: white;
    border: none;
    padding: 12px 20px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    width: 100%;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #2980b9;
}

.password-container {
    position: relative;
}

.toggle-password {
    position: absolute;
    right: 10px;
    top: 10px;
    background: none;
    border: none;
    color: #7f8c8d;
    cursor: pointer;
}

.strength-meter {
    height: 5px;
    background-color: #ecf0f1;
    margin-top: 10px;
    border-radius: 5px;
    overflow: hidden;
}

.strength-meter-fill {
    height: 100%;
    width: 0%;
    transition: width 0.3s, background-color 0.3s;
}

.success-message {
    background-color: #2ecc71;
    color: white;
    padding: 15px;
    border-radius: 4px;
    margin-top: 20px;
    display: none;
    text-align: center;
}

.interactive-demo {
    margin-top: 30px;
    padding: 20px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.color-box {
    width: 100%;
    height: 100px;
    background-color: #3498db;
    margin: 15px 0;
    border-radius: 4px;
    transition: background-color 0.3s;
}
