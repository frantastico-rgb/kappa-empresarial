# Web Kappa Empresarial - Project Setup Instructions

## Project Overview
Next.js 14 application for measuring organizational vitality using the Coeficiente Kappa (κ) methodology.

## Technology Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/ui
- **Authentication**: NextAuth.js (Google OAuth)
- **Data Source**: Google Sheets API
- **Charts**: Recharts
- **PDF Generation**: react-pdf
- **Form Validation**: Zod
- **Security**: reCAPTCHA v3, rate limiting

## Project Structure
```
/app
  /(auth)
    /login
    /callback
  /(dashboard)
    /empresa
    /analista
  /api
    /auth
    /sheets
    /pdf
  /(marketing)
    /page.tsx (landing)
/components
  /ui (shadcn)
  /dashboard
  /charts
/lib
  /google-sheets
  /validators
  /auth
/types
/public
```

## Setup Checklist

- [x] Verify copilot-instructions.md file creation
- [ ] Scaffold Next.js 14 project with TypeScript
- [ ] Install dependencies (NextAuth, Tailwind, Shadcn, etc.)
- [ ] Configure environment variables template
- [ ] Set up Google Sheets API integration
- [ ] Implement authentication with NextAuth
- [ ] Create landing page
- [ ] Build empresa dashboard
- [ ] Build analista panel
- [ ] Implement security measures
- [ ] Configure deployment for Vercel
- [ ] Test compilation and run dev server
- [ ] Update documentation

## Security Requirements
- Service Account authentication for Google Sheets
- Input validation with Zod schemas
- reCAPTCHA v3 on forms
- Rate limiting middleware
- CSP headers
- HTTPS only
- Audit logging

## Key Features
1. **Landing Page**: "El Umbral de la Soberanía" - Persuasive explanation of Coeficiente Kappa
2. **Company Dashboard**: κ visualization, 3×3 matrix, archetype detection, PDF certificates
3. **Analyst Panel**: Aggregate statistics, company list, data export

## Environment Variables Required
```
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GOOGLE_SERVICE_ACCOUNT_EMAIL=
GOOGLE_PRIVATE_KEY=
GOOGLE_SPREADSHEET_ID=
NEXTAUTH_URL=
NEXTAUTH_SECRET=
RECAPTCHA_SECRET_KEY=
```
