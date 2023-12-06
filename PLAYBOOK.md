# PLAYBOOK

## Generate

```sh
$ npx create-react-app@latest $SITENAME
$ cd $SITENAME
$ pnpm i
```

## Remove

```sh
$ rm public/*
```

## Create

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
