RIVA SECURITY ACADEMY — WEBSITE FILES

WHAT'S INCLUDED
- index.html: homepage with RIVA red/black design
- styles.css: responsive styling
- script.js: mobile navigation and current year
- course-cybersecurity.html: 5 lessons + interactive quiz
- course-linux.html: 5 lessons + interactive quiz
- course-web-security.html: 5 lessons + interactive quiz
- course-ethical-hacking.html: 5 lessons + interactive quiz
- quiz.js: quiz scoring

PREVIEW
1. Extract this ZIP to a folder on your computer.
2. Double-click index.html to preview it in your browser.
3. The site uses a Google Fonts import, so internet access helps the font load.

FREE HOSTING WITH GITHUB PAGES
1. Sign in to GitHub and create a new PUBLIC repository named riva-security-academy.
2. Upload all the files in this folder to the repository root (not the ZIP itself).
3. Open repository Settings -> Pages.
4. Under Build and deployment, choose Deploy from a branch, select main and /(root), then Save.
5. Wait for GitHub Pages to publish the site. The Pages screen will show the published address.

CONNECT YOUR OWN DOMAIN
After the GitHub Pages site is published:
1. In repository Settings -> Pages, enter rivasecurity.net in Custom domain and save.
2. At your domain registrar, add the DNS records GitHub Pages currently instructs you to add. For an apex domain, GitHub commonly uses four A records:
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   And an AAAA set may also be listed by GitHub. Follow the current GitHub instructions.
3. Add a CNAME record for www pointing to your GitHub Pages hostname (usually USERNAME.github.io). Replace USERNAME with your actual GitHub username.
4. Do not delete unrelated existing records. DNS propagation can take time.
5. Return to Settings -> Pages and enable Enforce HTTPS once available.

NOTES
- This is a static site; it does not need a server or database.
- Course quizzes run in the browser. They do not save student accounts or track results.
- External resources open their official websites.
- Replace or edit the About text before publishing if you want a different introduction.
