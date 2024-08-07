import { Routes, Route} from "react-router-dom";
import { Navigation } from './components/Navigation/Navigation';
import { QrCodeGenerator } from './components/Generate/QrCodeGenerate';
import { QrCodeScanner } from './components/Scan/QrCodeScanner';
import { GenerateHistory } from './components/GenerateHistory';
import { ScanHistory } from './components/ScanHistory';

const Layout = () => {
    return (
        <div>
            <Navigation />
            
            <Routes>
                <Route path="/generate" element={<QrCodeGenerator />} />
                <Route path="/scan" element={<QrCodeScanner />} />
                <Route path="/generatehistory" element={<GenerateHistory />} />
                <Route path="/scanhistory" element={<ScanHistory />} />
            </Routes>
        </div>
    );
}

export { Layout };