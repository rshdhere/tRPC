import {z} from 'zod';
import { publicProcedure, router } from './trpc';
import { createHTTPServer } from '@trpc/server/adapters/standalone';

const todoInputType = z.object({
    title: z.string(),
    description: z.string()
})

const signupInputType = z.object({
    username: z.string(),
    password: z.string()
})

const appRouter = router({
createTodo: publicProcedure
    .input(todoInputType)
    .mutation(async (opts) => {
        let title = opts.input.title;
        let description = opts.input.description;

        // db stuff goes in here hehe

        return {
            id: "1"
        }
    }),
signup: publicProcedure
    .input(signupInputType)
    .mutation(async (opts) => {
        //context

        let username = opts.input.username;
        let password = opts.input.password;

        // db stuff goes in here
    })
});


const server = createHTTPServer({
    router: appRouter,
    createContext(opts){
        let authHeader = opts.req.headers["authorization"]
        //jwt.verify
        return {
            username: "random"
        }
    }
});

server.listen(3000);

export type AppRouter = typeof appRouter;