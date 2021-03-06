import { IContentTokenConsumer } from "astn-tokenconsumer-api";
import { SimpleStringToken } from "../types/tokens";
import { ITreeHandler } from "./ITreeHandler";


export type IStructureHandler<EventAnnotation> = {
    onEmbeddedSchema: ($: {
        headerAnnotation: EventAnnotation
        embeddedSchemaAnnotation: EventAnnotation
        schemaSchemaReferenceToken: SimpleStringToken<EventAnnotation>
    }) => ITreeHandler<EventAnnotation>
    onSchemaReference: ($: {
        headerAnnotation: EventAnnotation
        token: SimpleStringToken<EventAnnotation>
    }) => void
    onNoInternalSchema: ($: { }) => void
    onBody: (
    ) => IContentTokenConsumer<EventAnnotation>
}