# 🌍 Countries Explorer - Frontend App

This is a [Next.js](https://nextjs.org) application built with TypeScript and SCSS Modules. It consumes the [REST Countries API](https://restcountries.com) to display detailed information about countries around the world, with search, filtering, and theme toggling features.

---

## 🚀 Getting Started

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Folder Structure

```
src/
├── app/                # Next.js 13+ App Router pages
├── Components/         # Reusable UI components (e.g. CountryCard, Header)
├── Styles/             # Global SCSS variables and mixins
├── Types/              # TypeScript interfaces and types
├── Utils/              # Utility functions (e.g. fetchers)
```

---

## ⚙️ Architecture

* **App Directory (Next.js 13+)**: Uses the `/app` directory instead of `pages/`, following the new App Router paradigm.
* **TypeScript**: Full type safety and type sharing across components.
* **CSS Modules + SCSS**: Styles are scoped locally using `.module.scss` files with global SCSS variables via `@use`.
* **REST API Integration**: Countries data is fetched from `https://restcountries.com/v3.1/all` using `fetch` inside server components or client fetchers.
* **Routing**: Each country has a detail page via dynamic routing.
* **Testing**: `jest` + `@testing-library/react` setup for unit tests with jsdom environment.

---

## 🎨 Styling

* **SCSS Modules**: Each component has its own `.module.scss` file.
* **Design Tokens**: Shared variables are defined in `styles/variables.scss`.
* **Dark/Light Theme**: Theme toggle is handled via global context and CSS custom properties.

### Colors

| Mode  | Element    | Color                |
| ----- | ---------- | -------------------- |
| Dark  | Background | `hsl(207, 26%, 17%)` |
| Dark  | Elements   | `hsl(209, 23%, 22%)` |
| Light | Text       | `hsl(200, 15%, 8%)`  |
| Light | Background | `hsl(0, 0%, 98%)`    |

---

## 🔎 Features

* 🔍 **Search**: Find countries by name using the input.
* 🌎 **Filter**: Filter by region (Africa, Americas, Asia, Europe, Oceania).
* 🌒 **Dark Mode**: Toggle light/dark theme with context.
* 🗺 **Country Details**: Click a country to view detailed info (population, languages, borders, etc).

---

## 🧪 Testing

* Unit tests are located next to components:
  `/src/Components/Foo/Foo.test.tsx`
* Run tests with:

```bash
npm run test
```

Ensure `jest.config.js` is using `"testEnvironment": "jsdom"`.

---

## 🧱 Tech Stack

* **Next.js 13+ (App Router)**
* **TypeScript**
* **SCSS Modules**
* **Jest** + **React Testing Library**
* **REST Countries API**

---

## 🌐 API Usage

We consume the [REST Countries API](https://restcountries.com) with `fetch`, using the `v3.1` endpoint. Data is normalized and passed to components via props.

Example call:

```ts
fetch('https://restcountries.com/v3.1/all')
```

---

## 🛠 Dev Tips

* Uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to load [Geist](https://vercel.com/font) or Nunito Sans.
* Dynamic imports and suspense boundaries are supported with App Router.
* The `CountryCard` and `CountrySearch` components are designed to be reusable and testable.

---

## 📦 Deployment

Deploy easily on [Vercel](https://vercel.com) (recommended).

```bash
# Build for production
npm run build
# Start production server
npm start
```

---

## 📚 Resources

* [Next.js Documentation](https://nextjs.org/docs)
* [REST Countries API](https://restcountries.com)
* [SCSS Modules](https://sass-lang.com)
* [Testing Library Docs](https://testing-library.com)

---