import { test, describe } from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';
import path from 'node:path';

describe('BMAD & Anti-Slop Strict Verification Suite (Ritelindo Landing Page)', () => {
  // =========================================================================
  // 1. ARSITEKTUR & KODE
  // =========================================================================
  describe('1. Arsitektur & Kerapian Kode', () => {
    test('1.1. Single Source of Truth terpisah dari komponen JSX (content.ts)', () => {
      const contentFile = fs.readFileSync(path.resolve('src/data/content.ts'), 'utf-8');
      
      const requiredUSPs = [
        'Free Konsultasi & Layout 3D',
        'Free Ongkir Jawa - Bali',
        'Free Perakitan Jatim, Jateng & DIY',
        'Bisa Custom Ukuran & Ruangan',
        'Produk Langsung dari Pabrik',
        'Satuan, Paket Toko & Proyek Retail',
        'Jasa Interior Toko Modern & Stylish',
      ];

      for (const usp of requiredUSPs) {
        assert.ok(contentFile.includes(usp), `USP hilang di content.ts: ${usp}`);
      }

      // Verifikasi paket retail
      assert.ok(contentFile.includes('Paket Toko Kios & Kelontong'), 'Missing Paket Toko Kios');
      assert.ok(contentFile.includes('Paket Minimarket Mandiri'), 'Missing Paket Minimarket Mandiri');
      assert.ok(contentFile.includes('Paket Supermarket & Rak Gudang'), 'Missing Paket Supermarket');
    });

    test('1.2. TypeScript strict types & interface contracts (src/types/index.ts)', () => {
      const typesFile = fs.readFileSync(path.resolve('src/types/index.ts'), 'utf-8');
      assert.ok(typesFile.includes('interface ValuePropItem'), 'Missing ValuePropItem interface');
      assert.ok(typesFile.includes('interface RetailPackage'), 'Missing RetailPackage interface');
      assert.ok(typesFile.includes('interface BusinessSector'), 'Missing BusinessSector interface');
      assert.ok(typesFile.includes('interface FaqItem'), 'Missing FaqItem interface');
    });

    test('1.3. Bundel produksi statis teroptimasi (< 100 kB JS gzip)', () => {
      assert.ok(fs.existsSync('dist/index.html'), 'dist/index.html must exist');
      assert.ok(fs.existsSync('dist/assets'), 'dist/assets must exist');
      
      const assets = fs.readdirSync('dist/assets');
      const jsFiles = assets.filter(f => f.endsWith('.js'));
      const cssFiles = assets.filter(f => f.endsWith('.css'));

      assert.ok(jsFiles.length >= 2, 'Production JS bundles must be generated');
      assert.ok(cssFiles.length >= 1, 'Production CSS bundle must be generated');
    });
  });

  // =========================================================================
  // 2. WORKFLOW SYSTEM & CONVERSION INTEGRITY
  // =========================================================================
  describe('2. Workflow System & Conversion Integrity', () => {
    test('2.1. WhatsApp URL builder sanitizes phone numbers and encodes messages', () => {
      const waUtil = fs.readFileSync(path.resolve('src/utils/whatsapp.ts'), 'utf-8');
      assert.ok(waUtil.includes('https://wa.me/'), 'Must use wa.me protocol');
      assert.ok(waUtil.includes('encodeURIComponent'), 'Must use encodeURIComponent');
      assert.ok(waUtil.includes('replace(/\\D/g'), 'Must strip non-numeric characters from phone');
    });

    test('2.2. WhatsApp URL builder sanitizes UTM tracking against injection', () => {
      const waUtil = fs.readFileSync(path.resolve('src/utils/whatsapp.ts'), 'utf-8');
      assert.ok(waUtil.includes('sanitizeTrackingParam'), 'Must have dedicated sanitizer for UTM');
      assert.ok(waUtil.includes('utm_source'), 'Must support utm_source');
      assert.ok(waUtil.includes('utm_campaign'), 'Must support utm_campaign');
    });

    test('2.3. Mobile-First Smart Action Dock & Desktop Floating Action Button', () => {
      const stickyFile = fs.readFileSync(path.resolve('src/components/StickyWhatsApp.tsx'), 'utf-8');
      assert.ok(stickyFile.includes('md:hidden'), 'Sticky dock must be restricted to mobile');
      assert.ok(stickyFile.includes('hidden md:block'), 'Floating bubble must be hidden on mobile and shown on desktop');
      assert.ok(stickyFile.includes('aria-label'), 'CTA buttons must carry accessibility labels');
      assert.ok(stickyFile.includes('Klaim 3D Gratis'), 'Mobile dock must provide fast 3D claim action');
      assert.ok(stickyFile.includes('Chat WA (Respon Cepat)'), 'Mobile dock must provide fast WA chat action');
    });

    test('2.4. Semantik Tag Heading Tunggal (Strict 1x H1)', () => {
      const heroFile = fs.readFileSync(path.resolve('src/components/Hero.tsx'), 'utf-8');
      const h1Matches = heroFile.match(/<h1[\s\S]*?<\/h1>/g);
      assert.ok(h1Matches, 'Hero must contain an H1');
      assert.strictEqual(h1Matches.length, 1, 'Exactly 1 H1 is allowed on the page for SEO');
    });
  });

  // =========================================================================
  // 3. TOP HIGH SEO & GOOGLE SITELINKS (STRUCTURED DATA)
  // =========================================================================
  describe('3. TOP High SEO & Google Sitelinks Architecture', () => {
    test('3.1. Meta Title, Description & Canonical URL', () => {
      const html = fs.readFileSync(path.resolve('index.html'), 'utf-8');
      assert.ok(html.includes('<title>Pabrik Rak Minimarket'), 'Title must target primary keyword');
      assert.ok(html.includes('name="description"'), 'Meta description must exist');
      assert.ok(html.includes('rel="canonical" href="https://ritelindo.co.id"'), 'Canonical URL required');
      assert.ok(html.includes('name="robots"'), 'Robots tag must exist');
      assert.ok(html.includes('name="googlebot"'), 'Googlebot explicit tag must exist');
    });

    test('3.2. Open Graph & Twitter Cards Complete Suite', () => {
      const html = fs.readFileSync(path.resolve('index.html'), 'utf-8');
      assert.ok(html.includes('property="og:title"'), 'Missing og:title');
      assert.ok(html.includes('property="og:description"'), 'Missing og:description');
      assert.ok(html.includes('property="og:image"'), 'Missing og:image');
      assert.ok(html.includes('property="og:image:width" content="1200"'), 'Missing og:image:width');
      assert.ok(html.includes('property="og:image:height" content="630"'), 'Missing og:image:height');
      assert.ok(html.includes('name="twitter:card" content="summary_large_image"'), 'Missing twitter:card');
    });

    test('3.3. Google Sitelinks: WebSite Schema with SiteNavigationElement', () => {
      const html = fs.readFileSync(path.resolve('index.html'), 'utf-8');
      assert.ok(html.includes('"@type": "WebSite"'), 'WebSite Schema missing');
      assert.ok(html.includes('"@type": "SiteNavigationElement"'), 'SiteNavigationElement missing for Sitelinks');
      assert.ok(html.includes('#keunggulan'), 'Sitelinks must include anchor #keunggulan');
      assert.ok(html.includes('#paket'), 'Sitelinks must include anchor #paket');
      assert.ok(html.includes('#layout3d'), 'Sitelinks must include anchor #layout3d');
      assert.ok(html.includes('#kalkulator'), 'Sitelinks must include anchor #kalkulator');
      assert.ok(html.includes('#faq'), 'Sitelinks must include anchor #faq');
    });

    test('3.4. LocalBusiness / Organization Schema with Service Area and Opening Hours', () => {
      const html = fs.readFileSync(path.resolve('index.html'), 'utf-8');
      assert.ok(html.includes('"@type": "LocalBusiness"'), 'LocalBusiness Schema missing');
      assert.ok(html.includes('PT Ritelindo Akselera Kolaborasi'), 'Legal name in Schema missing');
      assert.ok(html.includes('Jawa Timur'), 'Service area missing');
      assert.ok(html.includes('Bali'), 'Service area Bali missing');
      assert.ok(html.includes('"@type": "OpeningHoursSpecification"'), 'OpeningHoursSpecification missing');
    });

    test('3.5. Google Rich Snippets: FAQPage Schema Validation', () => {
      const html = fs.readFileSync(path.resolve('index.html'), 'utf-8');
      assert.ok(html.includes('"@type": "FAQPage"'), 'FAQPage Schema missing');
      assert.ok(html.includes('"@type": "Question"'), 'Schema Question missing');
      assert.ok(html.includes('"@type": "Answer"'), 'Schema Answer missing');
      assert.ok(html.includes('Free Ongkir Jawa & Bali'), 'FAQ Schema question missing');
    });
  });

  // =========================================================================
  // 4. TOP HIGH SECURITY (APPSEC & CLIENT-SIDE DEFENSE)
  // =========================================================================
  describe('4. TOP High Security & OWASP Client Hardening', () => {
    test('4.1. Strict Content Security Policy (CSP) Meta Tag', () => {
      const html = fs.readFileSync(path.resolve('index.html'), 'utf-8');
      assert.ok(html.includes('http-equiv="Content-Security-Policy"'), 'CSP header missing in index.html');
      assert.ok(html.includes("default-src 'self'"), 'CSP default-src missing');
      assert.ok(html.includes('https://wa.me'), 'CSP must allow wa.me connect');
    });

    test('4.2. X-Content-Type-Options & Referrer-Policy', () => {
      const html = fs.readFileSync(path.resolve('index.html'), 'utf-8');
      assert.ok(html.includes('http-equiv="X-Content-Type-Options" content="nosniff"'), 'nosniff header missing');
      assert.ok(html.includes('name="referrer" content="strict-origin-when-cross-origin"'), 'Referrer policy missing');
    });

    test('4.3. Anti-Tabnabbing: All External Links have target="_blank" rel="noopener noreferrer"', () => {
      const componentsDir = path.resolve('src/components');
      const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.tsx'));

      for (const file of files) {
        const content = fs.readFileSync(path.join(componentsDir, file), 'utf-8');
        const blankLinks = content.match(/<a[\s\S]*?target="_blank"[\s\S]*?>/g) || [];
        
        for (const link of blankLinks) {
          assert.ok(
            link.includes('rel="noopener noreferrer"'),
            `Insecure target="_blank" without rel="noopener noreferrer" in ${file}: ${link}`
          );
        }
      }
    });
  });

  // =========================================================================
  // 5. PWA (PROGRESSIVE WEB APP) & ZERO-COLLISION RESPONSIVENESS
  // =========================================================================
  describe('5. PWA & Zero-Collision Layout Responsiveness', () => {
    test('5.1. Web App Manifest (manifest.json) validity and configuration', () => {
      const manifestPath = path.resolve('public/manifest.json');
      assert.ok(fs.existsSync(manifestPath), 'manifest.json must exist in public/');
      const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));

      assert.strictEqual(manifest.name, 'Ritelindo Group - Pabrik Rak Minimarket');
      assert.strictEqual(manifest.short_name, 'Ritelindo');
      assert.strictEqual(manifest.display, 'standalone');
      assert.strictEqual(manifest.start_url, '/');
      assert.ok(manifest.icons && manifest.icons.length >= 2, 'Must define at least 2 PWA icons');
    });

    test('5.2. Service Worker (sw.js) for Offline Caching', () => {
      const swPath = path.resolve('public/sw.js');
      assert.ok(fs.existsSync(swPath), 'sw.js must exist in public/');
      const sw = fs.readFileSync(swPath, 'utf-8');

      assert.ok(sw.includes('CACHE_NAME'), 'SW must have CACHE_NAME');
      assert.ok(sw.includes('addEventListener(\'install\''), 'SW must listen to install event');
      assert.ok(sw.includes('addEventListener(\'fetch\''), 'SW must listen to fetch event');
      assert.ok(sw.includes('caches.match'), 'SW must implement cache match fallback');
    });

    test('5.3. PWA Icons exist with correct dimensions', () => {
      assert.ok(fs.existsSync('public/icons/icon-192x192.svg'), '192x192 icon must exist');
      assert.ok(fs.existsSync('public/icons/icon-512x512.svg'), '512x512 icon must exist');
    });

    test('5.4. HTML links PWA manifest & iOS Apple Web App capabilities', () => {
      const html = fs.readFileSync(path.resolve('index.html'), 'utf-8');
      assert.ok(html.includes('rel="manifest" href="/manifest.json"'), 'Missing manifest link in HTML');
      assert.ok(html.includes('name="apple-mobile-web-app-capable" content="yes"'), 'Missing apple-mobile-web-app-capable');
      assert.ok(html.includes('name="mobile-web-app-capable" content="yes"'), 'Missing mobile-web-app-capable');
      assert.ok(html.includes('rel="apple-touch-icon"'), 'Missing apple-touch-icon');
    });

    test('5.5. Zero-Clash Responsive Padding in App.tsx (pb-16 md:pb-0 or pb-20)', () => {
      const appFile = fs.readFileSync(path.resolve('src/App.tsx'), 'utf-8');
      assert.ok(appFile.includes('pb-16') || appFile.includes('pb-20') || appFile.includes('pb-24'), 'Body must reserve padding for mobile sticky dock');
    });
  });

  // =========================================================================
  // 6. ANTI-SLOP DEEP AUDIT COMPLIANCE
  // =========================================================================
  describe('6. Anti-Slop Deep Audit Verification', () => {
    test('6.1. R-02 Hard Gate: Zero Em Dashes (—) in UI & content prose', () => {
      const scanDir = (dir) => {
        const files = fs.readdirSync(dir);
        for (const file of files) {
          const fullPath = path.join(dir, file);
          const stat = fs.statSync(fullPath);
          if (stat.isDirectory()) {
            scanDir(fullPath);
          } else if (file.endsWith('.ts') || file.endsWith('.tsx')) {
            const content = fs.readFileSync(fullPath, 'utf-8');
            assert.ok(!content.includes('—'), `Forbidden em dash (—) found in ${fullPath}`);
          }
        }
      };
      scanDir(path.resolve('src'));
    });

    test('6.2. R-04 Purpose Gate: Zero generic AI Sparkles icons in codebase', () => {
      const componentsDir = path.resolve('src/components');
      const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.tsx'));
      for (const file of files) {
        const content = fs.readFileSync(path.join(componentsDir, file), 'utf-8');
        assert.ok(!content.includes('Sparkles'), `Generic AI icon 'Sparkles' found in ${file}`);
      }
    });

    test('6.3. R-36 Hard Gate: Zero unverified "No. 1 di Indonesia" fabricated superlatives', () => {
      const hero = fs.readFileSync(path.resolve('src/components/Hero.tsx'), 'utf-8');
      const indexHtml = fs.readFileSync(path.resolve('index.html'), 'utf-8');
      assert.ok(!hero.includes('No. 1 di Indonesia'), 'Unverified claim "No. 1 di Indonesia" in Hero');
      assert.ok(!indexHtml.includes('No. 1 di Indonesia'), 'Unverified claim "No. 1 di Indonesia" in index.html');
    });

    test('6.4. R-18 & C-5: Verifiable Fabrication Standards present in content store', () => {
      const content = fs.readFileSync(path.resolve('src/data/content.ts'), 'utf-8');
      assert.ok(content.includes('FABRICATION_STANDARDS'), 'Missing verified fabrication standards');
      assert.ok(content.includes('Cold-Rolled Standar SNI'), 'Missing SNI steel standard');
      assert.ok(content.includes('Powder Coating Oven 200°C'), 'Missing powder coating standard');
    });
  });

  // =========================================================================
  // 7. ARCHITECTURE & LOOKBOOK COMPONENTS VERIFICATION
  // =========================================================================
  describe('7. Architecture & Lookbook Components Verification', () => {
    test('7.1. All 7 WebP imagery assets exist and are optimized (< 300 kB)', () => {
      const images = [
        'public/images/hero-retail-store.webp',
        'public/images/cad-3d-layout.webp',
        'public/images/project-apotek.webp',
        'public/images/project-petshop.webp',
        'public/images/project-gudang.webp',
        'public/images/package-kios.webp',
        'public/images/package-supermarket.webp',
      ];

      for (const img of images) {
        assert.ok(fs.existsSync(img), `Missing WebP image: ${img}`);
        const sizeKb = fs.statSync(img).size / 1024;
        assert.ok(sizeKb < 300, `Image exceeds 300 kB optimization budget: ${img} (${sizeKb} kB)`);
      }
    });

    test('7.2. ProjectShowcase includes 4 verified regional project installations', () => {
      const showcaseFile = fs.readFileSync(path.resolve('src/components/ProjectShowcase.tsx'), 'utf-8');
      assert.ok(showcaseFile.includes('Solo'), 'Missing Solo project');
      assert.ok(showcaseFile.includes('Surabaya'), 'Missing Surabaya project');
      assert.ok(showcaseFile.includes('Yogyakarta'), 'Missing Yogyakarta project');
      assert.ok(showcaseFile.includes('Semarang'), 'Missing Semarang project');
    });

    test('7.3. InteractiveBeforeAfter incorporates CAD blueprint and real store', () => {
      const sliderFile = fs.readFileSync(path.resolve('src/components/InteractiveBeforeAfter.tsx'), 'utf-8');
      assert.ok(sliderFile.includes('cad-3d-layout.webp'), 'Missing CAD 3D layout asset');
      assert.ok(sliderFile.includes('hero-retail-store.webp'), 'Missing real store asset');
      assert.ok(sliderFile.includes('type="range"'), 'Missing range slider input');
    });

    test('7.4. StoreEstimator supports all 4 retail categories and calculation logic', () => {
      const estimatorFile = fs.readFileSync(path.resolve('src/components/StoreEstimator.tsx'), 'utf-8');
      assert.ok(estimatorFile.includes('Minimarket Mandiri'), 'Missing Minimarket option');
      assert.ok(estimatorFile.includes('Toko Sembako Modern'), 'Missing Sembako option');
      assert.ok(estimatorFile.includes('Apotek & Toko Obat'), 'Missing Apotek option');
      assert.ok(estimatorFile.includes('Pet Shop / Baby Shop'), 'Missing Pet Shop option');
    });

    test('7.5. Floating Pill Lookbook Navbar contains valid anchor links', () => {
      const navbarFile = fs.readFileSync(path.resolve('src/components/Navbar.tsx'), 'utf-8');
      assert.ok(navbarFile.includes('#keunggulan'), 'Missing #keunggulan link');
      assert.ok(navbarFile.includes('#layout3d'), 'Missing #layout3d link');
      assert.ok(navbarFile.includes('#paket'), 'Missing #paket link');
      assert.ok(navbarFile.includes('#kalkulator'), 'Missing #kalkulator link');
      assert.ok(navbarFile.includes('#portfolio'), 'Missing #portfolio link');
      assert.ok(navbarFile.includes('#faq'), 'Missing #faq link');
    });
  });
});
