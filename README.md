#Task List

> [!IMPORTANT]
> Have installed one of the following node versions 16.13 / 18.X / 20.X



This project was made with NextJS 13, TailwindCSS, PostgreSQL and Prisma
application link : [task list Julian Barbosa ](https://tasklist-iatf2z373-julianbarbossa19-gmailcom.vercel.app)

## Installation



First make a copy of the repository on your local:

```bash
  git clone https://github.com/JulianBarbossa9/tasklist.git
```

Second, enter the newly created project and in the console install the dependencies:

```bash
  npm install
```

Create an .env file in the root of the project to set the environment variables, those environment variables were mailed in a .txt file, copy and paste those variables inside the .env file

with the previous step you are connected to the database, now to start the project type the following in the console:

```bash
  npm run dev
```

With this go to this address [http://localhost:3000](http://localhost:3000) and you will see the project already running.

If you want to view the database, open another console in the project and type the following:

```bash
  npx prisma studio
```
