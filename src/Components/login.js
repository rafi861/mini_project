import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    try {
      // Kirim permintaan ke API TMDb untuk mengotentikasi pengguna
      const response = await axios.post(
        'https://api.themoviedb.org/3/authentication/token/new',
        {
          email,
          password,
          api_key: 'cdcb78f44f696533bef8086793f8c791', // Ganti dengan API key TMDb Anda
        }
      );

      // Cek respons dari API TMDb
      if (response.data.success) {
        // Pengguna berhasil masuk
        // Lakukan tindakan yang diperlukan, seperti menyimpan token atau mengarahkan ke halaman berikutnya
        console.log('Pengguna berhasil masuk');
      } else {
        // Kesalahan dalam proses otentikasi
        setError('Kesalahan dalam proses otentikasi');
      }
    } catch (error) {
      // Kesalahan dalam permintaan API
      setError('Terjadi kesalahan saat melakukan permintaan API');
    }
  };

  return (
    <div>
      <h1>Halaman Login</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={handleEmailChange}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
      />
      <button onClick={handleLogin}>Login</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;
