import Footer from "./shared/Footer"
import Navbar from "./shared/Navbar"

const PdfScanner = () => {
    return (
        <div>
            <Navbar />
            <div className="flex justify-center items-center min-h-screen text-xl font-semibold">
                PDF SCANNER PAGE
            </div>
            <Footer />
        </div>
    );
}

export default PdfScanner;
