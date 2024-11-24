"use client";

import { Suspense } from "react";
import { handleLogin } from "./action";
import ClientComponent from "@/components/ClientComponent";

export default function LoginPage() {
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
            Masuk ke Akun Anda
          </h2>
          <p className="text-center text-sm text-gray-500 mb-6">
            Belum punya akun Tokopedia?{" "}
            <a
              href="/register"
              className="text-green-600 hover:underline hover:text-green-700 transition"
            >
              Daftar Sekarang
            </a>
          </p>
          <Suspense>
            <ClientComponent />
          </Suspense>

          <form action={handleLogin}>
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
            >
              Masuk
            </button>
          </form>

          <p className="text-xs text-gray-500 mt-4 text-center">
            Dengan masuk, saya menyetujui{" "}
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
