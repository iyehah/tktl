# Tktl - Youth Initiative Platform

## Project Overview

Tktl is a web application built for a youth initiative. It provides functionalities for managing elections, tracking votes, and visualizing results in a user-friendly dashboard. The project leverages the following technologies:

* **Next.js:** A React framework for building performant and SEO-friendly web applications.
* **Firebase:** A comprehensive backend platform providing authentication, database, and analytics services.
* **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
* **Chart.js:** A JavaScript library for creating interactive charts and graphs.^^

## Project Structure

```
public
├── file.svg
├── globe.svg
├── logo.png
├── next.svg
├── users.json
├── vercel.svg
├── window.svg
src
├── app
├── ├── dashboard-admin
├── ├── ├── page.tsx
├── ├── dashboard-login
├── ├── ├── page.tsx
├── ├── favicon.ico
├── ├── fonts
├── ├── ├── Amiri-Regular.ttf
├── ├── ├── GeistMonoVF.woff
├── ├── ├── GeistVF.woff
├── ├── globals.css
├── ├── layout.tsx
├── ├── page.tsx
├── ├── register
├── ├── ├── page.tsx
├── ├── send
├── ├── ├── page.tsx
├── ├── voted
├── ├── ├── page.tsx
├── components
├── ├── CandidateChart.tsx
├── ├── CandidateImages.tsx
├── ├── Header.tsx
├── ├── HeaderAdmin.tsx
├── ├── LoginForm.tsx
├── ├── Profile.tsx
├── ├── ResetVotes.tsx
├── ├── TimeEnd.tsx
├── ├── TimeManagement.tsx
├── ├── TimeStart.tsx
├── ├── UserManagement.tsx
├── ├── result.tsx
├── lib
├── ├── firebase.ts
.gitignore
.hintrc
LICENSE
README.md
package.json
next.config.ts
postcss.config.mjs
tailwind.config.ts
tsconfig.json
```

* `src/app/globals.css`: Contains global CSS styles and configurations for the application.
* `src/components/HeaderAdmin.tsx`: Defines the header component for the admin dashboard, including logout functionality.
* `src/lib/firebase.ts`: Initializes Firebase services (authentication, database, analytics) with project configuration.
* `next.config.ts`: Configuration file for Next.js.
* `tsconfig.json`: Configuration file for TypeScript.
* `package.json`: Lists project dependencies and scripts.
* `tailwind.config.ts`: Configuration file for Tailwind CSS.
* `postcss.config.mjs`: Configuration file for PostCSS.

## Functions

### `HeaderAdmin`

This function defines the header component for the admin dashboard. It displays the logo, the title "التكــتل الشبابي", and a logout button. When the logout button is clicked, it signs the user out using Firebase authentication and redirects them to the login page.

## Getting Started

1. **Clone the repository:**
   **Bash**

   ```
   git clone https://github.com/your-username/tktl.git
   ```
2. **Install dependencies:**
   **Bash**

   ```
   cd tktl
   npm install
   ```
3. **Set up Firebase:**

   * Create a Firebase project in the Firebase console.
   * Enable email/password authentication.
   * Replace the placeholder configuration in `src/lib/firebase.ts` with your Firebase project's configuration.
4. **Run the development server:**
   **Bash**

   ```
   npm run dev
   ```

## Contributing

**Contributions are welcome! Please feel free to reach out to the project owner [Iyehah](https://github.com/iyehah), and if approved, you will be invited to contribute to the project.**

## License

**This project is licensed under the MIT License - see the LICENSE file for details.**
