import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Footer = () => {
    const [showImpressum, setShowImpressum] = useState(false);
    const [showPrivacy, setShowPrivacy] = useState(false);

    const ImpressumModal = () => (
        <AnimatePresence>
            {showImpressum && (
                <motion.div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setShowImpressum(false)}
                >
                    <motion.div
                        className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full max-h-96 overflow-y-auto"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Impressum</h2>
                        <div className="text-gray-700 dark:text-gray-300 space-y-2">
                            <p><strong>Angaben gemäß § 5 TMG:</strong></p>
                            <p>
                                <strong>Name:</strong> Nayan Man Singh Pradhan<br />
                                <strong>Anschrift:</strong> Fischerstraße 10<br />
                                Berlin, 10317<br />
                                Deutschland
                            </p>
                            <p>
                                <strong>Kontakt:</strong><br />
                                E-Mail: nayan.pradhan@hotmail.com
                            </p>
                            
                        </div>
                        <button
                            onClick={() => setShowImpressum(false)}
                            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                        >
                            Schließen
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );

    const PrivacyModal = () => (
        <AnimatePresence>
            {showPrivacy && (
                <motion.div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setShowPrivacy(false)}
                >
                    <motion.div
                        className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-4xl w-full max-h-[80vh] overflow-y-auto"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Datenschutzerklärung</h2>
                        <div className="text-gray-700 dark:text-gray-300 space-y-4 text-base leading-relaxed">
                            <h3 className="font-semibold">1. Datenschutz auf einen Blick</h3>
                            <p>
                                Diese Website sammelt keine personenbezogenen Daten von Besuchern. 
                                Es werden keine Cookies für Tracking oder Analyse verwendet.
                            </p>
                            
                            <h3 className="font-semibold">2. Hosting</h3>
                            <p>
                                Diese Website wird auf GitHub Pages gehostet. GitHub kann automatisch 
                                bestimmte Informationen sammeln (IP-Adresse, Browser-Typ, etc.). 
                                Weitere Informationen finden Sie in der 
                                <a href="https://docs.github.com/en/github/site-policy/github-privacy-statement" 
                                   className="text-blue-600 hover:underline ml-1" target="_blank" rel="noopener noreferrer">
                                    GitHub Privacy Policy
                                </a>.
                            </p>

                            <h3 className="font-semibold">3. Ihre Rechte</h3>
                            <p>
                                Sie haben das Recht auf Auskunft, Berichtigung, Löschung und 
                                Einschränkung der Verarbeitung Ihrer personenbezogenen Daten.
                            </p>

                            <h3 className="font-semibold">4. Kontakt</h3>
                            <p>
                                Bei Fragen zum Datenschutz kontaktieren Sie mich unter: nayan.pradhan@hotmail.com 
                            </p>

                        </div>
                        <button
                            onClick={() => setShowPrivacy(false)}
                            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                        >
                            Schließen
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );

    return (
        <>
            <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-6 mt-20">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="text-gray-600 dark:text-gray-400 text-sm">
                            © 2025 Nayan Man Singh Pradhan. All rights reserved.
                        </div>
                        <div className="flex gap-6 text-sm">
                            <button
                                onClick={() => setShowImpressum(true)}
                                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                            >
                                Impressum
                            </button>
                            <button
                                onClick={() => setShowPrivacy(true)}
                                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                            >
                                Datenschutz
                            </button>
                        </div>
                    </div>
                </div>
            </footer>

            <ImpressumModal />
            <PrivacyModal />
        </>
    );
};

export default Footer;
