import { createTRPCClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from '../server/index';

const trpc = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:3000',
    }),
  ],
});

async function main(){
let res=await trpc.createTodo.mutate({
    title:"Divyansh Gupta",
    description:"jdhjs"
});
console.log(res);

    let res2=await trpc.signup.mutate({
        email:"divyanshgupta1811@gmail.com",
        password:"156",
    })
    console.log(res2.token);
}
main();