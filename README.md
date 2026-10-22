# Yassine Mansri: Portfolio (Next.js, free hosting)

## English
**Run locally:** `npm install` then `npm run dev`
**Edit content:** only `lib/site.ts` (text, prices, projects, WhatsApp).
**Images:** put originals in `src-images/`, run `npm run images`, then set `image: "/images/name.webp"` in `lib/site.ts`. Add a 1200×630 `public/og.jpg` for social previews.

### Deploy: Vercel Hobby (free)
1. Push the project to GitHub. 2. vercel.com → Add New → Project → import repo.
3. Framework: Next.js (auto). Build: `npm run build`. Output: `out`.
4. Env vars: none required. Optional: `NEXT_PUBLIC_SITE_URL` = your `https://xxx.vercel.app` URL (for sitemap/SEO).

### Deploy: Cloudflare Pages (free)
1. dash.cloudflare.com → Workers & Pages → Create → Pages → Connect to Git.
2. Framework preset: Next.js (Static HTML Export). Build command: `npm run build`. Output directory: `out`.
3. Env vars: `NODE_VERSION=20`. Optional: `NEXT_PUBLIC_SITE_URL` = your `https://xxx.pages.dev` URL.

No paid services, no external APIs, no custom domain needed.

## العربية
**التشغيل محلياً:** `npm install` ثم `npm run dev`
**تعديل المحتوى:** من الملف `lib/site.ts` فقط (النصوص، الأسعار، المشاريع، واتساب).
**الصور:** ضع الصور الأصلية في `src-images/` ثم شغّل `npm run images`، ثم ضع `image: "/images/الاسم.webp"` في `lib/site.ts`. أضف `public/og.jpg` بحجم 1200×630 لمعاينة المشاركة.

### النشر على Vercel (مجاني)
1. ارفع المشروع إلى GitHub. 2. من vercel.com اختر Add New ثم Project واستورد المستودع.
3. الإطار: Next.js (تلقائي). أمر البناء: `npm run build`. مجلد الإخراج: `out`.
4. لا حاجة لمتغيرات بيئة. اختياري: `NEXT_PUBLIC_SITE_URL` برابط موقعك `https://xxx.vercel.app`.

### النشر على Cloudflare Pages (مجاني)
1. من لوحة Cloudflare: Workers & Pages ثم Create ثم Pages ثم Connect to Git.
2. الإعداد المسبق: Next.js (Static HTML Export). أمر البناء: `npm run build`. مجلد الإخراج: `out`.
3. متغيرات البيئة: `NODE_VERSION=20`. اختياري: `NEXT_PUBLIC_SITE_URL` برابط `https://xxx.pages.dev`.

بدون خدمات مدفوعة، وبدون واجهات خارجية، وبدون دومين خاص.
