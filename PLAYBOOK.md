# PLAYBOOK

## Generate

```sh
$ npx create-react-app@latest $SITENAME
$ cd $SITENAME
$ pnpm i
```

## Remove

```sh
$ git rm public/*
```

## What do we want?

As `src/components/*.tsx` we want these:

- MaxWidthWrapper: the page is wrapped in here `layout.tsx`
- Navbar: the translucent menu
- Intro: a cover photo and a "hello"
- About: a wordy yet brief introduction
- Skills: a list of skills
- Experience: a wordy yet brief summary of 2019 onward
- Contact: email form

- Footer: colophon and social links `layout.tsx`

## Basics

- Remove contents of `src/app/page.tsx` leaving `<main>..</main>`.
- Create `src/lib/utils.ts` and run `pnpm i clsx tailwind-merge`

```ts
// @/src/lib/utils.ts
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

## Add MaxWidthWrapper.tsx

### @/src/app/layout.tsx

```jsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en" className="light">
      <body
        className={cn(
          "min-h-screen font-sans antialiased grainy",
          inter.className
        )}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
```
