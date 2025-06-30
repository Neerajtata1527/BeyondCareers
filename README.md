🚀 **BEYOND CAREERS**
A small initiative aimed at celebrating raw skill and talent among youth.
This is the landing page project for Beyond Careers — simple, effective, and made with purpose.

---

🧠 **Why I Designed It This Way**
💡 **The Thought Behind the Layout**
I chose this layout to reflect the vibe of our brand and logo — neat, focused, and not too flashy. Everything from the homepage to the footer is organized in a clean way so that users can just scroll through and understand what Beyond Careers is about, without getting lost.
I didn’t want to go overboard with effects or animations. Instead, I focused on keeping it consistent and smooth — something that feels professional but still welcoming.

---

🎨 **Colors & Fonts**
The site mainly uses sky blue and pale lemon yellow, both of which match the logo and give a calm, positive vibe.
As for fonts, I kept them clean and simple — nothing fancy, just readable and modern.

---

💻 **What I Used to Build It**
🧱 **Tech Stack**
**Python (Flask)**
Flask handles the backend — routing between pages and rendering the templates.
**Bootstrap**
This helped a lot with layout and responsiveness. Using its grid system and prebuilt components saved a ton of time and made things look good right away.
**HTML + CSS + JS**
I used basic HTML and CSS to customize styles beyond what Bootstrap offers.
JavaScript brought the site to life — like hover effects, animations, and conditional styling to make it more interactive.

---

🧩 **Challenges I Faced (and Solved!)**
Like any project, there were a few hiccups along the way:
**JavaScript Console Errors**:
I kept seeing weird errors in the browser console. Turns out, some of them were just silly typos or small mistakes in JS syntax. Fixed those with some patience (and yeah, ChatGPT helped 😄).
**Site Crashed on First Launch**:
During deployment, the site crashed. I later realized it was because of missing files and folder structure issues. I reorganized things and made sure dependencies were properly listed — it worked fine after that.

---
**📈 How I Improved Performance**
Mobile Responsiveness
I made sure the site looks good on both phones and desktops. Used Bootstrap classes like col-lg-6 to handle layout changes on different screen sizes.
Code Reusability
Instead of repeating code for things like the navbar or footer on every page, I created separate files like header.html and footer.html and used Flask’s Jinja to include them wherever needed. It made the code cleaner and easier to manage.
Clean-Up
Removed unnecessary or duplicate code, shortened the CSS, and organized assets properly so the project stays neat.

---

🚀 **How I Deployed It**
🔧 Step-by-Step
Created a GitHub repo and pushed all my project files using Git Bash.
Used Render (a free cloud platform) to host the Flask app.

---

🧠 **Why I Chose Render**
It supports Python + Flask, which many free platforms don’t.
The setup is beginner-friendly — perfect for student projects.
The only downside is that the site "sleeps" if not used for a while, so sometimes it takes about a minute to load after being idle. After that, it stays active for a while.

**Solution to tackle coldstart on render**
To tackle this downside of render i.e(idle state of website upon not using it), i had made use of some automated bot(uptimer robot) which will keep the website in active state continously by visiting the website after every 5 minutes..


---



## 📸 Screenshots / Demo
<img width="959" alt="bc1" src="https://github.com/user-attachments/assets/593123d4-1fc5-4708-8ee0-0f1d5b31cfce" />
<img width="959" alt="bc2" src="https://github.com/user-attachments/assets/092fc08c-dd15-477f-a47a-cefde50a9c78" />
<img width="959" alt="bc3" src="https://github.com/user-attachments/assets/a85ad50c-dba4-4dfc-b347-c2cdc8e96413" />
<img width="959" alt="bc4" src="https://github.com/user-attachments/assets/5240de30-124f-497e-81fd-dbd2b2344307" />

---
📂 **Project Structure**

BeyondCareers/
├── static/              # CSS, JS, and images go here
│   ├── css/
│   ├── js/
│   └── assets/
├── templates/           # HTML files using Jinja2 templating
│   ├── header.html
│   ├── footer.html
│   ├── index.html
│   └── about.html
├── main.py              # The main Flask app
├── requirements.txt     # All Python dependencies
└── README.md            # This documentation

---



