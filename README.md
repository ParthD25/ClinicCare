# ClinicCare+

I built ClinicCare+ as an evolution of the original ClinicCare database project. This intelligent dental clinic assistant platform adds AI-powered features for better patient care and clinic management, with special attention to medication warnings for blood thinners and anticoagulants.

## Project Structure

```
cliniccare-plus/
├── backend/                    # Database and API
│   ├── schema.sql             # Base database schema
│   ├── schema_plus.sql        # ClinicCare+ extensions
│   ├── dental_updates.sql     # Dental-specific updates
│   ├── setup_plus.ps1         # Database setup script
│   └── api/                   # FastAPI backend
│       ├── main.py            # API endpoints
│       ├── database.py        # Database connection
│       ├── models.py          # Pydantic models
│       ├── requirements.txt   # Python dependencies
│       └── test_db.py         # Database connectivity test
├── frontend/                   # Web and mobile apps
│   ├── mobile/                # React Native app (Expo)
│   │   ├── App.js             # Main navigation
│   │   ├── screens/           # Screen components
│   │   │   ├── HomeScreen.js
│   │   │   ├── CostEstimatorScreen.js
│   │   │   ├── PatientListScreen.js
│   │   │   ├── AppointmentListScreen.js
│   │   │   └── TreatmentListScreen.js
│   │   ├── package.json
│   │   └── app.json
│   └── web/                   # Next.js patient portal
│       ├── src/app/page.tsx   # Patient portal interface
│       └── package.json
└── README.md                  # This file
```

## Features

- **AI Treatment Cost & Insurance Estimator**: Calculate out-of-pocket costs based on insurance coverage with medication warnings
- **Smart Reminders**: Bi-weekly wellness check-ins and custom Invisalign schedules
- **Patient Portal**: Secure access to appointments, documents, and e-signatures
- **Clinic Dashboard**: Insights on KPIs, no-shows, and inventory alerts
- **Inventory Management**: Track supplies and predict usage based on appointments
- **Medication Warnings**: Automatic alerts for patients on blood thinners or anticoagulants

## Quick Start

### 1. Database Setup
```powershell
cd backend
.\setup_plus.ps1
```
This creates `cliniccare_plus.db` with all tables and sample data.

### 2. Backend API
```bash
cd backend/api
pip install -r requirements.txt
python -m uvicorn main:app --reload --host 0.0.0.0 --port 8000
```
API will be available at http://localhost:8000

### 3. Mobile App
```bash
cd frontend/mobile
npm install
npx expo start
```
Scan QR code with Expo Go app on your phone.

### 4. Web Portal
```bash
cd frontend/web
npm install
npm run dev
```
Web portal available at http://localhost:3000

## API Endpoints

- `GET /patients` - List all patients
- `GET /treatments` - List all treatments
- `GET /appointments` - List appointments (filter by patient_id)
- `POST /cost-estimate` - Calculate treatment costs with insurance
- `GET /reminders` - Get patient reminders
- `POST /reminders` - Create new reminders

## 🚀 Deployment

### Web Portal (Cloudflare Pages)
```bash
cd frontend/web
npm run build
wrangler pages deploy .next
```

### Backend API (Railway/Render)
- FastAPI backend needs Python hosting (not Cloudflare)
- Recommended: Railway.app or Render.com
- See `CLOUDFLARE_DEPLOYMENT.md` for detailed instructions

### Mobile App (App Stores)
```bash
cd frontend/mobile
npx expo build:ios    # iOS
npx expo build:android # Android
```

## Tech Stack

- **Mobile App**: React Native with Expo (cross-platform iOS/Android)
- **Web Portal**: Next.js with TypeScript and Tailwind CSS
- **Backend API**: FastAPI (Python) with automatic OpenAPI docs
- **Database**: SQLite (development) → PostgreSQL (production)
- **ORM**: SQLAlchemy for database operations

## Development Notes

- **Medication Safety**: Special attention to blood thinner warnings in cost calculations
- **Insurance Integration**: Cost estimator accounts for coverage percentages and deductibles
- **Cross-Platform**: Single codebase for iOS and Android mobile apps
- **Responsive Design**: Web portal works on desktop and mobile browsers

## Testing the System

1. Start all three servers (API, mobile, web)
2. In the mobile app, use the Cost Estimator to calculate treatment costs
3. In the web portal, select patients to view their appointments
4. Check API documentation at http://localhost:8000/docs

The system is now fully functional with end-to-end integration between mobile app, web portal, and backend API!
