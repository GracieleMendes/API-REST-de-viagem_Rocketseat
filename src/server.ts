import fastify from "fastify";
import cors from "@fastify/cors";
import { createTrip } from "./routes/create-trip";
import { validatorCompiler } from "fastify-type-provider-zod";
import { serializerCompiler } from "fastify-type-provider-zod";
import { confirmTrip } from "./routes/confirm-trip";
import { confirmParticipant } from "./routes/confirm-participant";
import { createActivity } from "./routes/create-activity";
import { getActivities } from "./routes/get-activities";
import { createLinks } from "./routes/create-links";
import { getLinks } from "./routes/get-links";
import { getParticipants } from "./routes/get-participants";
import { createInvite } from "./routes/create-invite";
import { uptadeTrip } from "./routes/update-trip";
import { getTripsDetails } from "./routes/get-trip-details";
import { getParticipant } from "./routes/get-participant";
import { errorHandler } from "./error-handler";
import { env } from "./env";

const app = fastify()

app.register(cors,({
    origin: '*',
}))

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.setErrorHandler(errorHandler)

app.register(createTrip)
app.register(confirmTrip)
app.register(confirmParticipant)
app.register(createActivity)
app.register(getActivities)
app.register(createLinks)
app.register(getLinks)
app.register(getParticipants)
app.register(createInvite)
app.register(uptadeTrip)
app.register(getTripsDetails)
app.register(getParticipant)



app.listen({port: env.PORT}).then(() => {
    console.log('Server running!')
})