import {publicProcedure, router} from "./trpc";
import {z} from "zod";
import { createHTTPServer } from '@trpc/server/adapters/standalone';


const todoInputType=z.object({
    title:z.string(),
    description:z.string()
});

const appRouter=router({
    //first function
    createTodo:publicProcedure
        .input(todoInputType)
        .mutation(async(opts)=>{
            console.log(opts.ctx.username);
            const title=opts.input.title;
            const description=opts.input.description;
            //Do db stuff here

            return {
                id:"1",

            }
        }),
    signup:publicProcedure
        .input(z.object({
            email:z.string(),
            password:z.string(),
        }))
        .mutation(async(opts)=>{
            let email=opts.input.email;
            let password=opts.input.password;

            //validation
            //DataBaseStuff

            let token="123";
            return {
                token
            };
        })
});


const server = createHTTPServer({
    router: appRouter,
    createContext(opts){
        let authHeader=opts.req.header["authorize"];
        return {username:"44"};
    }
  });

server.listen(3000);

export type AppRouter=typeof appRouter;