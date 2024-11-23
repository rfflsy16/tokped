import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* Kolom 1: Tokopedia */}
        <div>
          <h5 className="font-bold mb-4">Tokopedia</h5>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>Tentang Tokopedia</li>
            <li>Hak Kekayaan Intelektual</li>
            <li>Karir</li>
            <li>Blog</li>
            <li>Tokopedia Affiliate Program</li>
            <li>Tokopedia B2B Digital</li>
            <li>Tokopedia Marketing Solutions</li>
            <li>Kalkulator Indeks Masa Tubuh</li>
            <li>Tokopedia Farma</li>
            <li>Promo Hari Ini</li>
            <li>Beli Lokal</li>
            <li>Promo Guncang</li>
          </ul>
        </div>
        {/* Kolom 2: Beli & Jual */}
        <div>
          <h5 className="font-bold mb-4">Beli</h5>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>Tagihan & Top Up</li>
            <li>Tokopedia COD</li>
            <li>Bebas Ongkir</li>
          </ul>
          <h5 className="font-bold mt-6 mb-4">Jual</h5>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>Pusat Edukasi Seller</li>
            <li>Daftar Official Store</li>
          </ul>
        </div>
        {/* Kolom 3: Bantuan dan Panduan */}
        <div>
          <h5 className="font-bold mb-4">Bantuan dan Panduan</h5>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>Tokopedia Care</li>
            <li>Syarat dan Ketentuan</li>
            <li>Kebijakan Privasi</li>
          </ul>
        </div>
        {/* Kolom 4: Ikuti Kami */}
        <div>
          <div className="flex space-x-4 mb-6">
            <a href="#" className="text-blue-500">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-blue-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-red-500">
              <i className="fab fa-pinterest"></i>
            </a>
            <a href="#" className="text-pink-500">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <h5 className="font-bold ">Ikuti Kami</h5>
          <div className="w-full">
            <img
              src="https://img.pikbest.com/png-images/20240828/round-logos-of-facebook-instagram-and-tiktok-colored-popular-social-media-logos_10570194.png!bw700"
              alt="Security Image"
              width={150}
              height={0}
              style={{ objectFit: "contain", height: "auto" }}
            />
            <img
              src="https://images.tokopedia.net/img/helpcenter/2019/09/Webp.net-resizeimage.png"
              alt="ISO Certified"
              className="w-full"
            />
          </div>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="mt-10 text-center">
        <div className="flex justify-center items-center space-x-4 mb-4">
          <img
            src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png"
            alt="Google Play"
            className="w-32"
          />
          <img
            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
            alt="App Store"
            className="w-32"
          />
        </div>
        <p className="text-sm text-gray-600">
          © 2009 - {new Date().getFullYear()}, PT. Tokopedia
        </p>
        <div className="mt-2 flex justify-center space-x-4 text-gray-600">
          <button className="text-sm">Indonesia</button>
          <span>|</span>
          <button className="text-sm">English</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
