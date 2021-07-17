import Link from 'next/link';
import Layout from '@/components/Layout';
import { DEFAULT_SEO } from '@/utils/index';

export default function Kontak({ SEO }) {
  const registerUser = async (event) => {
    event.preventDefault();

    const body = {
      name: event.target.nama_depan.value,
    };

    const res = await fetch('https://seia-kodekoding.herokuapp.com', {
      method: 'post',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
    });

    const result = await res.json();
  };

  return (
    <Layout seoData={SEO}>
      <div className="contact">
        <div className="container text-center mt-5">
          <h2>
            Jangan ragu untuk menghubungi kami, mari diskusi tentang usaha dan
            ide anda.
          </h2>
          <br />
          <p>
            Setelah itu ijinkan kami untuk memberikan solusi keratif ataupun
            hanya sekedar saran sebagai seorang teman. Diluar itu semua kami
            siap untuk menjadi mitra usaha anda untuk terus melaju dan tumbuh.
          </p>
          <button type="button" className="default-btn">
            <i className="fas fa-whatsapp"></i>
            Hubungi Kami
            <span></span>
          </button>
        </div>
      </div>

      <div className="usaha container p-5">
        <div className="row">
          <div className="col-lg-12 col-md-12 pe-5">
            <h4 className="fw-bold">Ceritakan Tentang Usaha Anda</h4>
            <p>
              Selanjutnya kami akan menghubungi anda untuk berdiskusi lebih jauh
              tentang keinginan yang akan dicapai.
            </p>
            <form className="mt-4" onSubmit={registerUser}>
              <div className="row mb-3">
                <div className="col-6">
                  <label htmlFor="namadepan" className="form-label">
                    Nama Depan
                  </label>
                  <input
                    type="text"
                    name="namadepan"
                    className="form-control"
                  />
                </div>
                <div className="col-6">
                  <label htmlFor="namabelakang" className="form-label">
                    Nama Belakang
                  </label>
                  <input
                    type="text"
                    name="namabelakang"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input type="email" name="email" className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="telepon" className="form-label">
                  Nomor Telepon
                </label>
                <input type="number" name="notelp" className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="alamat" className="form-label">
                  Alamat
                </label>
                <input type="text" name="alamat" className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="namausaha" className="form-label">
                  Nama Usaha
                </label>
                <input type="text" name="namausaha" className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="jenisusaha" className="form-label">
                  Jenis Usaha
                </label>
                <input type="text" name="jenisusaha" className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="socialmedia" className="form-label">
                  Sosial Media (Instagram / Facebook / Twitter)
                </label>
                <input
                  type="text"
                  name="sosialmedia"
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="tujuanusaha" className="form-label">
                  Ceritakan disini tentang tujuan, ide dan pencapaian yang Anda
                  inginkan
                </label>
                <input
                  type="text"
                  name="tujuanusaha"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="time" className="form-label">
                  Kapan kami bisa menghubungi Anda?
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="time"
                  id="pagi"
                />
                <label className="form-check-label" htmlFor="pagi">
                  Pagi
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="time"
                  id="siang"
                />
                <label className="form-check-label" htmlFor="siang">
                  Siang
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="time"
                  id="sore"
                />
                <label className="form-check-label" htmlFor="sore">
                  Sore
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="time"
                  id="malam"
                />
                <label className="form-check-label" htmlFor="malam">
                  Malam
                </label>
              </div>
              <button type="submit" className="default-btn">
                <Link href="/" passHref>
                  Kirim
                </Link>
                <span></span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const title = 'Kontak';
  const author = 'devi';
  const SEO = {
    ...DEFAULT_SEO,
    title,
    author,
    openGraph: {
      type: 'website',
      locale: 'id_ID',
      url: 'https://seia-kodekoding.com',
      title,
      site_name: 'SEIA',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@KodeKoding',
      title,
    },
  };
  return {
    props: {
      SEO,
    },
    revalidate: 10,
  };
}
