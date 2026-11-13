# stem-contracting

## Backend (Node.js + Express)

### Run locally
1. cd backend
2. npm install
3. Create a .env file with: PORT=5000
4. npm run dev  (server runs at http://localhost:5000)

### API
| Method | Route | Purpose |
|---|---|---|
| GET | /api/health | Check the server is running |
| GET | /api/projects | List projects (optional ?category=Residential) |
| GET | /api/projects/:slug | One project's details |
| GET | /api/services | List services |
| POST | /api/inquiries | Submit the contact form (validated) |

### Data models
- Project: id, slug, title, category, location, year, description, image, featured
- Service: id, name, description
- Inquiry: id, name, email, phone, serviceType, message, createdAt, status

### Status
Done: server setup, routes, validation, sample data (stored in JS files).
Inquiries are stored in memory only.

### Next steps (Milestone 2)
1. Choose and connect a database (MongoDB Atlas + Mongoose recommended).
2. Replace data/*.js and the inquiries array with database models.
3. Add email notification for new inquiries.
4. Add rate limiting or spam protection on POST /api/inquiries.
5. Agree on the final response format with the frontend team.
