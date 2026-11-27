# stem-contracting

## Backend (Node.js + Express)

### Run locally
1. cd backend
2. npm install
3. Copy .env.example to .env (only PORT is needed to start the server)
4. npm run dev  (http://localhost:5000)

### Environment variables
PORT, CLIENT_ORIGIN, TRUST_PROXY, MONGODB_URI, SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, MAIL_FROM, COMPANY_EMAIL (see .env.example). CLIENT_ORIGIN is the frontend URL allowed by CORS (comma-separated for several). Set TRUST_PROXY=1 when deployed behind a proxy. Never commit .env. Without MONGODB_URI the API runs, but saving inquiries fails.

### Images
Project photos are served at /images/<project-slug>/<n>.jpg (files in backend/public/images). The current photos are cropped from the company brochure and are placeholders until the originals are available. Replace the files and keep the same names.

### API
| Method | Route | Purpose |
|---|---|---|
| GET | /api/health | Check the server is running |
| GET | /api/projects | List projects. Filters: category, country, type, featured=true, search |
| GET | /api/projects/filters | Values for the filter dropdowns |
| GET | /api/projects/:slug | One project |
| GET | /api/services | List services (optional ?category=) |
| GET | /api/company | Company info, contact details, partners |
| POST | /api/inquiries | Contact form |

### Inquiry endpoint
JSON body: name, email, phone, serviceType (must be a name from /api/services), message, plus a hidden input named `website` that must stay empty (anti-spam honeypot).
Responses: 201 {success, message} | 400 {success:false, errors:{field: message}} | 429 too many requests (5 per 15 min per IP).

### Data models
- Project: id, slug, title, client, location (can be null), country, category, type, scope, duration, featured, images[]
- Service: id, slug, name, category, description
- Inquiry (MongoDB): name, email, phone, serviceType, message, status (new/contacted/closed), createdAt

### Status
Implemented: Express server; projects, services and company routes with filters; inquiries validated and saved to MongoDB with email notification, rate limiting and a honeypot; images served from /images. Pending: end-to-end test of the contact form (database and email).

### Next steps
1. End-to-end test of the contact form (database and email).
2. Deployment: set CLIENT_ORIGIN to the frontend URL and TRUST_PROXY=1.
3. Integrate the React frontend with the API.
4. Replace the brochure photos with the original ones.