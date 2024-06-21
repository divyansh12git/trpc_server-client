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
}
main();