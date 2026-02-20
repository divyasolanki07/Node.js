# 📝 Blog Platform - JWT Authentication & Role-Based Access

> A modern, full-featured blog application with JWT authentication, role-based access control, and beautiful UI

## ✨ Features

- 🔐 **JWT Authentication** - Secure token-based auth with HTTP-only cookies
- 👥 **Multiuser Support** - Multiple users with isolated article management
- 🛡️ **Role-Based Access** - User and Admin roles with different permissions
- 📝 **CRUD Operations** - Full create, read, update, delete for articles
- 🎨 **Modern UI** - Glassmorphism, gradients, and smooth animations
- 📱 **Responsive Design** - Works on desktop, tablet, and mobile
- 🔗 **Population** - Mongoose population displays author information

## 🚀 Quick Start

### Prerequisites

**You must install these first:**
1. [Node.js](https://nodejs.org/) - LTS version recommended
2. [MongoDB](https://www.mongodb.com/try/download/community) - Community Server OR [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (free cloud)

### Installation

```bash
# 1. Navigate to project directory
cd c:\Users\R20\Desktop\Exam

# 2. Install dependencies
npm install

# 3. Start MongoDB (if using local installation)
# Windows: MongoDB should auto-start as a service
# Check with: Get-Service -Name MongoDB

# 4. Start the application
npm start

# 5. Open in browser
# http://localhost:3000
```

## 📁 Project Structure

```
├── app.js                  # Main application
├── package.json            # Dependencies
├── config/
│   └── config.js          # JWT secret, MongoDB URI
├── models/
│   ├── user.js            # User model (username, password, role)
│   ├── article.js         # Article model (title, content, author)
│   └── comment.js         # Comment model
├── controllers/
│   ├── authController.js  # Register, login, logout
│   └── articleControoler.js # Article CRUD
├── middleware/
│   ├── authMiddleware.js  # JWT verification
│   └── roleMiddleware.js  # Admin role check
├── routes/
│   ├── auth.js            # Auth routes
│   └── articles.js        # Article routes
├── views/                  # EJS templates
│   ├── login.ejs
│   ├── register.ejs
│   ├── articleList.ejs
│   ├── myArticles.ejs
│   ├── articleForm.ejs
│   ├── editArticle.ejs
│   └── partials/navbar.ejs
└── public/css/
    └── style.css          # Modern styling (635 lines)
```

## 🎯 User Roles

### Regular User
- Create their own articles
- View all articles
- Edit/delete only their articles
- View other users' articles

### Admin
- All user permissions
- **Delete any article** (including other users')
- Admin badge in navbar

## 🧪 Testing

Follow the comprehensive testing guide:
- See [SETUP_AND_TESTING_GUIDE.md](file:///C:/Users/R20/.gemini/antigravity/brain/5cdd5492-c939-410b-a855-49fb227f569a/SETUP_AND_TESTING_GUIDE.md)

**Quick Test Flow:**
1. Register a user → Login → Create article
2. Register a second user → Create more articles
3. Verify multiuser support and population
4. Register an admin → Test role-based permissions
5. Test all CRUD operations
6. Verify responsive design

## 🎨 Technology Stack

- **Backend:** Node.js + Express.js
- **Database:** MongoDB + Mongoose
- **Template Engine:** EJS
- **Authentication:** JWT (jsonwebtoken)
- **Security:** bcrypt, HTTP-only cookies
- **Styling:** Custom CSS with modern design

## 🔒 Security Features

- ✅ Password hashing (bcrypt, 10 salt rounds)
- ✅ HTTP-only cookies (XSS protection)
- ✅ JWT with expiration (7 days)
- ✅ SameSite cookie policy (CSRF protection)
- ✅ Server-side authorization checks
- ✅ Input validation

## 🛠️ Configuration

Edit `config/config.js` to customize:

```javascript
module.exports = {
  JWT_SECRET: "your-secret-key",        // Change in production
  JWT_EXPIRES_IN: "7d",                 // Token lifetime
  MONGODB_URI: "mongodb://127.0.0.1/blogDB",  // Database URI
  PORT: 3000                             // Server port
};
```

For MongoDB Atlas (cloud):
```javascript
MONGODB_URI: "mongodb+srv://user:pass@cluster.mongodb.net/blogDB"
```

## 📚 Documentation

- **[Implementation Plan](file:///C:/Users/R20/.gemini/antigravity/brain/5cdd5492-c939-410b-a855-49fb227f569a/implementation_plan.md)** - Technical details and architecture
- **[Walkthrough](file:///C:/Users/R20/.gemini/antigravity/brain/5cdd5492-c939-410b-a855-49fb227f569a/walkthrough.md)** - Feature documentation
- **[Testing Guide](file:///C:/Users/R20/.gemini/antigravity/brain/5cdd5492-c939-410b-a855-49fb227f569a/SETUP_AND_TESTING_GUIDE.md)** - Complete testing instructions

## 🎨 UI Design

- **Purple gradient background** with fixed attachment
- **Glassmorphism** cards with backdrop blur
- **Smooth animations** on hover and click
- **Role badges** (Admin = pink, User = blue)
- **Responsive grid** for articles
- **Sticky navbar** with gradient effects

## 🚧 Troubleshooting

**MongoDB connection error?**
```powershell
Get-Service -Name MongoDB  # Check status
Start-Service MongoDB      # Start if stopped
```

**Port 3000 in use?**
```powershell
netstat -ano | findstr :3000  # Find process
taskkill /PID <PID> /F        # Kill process
```

**Missing dependencies?**
```powershell
npm install  # Reinstall all packages
```

---

**Ready to start? Install Node.js and MongoDB, then run `npm install` and `npm start`!** 🚀
