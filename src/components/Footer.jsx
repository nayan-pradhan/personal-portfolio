import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Footer = () => {
    const [showImpressum, setShowImpressum] = useState(false);
    const [showPrivacy, setShowPrivacy] = useState(false);

    return (
        <>
            <section className="px-5 sm:px-6 pb-8">
                <div className="max-w-3xl mx-auto rounded-2xl border border-line bg-surface px-6 py-10 sm:px-10 text-center">
                    <p className="font-serif text-3xl sm:text-4xl text-ink mb-3">Let’s talk</p>
                    <p className="text-muted mb-6 max-w-md mx-auto">
                        Open to interesting problems in robotics, infrastructure, and software that sits close to hardware.
                    </p>
                    <a
                        href="mailto:nayan.pradhan@hotmail.com?subject=Portfolio%20Contact%20-%20Let's%20Connect!"
                        className="inline-flex px-5 py-2.5 rounded-full bg-ink text-page text-sm font-medium hover:bg-accent transition-colors"
                    >
                        nayan.pradhan@hotmail.com
                    </a>
                </div>
            </section>

            <footer className="border-t border-line py-8 mt-8 pb-24 md:pb-8">
                <div className="max-w-6xl mx-auto px-5 sm:px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="text-muted text-sm">
                            © {new Date().getFullYear()} Nayan Man Singh Pradhan
                        </div>
                        <div className="flex gap-6 text-sm">
                            <button
                                type="button"
                                onClick={() => setShowImpressum(true)}
                                className="text-muted hover:text-accent transition-colors"
                            >
                                Impressum
                            </button>
                            <button
                                type="button"
                                onClick={() => setShowPrivacy(true)}
                                className="text-muted hover:text-accent transition-colors"
                            >
                                Datenschutz
                            </button>
                        </div>
                    </div>
                </div>
            </footer>

            <AnimatePresence>
                {showImpressum && (
                    <motion.div
                        className="fixed inset-0 bg-ink/50 backdrop-blur-sm flex items-center justify-center z-[60] p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setShowImpressum(false)}
                    >
                        <motion.div
                            className="bg-surface rounded-2xl border border-line p-6 max-w-md w-full max-h-96 overflow-y-auto"
                            initial={{ scale: 0.96, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.96, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <h2 className="font-serif text-2xl mb-4 text-ink">Impressum</h2>
                            <div className="text-muted space-y-2 text-sm leading-relaxed">
                                <p><strong className="text-ink">Angaben gemäß § 5 TMG:</strong></p>
                                <p>
                                    <strong className="text-ink">Name:</strong> Nayan Man Singh Pradhan<br />
                                    <strong className="text-ink">Anschrift:</strong> Fischerstraße 10<br />
                                    Berlin, 10317<br />
                                    Deutschland
                                </p>
                                <p>
                                    <strong className="text-ink">Kontakt:</strong><br />
                                    E-Mail: nayan.pradhan@hotmail.com
                                </p>
                            </div>
                            <button
                                type="button"
                                onClick={() => setShowImpressum(false)}
                                className="mt-5 px-4 py-2 bg-ink text-page rounded-full text-sm hover:bg-accent transition-colors"
                            >
                                Schließen
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {showPrivacy && (
                    <motion.div
                        className="fixed inset-0 bg-ink/50 backdrop-blur-sm flex items-center justify-center z-[60] p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setShowPrivacy(false)}
                    >
                        <motion.div
                            className="bg-surface rounded-2xl border border-line p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
                            initial={{ scale: 0.96, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.96, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <h2 className="font-serif text-2xl mb-4 text-ink">Datenschutzerklärung</h2>
                            <div className="text-muted space-y-4 text-sm leading-relaxed">
                                <h3 className="font-semibold text-ink">1. Datenschutz auf einen Blick</h3>
                                <p>
                                    Diese Website sammelt keine personenbezogenen Daten von Besuchern.
                                    Es werden keine Cookies für Tracking oder Analyse verwendet.
                                </p>

                                <h3 className="font-semibold text-ink">2. Hosting</h3>
                                <p>
                                    Diese Website wird auf GitHub Pages gehostet. GitHub kann automatisch
                                    bestimmte Informationen sammeln (IP-Adresse, Browser-Typ, etc.).
                                    Weitere Informationen finden Sie in der
                                    <a href="https://docs.github.com/en/github/site-policy/github-privacy-statement"
                                       className="text-accent hover:underline ml-1" target="_blank" rel="noopener noreferrer">
                                        GitHub Privacy Policy
                                    </a>.
                                </p>

                                <h3 className="font-semibold text-ink">3. Ihre Rechte</h3>
                                <p>
                                    Sie haben das Recht auf Auskunft, Berichtigung, Löschung und
                                    Einschränkung der Verarbeitung Ihrer personenbezogenen Daten.
                                </p>

                                <h3 className="font-semibold text-ink">4. Kontakt</h3>
                                <p>
                                    Bei Fragen zum Datenschutz kontaktieren Sie mich unter: nayan.pradhan@hotmail.com
                                </p>
                            </div>
                            <button
                                type="button"
                                onClick={() => setShowPrivacy(false)}
                                className="mt-5 px-4 py-2 bg-ink text-page rounded-full text-sm hover:bg-accent transition-colors"
                            >
                                Schließen
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Footer;
