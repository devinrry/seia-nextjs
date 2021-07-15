import Image from 'next/image';

export default function Branding() {
  return (
    <div>
      <div className="content container">
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-12 p-5">
            <div>
              <Image
                src="/img/branding.png"
                alt="branding"
                className="w-100 justify-content-center align-items-center"
              />
            </div>
          </div>
          <div className="col-lg-7 col-md-12 p-5">
            <div>
              <h2>Membangun daya saing untuk menghasilkan value terbaik</h2>
              <p>
                Branding & Design adalah salah satu hal terpenting yang harus
                dibangun oleh sebuah usaha. Dalam prosesnya identitas yang kuat
                menjadi pembeda dan dapat membangun daya saing untuk
                menghasilkan value terbaik, membentuk citra positif dan
                meningkatkan kredibilitas usaha. Menjadikan konsumen lebih
                percaya dan lebih loyal terhadap usaha Anda.
              </p>
              <button type="button" className="default-btn">
                <i className="fas fa-whatsapp"></i>
                Hubungi Kami
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="card-product container mb-5">
        <div className="container">
          <div className="row row-cols-1 row-cols-md-3 g-3 text-center">
            <div className="col">
              <div className="card h-100">
                <div className="card-body">
                  <h4 className="card-title">DESAIN LOGO</h4>
                  <p className="card-text">
                    Bangun identitas usaha anda dengan desain logo yang
                    profesional dan efektif agar dapat mendukung aktivitas usaha
                    anda
                  </p>
                </div>
                <div className="card-footer bg-transparent border-0">
                  <p>HARGA MULAI DARI</p>
                  <h1 style="font-weight: bold;">Rp 499.000</h1>
                  <p>KONSULTASI GRATIS</p>
                  <a href="checkout.html" className="default-btn">
                    Pesan Sekarang
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <div className="card-body text-center">
                  <h4 className="card-title">DESAIN KEMASAN</h4>
                  <p className="card-text">
                    Desain kemasan yang baik akan mempengaruhi konsumen dalam
                    pengambilan keputusan untuk memilih atau membeli suatu
                    produk
                  </p>
                </div>
                <div className="card-footer bg-transparent border-0">
                  <p>HARGA MULAI DARI</p>
                  <h1 style="font-weight: bold;">Rp 499.000</h1>
                  <p>KONSULTASI GRATIS</p>
                  <a href="checkout.html" className="default-btn">
                    Pesan Sekarang
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <div className="card-body text-center">
                  <h4 className="card-title">BRAND IDENTITY</h4>
                  <p className="card-text">
                    Penyampaian karakter, citra, dan nilai dari usaha anda agar
                    dikenal dan dipahami oleh konsumen dalam upaya untuk terus
                    berkembang
                  </p>
                </div>
                <div className="card-footer bg-transparent border-0">
                  <p>HARGA MULAI DARI</p>
                  <h1 style="font-weight: bold;">Rp 499.000</h1>
                  <p>KONSULTASI GRATIS</p>
                  <a href="checkout.html" className="default-btn">
                    Pesan Sekarang
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card-content container">
        <h2 className="text-center mb-4 fw-bold">PROSES KREATIF</h2>
        <div className="container">
          <div className="row row-cols-1 row-cols-md-4 g-3 text-center">
            <div className="col">
              <div className="card h-100">
                <div className="card-body">
                  <h4 className="card-title">Konsultasi</h4>
                  <p className="card-text">
                    Ceritakan kepada kami tentang apa yang diinginkan dan apa
                    yang dibutuhkan
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <div className="card-body">
                  <h4 className="card-title">Eksekusi</h4>
                  <p className="card-text">
                    Proses kreatif pengerjaan dimulai dari tahap brainstorming
                    sampai visualisasi hasil akhir
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <div className="card-body">
                  <h4 className="card-title">Umpan Balik</h4>
                  <p className="card-text">
                    Waktunya anda menyampaikan umpan balik terhadap apa yang
                    kami kerjakan
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <div className="card-body">
                  <h4 className="card-title">Selesai</h4>
                  <p className="card-text">
                    Penyelesaian tahap akhir dan kami akan mengirimkan hasil
                    pekerjaan secara langkap
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
