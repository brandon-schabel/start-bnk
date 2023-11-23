# BNK Server Starter Template

## Quick start

```bash
echo --p bnk-starter | bash <(curl -fsSL https://raw.githubusercontent.com/brandon-schabel/bun-nook-kit/main/utils/quickstart.sh)>
```

You can replace "bnk-starter" with whatever you want to name your project.

The above commands/script will create a template from the file and run a setup script to install bun if it's not already installed, install dependencies(bun/bun-types packages). Then it will start the server and open the browser. 


## Manual setup

```bash
bun create github.com/brandon-schabel/bnk-server-starter
```

```bash
cd bnk-server-start

```

```bash
bun install
```

```bash
bun dev
```

Dev server default port 3000, link: [`http://localhost:3000`](http://localhost:3000)


Visit `http://localhost:3000` in your browser and you should see Hello world and
`http://localhost:3000/json` for the json


## Handle Form Data
```typescript
const routes = {
// ... other routes
"/poll": {
    POST: async (request) => {
      const form = await request.formData();

      const firstName = form.get("firstName");
      const lastName = form.get("lastName");

      /// do something with the data

      return new Response(`Thank you ${firstName} for taking the poll!`);
    },
  }
}
```

[Bun Nook Kit Docs](https://nookit.dev/readme)
[BNK Server Docs](https://nookit.dev/readmes/server)


Middleware type inference in route config: