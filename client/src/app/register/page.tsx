"use client";

import { useState } from "react";

import { BASE_URL } from "../wishlists/action";

export default function RegisterPage() {
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const form = new FormData(event.target as HTMLFormElement);
    const data = {
      name: form.get("name"),
      username: form.get("username"),
      email: form.get("email"),
      password: form.get("password"),
    };

    setIsSubmitting(true);

    try {
      const response = await fetch(`${BASE_URL}/api/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.statusCode === 400) {
        setError(result.error || "Terjadi kesalahan saat mendaftar.");
      } else if (result.statusCode === 201) {
        window.location.href = "/login";
      } else {
        setError("Terjadi kesalahan. Silakan coba lagi.");
      }
    } catch (err) {
      setError("Terjadi kesalahan saat mendaftar. Silakan coba lagi.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="flex flex-col md:flex-row w-full max-w-6xl items-center gap-8">
        <div className="flex flex-col items-center justify-center w-full md:w-1/2 px-6 text-center md:text-left">
          <img
            src="https://images.tokopedia.net/img/user/register_icon_new.png"
            alt="Tokopedia Illustration"
            className="w-3/4 max-w-sm mb-6 md:mb-4 mx-auto"
          />
          <h1 className="text-xl md:text-2xl font-semibold text-gray-800">
            Jual Beli Mudah Hanya di Tokopedia
          </h1>
          <p className="text-gray-600 text-sm mt-2">
            Gabung dan rasakan kemudahan bertransaksi di Tokopedia
          </p>
        </div>

        <div className="w-full md:w-1/2 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-lg md:text-xl font-bold text-center text-gray-800 mb-4">
            Daftar Akun Baru
          </h2>
          <p className="text-center text-sm text-gray-500 mb-6">
            Sudah punya akun Tokopedia?{" "}
            <a
              href="/login"
              className="text-green-600 hover:underline hover:text-green-700 transition"
            >
              Masuk Sekarang
            </a>
          </p>

          {error && <p className="text-red-500 text-center">{error}</p>}

          <form onSubmit={handleSubmit}>
            <div className="form-control mb-4">
              <label className="label" htmlFor="name">
                <span className="label-text text-sm">Nama</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Nama Lengkap"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className="form-control mb-4">
              <label className="label" htmlFor="username">
                <span className="label-text text-sm">Username</span>
              </label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className="form-control mb-4">
              <label className="label" htmlFor="email">
                <span className="label-text text-sm">Email</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Masukan email Anda"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className="form-control mb-6">
              <label className="label" htmlFor="password">
                <span className="label-text text-sm">Kata Sandi</span>
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Masukkan kata sandi Anda"
                className="input input-bordered w-full"
                required
              />
            </div>

            <button
              type="submit"
              className="btn bg-green-600 border-none text-white hover:bg-green-700 w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Memproses..." : "Daftar"}
            </button>
          </form>

          <p className="text-xs text-gray-500 mt-4 text-center">
            Dengan mendaftar, saya menyetujui{" "}
            <a
              href="#"
              className="text-green-600 hover:underline hover:text-green-700"
            >
              Syarat & Ketentuan
            </a>{" "}
            serta{" "}
            <a
              href="#"
              className="text-green-600 hover:underline hover:text-green-700"
            >
              Kebijakan Privasi Tokopedia
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
