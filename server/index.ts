import {z} from 'zod';
import { publicProcedure, router } from './trpc';
import { createHTTPServer } from '@trpc/server/adapters/standalone';

const todoInputType = z.object({
    title: z.string(),
    description: z.string()
})

const appRouter = router({
  createTodo: publicProcedure
    .input(todoInputType)
    .mutation(async (opts) => {
        const title = opts.input.title;
        const description = opts.input.description;

        // db stuff goes in here hehe

        return {
            id: "1"
        }
    })
});


const server = createHTTPServer({
    router: appRouter,
});

server.listen(3000);

export type AppRouter = typeof appRouter;