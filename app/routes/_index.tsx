import { json, type MetaFunction, type LinksFunction } from '@remix-run/cloudflare';
import { useEffect } from 'react';
import landingPageStyles from '~/styles/landing-page.css?url';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: landingPageStyles },
];

export const meta: MetaFunction = () => {
  return [{ title: 'Dreamera - Turn Your Ideas into Apps with AI' }, { name: 'description', content: 'Dreamera uses AI to turn your ideas into fully functional web apps. No code required.' }];
};

export default function Index() {
  useEffect(() => {
    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question?.addEventListener('click', () => {
            const currentlyActive = document.querySelector('.faq-item.active');
            if (currentlyActive && currentlyActive !== item) {
                currentlyActive.classList.remove('active');
            }
            item.classList.toggle('active');
        });
    });

    // Scroll Animations
    const sections = document.querySelectorAll('.fade-in-section');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });
  }, []);

  return (
    <>
      <header>
        <div className="container header-container">
            <div className="logo">Dreamera</div>
            <nav>
                <ul>
                    <li><a href="#features">Features</a></li>
                    <li><a href="#use-cases">Use Cases</a></li>
                    <li><a href="#pricing">Pricing</a></li>
                    <li><a href="#demo" className="button button-secondary">Watch Demo</a></li>
                </ul>
            </nav>
        </div>
    </header>
    <main>
        <section id="hero" className="hero-section">
            <div className="container">
                <h1>Go from Idea to App in Seconds</h1>
                <p className="sub-headline">Dreamera uses AI to turn your ideas into fully functional web apps. No code required.</p>
                <a href="#start" className="button button-primary">Start Building for Free</a>
            </div>
        </section>

        <section id="how-it-works" className="content-section fade-in-section">
            <div className="container">
                <h2 className="section-title">How It Works</h2>
                <p className="section-subtitle">Get your app live in three simple steps.</p>
                <div className="how-it-works-grid">
                    <div className="step">
                        <div className="step-number">1</div>
                        <h3>Describe Your Idea</h3>
                        <p>Type a short prompt or upload a sketch. Our AI understands what you want to build.</p>
                    </div>
                    <div className="step">
                        <div className="step-number">2</div>
                        <h3>AI Builds Your App</h3>
                        <p>Watch in real-time as Dreamera generates the code, database, and UI for your application.</p>
                    </div>
                    <div className="step">
                        <div className="step-number">3</div>
                        <h3>Customize & Launch</h3>
                        <p>Use our visual editor to tweak your design, then deploy to the web instantly.</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="features" className="content-section fade-in-section">
            <div className="container">
                <h2 className="section-title">Everything you need to build and launch</h2>
                <p className="section-subtitle">Dreamera is packed with powerful features to bring your vision to life.</p>
                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon">[ICON]</div>
                        <h3>AI-Powered App Creation</h3>
                        <p>Instantly turn plain-language ideas into working prototypes.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">[ICON]</div>
                        <h3>Drag-and-Drop Customization</h3>
                        <p>Adjust layouts, colors, and features without touching code.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">[ICON]</div>
                        <h3>Instant Deployment</h3>
                        <p>Launch your app to the web in seconds, right from Dreamera.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">[ICON]</div>
                        <h3>Built-in Hosting & Scaling</h3>
                        <p>Your app runs on fast, secure infrastructure with no setup.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">[ICON]</div>
                        <h3>Template Library</h3>
                        <p>Start from proven designs for e-commerce, portfolios, and more.</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="use-cases" className="content-section fade-in-section">
            <div className="container">
                <h2 className="section-title">Build Anything You Can Imagine</h2>
                <p className="section-subtitle">From side-projects to full-blown businesses, Dreamera can build it.</p>
                <div className="use-cases-grid">
                    <div className="use-case-card">
                        <img src="https://placehold.co/600x400/1a1a1a/f0f0f0?text=E-commerce+Store" alt="E-commerce Store mockup" />
                        <h3>E-commerce Store</h3>
                        <p>Sell products online with payment processing, product management, and a clean storefront.</p>
                    </div>
                    <div className="use-case-card">
                        <img src="https://placehold.co/600x400/1a1a1a/f0f0f0?text=Portfolio+Website" alt="Portfolio Website mockup" />
                        <h3>Portfolio Website</h3>
                        <p>Showcase creative work with image galleries, contact forms, and blog integration.</p>
                    </div>
                    <div className="use-case-card">
                        <img src="https://placehold.co/600x400/1a1a1a/f0f0f0?text=Booking+Platform" alt="Booking Platform mockup" />
                        <h3>Booking Platform</h3>
                        <p>Let customers schedule appointments, make reservations, and receive reminders automatically.</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="testimonials" className="content-section fade-in-section">
            <div className="container">
                <h2 className="section-title">Loved by Creators Everywhere</h2>
                <p className="section-subtitle">Don't just take our word for it. Here's what people are saying about Dreamera.</p>
                <div className="testimonials-grid">
                    <div className="testimonial-card">
                        <p>"Dreamera is a game-changer. I built my entire startup's MVP in a weekend without writing a single line of code."</p>
                        <div className="testimonial-author">
                            <img src="https://placehold.co/40x40/f0f0f0/0a0a0a?text=A" alt="Author avatar" />
                            <span>- Sarah L., Founder of PetPals</span>
                        </div>
                    </div>
                    <div className="testimonial-card">
                        <p>"As a designer, I always had ideas for apps but no way to build them. Dreamera bridged that gap perfectly. Incredible tool!"</p>
                        <div className="testimonial-author">
                            <img src="https://placehold.co/40x40/f0f0f0/0a0a0a?text=M" alt="Author avatar" />
                            <span>- Mike R., Freelance Designer</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="pricing" className="content-section fade-in-section">
            <div className="container">
                <h2 className="section-title">Find a Plan to Match Your Ambition</h2>
                <p className="section-subtitle">Start for free and scale as you grow. All plans include our core features.</p>
                <div className="pricing-grid">
                    <div className="pricing-card">
                        <h3>Free</h3>
                        <p className="price"><span>$0</span>/month</p>
                        <p>For individuals and hobby projects.</p>
                        <ul>
                            <li>1 App</li>
                            <li>Community Support</li>
                            <li>Dreamera Subdomain</li>
                        </ul>
                        <a href="#" className="button button-secondary">Get Started</a>
                    </div>
                    <div className="pricing-card highlighted">
                        <h3>Pro</h3>
                        <p className="price"><span>$29</span>/month</p>
                        <p>For professionals and small businesses.</p>
                        <ul>
                            <li>10 Apps</li>
                            <li>Email Support</li>
                            <li>Custom Domain</li>
                        </ul>
                        <a href="#" className="button button-primary">Choose Pro</a>
                    </div>
                    <div className="pricing-card">
                        <h3>Business</h3>
                        <p className="price"><span>$99</span>/month</p>
                        <p>For growing teams and agencies.</p>
                        <ul>
                            <li>Unlimited Apps</li>
                            <li>Priority Support</li>
                            <li>Advanced Analytics</li>
                        </ul>
                        <a href="#" className="button button-secondary">Contact Sales</a>
                    </div>
                </div>
            </div>
        </section>

        <section id="faq" className="content-section fade-in-section">
            <div className="container">
                <h2 className="section-title">Frequently Asked Questions</h2>
                <div className="faq-accordion">
                    <div className="faq-item">
                        <button className="faq-question">
                            <span>What kind of apps can I build?</span>
                            <span className="faq-icon">+</span>
                        </button>
                        <div className="faq-answer">
                            <p>You can build a wide variety of web applications, from simple portfolio websites and blogs to more complex e-commerce stores, booking platforms, and internal tools. If you can describe it, Dreamera can likely build it.</p>
                        </div>
                    </div>
                    <div className="faq-item">
                        <button className="faq-question">
                            <span>Do I need to know how to code?</span>
                            <span className="faq-icon">+</span>
                        </button>
                        <div className="faq-answer">
                            <p>Absolutely not! Dreamera is designed for non-technical creators. You just need to describe your idea in plain English, and our AI will handle the coding for you.</p>
                        </div>
                    </div>
                    <div className="faq-item">
                        <button className="faq-question">
                            <span>Can I use my own domain name?</span>
                            <span className="faq-icon">+</span>
                        </button>
                        <div className="faq-answer">
                            <p>Yes, custom domain support is available on our Pro and Business plans. You can easily connect your own domain to your Dreamera-built app.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <footer className="site-footer">
        <div className="container">
            <div className="footer-content">
                <div className="footer-logo">Dreamera</div>
                <div className="footer-links">
                    <a href="#features">Features</a>
                    <a href="#pricing">Pricing</a>
                    <a href="#">Terms of Service</a>
                    <a href="#">Privacy Policy</a>
                </div>
                <div className="footer-social">
                    <a href="#">[T]</a>
                    <a href="#">[G]</a>
                    <a href="#">[L]</a>
                </div>
            </div>
            <div className="footer-copyright">
                &copy; 2024 Dreamera. All rights reserved.
            </div>
        </div>
    </footer>
    </>
  );
}
