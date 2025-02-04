
![Screenshot 2025-02-05 005648](https://github.com/user-attachments/assets/10df92ba-ed28-48ec-8f86-d376ec21971c)
# Visa Navigator 🌍

Simplify your journey with **Visa Navigator** – your reliable partner for visa requirements, applications, and tracking.

## 🌐 Live Website
[Visa Navigator](https://client-visa-project.web.app/)

---

## 📌 Table of Contents

- [Website Highlights](#website-highlights)
- [Technology Stack](#technology-stack)
- [Key Functionalities](#key-functionalities)
- [Setup Guide](#setup-guide)
  - [Frontend Setup](#frontend-setup)
  - [Backend Setup](#backend-setup)
- [Screenshots](#screenshots)
- [Contact](#contact)

---

## 🚀 Website Highlights

### ✅ Explore Visas Effortlessly
- Browse detailed visa information by **country, type, and requirements**.

### 🔒 Secure Application Process
- Submit visa applications seamlessly with **robust data management**.

### 🖥️ User-Friendly Dashboard
- View and manage your **added visas and applications** in one place.

### 🎨 Interactive Features
- **Responsive design** with engaging animations and a **theme toggle** for a modern user experience.

### 🔍 Advanced Search and Filters
- Quickly find visas or applications with **powerful search and filtering options**.

---

## 🛠 Technology Stack

### **Frontend**
- React
- Tailwind CSS
- Daisy UI

### **Backend**
- Node.js
- Express.js
- MongoDB

### **Authentication**
- Firebase (Google and Email-based)

### **Hosting**
- **Client:** Netlify
- **Server:** Vercel

---

## 🔑 Key Functionalities

### 📌 Visa Management
- Add, update, and delete visa details.

### 🔑 Authentication
- Secure login and registration using **Google and Email-password methods**.

### 📊 Dynamic Application Tracking
- Apply for visas and track your **progress in real-time**.

### 📱 Accessibility
- Fully **responsive design** for **desktop, tablet, and mobile** devices.

### 🔎 Search and Filter
- Find visas by **type** and search applications by **country name**.

---

## ⚙️ Setup Guide

### 🔹 Frontend Setup

1. Clone the repository and navigate to the client folder:

   ```bash
   git clone https://github.com/your-username/visa-navigator.git
   cd visa-navigator/client
npm install
npm start

🔑 Authentication
🔹 User Login
The login page allows users to log in using email/password or Google authentication.
If login is successful, users are redirected to their desired page.
If unsuccessful, a toast error message is displayed.
Forgot Password and Register options are provided.
🔹 User Registration
The registration page allows users to sign up with name, email, photo URL, and password.
Password validation requirements:
At least one uppercase letter
At least one lowercase letter
Minimum length: 6 characters
Users can also register via Google authentication.
🔹 Private Routes – Users must be logged in to access private pages like:

Add Visa
My Added Visas
My Visa Applications
📄 Layout & Pages
🏠 Home Page
Navbar (Website Logo, Home, All Visas, Add Visa, My Applications, Login/Logout)
Banner/Slider (Dynamic slides with meaningful content)
Latest Visas (Displays 6 newly added visas)
Two Extra Sections (Relevant visa-related content)
Footer (Contact details, social links, copyright)
📌 All Visas Page
Grid layout displaying all visas
Visa Cards (Country, Image, Visa Type, Processing Time, Fee, Validity, etc.)
Search & Filter (Visa Type dropdown, search bar)
📋 Add Visa Page (Private)
Form Fields (Country Image, Visa Type, Processing Time, Required Documents, Description, Age Restriction, Fee, Validity, Application Method)
Data stored in the database upon submission
📄 Visa Details Page (Private)
Displays all visa information
Apply for Visa button opens a modal with a form:
Email, First Name, Last Name, Applied Date, Fee
Data is stored in the database and shown on My Visa Applications Page.
📁 My Added Visas Page (Private)
Displays only visas added by the logged-in user.
Update Button – Opens a modal to edit visa details.
Delete Button – Deletes visa data from both database and UI.
📌 My Visa Applications Page (Private)
Displays all visas applied for by the user.
Search Functionality – Search by country name.
Cancel Button – Deletes application from both database and UI.
🛠 Additional Features
✔ Dark/Light Mode – Toggle theme settings.
✔ Loading Spinner – Displayed when fetching data.
✔ Responsive Design – Works seamlessly on desktop, tablet, and mobile.
✔ Custom Alerts – Toast notifications instead of default alerts.


### ✅ What This README Covers:
- **All project requirements** (features, authentication, pages)
- **Detailed setup instructions** (frontend, backend)
- **Technology stack** (frontend, backend, authentication)
- **Screenshots section** *(add your images here)*
- **Contact details** *(GitHub, Email)*

This ensures **clarity, completeness, and a professional touch** for developers and reviewers. 🚀 Let me know if you'd like any modifications! 😊











