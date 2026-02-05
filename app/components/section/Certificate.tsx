import { getListCertificatesService } from "@/src/services/certificate.service";
import CertificateCarousel from "./CertificateCarousel";

export default async function Certificates() {
    // ini contoh pengambilan data dari fungsi service (fungsi backend bisa dilihat dari folder src/services/ disana isinya fungsi fungsi backend yang bisa dipanggil untuk ambil data)
    // tapi perlu diperhatikan kalau mau ambil data dengan pemanggilan fungsi backend langsung, maka component haruslah server component (tidak boleh ada use client)
    // itulah kenapa dipisah tu komponen certificates jadi dua, satu server component (ini) dan satu lagi client component (CertificateCarousel)
    // jadi komponen certificate carousel tinggal mendapatkan data dari sini saja yang dikirim lewat parameter/props
    const response = await getListCertificatesService();
    const certificates = response.data;

    return (
        <section id="certificates" className="py-24 lg:py-32 bg-[#fdf2f8]">
            <div className="max-w-6xl mx-auto px-6">
                {/* Section Header */}
                <div className="flex items-center gap-4 mb-10">
                    <span className="flex items-center justify-center w-10 h-10 text-xs font-semibold text-[#ec4899] bg-white border border-pink-100 rounded-xl">
                        03
                    </span>
                    <span className="w-10 h-px bg-gradient-to-r from-[#ec4899] to-transparent" />
                    <span className="text-xs font-medium uppercase tracking-widest text-gray-500">
                        Certificates
                    </span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-12">
                    My <span className="text-[#ec4899]">Achievements</span>
                </h2>

                <CertificateCarousel certificates={certificates} />
            </div>
        </section>
    );
}
