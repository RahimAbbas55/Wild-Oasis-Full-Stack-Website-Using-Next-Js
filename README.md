# Wild Oasis Client Side Website in NextJS

This is a full-stack website built and deployed using the popular Vercel framework called "NextJS". This is the client side website of one of my previous projects [The Wild Oasis](https://wild-oasis-m.vercel.app/login). 

***Live Demo*** : https://wild-oasis-six-tau.vercel.app


# Funcationalities:

-> The user can log in to the website using their google accounts if they want to make any reservations.

-> There are 8 luxury cabins that are available to reserve each with different capacity and prices.

-> The user can edit or delete their already made reservations once they are logged into their account from the "Account" page.


# Technologies Used:

-> Next JS - [ Framework ]

-> React Hooks - [ useState, useTransition etc ]

-> Tailwind CSS - [ Styling the website ]


# Project Images:

-> Homepage:

<img width="1385" alt="Homepage" src="https://github.com/user-attachments/assets/0d405bee-efdb-464e-8006-101afe68061c">

-> About Page-1:

<img width="1385" alt="About" src="https://github.com/user-attachments/assets/2151fe66-6eeb-4b4d-8613-21eaa39765e0">

-> About Page-2:

<img width="1372" alt="About-2" src="https://github.com/user-attachments/assets/a686b4e0-7f87-4f2f-bee7-c748b91fe03c">

-> Cabins-1:

<img width="1386" alt="Cabins" src="https://github.com/user-attachments/assets/dad06a9e-3ae4-44a2-9819-8c5d7e094c35">

-> Cabins-2:

<img width="1389" alt="Cabins-2" src="https://github.com/user-attachments/assets/afa542f0-084b-45ef-9b97-dbd156f8d1ee">

-> Account Page:

<img width="1386" alt="Reservations" src="https://github.com/user-attachments/assets/42a05c95-d2d2-4296-8ce8-3e9b5c56e1e0">

-> Edit Reservations:

<img width="1385" alt="Edit Reservation" src="https://github.com/user-attachments/assets/4b05720a-c72f-436f-9e6f-f723f002d94b">


## Note:

Feel free to use this project and in case of any issues or queries, contact me using my socials in my bio. Happy Coding😊


## Getting Started

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Creating an Environment Variables File:

-> Make a new file in your project folder with the name of '***.env.local***'.

-> Make the following variables in that file:

  => SUPABASE_URL: <Your supabase account url>
  
  => SUPABASE_KEY: < Your supabase API key>

  => NEXTAUTH_URL: <Your NEXT Auth url from nextauth website>

  => NEXTAUTH_SECRET: <Your NEXT Auth secret key from nextauth website>
  
  => AUTH_GOOGLE_ID: <Your google auth id from Google Developer Console>

  => AUTH_GOOGLE_SECRET: <Your google auth secret key from Google Developer Console>


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
